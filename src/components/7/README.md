# 7. `watch`

`watch` runs a callback whenever a reactive source changes, giving you both the new and old value. Useful for reacting to changes with side effects, e.g. tracking a Bitcoin price and building a notification message.

```vue
<script setup>
import { ref, watch } from 'vue'
const price = ref(48000)
watch(price, (newPrice, oldPrice) => {
  console.log(`Changed by ${newPrice - oldPrice}`)
})
</script>
```
