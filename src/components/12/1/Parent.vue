<template>
  <div>
    <!-- This verbose binding is exactly what `v-model="customName"` expands to -->
    <Child
      :model-value="customName"
      @update:model-value="(name) => (customName = name)"
    />
    <p>Your custom name: {{ customName }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const customName = ref('')
</script>
