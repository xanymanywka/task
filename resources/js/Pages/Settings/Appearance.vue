<template>
  <div class="sec-cont">
    <Head :title="$t('Appearance Settings')" />

    <div class="max-w-4xl">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">{{ $t('Appearance Settings') }}</h1>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ $t('Customize the look and feel of your ProTask experience.') }}</p>
      </div>

      <!-- Live Preview Badge -->
      <div v-if="previewActive" class="mb-4 flex items-center gap-2 px-3 py-2 bg-indigo-50 border border-indigo-200 rounded-lg text-sm text-indigo-700 dark:bg-indigo-900/30 dark:border-indigo-700 dark:text-indigo-300">
        <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        {{ $t('Live preview active — changes apply instantly') }}
      </div>

      <div class="space-y-6">

        <!-- Colors Section -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
            <h2 class="text-base font-semibold text-gray-800 dark:text-white">{{ $t('Colors') }}</h2>
          </div>
          <div class="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-6">

            <!-- Primary Color -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('Primary / Accent Color') }}</label>
              <div class="flex items-center gap-3">
                <input type="color" v-model="form.primary_color" @input="onLiveChange" class="w-12 h-10 rounded-lg cursor-pointer border border-gray-300 dark:border-gray-600 p-0.5 bg-white" />
                <input type="text" v-model="form.primary_color" @input="onLiveChange" class="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="#6366f1" />
              </div>
              <div class="mt-2 flex gap-2 flex-wrap">
                <button v-for="color in presetColors" :key="color" @click="form.primary_color = color; onLiveChange()" class="w-6 h-6 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200 hover:scale-110 transition-transform" :style="{backgroundColor: color}" :title="color"></button>
              </div>
            </div>

            <!-- Background Color -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('Background Color') }} <span class="text-xs text-gray-400">({{ $t('light mode only') }})</span></label>
              <div class="flex items-center gap-3">
                <input type="color" v-model="form.background_color" @input="onLiveChange" class="w-12 h-10 rounded-lg cursor-pointer border border-gray-300 dark:border-gray-600 p-0.5 bg-white" />
                <input type="text" v-model="form.background_color" @input="onLiveChange" class="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="#f8fafc" />
              </div>
              <div class="mt-2 flex gap-2 flex-wrap">
                <button v-for="color in bgColors" :key="color" @click="form.background_color = color; onLiveChange()" class="w-6 h-6 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200 hover:scale-110 transition-transform" :style="{backgroundColor: color}" :title="color"></button>
              </div>
            </div>

            <!-- Sidebar Color -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('Sidebar Color') }}</label>
              <div class="flex items-center gap-3">
                <input type="color" v-model="form.sidebar_color" @input="onLiveChange" class="w-12 h-10 rounded-lg cursor-pointer border border-gray-300 dark:border-gray-600 p-0.5 bg-white" />
                <input type="text" v-model="form.sidebar_color" @input="onLiveChange" class="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="#1e293b" />
              </div>
              <div class="mt-2 flex gap-2 flex-wrap">
                <button v-for="color in sidebarColors" :key="color" @click="form.sidebar_color = color; onLiveChange()" class="w-6 h-6 rounded-full border-2 border-white shadow-sm ring-1 ring-gray-200 hover:scale-110 transition-transform" :style="{backgroundColor: color}" :title="color"></button>
              </div>
            </div>

            <!-- Text Color -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('Text Color') }} <span class="text-xs text-gray-400">({{ $t('light mode only') }})</span></label>
              <div class="flex items-center gap-3">
                <input type="color" v-model="form.text_color" @input="onLiveChange" class="w-12 h-10 rounded-lg cursor-pointer border border-gray-300 dark:border-gray-600 p-0.5 bg-white" />
                <input type="text" v-model="form.text_color" @input="onLiveChange" class="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="#0f172a" />
              </div>
            </div>

          </div>
        </div>

        <!-- Typography Section -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
            <h2 class="text-base font-semibold text-gray-800 dark:text-white">{{ $t('Typography') }}</h2>
          </div>
          <div class="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-6">

            <!-- Font Family -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('Font Family') }}</label>
              <div class="grid grid-cols-2 gap-2">
                <button
                  v-for="font in fonts"
                  :key="font.value"
                  @click="form.font_family = font.value; onLiveChange()"
                  class="px-3 py-2 text-sm rounded-lg border-2 transition-all text-left"
                  :class="form.font_family === font.value
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                    : 'border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-300'"
                  :style="{fontFamily: font.css}"
                >
                  {{ font.label }}
                </button>
              </div>
            </div>

            <!-- Font Size -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ $t('Base Font Size') }}: <span class="font-bold text-indigo-600">{{ form.font_size }}px</span>
              </label>
              <input type="range" v-model.number="form.font_size" @input="onLiveChange" min="11" max="18" step="1" class="w-full accent-indigo-600" />
              <div class="flex justify-between text-xs text-gray-400 mt-1">
                <span>11px</span>
                <span>14px</span>
                <span>18px</span>
              </div>
              <div class="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg" :style="{fontSize: form.font_size + 'px'}">
                <p class="text-gray-700 dark:text-gray-300">{{ $t('Sample text at selected size') }}</p>
              </div>
            </div>

          </div>
        </div>

        <!-- Layout & Spacing Section -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
            <h2 class="text-base font-semibold text-gray-800 dark:text-white">{{ $t('Layout & Spacing') }}</h2>
          </div>
          <div class="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-6">

            <!-- Border Radius -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {{ $t('Border Radius') }}: <span class="font-bold text-indigo-600">{{ form.border_radius }}px</span>
              </label>
              <input type="range" v-model.number="form.border_radius" @input="onLiveChange" min="0" max="20" step="2" class="w-full accent-indigo-600" />
              <div class="flex justify-between text-xs text-gray-400 mt-1">
                <span>{{ $t('Sharp') }}</span>
                <span>{{ $t('Rounded') }}</span>
                <span>{{ $t('Pill') }}</span>
              </div>
              <div class="mt-3 flex gap-3">
                <div class="w-20 h-10 bg-indigo-100 dark:bg-indigo-900/30 border-2 border-indigo-300 flex items-center justify-center text-xs text-indigo-600" :style="{borderRadius: form.border_radius + 'px'}">Button</div>
                <div class="flex-1 h-10 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 flex items-center px-3 text-xs text-gray-500" :style="{borderRadius: form.border_radius + 'px'}">Input field</div>
              </div>
            </div>

            <!-- Layout Density -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('Layout Density') }}</label>
              <div class="space-y-2">
                <button
                  v-for="d in densities"
                  :key="d.value"
                  @click="form.layout_density = d.value; onLiveChange()"
                  class="w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all text-left"
                  :class="form.layout_density === d.value
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300'"
                >
                  <div class="flex flex-col gap-0.5">
                    <div class="bg-gray-400 rounded" :style="{width: '40px', height: d.lineHeight}"></div>
                    <div class="bg-gray-300 rounded" :style="{width: '32px', height: d.lineHeight}"></div>
                    <div class="bg-gray-300 rounded" :style="{width: '36px', height: d.lineHeight}"></div>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-800 dark:text-white">{{ $t(d.label) }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t(d.description) }}</p>
                  </div>
                </button>
              </div>
            </div>

            <!-- Card Shadow -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{{ $t('Card Shadow') }}</label>
              <div class="grid grid-cols-2 gap-2">
                <button
                  v-for="shadow in shadows"
                  :key="shadow.value"
                  @click="form.card_shadow = shadow.value; onLiveChange()"
                  class="px-3 py-2 text-sm rounded-lg border-2 transition-all"
                  :class="form.card_shadow === shadow.value
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                    : 'border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-300'"
                >
                  {{ $t(shadow.label) }}
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center justify-between">
          <button @click="resetToDefaults" :disabled="saving" class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50">
            {{ $t('Reset to Defaults') }}
          </button>
          <button @click="saveSettings" :disabled="saving" class="px-6 py-2.5 text-sm font-medium text-white rounded-lg disabled:opacity-50 transition-all" :style="{backgroundColor: form.primary_color || '#6366f1'}">
            {{ saving ? $t('Saving...') : $t('Save Changes') }}
          </button>
        </div>

        <!-- Success Message -->
        <div v-if="saved" class="flex items-center gap-2 px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          {{ $t('Appearance settings saved successfully!') }}
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import Layout from '@/Shared/Layout.vue'

