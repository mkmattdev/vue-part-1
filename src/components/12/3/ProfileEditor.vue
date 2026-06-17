<template>
  <div class="profile-editor">
    <div class="profile-editor__input">
      <label>
        Username:
        <input
          v-model="username"
          placeholder="Enter your username"
        />
      </label>
    </div>
    <div class="profile-editor__input">
      <label>
        Email:
        <input
          v-model="email"
          placeholder="Enter your email"
        />
      </label>
    </div>
  </div>
</template>

<script setup>
const username = defineModel('username', { type: String, default: '' })
const email = defineModel('email', { type: String, default: '' })
</script>

<style scoped>
.profile-editor {
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 4px;
  width: 300px;
  margin: 0 auto;
}
.profile-editor__input {
  margin-bottom: 10px;
}
</style>
