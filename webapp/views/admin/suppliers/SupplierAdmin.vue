
<script setup lang="ts">
  import { ref, computed, defineAsyncComponent } from 'vue';
  const tabSuppliers = defineAsyncComponent(
    () => import('./SuppliersListing.vue')
  )
  const tabManufacturers = defineAsyncComponent(
    () => import('./Manufacturers.vue')
  )


  let currentTab = ref<string>('suppliers');
  const tabs: string[] = ['suppliers', 'manufacturers'];
  let currentTabComponent = computed(() => 'tab-' + currentTab.value);
</script>

<template>
  <div class="mt-4">

        <nav class="bg-white shadow-md mt-2">
          <div class="-mb-px flex justify-start">
            <a
              v-for="tab in tabs"
              :key="tab"
              :class="[
                'no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200',
                { 'tab-active': currentTab === tab },
              ]"
              @click="currentTab = tab"
             
            >
              {{ tab }}
            </a>
          </div>
        </nav>

        <tab-suppliers v-if="currentTab === 'suppliers'"/>
        <tab-manufacturers v-if="currentTab === 'manufacturers'" />

  </div>

</template>

