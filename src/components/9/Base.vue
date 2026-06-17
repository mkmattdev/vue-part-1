<template>
  <div class="watchlist">
    <h2 class="watchlist__title">Crypto Watchlist</h2>

    <ul class="watchlist__list">
      <li
        v-for="coin in formattedCoins"
        :key="coin.id"
        class="watchlist__item"
      >
        {{ coin.name }} - {{ coin.formattedPrice }}
        <button
          class="watchlist__button"
          @click="removeCoin(coin.id)"
        >
          Remove
        </button>
      </li>
    </ul>

    <div class="watchlist__form">
      <input
        class="watchlist__input"
        placeholder="Name"
        :value="newName"
        @input="(e) => (newName = e.target.value)"
      />
      <input
        class="watchlist__input"
        placeholder="Price"
        type="number"
        :value="newPrice"
        @input="(e) => (newPrice = e.target.value)"
      />
      <button
        class="watchlist__button"
        @click="addCoin"
      >
        Add
      </button>
    </div>

    <div class="watchlist__form">
      <input
        class="watchlist__input"
        placeholder="Price above"
        type="number"
        :value="newFilter"
        @input="(e) => (newFilter = e.target.value)"
      />
      <button
        class="watchlist__button"
        @click="resetFilter"
      >
        Reset
      </button>
    </div>

    <div
      v-if="filteredCoins.length"
      class="watchlist__filtered"
    >
      <h3>Filtered (price ≥ {{ newFilter }}):</h3>
      <ul class="watchlist__list">
        <li
          v-for="coin in filteredCoins"
          :key="coin.id"
          class="watchlist__item"
        >
          {{ coin.name }} - {{ coin.formattedPrice }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const coins = ref([
  { id: 1, name: 'Bitcoin', price: 50000 },
  { id: 2, name: 'Ethereum', price: 3000 },
  { id: 3, name: 'Litecoin', price: 200 },
])

const formattedCoins = computed(() =>
  coins.value.map((coin) => ({
    ...coin,
    formattedPrice: `$${coin.price.toFixed(2)}`,
  })),
)

const removeCoin = (id) => {
  coins.value = coins.value.filter((coin) => coin.id !== id)
}

const newName = ref('')
const newPrice = ref('')
const newFilter = ref('')

const addCoin = () => {
  if (!newName.value || !newPrice.value) return
  coins.value.push({ id: Date.now(), name: newName.value, price: parseFloat(newPrice.value) })
  newName.value = ''
  newPrice.value = ''
}

const resetFilter = () => {
  newFilter.value = ''
}

const filteredCoins = computed(() => {
  const threshold = parseFloat(newFilter.value)
  return threshold ? formattedCoins.value.filter((coin) => coin.price >= threshold) : []
})
</script>

<style scoped>
.watchlist__button,
.watchlist__input {
  margin: 4px;
}
</style>
