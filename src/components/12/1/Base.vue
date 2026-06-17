<template>
  <div>
    <input
      type="text"
      placeholder="Enter name"
      :value="name"
      @input="updateName"
    />
    <p>Your name: {{ name }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const updateName = (event) => {
  name.value = event.target.value
}
</script>
