# 14. Template refs

A template ref gives you direct access to a DOM element (or a child component instance). You declare a `ref(null)` whose name matches the `ref="..."` attribute; it stays `null` until the component is mounted, so you read it inside `onMounted`. Here an input is auto-focused on mount and can be focused/cleared via buttons.

```vue
<script setup>
import { ref, onMounted } from 'vue'
const nameInput = ref(null)
onMounted(() => nameInput.value.focus())
</script>

<template>
  <input ref="nameInput" />
</template>
```

> Vue 3.5+ also offers `const nameInput = useTemplateRef('nameInput')` as an alternative.
