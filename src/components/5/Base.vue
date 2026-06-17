<template>
  <div class="shipping">
    <h1>ID: {{ userId }}</h1>
    <p>Counter: {{ shippingDetails.counter }}</p>
    <div class="shipping__details">
      <h2>Recipient Information</h2>
      <p>Name: {{ shippingDetails.user.name }}</p>
      <p>Role: {{ shippingDetails.user.role }}</p>
    </div>
    <p>Normal counter: {{ normalCounter }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 1. ref - creates a reactive value for primitives (here: ID)
const userId = ref(0)

// 2. reactive - creates a reactive object (here: a state object)
const shippingDetails = reactive({
  counter: 42,
  user: {
    name: 'Vue Developer',
    role: 'Admin',
  },
})

// 3. a plain variable - NOT reactive, Vue does not track it
let normalCounter = 100

// Automatically change values every 2 seconds without using lifecycle methods
setInterval(() => {
  userId.value++
  shippingDetails.counter++
  // normalCounter changes in memory, but Vue does not re-render because of it.
  // It only LOOKS like it updates because the reactive values above force a
  // re-render every 2s; remove them and this value would freeze on screen.
  normalCounter++
}, 2000)
</script>

<style scoped>
.shipping {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.shipping__details {
  margin-top: 20px;
  background: #f4f4f4;
  padding: 10px;
}
</style>
