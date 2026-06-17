# 9. Lists & mutations

Managing a reactive array: adding and removing items, clearing form inputs, and filtering with `computed`. Shows immutable-style updates (`filter`) and mutating methods (`push`) on reactive state.

```vue
<script setup>
import { ref } from 'vue'
const coins = ref([{ id: 1, name: 'Bitcoin', price: 50000 }])
const addCoin = (name, price) => coins.value.push({ id: Date.now(), name, price })
const removeCoin = (id) => (coins.value = coins.value.filter((c) => c.id !== id))
</script>
```
