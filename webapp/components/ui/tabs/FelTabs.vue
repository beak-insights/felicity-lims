<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface Tab {
  id: string;
  label: string;
  component: any;
  props?: Record<string, any>;
  hidden?: boolean;  // Made optional with default false
}

const props = defineProps<{
  tabs: Tab[];
  initialTab?: string;
}>();

const currentTabId = ref(props.initialTab || props.tabs[0]?.id);

const visibleTabs = computed(() => {
  return props.tabs.filter(tab => !tab.hidden);  // Changed from props.hidden to tab.hidden
});

const currentTab = computed(() => {
  return visibleTabs.value.find(tab => tab.id === currentTabId.value);
});

const emit = defineEmits<{
  'tab-change': [string]
}>();

const setCurrentTab = (tabId: string) => {
  currentTabId.value = tabId;
  emit('tab-change', tabId);
};

// If current tab becomes hidden, switch to first visible tab
watch(visibleTabs, (newTabs) => {
  if (!newTabs.some(tab => tab.id === currentTabId.value) && newTabs.length > 0) {
    setCurrentTab(newTabs[0].id);
  }
}, { immediate: true });

</script>

<template>
  <section class="col-span-12">
    <nav class="bg-background border-b border-border" v-motion-slide-left>
      <div class="-mb-px flex justify-start">
        <a
          v-for="tab in visibleTabs"
          :key="tab.id"
          :class="[
            'no-underline text-muted-foreground uppercase tracking-wide font-medium text-sm py-2 px-4',
            'border-b-2 transition-colors duration-200',
            currentTabId === tab.id 
              ? 'border-primary text-primary font-medium' 
              : 'border-transparent hover:border-primary/50 hover:text-primary/80'
          ]"
          @click="setCurrentTab(tab.id)"
        >
          {{ tab.label }}
        </a>
      </div>
    </nav>
    <div class="mt-4">
      <component
        v-if="currentTab"
        :is="currentTab.component"
        v-bind="currentTab.props || {}"
      />
    </div>
  </section>
</template>

<style scoped>
.tab-active {
  @apply border-primary text-primary;
}
</style>