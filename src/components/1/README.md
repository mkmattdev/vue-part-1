# 1. SFC basics & `ref`

Introduction to the Single File Component structure (`<template>` + `<script setup>`) and `{{ }}` interpolation. Shows how to create a reactive value with `ref` and render it in the template.

```vue
<script setup>
import { ref } from 'vue'
const title = ref('Hello Vue 3!')
</script>

<template>
  <h1>{{ title }}</h1>
</template>
```
