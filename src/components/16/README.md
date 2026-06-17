# 16. Composables

A composable is a reusable function (named `use...`) that encapsulates reactive state and logic so it can be shared across components. Each call returns its own isolated state, and a composable can use lifecycle hooks internally (e.g. start/clean up an interval). Here `useCounter` powers two independent counters and `useNow` manages a self-updating clock.

```js
// composables/useCounter.js
import { ref } from 'vue'

export const useCounter = (initialValue = 0) => {
  const count = ref(initialValue)
  const increment = () => count.value++
  const reset = () => (count.value = initialValue)
  return { count, increment, reset }
}
```

```vue
<script setup>
import { useCounter } from './composables/useCounter.js'
const { count, increment, reset } = useCounter(0)
</script>
```
