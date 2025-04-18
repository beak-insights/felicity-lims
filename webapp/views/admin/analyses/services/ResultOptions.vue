<script setup lang="ts">
  import { ref, computed, reactive, toRefs, watch, defineAsyncComponent } from 'vue';
  import { AddResultOptionDocument, AddResultOptionMutation, AddResultOptionMutationVariables,
    EditResultOptionDocument, EditResultOptionMutation, EditResultOptionMutationVariables } from '@/graphql/operations/analyses.mutations';
  import { IResultOption } from '@/models/analysis';
  import { useAnalysisStore } from '@/stores/analysis';
  import { useSampleStore } from '@/stores/sample';
  import  useApiUtil  from '@/composables/api_util';
  const modal = defineAsyncComponent(
    () => import('@/components/ui/FelModal.vue')
  )
  const VueMultiselect = defineAsyncComponent(
    () => import('vue-multiselect')
  )

  const analysisStore = useAnalysisStore()
  const sampleStore = useSampleStore()
  const { withClientMutation } = useApiUtil()

  const sampleTypes = computed<any[]>(() => sampleStore.getSampleTypes);

  const props = defineProps({
      analysis: {
          type: Object,
          required: true,
          default: () => ({}),
      },
      analysisUid: {
          type: String,
          required: true,
          default: 0,
      },
  })

  const { analysis } = toRefs(props);
  let showModal = ref(false);
  let formTitle = ref('');
  let form = reactive({}) as IResultOption;
  const formAction = ref(true);

  watch(() => props.analysisUid, (anal, prev) => {
      
  })

  function addResultOption(): void {
      form.optionKey = +form.optionKey!;
      const payload = { ...form, 
        analysisUid: analysis?.value?.uid,
        sampleTypes: form.sampleTypes?.map(item => item.uid),
      }
      withClientMutation<AddResultOptionMutation, AddResultOptionMutationVariables>(AddResultOptionDocument, { payload }, "createResultOption")
      .then((result) => analysisStore.addResultOption(result));
  }

  function editResultOption(): void {
      const payload = { ...form, analysisUid: analysis?.value?.uid, sampleTypes: form.sampleTypes?.map(item => item.uid) };
      delete payload['__typename']
      delete payload['uid']
      withClientMutation<EditResultOptionMutation, EditResultOptionMutationVariables>(EditResultOptionDocument, { uid : form.uid,  payload }, "updateResultOption")
      .then((result) => analysisStore.updateResultOption(result));
  }

  function FormManager(create: boolean, obj = {} as IResultOption):void {
      formAction.value = create;
      showModal.value = true;
      formTitle.value = (create ? 'CREATE' : 'EDIT') + ' ' + "RESULT OPTION";
      if (create) {
          Object.assign(form, { optionKey: null, value: null });
      } else {
          Object.assign(form, { ...obj });
      }
  }

  function saveForm():void {
      if (formAction.value === true) addResultOption();
      if (formAction.value === false) editResultOption();
      showModal.value = false;
  }

</script>

<template>
     <button
        class="px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"
        @click="FormManager(true)"
      >Add Result Option</button>
    <hr>
    <div class="overflow-x-auto mt-4">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg">
        <table class="min-w-full">
            <thead>
            <tr>
                <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Result Key</th>
                <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Result Value</th>
                <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Sample Tyes</th>
                <th class="px-1 py-1 border-b-2 border-gray-300"></th>
            </tr>
            </thead>
            <tbody class="bg-white">
            <tr v-for="option in analysis?.resultOptions"  :key="option?.uid">
                <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                <div class="flex items-center">
                    <div>
                    <div class="text-sm leading-5 text-gray-800">{{ option?.optionKey }}</div>
                    </div>
                </div>
                </td>
                <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                  <div class="text-sm leading-5 text-sky-800">{{ option?.value }}</div>
                </td>
                <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                  <span class="p-1 rounded-sm text-sm leading-5 text-sky-800 bg-gray-200 mr-2" v-for="stype of option?.sampleTypes" :key="stype.uid">{{ stype.name }}</span>
                </td>
                <td class="px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button @click="FormManager(false, option)" class="px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">Edit</button>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>

  <!-- Result Options Form Modal -->
  <modal v-if="showModal" @close="showModal = false" :contentWidth="'w-2/4'">
    <template v-slot:header>
      <h3>{{ formTitle }}</h3>
    </template>

    <template v-slot:body >
      <form action="post" class="p-1">
        <div class="grid grid-cols-3 gap-x-4 mb-4">
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Result Key</span>
            <input
             type="number"
              class="form-input mt-1 block w-full"
              v-model="form.optionKey"
              placeholder="Key ..."
            />
          </label>
          <label class="block col-span-2 mb-2">
            <span class="text-gray-700">Result Value</span>
            <input
             type="text"
              class="form-input mt-1 block w-full"
              v-model="form.value"
              placeholder="Value ..."
            />
          </label>      
          <label class="block col-span-3 mb-2">
            <span class="text-gray-700">Sample Types</span>
            <VueMultiselect
            v-model="form.sampleTypes"
            :options="sampleTypes"
            :multiple="true"
            :searchable="true"
            label="name"
            track-by="uid">
            </VueMultiselect>
          </label>
        </div>
        <hr />
        <button
          type="button"
          @click.prevent="saveForm()"
          class="-mb-4 w-full border border-sky-800 bg-sky-800 text-white rounded-sm px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-sky-800 focus:outline-none focus:shadow-outline"
        >
          Save Form
        </button>
      </form>
    </template>
  </modal>

</template>
