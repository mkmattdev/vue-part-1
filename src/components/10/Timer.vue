<template>
  <div class="timer">
    <h2>Timer: {{ count }} seconds</h2>
    <p>Current time: {{ currentTime }}</p>
  </div>
</template>

<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'

const count = ref(0)
const timerId = ref(null)
const currentTime = ref(new Date().toLocaleTimeString())

// Create
console.log('Timer - created: Component is created')

// Mount
onBeforeMount(() => {
  console.log('Timer - onBeforeMount: Component is about to mount.')
})

onMounted(() => {
  console.log('Timer - onMounted: Component has mounted.')
  timerId.value = setInterval(() => {
    count.value++
    currentTime.value = new Date().toLocaleTimeString()
  }, 1000)
})

// Update
onBeforeUpdate(() => {
  console.log('Timer - onBeforeUpdate: Component is about to update.')
})

onUpdated(() => {
  console.log('Timer - onUpdated: Component updated.')
})

// Unmount
onBeforeUnmount(() => {
  console.log('Timer - onBeforeUnmount: Component is about to unmount. Clearing timer.')
  clearInterval(timerId.value)
})

onUnmounted(() => {
  console.log('Timer - onUnmounted: Component has been unmounted.')
})
</script>

<style scoped>
.timer {
  font-family: Arial, sans-serif;
  padding: 20px;
  border: 1px solid #ccc;
  text-align: center;
}
</style>
