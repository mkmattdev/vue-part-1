# 6. Methods & computed

Methods are functions called from the template (e.g. formatting), while `computed` derives a cached value that updates automatically when its dependencies change. Here `fullName` and `totalPrice` are computed, and `formatPrice` is a method.

```vue
<script setup>
import { computed, reactive } from 'vue'
const user = reactive({ firstName: 'John', lastName: 'Doe' })
const fullName = computed(() => `${user.firstName} ${user.lastName}`)
const formatPrice = (price) => `$${price.toFixed(2)}`
</script>
```
