<template>
  <div class="text-field">
    <h2>Template Refs</h2>

    <input
      ref="nameInput"
      class="text-field__input"
      placeholder="Type your name"
    />

    <div class="text-field__actions">
      <button
        class="text-field__button"
        @click="focusInput"
      >
        Focus
      </button>
      <button
        class="text-field__button"
        @click="clearInput"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// A template ref is null until the component is mounted; the variable name
// must match the `ref="..."` attribute in the template.
const nameInput = ref(null)

onMounted(() => {
  // The DOM element exists only after mount, so we focus it here.
  nameInput.value.focus()
})

const focusInput = () => {
  nameInput.value.focus()
}

const clearInput = () => {
  // nameInput.value is the raw <input> element, so .value is its text.
  nameInput.value.value = ''
  nameInput.value.focus()
}
</script>

<style scoped>
.text-field {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.text-field__input {
  padding: 6px 8px;
}

.text-field__actions {
  margin-top: 8px;
}

.text-field__button {
  margin-right: 4px;
  padding: 4px 8px;
}
</style>
