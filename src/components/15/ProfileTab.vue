<template>
  <div>
    <h3>Profile</h3>
    <p>Edits made this session: {{ editCount }}</p>
    <button @click="editCount++">Make an edit</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Thanks to <KeepAlive>, this count is preserved when you switch tabs and back.
const editCount = ref(0)
</script>
