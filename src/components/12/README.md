# 12. Two-way binding (`v-model`)

`v-model` keeps an input and a piece of state in sync in both directions: typing updates the state, and changing the state updates the input. This topic builds up from the underlying mechanism to the final shorthand, split across subfolders:

- **`1/`** - the foundation: manual two-way binding with `props` + `emit`
- **`2/`** - the shortcut: `v-model` + `defineModel()`
- **`3/`** - multiple named `v-model` bindings (`username`, `email`) in a live profile editor

```vue
<script setup>
import { reactive } from 'vue'
const user = reactive({ username: 'john', email: 'john@example.com' })
</script>

<template>
  <input v-model="user.username" />
  <p>Preview: {{ user.username }}</p>
</template>
```
