<template>
  <h1>{{ title }}</h1>
  <p>Welcome to Vue 3!</p>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('Hello Vue 3!')
</script>
