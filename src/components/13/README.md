# 13. Slots

Slots let a parent inject custom content into a child component. This lesson covers three kinds: a **named** slot (`prepend`), a **default** slot with fallback content, and a **scoped** slot that passes child-derived data (`isExpensive`) back up to the parent.

```vue
<!-- ProductCard.vue (child) -->
<template>
  <slot name="prepend" />
  <slot :is-expensive="isExpensive"><p>No description provided.</p></slot>
  <slot name="actions"><button @click="$emit('buy')">Buy Now</button></slot>
</template>

<!-- ProductList.vue (parent) -->
<ProductCard :product="product">
  <template #prepend><span>Featured</span></template>
  <template #default="{ isExpensive }">
    <p>{{ product.description }}</p>
    <p v-if="isExpensive">💎 Premium product</p>
  </template>
</ProductCard>
```
