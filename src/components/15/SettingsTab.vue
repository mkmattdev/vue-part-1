<template>
  <div>
    <h3>Settings</h3>
    <label>
      <input
        v-model="isDarkMode"
        type="checkbox"
      />
      Dark mode
    </label>
    <p>Dark mode is {{ isDarkMode ? 'on' : 'off' }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isDarkMode = ref(false)
</script>
