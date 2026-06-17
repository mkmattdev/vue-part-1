# 12.1 The foundation: props + emit

Two-way binding done manually, the way `v-model` works under the hood. On a component, `v-model="x"` is just shorthand for a `modelValue` prop passed down and an `update:modelValue` event listened to. The child renders `:modelValue` and emits the new value on input.

```vue
<!-- Parent: this is what v-model="customName" expands to -->
<Child :model-value="customName" @update:model-value="(name) => (customName = name)" />

<!-- Child -->
<input :value="props.modelValue" @input="emit('update:modelValue', $event.target.value)" />
```
