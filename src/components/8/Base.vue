<template>
  <div class="color-picker">
    <h2 class="color-picker__title">{{ product }}</h2>

    <div class="color-picker__options">
      <button
        v-for="color in COLORS"
        :key="color"
        class="color-picker__option"
        :class="{ 'color-picker__option--selected': color === selectedColor }"
        @click="selectColor(color)"
      >
        {{ color }}
      </button>
    </div>

    <p class="color-picker__selection">
      Selected:
      <span :style="{ color: selectedColor }">{{ selectedColor ?? 'No color selected' }}</span>
    </p>

    <div class="color-picker__actions">
      <button
        class="color-picker__action"
        @click="clearSelection"
      >
        Clear
      </button>
      <button
        class="color-picker__action"
        :disabled="!selectedColor"
        @click="buyProduct"
      >
        Buy
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const COLORS = ['Red', 'Blue', 'Green']

const product = ref('T-Shirt')
const selectedColor = ref(null)

const selectColor = (color) => {
  selectedColor.value = color
}

const clearSelection = () => {
  selectedColor.value = ''
}

const buyProduct = () => {
  alert(`Bought: ${selectedColor.value} ${product.value}`)
}
</script>

<style scoped>
.color-picker {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.color-picker__option {
  margin: 4px;
  padding: 4px 8px;
}

.color-picker__option--selected {
  outline: 2px solid #333;
}

.color-picker__actions {
  margin-top: 8px;
}

.color-picker__action {
  margin: 4px;
  padding: 4px 8px;
}
</style>
