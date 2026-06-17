<template>
  <div class="product-card">
    <slot name="prepend" />
    <h2>{{ product.name }}</h2>
    <p>Price: ${{ product.price }}</p>
    <!-- Scoped slot: exposes child-derived data (isExpensive) to the parent -->
    <slot :is-expensive="isExpensive">
      <p>No description provided.</p>
    </slot>
    <div class="product-card__actions">
      <slot name="actions">
        <button @click="buyProduct">Buy Now</button>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({ name: 'Unnamed Product', price: 0 }),
  },
})
const emit = defineEmits(['buy'])
const buyProduct = () => emit('buy')

const isExpensive = computed(() => props.product.price > 500)
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 8px;
  width: 300px;
  margin: 8px;
  font-family: Arial, sans-serif;
}
.product-card__actions {
  margin-top: 8px;
}
</style>
