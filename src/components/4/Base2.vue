<template>
  <div>
    <h2>Current Promotions</h2>

    <p v-show="isPromoInfoVisible">🔥 Promotions are valid until the end of the month!</p>

    <ul class="promotions">
      <li
        v-for="promotion in promotions"
        :key="promotion.id"
        class="promotions__item"
        :class="{ 'promotions__item--highlighted': promotion.discount > 50 }"
      >
        <h3>Name: {{ promotion.name }}</h3>
        <p>Discount: {{ promotion.discount }}%</p>
        <p v-if="promotion.limited">⏳ Limited-time offer!</p>
      </li>
    </ul>

    <!-- Bad-code example: v-if directly on v-for (we DON'T do this) -->
    <!-- For example: -->
    <!-- <li v-for="promo in promotions" v-if="promo.discount > 20"> INCORRECT </li> -->
  </div>
</template>

<script setup>
const isPromoInfoVisible = true

const promotions = [
  { id: 1, name: 'Laptop Pro', discount: 25, limited: false },
  { id: 2, name: 'Smartwatch X', discount: 60, limited: true },
  { id: 3, name: 'Tablet Mini', discount: 15, limited: false },
  { id: 4, name: 'ANC Headphones', discount: 55, limited: true },
]
</script>

<style scoped>
.promotions {
  list-style-type: none;
}

.promotions__item--highlighted {
  border: 2px solid gold;
  padding: 5px;
}
</style>
