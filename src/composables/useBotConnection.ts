import { computed, toValue, watch } from 'vue'
import type {StreamerbotInfo} from '@streamerbot/client'
import { useStreamerbot, type UseStreamerbotOptions } from '@streamerbot/vue'

export function useBotConnection<T>(
  channel: string,
  callback: (data: T) => Promise<void>,
  options: UseStreamerbotOptions = {},
) {
  const _options = computed(() => (typeof options === 'function' ? options() : toValue(options)))

  console.log(_options)

  const { data, connect, disconnect } = useStreamerbot({
    host: _options.value?.host,
    port: _options.value?.port,
    password: _options.value?.password,
    immediate: _options.value?.immediate,
    autoReconnect: _options.value?.autoReconnect,
    retries: _options.value?.retries,
    onConnect: onConnectToStreamerBot,
    onError: _options.value?.onError,
    subscribe: {
      General: ['Custom'],
    },
  })

  function onConnectToStreamerBot(data: StreamerbotInfo) {
    if (_options.value?.onConnect != null) {
      _options.value.onConnect(data);
    }

    console.log("Connected to streamer bot %o", data)
  }

  watch(data, (val) => {
    if (val.data == null) return

    if (val.data.channel === channel) {
      callback(val.data.payload as T).then(() => {})
    }
  })

  return {
    connect,
    disconnect
  }
}