export default {
  components: { Head },
  layout: Layout,
  props: {
    appearance: Object,
    fonts: Array,
  },
  data() {
    return {
      form: { ...this.appearance },
      saving: false,
      saved: false,
      previewActive: false,
      presetColors: ['#6366f1', '#8b5cf6', '#ec4899', '#ef4444', '#f97316', '#eab308', '#22c55e', '#14b8a6', '#0ea5e9', '#3b82f6'],
      bgColors: ['#f8fafc', '#f1f5f9', '#f0fdf4', '#fefce8', '#fff7ed', '#fdf2f8', '#f0f9ff', '#ffffff'],
      sidebarColors: ['#1e293b', '#0f172a', '#1d1e26', '#111827', '#1a1a2e', '#2d1b69', '#064e3b', '#7c3aed'],
      densities: [
        { value: 'compact', label: 'Compact', description: 'Tighter spacing, more content visible', lineHeight: '2px' },
        { value: 'comfortable', label: 'Comfortable', description: 'Balanced spacing (default)', lineHeight: '3px' },
        { value: 'spacious', label: 'Spacious', description: 'More breathing room', lineHeight: '4px' },
      ],
      shadows: [
        { value: 'none', label: 'None' },
        { value: 'soft', label: 'Soft' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' },
      ],
      fontsWithCss: {
        'inter': "'Inter', sans-serif",
        'roboto': "'Roboto', sans-serif",
        'poppins': "'Poppins', sans-serif",
        'nunito': "'Nunito', sans-serif",
        'lato': "'Lato', sans-serif",
        'open-sans': "'Open Sans', sans-serif",
        'raleway': "'Raleway', sans-serif",
        'system': "system-ui, -apple-system, sans-serif",
      },
    }
  },
  computed: {
    fontsWithCssData() {
      return this.fonts.map(f => ({ ...f, css: this.fontsWithCss[f.value] || f.value }))
    }
  },
  methods: {
    onLiveChange() {
      this.previewActive = true
      this.applyPreview()
    },
    applyPreview() {
      const root = document.querySelector('.layout-app')
      if (!root) return
      const fontMap = this.fontsWithCss
      root.style.setProperty('--app-primary', this.form.primary_color || '#6366f1')
      root.style.setProperty('--app-bg', this.form.background_color || '#f8fafc')
      root.style.setProperty('--app-sidebar', this.form.sidebar_color || '#1e293b')
      root.style.setProperty('--app-text', this.form.text_color || '#0f172a')
      root.style.setProperty('--app-radius', (this.form.border_radius || 8) + 'px')
      root.style.setProperty('--app-font-size', (this.form.font_size || 14) + 'px')
      root.style.setProperty('--app-font-family', fontMap[this.form.font_family] || fontMap['inter'])
      root.style.fontFamily = fontMap[this.form.font_family] || fontMap['inter']
      root.style.fontSize = (this.form.font_size || 14) + 'px'
    },
    async saveSettings() {
      this.saving = true
      try {
        await axios.post(this.route('settings.appearance.update'), this.form)
        this.saved = true
        this.previewActive = false
        setTimeout(() => { this.saved = false }, 3000)
      } catch (e) {
        console.error('Failed to save appearance', e)
      } finally {
        this.saving = false
      }
    },
    async resetToDefaults() {
      this.saving = true
      try {
        const res = await axios.post(this.route('settings.appearance.reset'))
        this.form = { ...res.data.appearance }
        this.applyPreview()
        this.saved = true
        setTimeout(() => { this.saved = false }, 3000)
      } catch (e) {
        console.error('Failed to reset appearance', e)
      } finally {
        this.saving = false
      }
    },
  },
}
</script>
