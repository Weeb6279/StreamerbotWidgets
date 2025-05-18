<template>
  <RouterView />
  <template v-for="(msg, i) in messages" :key="'msg_' + i">
    <p>
      <span>{{msg.user.name}}: </span>
      <template v-for="(part, i) in msg.parts" :key="'part_' + i">
        <span v-if="part.type === 'text'">{{ part.text }}</span>
        <span v-else-if="part.type === 'emote'">
          <img :src="part.imageUrl" :alt="part.text" />
        </span>
      </template>
    </p>
  </template>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import { useBotConnection } from '@/composables/useBotConnection.ts'
import type {
  TwitchChatMessageData,
} from '@/types/streamerbot/twitchChatMessage.ts'

const messages = ref<TwitchChatMessageData[]>([])

const { data, connect } = useBotConnection<never>(
  'Chat',
  async (data) => {
    console.log(data)
  },
  {
    subscribe: {
      Twitch: ['ChatMessage'],
    },
  },
)

onMounted(() => {
  connect()
})

watch(data, ({ data, event }) => {
  if (event == null) return;
  if (event.source === 'Twitch' && event.type === 'ChatMessage') {
    const message = data as TwitchChatMessageData
    messages.value.push(message)
  }
})
</script>

<style scoped></style>
