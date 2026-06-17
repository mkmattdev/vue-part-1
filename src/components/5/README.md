# 5. Reactivity: `ref` vs `reactive`

Demonstrates the difference between reactive state and a plain variable. `ref` makes primitives reactive, `reactive` makes objects reactive, while a plain `let` changes value but does not update the view.

```vue
<script setup>
import { ref, reactive } from 'vue'
const userId = ref(0) // reactive primitive
const details = reactive({ counter: 42 }) // reactive object
let normalCounter = 100 // NOT reactive
</script>
```
