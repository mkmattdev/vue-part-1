# 12.3 Multiple named `v-model`

A component can expose several two-way bindings at once using named models. The parent binds each field with `v-model:<name>`, and the child declares them with `defineModel('<name>')`. Here `ProfileEditor` edits both `username` and `email`.

```vue
<!-- Parent -->
<ProfileEditor v-model:username="user.username" v-model:email="user.email" />

<!-- Child -->
<script setup>
const username = defineModel('username', { type: String, default: '' })
const email = defineModel('email', { type: String, default: '' })
</script>
```
