# 4. Conditional rendering & lists

Rendering lists with `v-for` and conditionals with `v-if` / `v-else-if` / `v-else` and `v-show`, plus dynamic classes. Also covers ternary and nullish (`??`) operators and why `v-if` should not sit directly on a `v-for`.

```vue
<template>
  <li
    v-for="order in orders"
    :key="order.id"
    :class="{ 'order--highlighted': order.status === 'pending' }"
  >
    <p v-if="order.status === 'completed'">✅ Completed</p>
    <p v-else>❌ Canceled</p>
    <p>Contact: {{ order.contact ?? 'No contact provided' }}</p>
  </li>
</template>
```
