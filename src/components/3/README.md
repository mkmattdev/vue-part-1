# 3. Templates & expressions

Using JavaScript expressions inside `{{ }}` interpolation and binding dynamic values to the template. Shows calculations (a discounted price) and dynamic units like currency.

```vue
<script setup>
const productPrice = 1299
const DISCOUNT_RATE = 0.2 // 20% off
const currency = '$'
</script>

<template>
  <p>Discounted: {{ (productPrice * (1 - DISCOUNT_RATE)).toFixed(2) }} {{ currency }}</p>
</template>
```
