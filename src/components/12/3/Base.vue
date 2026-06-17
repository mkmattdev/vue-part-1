<template>
  <div class="profile">
    <h1>Edit Profile</h1>
    <ProfileEditor
      v-model:username="user.username"
      v-model:email="user.email"
    />
    <div class="profile__preview">
      <h2>Profile Preview</h2>
      <p><strong>Username:</strong> {{ user.username }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProfileEditor from './ProfileEditor.vue'

const user = ref({
  username: 'johndoe',
  email: 'johndoe@example.com',
})
</script>

<style scoped>
.profile {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
}

.profile__preview {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #007bff;
  border-radius: 4px;
}
</style>
