<script setup lang="ts">
import { storeToRefs } from "pinia";
import { defineAsyncComponent, onMounted, watch } from "vue";
import { useDashBoardStore } from "@/stores/dashboard";
const LoadingMessage = defineAsyncComponent(
  () => import("@/components/ui/spinners/FelLoadingMessage.vue")
)

const dashBoardStore = useDashBoardStore();
const { dashboard } = storeToRefs(dashBoardStore);

onMounted(async () => {
  dashBoardStore.getOverViewStats();
});

watch(
  () => dashboard.value.filterRange,
  (filter, prev) => {
    dashBoardStore.getOverViewStats();
  },
  { deep: true }
);
</script>

<template>

  <div v-if="dashboard.fetchingOverViewStats" class="text-start my-4 w-100">
    <LoadingMessage message="fetching updated overview stats ..." />
  </div>
  <section class="mt-4">
  
    <h1 class="text-xl text-gray-700 font-semibold">Analyses Status</h1>
    <hr class="my-2" />

    <div class="flex justify-start">
      <div
        v-for="analyte in dashboard.overViewStats?.analyses"
        :key="analyte.group"
        class="flex items-center bg-white shadow rounded-sm px-6 pt-3 pb-5 border border-white mr-8"
      >
        <span class="mr-4 font-bold text-gray-600 text-xl">{{ analyte.count }}</span>
        <span class="font-semibold text-gray-400 text-l">{{ analyte.group }}</span>
      </div>
    </div>
    <p v-if="!dashboard.overViewStats?.analyses?.length" class="my-4">I did not find any analyses indicators to show</p>

    <h1 class="mt-4 text-xl text-gray-700 font-semibold">Sample Status</h1>
    <hr class="my-2" />
    <div class="flex justify-start">
      <div
        v-for="sample in dashboard.overViewStats?.samples"
        :key="sample.group"
        class="flex items-center bg-white shadow rounded-sm px-6 pt-3 pb-5 border border-white mr-8"
      >
        <span class="mr-4 font-bold text-gray-600 text-xl">{{ sample.count }}</span>
        <span class="font-semibold text-gray-400 text-l">{{ sample.group }}</span>
      </div>
    </div>
    <p v-if="!dashboard.overViewStats?.samples?.length" class="my-4">I did not find any sample indicators to show</p>

    <h1 class="mt-4 text-xl text-gray-700 font-semibold">WorkSheet Status</h1>
    <hr class="my-2" />
    <div class="flex justify-start">
      <div
        v-for="worksheet in dashboard.overViewStats?.worksheets"
        :key="worksheet.group"
        class="flex items-center bg-white shadow rounded-sm px-6 pt-3 pb-5 border border-white mr-8"
      >
        <span class="mr-4 font-bold text-gray-600 text-xl">{{ worksheet.count }}</span>
        <span class="font-semibold text-gray-400 text-l">{{ worksheet.group }}</span>
      </div>
    </div>
    <p v-if="!dashboard.overViewStats?.worksheets?.length" class="my-4">I did not find any worksheet indicators to show</p>

    <h1 class="mt-4 text-xl text-gray-700 font-semibold">Extras</h1>
    <hr class="my-2" />
    <div class="flex justify-start">
      <div
        v-for="extra in dashboard.overViewStats?.extras"
        :key="extra.group"
        class="flex items-center bg-white shadow rounded-sm px-6 pt-3 pb-5 border border-white mr-8"
      >
        <span class="mr-4 font-bold text-gray-600 text-xl">{{ extra.count }}</span>
        <span class="font-semibold text-gray-400 text-l">{{ extra.group }}</span>
      </div>
      <p v-if="!dashboard.overViewStats?.extras?.length" class="my-4">I did not find any extra indicators to show</p>
    </div>
  </section>
</template>
