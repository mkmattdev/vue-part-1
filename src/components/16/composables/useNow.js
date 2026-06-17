import { onMounted, onUnmounted, ref } from 'vue'

// A composable can own reactive state AND its own lifecycle/cleanup,
// so the component using it does not have to manage the interval itself.
export const useNow = () => {
  const now = ref(new Date().toLocaleTimeString())
  let timerId = null

  onMounted(() => {
    timerId = setInterval(() => {
      now.value = new Date().toLocaleTimeString()
    }, 1000)
  })

  onUnmounted(() => {
    clearInterval(timerId)
  })

  return { now }
}
