# 2. Structure & components

Splitting the UI into smaller, reusable components and composing them inside a parent. Here a layout is built from separate `Header` and `Footer` components imported into a `Base` component.

```vue
<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
  <Header />
  <main><p>Welcome to my Vue app!</p></main>
  <Footer />
</template>
```
