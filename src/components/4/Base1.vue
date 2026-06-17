<template>
  <h2>Order List</h2>

  <ul class="orders">
    <li
      v-for="order in orders"
      :key="order.id"
      class="order"
      :class="{ 'order--highlighted': order.status === 'pending' }"
    >
      <h3>Order No. {{ order.id }}</h3>
      <p>Product: {{ order.productName }}</p>
      <p>Price: {{ order.price.toFixed(2) }} USD</p>

      <p v-if="order.status === 'completed'">✅ Completed</p>
      <p v-else-if="order.status === 'pending'">⏳ Pending</p>
      <p v-else>❌ Canceled</p>

      <p v-show="order.comment">📝 Comment: {{ order.comment }}</p>

      <!-- condition ? : <- ternary operator -->
      <p>Discount: {{ order.discount ? `${order.discount.toFixed(2)} PLN` : 'No discount' }}</p>
      <!-- ?? <- nullish operator -->
      <p>Contact: {{ order.contact ?? 'No contact provided' }}</p>
    </li>
  </ul>
</template>
<script setup>
const orders = [
  {
    id: 1,
    productName: 'Laptop Pro',
    price: 5499,
    status: 'completed',
    comment: 'Delivery delayed',
    discount: 300,
    contact: 'john.doe@example.com',
  },
  {
    id: 2,
    productName: 'Smartwatch X',
    price: 1299,
    status: 'pending',
    comment: 'In progress',
    discount: 0,
    contact: null,
  },
  {
    id: 3,
    productName: 'Sports Camera',
    price: 899,
    status: 'canceled',
    comment: '',
    discount: 0,
    contact: null,
  },
]
</script>

<style scoped>
.orders {
  list-style-type: none;
  padding: 0;
}

.order {
  margin: 8px;
}

.order--highlighted {
  background-color: #fff3cd;
}
</style>
