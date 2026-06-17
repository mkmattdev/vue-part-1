<template>
  <button @click="toggleTimer">
    {{ shouldShowTimer ? 'Unmount Timer' : 'Mount Timer' }}
  </button>
  <Timer v-if="shouldShowTimer" />
</template>

<script setup>
import { ref } from 'vue'
import Timer from './Timer.vue'

const shouldShowTimer = ref(true)
const toggleTimer = () => {
  shouldShowTimer.value = !shouldShowTimer.value
}
</script>

<style scoped>
button {
  padding: 8px 12px;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
