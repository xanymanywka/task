<template>
  <div class="messenger-app">
    <Head :title="$t('Messenger')" />

    <!-- Sidebar: Conversation List -->
    <div class="messenger-sidebar" :class="{ 'mobile-hidden': activeConversationLocal }">
      <!-- Header -->
      <div class="messenger-sidebar-header">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-bold text-gray-900">{{ $t('Messages') }}</h2>
          <div class="flex items-center gap-2">
            <button @click="showNewGroup = true"
                    class="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-indigo-600 transition-colors"
                    :title="$t('New group chat')">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button @click="showNewDirect = true"
                    class="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-indigo-600 transition-colors"
                    :title="$t('New message')">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Search -->
        <div class="mt-3 relative">
          <input v-model="searchQuery"
                 type="text"
                 :placeholder="$t('Search conversations...')"
                 class="w-full pl-9 pr-4 py-2 text-sm bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all" />
          <svg class="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <!-- Conversation Items -->
      <div class="messenger-conversations">
        <div v-if="filteredConversations.length === 0" class="p-6 text-center text-gray-400 text-sm">
          {{ $t('No conversations yet') }}<br>
          <button @click="showNewDirect = true" class="mt-2 text-indigo-600 hover:underline font-medium">
            {{ $t('Start a new message') }}
          </button>
        </div>

        <div v-for="conv in filteredConversations" :key="conv.id"
             class="conversation-item"
             :class="{ 'active': activeConversationLocal && activeConversationLocal.id === conv.id }"
             @click="openConversation(conv.id)">
          <div class="conv-avatar">
            <template v-if="conv.type === 'direct' && conv.participants[0]">
              <img v-if="conv.participants[0].photo"
                   :src="conv.participants[0].photo"
                   :alt="conv.name"
                   class="w-10 h-10 rounded-full object-cover" />
              <div v-else class="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold text-sm">
                {{ conv.name.charAt(0).toUpperCase() }}
              </div>
            </template>
            <div v-else class="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>

          <div class="conv-info flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="font-semibold text-gray-900 truncate text-sm">{{ conv.name }}</span>
              <span v-if="conv.last_message" class="text-xs text-gray-400 ml-2 flex-shrink-0">
                {{ formatTime(conv.last_message.created_at) }}
              </span>
            </div>
            <div class="flex items-center justify-between mt-0.5">
              <p class="text-xs text-gray-500 truncate">
                {{ conv.last_message ? conv.last_message.body : $t('No messages yet') }}
              </p>
              <span v-if="conv.unread_count > 0"
                    class="ml-2 flex-shrink-0 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {{ conv.unread_count > 9 ? '9+' : conv.unread_count }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main: Messages Panel -->
    <div class="messenger-main" :class="{ 'mobile-hidden': !activeConversationLocal }">
      <!-- Empty state -->
      <div v-if="!activeConversationLocal" class="messenger-empty">
        <div class="text-center">
          <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900">{{ $t('Your Messages') }}</h3>
          <p class="text-gray-500 mt-2">{{ $t('Select a conversation or start a new one') }}</p>
          <button @click="showNewDirect = true"
                  class="mt-4 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors">
            {{ $t('New Message') }}
          </button>
        </div>
      </div>

      <!-- Active conversation -->
      <template v-else>
        <!-- Chat header -->
        <div class="chat-header">
          <button class="md:hidden p-2 mr-2 rounded-lg hover:bg-gray-100 text-gray-500"
                  @click="activeConversationLocal = null">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div class="flex items-center flex-1 min-w-0">
            <div class="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold text-sm mr-3 flex-shrink-0">
              {{ activeConversationLocal.name.charAt(0).toUpperCase() }}
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">{{ activeConversationLocal.name }}</h3>
              <p v-if="activeConversationLocal.type === 'group'" class="text-xs text-gray-500">
                {{ activeConversationLocal.participants.length + 1 }} {{ $t('members') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Messages -->
        <div ref="messagesContainer" class="chat-messages">
          <div v-if="loadingMessages" class="flex justify-center py-8">
            <svg class="animate-spin w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>

          <div v-else-if="localMessages.length === 0" class="text-center py-12 text-gray-400">
            <svg class="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p>{{ $t('No messages yet. Say hello!') }}</p>
          </div>

          <template v-else>
            <div v-for="(msg, index) in localMessages" :key="msg.id"
                 class="message-row"
                 :class="{ 'mine': msg.is_mine }">
              <!-- Date separator -->
              <div v-if="showDateSeparator(index)" class="date-separator">
                <span>{{ formatDateSeparator(msg.created_at) }}</span>
              </div>

              <div class="message-bubble-wrap" :class="{ 'mine': msg.is_mine }">
                <div v-if="!msg.is_mine" class="message-avatar">
                  <img v-if="msg.user_photo" :src="msg.user_photo" :alt="msg.user_name"
                       class="w-7 h-7 rounded-full object-cover" />
                  <div v-else class="w-7 h-7 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-semibold">
                    {{ msg.user_name.charAt(0).toUpperCase() }}
                  </div>
                </div>

                <div class="message-content" :class="{ 'mine': msg.is_mine }">
                  <span v-if="!msg.is_mine && activeConversationLocal.type === 'group'"
                        class="sender-name">{{ msg.user_name }}</span>
                  <div class="message-bubble" :class="{ 'mine': msg.is_mine }">
                    {{ msg.body }}
                  </div>
                  <span class="message-time">{{ formatMessageTime(msg.created_at) }}</span>
                </div>
              </div>
            </div>
          </template>
        </div>

        <!-- Input area -->
        <div class="chat-input-area">
          <div class="chat-input-wrapper">
            <textarea
              ref="messageInput"
              v-model="newMessage"
              :placeholder="$t('Type a message...')"
              class="chat-input"
              rows="1"
              @keydown.enter.exact.prevent="sendMessage"
              @keydown.enter.shift.exact="newMessage += '\n'"
              @input="autoResize"
            ></textarea>
            <button @click="sendMessage"
                    :disabled="!newMessage.trim() || sending"
                    class="send-button">
              <svg v-if="!sending" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <svg v-else class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            </button>
          </div>
          <p class="text-xs text-gray-400 mt-1.5 pl-1">{{ $t('Enter to send, Shift+Enter for new line') }}</p>
        </div>
      </template>
    </div>

    <!-- New Direct Message Modal -->
    <div v-if="showNewDirect" class="modal-overlay" @click.self="showNewDirect = false">
      <div class="modal-card">
        <div class="modal-header">
          <h3 class="font-semibold text-gray-900">{{ $t('New Message') }}</h3>
          <button @click="showNewDirect = false" class="modal-close">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <input v-model="userSearch" type="text" :placeholder="$t('Search users...')"
                 class="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3" />
          <div class="max-h-64 overflow-y-auto space-y-1">
            <button v-for="user in filteredUsers" :key="user.id"
                    class="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-indigo-50 transition-colors text-left"
                    @click="startDirect(user.id)">
              <div class="w-9 h-9 rounded-full bg-indigo-400 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                {{ user.name.charAt(0).toUpperCase() }}
              </div>
              <span class="font-medium text-gray-800">{{ user.name }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- New Group Chat Modal -->
    <div v-if="showNewGroup" class="modal-overlay" @click.self="showNewGroup = false">
      <div class="modal-card">
        <div class="modal-header">
          <h3 class="font-semibold text-gray-900">{{ $t('New Group Chat') }}</h3>
          <button @click="showNewGroup = false" class="modal-close">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="modal-body space-y-3">
          <input v-model="groupName" type="text" :placeholder="$t('Group name...')"
                 class="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <input v-model="groupUserSearch" type="text" :placeholder="$t('Search members...')"
                 class="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />

          <!-- Selected members -->
          <div v-if="selectedGroupUsers.length" class="flex flex-wrap gap-2">
            <span v-for="uid in selectedGroupUsers" :key="uid"
                  class="inline-flex items-center gap-1 bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full">
              {{ getUserName(uid) }}
              <button @click="selectedGroupUsers = selectedGroupUsers.filter(id => id !== uid)">×</button>
            </span>
          </div>

          <div class="max-h-48 overflow-y-auto space-y-1">
            <button v-for="user in filteredGroupUsers" :key="user.id"
                    class="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-50 transition-colors text-left"
                    :class="{ 'bg-indigo-50': selectedGroupUsers.includes(user.id) }"
                    @click="toggleGroupUser(user.id)">
              <div class="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                {{ user.name.charAt(0).toUpperCase() }}
              </div>
              <span class="text-sm font-medium text-gray-800">{{ user.name }}</span>
              <svg v-if="selectedGroupUsers.includes(user.id)" class="w-4 h-4 text-indigo-600 ml-auto"
                   fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <button @click="createGroup"
                  :disabled="!groupName.trim() || selectedGroupUsers.length === 0 || creatingGroup"
                  class="w-full py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
            {{ creatingGroup ? $t('Creating...') : $t('Create Group') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from '@/Shared/Layout.vue'
import { Head, router } from '@inertiajs/vue3'

export default {
  layout: Layout,

  components: { Head },

  props: {
    conversations:        { type: Array,  default: () => [] },
    users:                { type: Array,  default: () => [] },
    active_conversation:  { type: Object, default: null },
    messages:             { type: Array,  default: () => [] },
  },

  data() {
    return {
      activeConversationLocal: this.active_conversation,
      localMessages:           this.messages,
      newMessage:              '',
      sending:                 false,
      loadingMessages:         false,
      searchQuery:             '',
      showNewDirect:           false,
      showNewGroup:            false,
      userSearch:              '',
      groupName:               '',
      groupUserSearch:         '',
      selectedGroupUsers:      [],
      creatingGroup:           false,
      pollInterval:            null,
      lastMessageId:           this.messages.length ? this.messages[this.messages.length - 1]?.id : null,
    }
  },

  computed: {
    filteredConversations() {
      if (!this.searchQuery.trim()) return this.conversations
      const q = this.searchQuery.toLowerCase()
      return this.conversations.filter(c => c.name.toLowerCase().includes(q))
    },

    filteredUsers() {
      if (!this.userSearch.trim()) return this.users
      const q = this.userSearch.toLowerCase()
      return this.users.filter(u => u.name.toLowerCase().includes(q))
    },

    filteredGroupUsers() {
      if (!this.groupUserSearch.trim()) return this.users
      const q = this.groupUserSearch.toLowerCase()
      return this.users.filter(u => u.name.toLowerCase().includes(q))
    },
  },

  methods: {
    openConversation(id) {
      this.loadingMessages = true
      router.get(route('messenger.index'), { conversation: id }, {
        preserveState: true,
        onSuccess: (page) => {
          this.activeConversationLocal = page.props.active_conversation
          this.localMessages = page.props.messages
          this.lastMessageId = this.localMessages.length
            ? this.localMessages[this.localMessages.length - 1]?.id
            : null
          this.loadingMessages = false
          this.$nextTick(() => this.scrollToBottom())
          this.startPolling()
        },
        onError: () => { this.loadingMessages = false }
      })
    },

    async sendMessage() {
      if (!this.newMessage.trim() || this.sending) return
      this.sending = true

      const body = this.newMessage.trim()
      this.newMessage = ''
      this.$nextTick(() => {
        if (this.$refs.messageInput) {
          this.$refs.messageInput.style.height = 'auto'
        }
      })

      try {
        const resp = await fetch(route('messenger.send', this.activeConversationLocal.id), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
          },
          body: JSON.stringify({ body }),
        })

        if (resp.ok) {
          const msg = await resp.json()
          this.localMessages.push(msg)
          this.lastMessageId = msg.id
          this.$nextTick(() => this.scrollToBottom())
          // Update conversation last message in sidebar
          const conv = this.conversations.find(c => c.id === this.activeConversationLocal.id)
          if (conv) {
            conv.last_message = { body, created_at: msg.created_at, user_name: 'You' }
          }
        }
      } finally {
        this.sending = false
      }
    },

    startPolling() {
      this.stopPolling()
      this.pollInterval = setInterval(() => this.pollMessages(), 3000)
    },

    stopPolling() {
      if (this.pollInterval) {
        clearInterval(this.pollInterval)
        this.pollInterval = null
      }
    },

    async pollMessages() {
      if (!this.activeConversationLocal) return
      try {
        const url = route('messenger.messages', this.activeConversationLocal.id) +
          (this.lastMessageId ? `?after=${this.lastMessageId}` : '')
        const resp = await fetch(url, {
          headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })
        if (resp.ok) {
          const newMsgs = await resp.json()
          if (newMsgs.length) {
            this.localMessages.push(...newMsgs)
            this.lastMessageId = newMsgs[newMsgs.length - 1].id
            this.$nextTick(() => this.scrollToBottom())
          }
        }
      } catch {}
    },

    scrollToBottom() {
      const el = this.$refs.messagesContainer
      if (el) el.scrollTop = el.scrollHeight
    },

    autoResize(e) {
      const el = e.target
      el.style.height = 'auto'
      el.style.height = Math.min(el.scrollHeight, 160) + 'px'
    },

    showDateSeparator(index) {
      if (index === 0) return true
      const prev = this.localMessages[index - 1]
      const curr = this.localMessages[index]
      return new Date(curr.created_at).toDateString() !== new Date(prev.created_at).toDateString()
    },

    formatDateSeparator(dateStr) {
      const d = new Date(dateStr)
      const today = new Date()
      const yesterday = new Date()
      yesterday.setDate(today.getDate() - 1)
      if (d.toDateString() === today.toDateString()) return 'Today'
      if (d.toDateString() === yesterday.toDateString()) return 'Yesterday'
      return d.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })
    },

    formatTime(dateStr) {
      if (!dateStr) return ''
      const d = new Date(dateStr)
      const now = new Date()
      if (d.toDateString() === now.toDateString()) {
        return d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
      }
      const diff = Math.floor((now - d) / (1000 * 60 * 60 * 24))
      if (diff < 7) return d.toLocaleDateString(undefined, { weekday: 'short' })
      return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
    },

    formatMessageTime(dateStr) {
      return new Date(dateStr).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
    },

    startDirect(userId) {
      this.showNewDirect = false
      router.post(route('messenger.direct'), { user_id: userId })
    },

    createGroup() {
      if (!this.groupName.trim() || !this.selectedGroupUsers.length) return
      this.creatingGroup = true
      router.post(route('messenger.group'), {
        name:     this.groupName,
        user_ids: this.selectedGroupUsers,
      }, {
        onFinish: () => { this.creatingGroup = false; this.showNewGroup = false }
      })
    },

    toggleGroupUser(uid) {
      const idx = this.selectedGroupUsers.indexOf(uid)
      if (idx > -1) {
        this.selectedGroupUsers.splice(idx, 1)
      } else {
        this.selectedGroupUsers.push(uid)
      }
    },

    getUserName(uid) {
      const u = this.users.find(u => u.id === uid)
      return u ? u.name : ''
    },
  },

  mounted() {
    if (this.activeConversationLocal) {
      this.$nextTick(() => this.scrollToBottom())
      this.startPolling()
    }
  },

  beforeUnmount() {
    this.stopPolling()
  },
}
</script>

<style scoped>
.messenger-app {
  display: flex;
  height: calc(100vh - 60px);
  background: #f8fafc;
  overflow: hidden;
}

/* Sidebar */
.messenger-sidebar {
  width: 320px;
  flex-shrink: 0;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.messenger-sidebar-header {
  padding: 16px;
  border-bottom: 1px solid #f3f4f6;
  flex-shrink: 0;
}

.messenger-conversations {
  flex: 1;
  overflow-y: auto;
  padding: 8px;
}

.conversation-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.15s;
}

.conversation-item:hover {
  background: #f3f4f6;
}

.conversation-item.active {
  background: #eef2ff;
}

.conv-avatar {
  flex-shrink: 0;
}

/* Main panel */
.messenger-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
}

