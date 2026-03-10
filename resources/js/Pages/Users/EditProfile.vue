<template>
  <div class="sec-cont">
    <Head :title="title" />
    <div class="max-w-full bg-white rounded-md shadow overflow-hidden">
      <form @submit.prevent="update">
        <div class="flex flex-wrap -mb-8 -mr-6 p-8">
          <text-input v-model="form.first_name" :error="form.errors.first_name" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('First name')" />
          <text-input v-model="form.last_name" :error="form.errors.last_name" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Last name')" />
          <text-input v-model="form.email" :error="form.errors.email" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Email')" />
          <text-input v-model="form.phone" :error="form.errors.phone" class="pb-8 pr-6 w-full lg:w-1/3" :label="$t('Phone')" />
            <select-input v-model="form.locale" :error="form.errors.locale" class="pr-6 pb-8 w-full lg:w-1/3" :label="$t('Language')">
                <option :value="null" />
                <option v-for="language in languages" :key="language.code" :value="language.code">{{ $t(language.name) }}</option>
            </select-input>
          <text-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full" :label="$t('Address')" />
          <text-input v-model="form.password" :error="form.errors.password" class="pb-8 pr-6 w-full lg:w-1/3" type="password" autocomplete="new-password" :label="$t('Password')" />
          <file-input v-model="form.photo" :error="form.errors.photo" class="pb-8 pr-6 w-full lg:w-1/3" type="file" accept="image/*" label="Photo" />
            <div class="w-full lg:w-1/3 flex items-center justify-start">
                <img v-if="user.photo_path" class="block mb-2 w-8 h-8 rounded-full" :src="user.photo_path" />
            </div>
        </div>
        <div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">
          <loading-button :loading="form.processing" class="btn-indigo ml-auto" type="submit">{{ $t('Update User') }} </loading-button>
        </div>
      </form>
    </div>

    <!-- Google Calendar Integration -->
    <div class="max-w-full bg-white rounded-md shadow overflow-hidden mt-6">
      <div class="px-8 py-6">
        <h2 class="text-lg font-semibold text-gray-800 mb-1">{{ $t('Google Calendar') }}</h2>
        <p class="text-sm text-gray-500 mb-4">
          {{ $t('Connect your Google Calendar to sync tasks and view Google events alongside your ProTask calendar.') }}
        </p>

        <div v-if="googleConnected" class="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
          <div class="flex items-center gap-3">
            <svg class="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <p class="text-sm font-medium text-green-800">{{ $t('Google Calendar connected') }}</p>
              <p class="text-xs text-green-600">{{ $t('Your tasks are syncing with Google Calendar') }}</p>
            </div>
          </div>
          <button
            @click="disconnectGoogle"
            :disabled="googleLoading"
            class="text-sm text-red-600 hover:text-red-800 font-medium disabled:opacity-50"
          >
            {{ googleLoading ? $t('Disconnecting...') : $t('Disconnect') }}
          </button>
        </div>

        <div v-else class="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div class="flex items-center gap-3">
            <svg class="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <p class="text-sm font-medium text-gray-700">{{ $t('Google Calendar not connected') }}</p>
              <p class="text-xs text-gray-500">{{ $t('Connect to view Google events in calendar and sync tasks') }}</p>
            </div>
          </div>
          <a
            :href="route('google.calendar.redirect')"
            class="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {{ $t('Connect Google Calendar') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Head, Link } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'
import TextInput from '@/Shared/TextInput.vue'
import FileInput from '@/Shared/FileInput.vue'
import SelectInput from '@/Shared/SelectInput.vue'
import LoadingButton from '@/Shared/LoadingButton.vue'

export default {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
  },
  layout: Layout,
  props: {
    user: Object,
    auth: Object,
    languages: Object,
    countries: Array,
    cities: Array,
    title: String,
    google_calendar_connected: Boolean,
  },
  remember: 'form',
  data() {
    return {
      form: this.$inertia.form({
        _method: 'put',
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        phone: this.user.phone,
          locale: this.user.locale,
        address: this.user.address,
        password: '',
        role: this.user.role,
        role_id: this.user.role_id,
        photo: null
      }),
      googleConnected: this.google_calendar_connected,
      googleLoading: false,
    }
  },
  created() {
    // this.setDefaultValue(this.countries, 'country_id', 'United States')
  },
  methods: {
    setDefaultValue(arr, key, value){
      const find = arr.find(i=>i.name.match(new RegExp(value + ".*")))
      if(find){
        this.form[key] = find['id']
      }
    },
    update() {
      this.form.post(this.route('users.edit.profile.update', this.user.id), {
        onSuccess: () => this.form.reset('password', 'photo'),
      })
    },
    async disconnectGoogle() {
      this.googleLoading = true
      try {
        await fetch(this.route('google.calendar.disconnect'), {
          method: 'DELETE',
          headers: { 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content, 'Content-Type': 'application/json' },
        })
        this.googleConnected = false
      } catch (e) {
        console.error('Failed to disconnect Google Calendar', e)
      } finally {
        this.googleLoading = false
      }
    },
  },
}
</script>
