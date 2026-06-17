<template>
  <div>
    <Child v-model="customName" />
    <p>Your custom name: {{ customName }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const customName = ref('')
</script>
