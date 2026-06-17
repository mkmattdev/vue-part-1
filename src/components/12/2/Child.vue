<template>
  <input
    v-model="model"
    type="text"
  />
</template>

<script setup>
const model = defineModel({ type: String })
</script>
