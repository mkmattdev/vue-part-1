<template>
  <div class="composables">
    <h2>Composables</h2>

    <p>Current time: {{ now }}</p>

    <div class="composables__counter">
      <p>Apples: {{ appleCount }}</p>
      <button
        class="composables__button"
        @click="incrementApples"
      >
        +
      </button>
      <button
        class="composables__button"
        @click="decrementApples"
      >
        -
      </button>
      <button
        class="composables__button"
        @click="resetApples"
      >
        Reset
      </button>
    </div>

    <div class="composables__counter">
      <p>Oranges: {{ orangeCount }}</p>
      <button
        class="composables__button"
        @click="incrementOranges"
      >
        +
      </button>
      <button
        class="composables__button"
        @click="decrementOranges"
      >
        -
      </button>
      <button
        class="composables__button"
        @click="resetOranges"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCounter } from './composables/useCounter.js'
import { useNow } from './composables/useNow.js'

const { now } = useNow()

// Each call to the composable creates its own isolated reactive state.
// Destructuring keeps the refs top-level so they auto-unwrap in the template.
const {
  count: appleCount,
  increment: incrementApples,
  decrement: decrementApples,
  reset: resetApples,
} = useCounter(0)

const {
  count: orangeCount,
  increment: incrementOranges,
  decrement: decrementOranges,
  reset: resetOranges,
} = useCounter(10)
</script>

<style scoped>
.composables {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.composables__counter {
  margin-top: 12px;
}

.composables__button {
  margin-right: 4px;
  padding: 4px 8px;
}
</style>
