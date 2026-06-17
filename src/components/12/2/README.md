# 12.2 The shortcut: `v-model` + `defineModel`

The same two-way binding as in `12.1`, but `v-model` replaces the manual `:value` + `@change` pair. In the child, `defineModel()` exposes a ref that stays in sync with the parent automatically.

```vue
<!-- Parent -->
<Child v-model="customName" />

<!-- Child -->
<script setup>
const model = defineModel({ type: String })
</script>
<template>
  <input
    v-model="model"
    type="text"
  />
</template>
```
