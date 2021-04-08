<template>
  <div class="flex justify-between">
    <h3 class="my-4">Sample Detail</h3>
    <router-link  to="./"
      class="p-2 my-2 text-sm border-blue-500 border text-dark-700 transition-colors duration-150 rounded-lg focus:outline-none hover:bg-blue-500 hover:text-gray-100">
      ... other samples
    </router-link>
  </div>
  <hr>

  <div class="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-4 sm:px-6 md:px-2 py-4" >
    <div class="grid grid-cols-12 gap-3">
      <!-- Summary Column -->
      <div class="col-span-12 px-3 sm:px-0">
        <div class="mb-2 flex justify-between sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold">
          <div>
              <span v-if="sample.priority < 1"
                :class="[
                    'font-small',
                    { 'text-red-700': sample.priority < 1 },
                ]">
                    <i class="fa fa-star"></i>
              </span>
              {{ sample.sampleId }} 
              <button
                @click="FormManager(false, 'client', client)"
                class="ml-4 text-xs inline-flex items-center justify-center w-6 h-6 mr-2 border-blue-500 border text-gray-900 transition-colors duration-150 bg-white rounded-full focus:outline-none hover:bg-gray-200"
              >
                <i class="fa fa-pen"></i>
              </button>
            </div>
          <span>{{ profileAnalysesText(sample.profiles, sample.analyses) }}</span>
          <button type="button" class="bg-blue-400 text-white p-1 rounded leading-none">{{ sample.status }}</button>
        </div>
        <hr />
        <div class="grid grid-cols-2 mt-2">
          <div class="col-span-1">
            <!-- Client Details -->
            <div class="flex">
              <span class="text-gray-800 text-sm font-medium w-1/4">Requests:</span>
              <span class="text-gray-600 text-sm md:text-md">{{ profileAnalysesText(sample.profiles, sample.analyses) }}</span>
            </div>
            <div class="flex">
              <span class="text-gray-800 text-sm font-medium w-1/4">Client Request ID:</span>
              <span class="text-gray-600 text-sm md:text-md">{{ sample.analysisrequest?.clientRequestId }}</span>
            </div>
            <div class="flex">
              <span class="text-gray-800 text-sm font-medium w-1/4">Sample Type:</span>
              <span class="text-gray-600 text-sm md:text-md">{{ sample.sampletype?.name }}</span>
            </div>
          </div>
          <div class="col-span-1">
            <!-- Communication Details -->
            <div class="flex">
              <span class="text-gray-800 text-sm font-medium w-1/4">Client:</span>
              <span class="text-gray-600 text-sm md:text-md">{{ sample.analysisrequest?.client?.name }}</span>
            </div>
            <div class="flex">
              <span class="text-gray-800 text-sm font-medium w-1/4">Cliet Contact:</span>
              <span class="text-gray-600 text-sm md:text-md">Sister in Charge</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <hr class="mt-4 mb-2">
  <h3 class="">Analyses/Results</h3>
  <hr class="mb-4 mt-2">

  <div class="overflow-x-auto">
    <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg">
        <table class="min-w-full">
            <thead>
                <tr>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-black-500 tracking-wider"></th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left leading-4 text-black-500 tracking-wider">Analysis</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Methods</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Instrument</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Analyst</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Result</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Retest</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Submitted</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Due Date</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Status</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-black-500 tracking-wider">Hidden</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300"></th>
                </tr>
            </thead>
            <tbody class="bg-white">
                    <tr v-for="result in analysisResults"  :key="result.uid" >
                        <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500"></td>
                        <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                          <div class="text-sm leading-5 text-blue-900"> {{ result.analysis?.name }}</div>
                        </td>
                        <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                          <div class="text-sm leading-5 text-blue-900">METHOD</div>
                        </td>
                        <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                          <div class="text-sm leading-5 text-blue-900">INSTRUMENT</div>
                        </td>
                        <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                          <div class="text-sm leading-5 text-blue-900">moyoza</div>
                        </td>
                        <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                          <div v-if="result.result" class="text-sm leading-5 text-blue-900">{{ result.result }}</div>
                          <div v-else class="text-sm leading-5 text-blue-900">
                            <input class="form-input mt-1 block w-full" type="text" v-model="result.editResult" placeholder="" />
                          </div>
                        </td>
                        <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                          <div class="text-sm leading-5 text-blue-900">NO</div>
                        </td>
                        <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                          <div class="text-sm leading-5 text-blue-900">2020-10-10</div>
                        </td>
                        <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                          <div class="text-sm leading-5 text-blue-900">2020-10-10</div>
                        </td>
                        <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                          <button type="button" class="bg-blue-400 text-white p-1 rounded leading-none">{{ result.status }}</button>
                        </td>
                        <td class="px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                          <button @click.prevent="submitResult(result)" 
                            class="p-1 ml-2 border-white border text-gray-500 rounded transition duration-300 hover:border-blue-500 hover:text-blue-500 focus:outline-none">
                            submit
                          </button>
                        </td>
                    </tr>
            </tbody>
        </table>
    </div>
</div>

</template>

<script lang="ts">
import { defineComponent, ref, toRefs, computed, PropType } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { useMutation } from '@urql/vue';

import { ActionTypes, ISampleRequest, IAnalysisResult } from '../../../store/modules/samples';
import { GET_ANALYSIS_RESULTS_BY_SAMPLE_UID } from '../../../graphql/analyses.queries';
import { SUBMIT_ANALYSIS_RESULTS } from '../../../graphql/analyses.mutations';
export default defineComponent({
  name: 'patient-search',
  props: {
    patient: { 
      type: Object as PropType<IPatient>,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const store = useStore();
 
    const  { patient  } = toRefs(props) ;

    const sample:ISampleRequest = JSON.parse(route.params.sample || "{}");
    store.dispatch(ActionTypes.FETCH_ANALYSIS_RESULTS_FOR_SAMPLE, sample.uid)
    const analysisResults: IAnalysisResult = computed(() => store.getters.getAnalysisResults)

    const { executeMutation: submitAnalysisResults } = useMutation(SUBMIT_ANALYSIS_RESULTS);
    
    function submitAnalysesResults(results): void {
      submitAnalysisResults({ analysisResults: results, }).then((result) => {
       store.dispatch(ActionTypes.UPDATE_ANALYSIS_RESULTS, result);
      });
    }

    function profileAnalysesText(profiles: IProfile[], analyses: IAnalysis[]): string {
        let names = [];
        profiles.forEach(p => names.push(p.name));
        analyses.forEach(a => names.push(a.name));
        return names.join(', ');
    }

    function submitResult(result: ISampleResult): void {
      result.result = result.editResult;
      submitAnalysesResults([{ uid: result.uid , result: result.result }])
    }

    return {
      patient,
      sample,
      profileAnalysesText,
      analysisResults,
      submitResult
    };
  },
});
</script>
