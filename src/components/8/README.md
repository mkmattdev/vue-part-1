# 8. Event handling

Listening to DOM events with `@click` (and other `@event` listeners) and updating state in response. Also covers attribute binding like `:disabled` and inline handlers to build interactive controls.

```vue
<script setup>
import { ref } from 'vue'
const selectedColor = ref(null)
const selectColor = (color) => (selectedColor.value = color)
</script>

<template>
  <button @click="selectColor('Red')">Red</button>
  <button :disabled="!selectedColor">Buy</button>
</template>
```
