# 15. Dynamic components

`<component :is="...">` renders a component chosen at runtime, which is perfect for tabs or wizards. Wrapping it in `<KeepAlive>` caches inactive components so their internal state (e.g. a counter or a checkbox) is preserved when you switch away and back.

```vue
<script setup>
import { computed, ref } from 'vue'
import ProfileTab from './ProfileTab.vue'
import SettingsTab from './SettingsTab.vue'

const tabs = [
  { name: 'profile', component: ProfileTab },
  { name: 'settings', component: SettingsTab },
]
const currentTabName = ref('profile')
const currentTab = computed(() => tabs.find((t) => t.name === currentTabName.value).component)
</script>

<template>
  <KeepAlive>
    <component :is="currentTab" />
  </KeepAlive>
</template>
```
