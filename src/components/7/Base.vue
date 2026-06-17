<template>
  <div class="crypto-dashboard">
    <h1>Crypto Price Dashboard</h1>
    <span>Your Bitcoin purchase price: {{ formatPrice(bitcoinPurchasePrice) }}</span> <br />
    <span>Current Bitcoin price: {{ formatPrice(bitcoinCurrentPrice) }}</span> <br />
    <span>Market information: {{ priceNotification }}</span> <br />
    <span>Highest price observed: {{ formatPrice(highestBitcoinPrice) }}</span> <br />

    <h2 class="crypto-dashboard__history">Price History:</h2>
    <ul>
      <li
        v-for="(price, index) in priceHistory"
        :key="index"
      >
        {{ formatPrice(price) }}
      </li>
    </ul>
    <p>Is your investment profitable? {{ isProfitable ? 'Yes' : 'No' }}</p>
  </div>
</template>
<script setup>
import { computed, ref, watch } from 'vue'

const bitcoinPurchasePrice = ref(49000)
const bitcoinCurrentPrice = ref(48000)
const highestBitcoinPrice = ref(bitcoinCurrentPrice.value)
const priceNotification = ref('')
const priceHistory = ref([bitcoinCurrentPrice.value])

const formatPrice = (price) => price.toFixed(2)

const isProfitable = computed(() => bitcoinCurrentPrice.value > bitcoinPurchasePrice.value)

watch(bitcoinCurrentPrice, (newPrice, oldPrice) => {
  const priceDifference = newPrice - oldPrice

  if (priceDifference > 0) {
    priceNotification.value = `Bitcoin prices increased by ${formatPrice(priceDifference)}`
  } else if (priceDifference < 0) {
    priceNotification.value = `Bitcoin prices decreased by ${formatPrice(Math.abs(priceDifference))}`
  } else {
    priceNotification.value = 'Price has not changed'
  }

  if (newPrice > highestBitcoinPrice.value) {
    highestBitcoinPrice.value = newPrice
  }

  priceHistory.value.push(newPrice)
})

setInterval(() => {
  bitcoinCurrentPrice.value += Math.floor(Math.random() * 6000 - 3000)
}, 3000)
</script>

<style scoped>
.crypto-dashboard {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.crypto-dashboard__history {
  padding-left: 20px;
}
</style>
