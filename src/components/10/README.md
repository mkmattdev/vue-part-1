# 10. Component lifecycle

Lifecycle hooks let you run code at specific moments of a component's life: after it mounts, on updates, and before/after it unmounts. A common use is starting a timer in `onMounted` and clearing it in `onBeforeUnmount` to avoid leaks.

```vue
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const count = ref(0)
let id
onMounted(() => (id = setInterval(() => count.value++, 1000)))
onBeforeUnmount(() => clearInterval(id))
</script>
```
