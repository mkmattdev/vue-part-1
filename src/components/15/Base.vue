<template>
  <div class="tabs">
    <h2>Dynamic Components</h2>

    <div class="tabs__nav">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        class="tabs__button"
        :class="{ 'tabs__button--active': tab.name === currentTabName }"
        @click="currentTabName = tab.name"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- KeepAlive caches inactive components so their state survives switching -->
    <KeepAlive>
      <component
        :is="currentTab"
        class="tabs__panel"
      />
    </KeepAlive>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProfileTab from './ProfileTab.vue'
import SettingsTab from './SettingsTab.vue'

const tabs = [
  { name: 'profile', label: 'Profile', component: ProfileTab },
  { name: 'settings', label: 'Settings', component: SettingsTab },
]

const currentTabName = ref('profile')

// `<component :is>` renders whichever component this resolves to.
const currentTab = computed(() => tabs.find((tab) => tab.name === currentTabName.value).component)
</script>

<style scoped>
.tabs {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.tabs__nav {
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
}

.tabs__button--active {
  font-weight: bold;
  border-bottom: 2px solid #007bff;
}

.tabs__panel {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
