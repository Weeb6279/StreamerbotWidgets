<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useBotConnection } from '@/composables/useBotConnection.ts'

const {connect} = useBotConnection<{}>('', async (data) => {
  console.log(data)
});

onMounted(() => {
  connect()
})

</script>

<style scoped>
</style>
