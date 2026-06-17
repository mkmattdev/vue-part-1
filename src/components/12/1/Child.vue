<template>
  <input
    type="text"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
// This is exactly what `v-model` expects on a component:
// a `modelValue` prop and an `update:modelValue` event.
const props = defineProps({
  modelValue: { type: String, default: '' },
})

const emit = defineEmits(['update:modelValue'])
</script>
