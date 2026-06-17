<template>
  <div class="shopping-cart">
    <h1>Shopping Cart</h1>
    <p>Hello, {{ fullName }}</p>
    <p v-if="isUserLoggedIn">You're correctly logged in!</p>
    <ul class="shopping-cart__items">
      <li
        v-for="(product, index) in cart"
        :key="product.id"
      >
        # {{ index + 1 }}: {{ product.name }} - {{ formatPrice(product.price) }} x
        {{ product.quantity }}
      </li>
    </ul>
    <p>Price: {{ formatPrice(totalPrice) }}</p>
    <p>Hi, {{ fullName }}: {{ priceMessage }}</p>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const DISCOUNT_PRICE = 1500

const isUserLoggedIn = ref(true)

const user = reactive({
  firstName: 'John',
  lastName: 'Doe',
})

const fullName = computed(() => `${user.firstName} ${user.lastName}`)

const cart = reactive([
  { id: 1, name: 'Laptop', price: 999, quantity: 1 },
  { id: 2, name: 'Mouse', price: 49, quantity: 2 },
])

const addRandomProduct = () => {
  const newProduct = {
    id: Date.now(),
    name: `Product ${Math.floor(Math.random() * 100) + 1}`, // random range <1, 100>
    price: Math.floor(Math.random() * 200) + 10, // random range <10, 209>
    quantity: 1,
  }

  cart.push(newProduct)
}

const totalPrice = computed(() =>
  cart.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0),
)

const priceMessage = computed(() =>
  totalPrice.value >= DISCOUNT_PRICE ? 'You have discount' : 'Add more products to get a discount',
)

const formatPrice = (price) => `$${price.toFixed(2)}`

setInterval(() => {
  addRandomProduct()
}, 3000)
</script>

<style scoped>
.shopping-cart {
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
}

.shopping-cart__items {
  list-style-type: none;
  padding: 0;
}
</style>
