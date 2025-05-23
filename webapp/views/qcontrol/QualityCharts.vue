<script setup lang="ts">
  import { defineAsyncComponent, onMounted, ref, computed, watch } from 'vue';
  import { useAnalysisStore } from '@/stores/analysis';
  import { ProfileType } from '@/types/gql';
  import  useApiUtil  from '@/composables/api_util';
  import { GetReferenceRunsDocument, GetReferenceRunsQuery, GetReferenceRunsQueryVariables } from '@/graphql/operations/analyses.queries';

  const VueMultiselect = defineAsyncComponent(
    () => import('vue-multiselect')
  )
  const ChartLJ = defineAsyncComponent(
    () => import('@/components/analysis/quality/ChartLJ.vue')
  )

  interface QCDataPoint {
    result: string;
    dateVerified: string;
    analysis: {
      uid: string;
      name: string;
    };
    sample: {
      qcLevel: {
        level: string;
      };
    };
  }

  interface GroupedQCData {
    [qcLevel: string]: {
      results: number[];
      dates: string[];
    };
  }

  const analysisStore = useAnalysisStore()
  const { withClientQuery } = useApiUtil();
  
  onMounted(() => {
    analysisStore.fetchAnalysesServices({})
  })
  const analysesServices = computed<ProfileType[]>(() => analysisStore.getAnalysesServicesSimple )
  
  const rawData = ref<QCDataPoint[]>([]);
  const today = new Date()
  let selectedMonth = ref({"month": today.getMonth(), "year": today.getFullYear()});
  let selectedAnalyses = ref<ProfileType | null>(null);
  const isLoading = ref(false);

  const handleAnalysisChange = async (newValue: ProfileType) => {
    if(!selectedMonth.value) return;
    const filters = {
      analyses: [newValue.uid],
      month: selectedMonth.value.month + 1,
      year: selectedMonth.value.year
    }
    await withClientQuery<GetReferenceRunsQuery, GetReferenceRunsQueryVariables>(GetReferenceRunsDocument, filters, 'qcChartData')
        .then(payload => {
          rawData.value = (payload as unknown as QCDataPoint[]) ?? [];
        }).finally(() => isLoading.value = false)
  };

  const handlePeriodChange = async (newValue: {month: number, year: number}) => {
    if(!selectedAnalyses.value) return;
    const filters = {
      analyses: [selectedAnalyses.value?.uid],
      month: newValue.month + 1,
      year: newValue.year
    }
    await withClientQuery<GetReferenceRunsQuery, GetReferenceRunsQueryVariables>(GetReferenceRunsDocument, filters, 'qcChartData')
        .then(payload => {
          rawData.value = (payload as unknown as QCDataPoint[]) ?? [];
        }).finally(() => isLoading.value = false)
  };

  const groupedChartData = computed(() => {
    if (!rawData.value) return [];
    const converted = convertToChartSeries(groupQCDataByLevel(rawData.value));
    return converted;
  });

  function groupQCDataByLevel(data: QCDataPoint[]): GroupedQCData {
    return data.reduce((grouped: GroupedQCData, item) => {
      const level = item.sample.qcLevel.level;
      
      if (!grouped[level]) {
        grouped[level] = {
          results: [],
          dates: []
        };
      }
      
      grouped[level].results.push(parseFloat(item.result));
      grouped[level].dates.push(item.dateVerified);
      
      return grouped;
    }, {});
  }

  function convertToChartSeries(groupedData: GroupedQCData) {
    return Object.entries(groupedData).map(([level, data]) => ({
      name: level,
      data: data.results.map((result, index) => ({
        date: data.dates[index],
        value: result
      }))
    }));
  }

  // watch
  watch(selectedAnalyses, async (newValue) => {
    if (!newValue) return;
    await handleAnalysisChange(newValue);
  });
  watch(selectedMonth, async (newValue) => {
    if (!newValue) return;
    await handlePeriodChange(newValue);
  });
</script>

<template>
  <div class="min-h-[500px]">
    <div class="flex justify-between" >
      <fel-heading title="Analyses Service Control Charts" />
      <div class="flex justify-start items-center gap-x-2">
        <VueDatePicker 
          class="z-60 disabled:bg-muted" 
          v-model="selectedMonth"
          :max-date="today"
          month-picker></VueDatePicker>
        <VueMultiselect
        class="max-w-[300px]"
        v-model="selectedAnalyses"
        :options="analysesServices"
        :multiple="false"
        :searchable="true"
        label="name"
        track-by="uid">
        </VueMultiselect>
      </div>
    </div>

    <hr class="my-4">
    <template v-if="groupedChartData?.length == 0">
      The selected analysis has no data for the selected period.
    </template>
    <template v-else>
      <div class="mb-4" v-for="grouping in groupedChartData" :key="grouping.name">
        <ChartLJ :title="grouping.name" :series="grouping.data" />
      </div>
    </template>
  </div>
</template>
