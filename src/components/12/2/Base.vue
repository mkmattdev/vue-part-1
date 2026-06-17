<template>
  <div>
    <input
      v-model="name"
      type="text"
      placeholder="Enter name"
    />
    <p>Your name: {{ name }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
</script>
