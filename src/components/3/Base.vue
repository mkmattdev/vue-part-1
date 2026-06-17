<template>
  <div class="product">
    <h2>Name: {{ productName }}</h2>
    <p>Description: {{ productDescription }}</p>
    <p>
      Discounted price:
      {{ (productPrice * (1 - DISCOUNT_RATE)).toFixed(2) }} {{ productPriceCurrency }}
    </p>
    <p class="product__base-price">
      Base price: {{ productPrice.toFixed(2) }} {{ productPriceCurrency }}
    </p>
  </div>
</template>

<script setup>
const DISCOUNT_RATE = 0.2
const productName = 'Smartwatch X'
const productDescription = 'Modern Smartwatch with health features'
const productPrice = 1299
const productPriceCurrency = '$'
</script>

<style scoped>
.product__base-price {
  color: gray;
  text-decoration: line-through;
  font-style: italic;
}
</style>