.messenger-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-header {
  padding: 12px 16px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.message-row {
  display: flex;
  flex-direction: column;
}

.message-bubble-wrap {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  max-width: 70%;
}

.message-bubble-wrap.mine {
  flex-direction: row-reverse;
  align-self: flex-end;
}

.message-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 100%;
}

.message-content.mine {
  align-items: flex-end;
}

.sender-name {
  font-size: 11px;
  color: #6b7280;
  font-weight: 500;
  padding-left: 4px;
}

.message-bubble {
  padding: 8px 14px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;
  max-width: 100%;
  background: #f3f4f6;
  color: #111827;
  border-bottom-left-radius: 4px;
}

.message-bubble.mine {
  background: #6366f1;
  color: #fff;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 4px;
}

.message-time {
  font-size: 11px;
  color: #9ca3af;
  padding: 0 4px;
}

.date-separator {
  text-align: center;
  margin: 12px 0;
}

.date-separator span {
  background: #f3f4f6;
  color: #6b7280;
  font-size: 12px;
  padding: 3px 12px;
  border-radius: 99px;
}

/* Input area */
.chat-input-area {
  padding: 12px 16px;
  background: #fff;
  border-top: 1px solid #e5e7eb;
  flex-shrink: 0;
}

.chat-input-wrapper {
  display: flex;
  align-items: flex-end;
  gap: 10px;
  background: #f9fafb;
  border: 1.5px solid #e5e7eb;
  border-radius: 16px;
  padding: 8px 8px 8px 16px;
  transition: border-color 0.2s;
}

.chat-input-wrapper:focus-within {
  border-color: #6366f1;
  background: #fff;
}

.chat-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  font-size: 14px;
  line-height: 1.5;
  max-height: 160px;
  min-height: 24px;
  color: #111827;
}

.send-button {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #6366f1;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.send-button:hover:not(:disabled) {
  background: #4f46e5;
}

.send-button:disabled {
  background: #c7d2fe;
  cursor: not-allowed;
}

/* Modals */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.modal-card {
  background: #fff;
  border-radius: 20px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  overflow: hidden;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #f3f4f6;
}

.modal-close {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #f3f4f6;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  transition: background 0.15s;
}

.modal-close:hover {
  background: #e5e7eb;
}

.modal-body {
  padding: 16px 20px 20px;
}

/* Mobile */
@media (max-width: 767px) {
  .messenger-sidebar {
    width: 100%;
    position: absolute;
    z-index: 10;
    height: 100%;
  }

  .messenger-main {
    width: 100%;
    position: absolute;
    z-index: 10;
    height: 100%;
  }

  .mobile-hidden {
    display: none;
  }

  .message-bubble-wrap {
    max-width: 85%;
  }
}
</style>
