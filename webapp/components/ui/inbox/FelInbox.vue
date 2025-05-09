<script setup lang="ts">
import { computed, ref } from 'vue';
export interface InboxItem {
    uid: string;
    title: string;
    body: string;
    status?: string;
    [key: string]: any; // Allow for additional properties
}

interface Props {
  items: InboxItem[];
  title?: string;
  titleKey?: string;
  bodyKey?: string;
  statusKey?: string;
  showNumbers?: boolean;
  leftPanelWidth?: string;
  sanitizeHtml?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
  title: 'Inbox',
  titleKey: 'title',
  bodyKey: 'body',
  statusKey: 'status',
  showNumbers: true,
  leftPanelWidth: 'w-1/5',
  sanitizeHtml: true,
  loading: false
});

const emit = defineEmits<{
  (e: 'select', item: InboxItem | null): void;
}>();

const selectedItem = ref<InboxItem | null>(null);

const handleSelect = (item: InboxItem) => {
  selectedItem.value = item;
  emit('select', item);
};

const getExcerpt = (text: string, length: number = 100): string => {
  if (props.sanitizeHtml) {
    text = text.replace(/<[^>]*>/g, '');
  }
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

// Computed property for loading state placeholder items
const placeholderItems = computed(() => Array(3).fill(null));
</script>

<template>
  <div class="min-h-[450px] flex flex-col bg-card rounded-lg">
    <h1 class="text-xl text-card-foreground font-semibold p-4 border-b border-border">{{ title }}</h1>
    
    <div class="flex flex-1 overflow-hidden">
      <!-- List Panel -->
      <div :class="[leftPanelWidth, 'border-r border-border overflow-y-auto']">
        <div class="divide-y divide-border">
          <template v-if="loading">
            <div 
              v-for="(_, index) in placeholderItems" 
              :key="index"
              class="p-4 animate-pulse"
            >
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-muted rounded-full"></div>
                <div class="flex-1">
                  <div class="h-4 bg-muted rounded w-3/4 mb-2"></div>
                  <div class="h-3 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </template>
          
          <div
            v-else
            v-for="(item, index) in items"
            :key="item.uid"
            @click="handleSelect(item)"
            :class="[
              'p-4 cursor-pointer transition-colors duration-200',
              selectedItem?.uid === item.uid 
                ? 'bg-accent text-accent-foreground' 
                : 'hover:bg-accent/50'
            ]"
          >
            <div class="flex items-start space-x-4">
              <span 
                v-if="showNumbers"
                class="inline-flex items-center justify-center w-8 h-8 text-xs font-medium text-primary-foreground bg-primary rounded-full"
              >
                {{ index + 1 }}
              </span>
              <div class="flex-1 min-w-0">
                <div class="flex justify-between">
                  <h2 class="text-sm font-medium truncate">
                    {{ item[titleKey] }}
                  </h2>
                  <span 
                    v-if="item[statusKey]"
                    class="text-xs font-medium text-destructive"
                  >
                    {{ item[statusKey] }}
                  </span>
                </div>
                <p class="mt-1 text-sm text-muted-foreground truncate">
                  {{ getExcerpt(item[bodyKey]) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Panel -->
      <div class="flex-1 overflow-y-auto bg-background">
        <article class="p-6" v-if="selectedItem">
          <div class="mb-4 border-b border-border pb-4">
            <h2 class="text-2xl font-bold text-foreground mb-2">
              {{ selectedItem[titleKey] }}
            </h2>
            <span 
              v-if="selectedItem[statusKey]"
              class="text-sm font-medium text-destructive"
            >
              {{ selectedItem[statusKey] }}
            </span>
          </div>
          <div
            class="prose prose-foreground max-w-none"
            v-html="sanitizeHtml ? selectedItem[bodyKey] : selectedItem[bodyKey]"
          ></div>
        </article>
        <div 
          v-else 
          class="h-full flex items-center justify-center text-muted-foreground"
        >
          Select an item to view its contents
        </div>
      </div>
    </div>
  </div>
</template>