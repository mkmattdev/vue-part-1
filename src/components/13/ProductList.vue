<template>
  <div class="product-list">
    <h1>Our Products</h1>
    <div class="product-list__cards">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product
        class="product-list__card"
        @buy="addToCart(product)"
      >
        <template #prepend>
          <span
            v-if="product.isFeatured"
            class="product-list__badge"
            >Featured</span
          >
        </template>

        <template #default="{ isExpensive }">
          <p>{{ product.description }}</p>
          <p
            v-if="isExpensive"
            class="product-list__premium"
          >
            💎 Premium product
          </p>
        </template>

        <template #actions>
          <button
            class="product-list__action"
            @click="addToCart(product)"
          >
            Add to Cart
          </button>
          <button
            class="product-list__action"
            @click="viewDetails(product)"
          >
            View Details
          </button>
        </template>
      </ProductCard>
    </div>
    <div
      v-if="cartMessage"
      class="product-list__message"
    >
      <p>{{ cartMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'

const products = ref([
  {
    id: 1,
    name: 'Smartphone',
    price: 699,
    description: 'Latest model with 128GB storage.',
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Laptop',
    price: 1299,
    description: 'High performance for work and gaming.',
    isFeatured: false,
  },
  {
    id: 3,
    name: 'Headphones',
    price: 199,
    description: 'Noise-cancelling, wireless design.',
    isFeatured: true,
  },
])

const cartMessage = ref('')

const addToCart = (product) => {
  cartMessage.value = `Product ${product.name} added to cart.`
}

const viewDetails = (product) => {
  cartMessage.value = `Viewing details for ${product.name}.`
}
</script>

<style scoped>
.product-list {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 20px;
}

.product-list__cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
}

.product-list__message {
  margin-top: 20px;
  padding: 8px;
  background: #e0ffe0;
  border: 1px solid #60c060;
}

.product-list__card,
.product-list__action {
  margin: 4px;
}

.product-list__badge {
  display: inline-block;
  background: #ffcc00;
  color: #333;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 4px;
}

.product-list__premium {
  color: #8a6d3b;
  font-weight: bold;
}
</style>
