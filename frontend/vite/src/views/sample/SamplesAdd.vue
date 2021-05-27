<template>

    <section class="col-span-4">
        <div
          class="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-4 sm:px-6 md:px-2 py-4"
        >
          <div class="grid grid-cols-12 gap-3">
            <!-- Meta Column -->
            <div class="sm:col-span-2 text-center hidden sm:block">
              <div class="inline-block font-md text-medium mb-2">{{ patient?.patientId }}</div>
              <!-- Age -->
              <div
                class="grid grid-rows-2 mx-auto mb-1 py-1 w-4/5 2lg:w-3/5 rounded-md bg-green-400"
              >
                <div class="inline-block font-medium text-2xl text-white">{{ patient?.age }}</div>
                <div class="inline-block font-medium text-white text-sm lg:text-md">Yrs Old</div>
              </div>
            </div>
            <!-- Summary Column -->
            <div class="col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0">
              <div
                class="flex justify-between sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold"
              >
                <span>{{ patient?.firstName }} {{ patient?.lastName }}</span>
                <div>
                  <span class="font-medium text-md">{{ patient?.dateOfBirth }}</span>
                  <button
                    class="ml-4 inline-flex items-center justify-center w-8 h-8 mr-2 border-blue-500 border text-gray-900 transition-colors duration-150 bg-white rounded-full focus:outline-none hover:bg-gray-200"
                  >
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <hr />
              <div class="grid grid-cols-2 mt-2">
                <div class="col-span-1">
                  <!-- Client Details -->
                  <div class="flex">
                    <span class="text-gray-800 text-sm font-medium w-16">Client</span>
                    <span class="text-gray-600 text-sm md:text-md">{{
                      patient?.client?.name
                    }}</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-800 text-sm font-medium w-16">District:</span>
                    <span class="text-gray-600 text-sm md:text-md">{{
                      patient?.client?.district?.name
                    }}</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-800 text-sm font-medium w-16">Province:</span>
                    <span class="text-gray-600 text-sm md:text-md">{{
                      patient?.client?.district?.province?.name
                    }}</span>
                  </div>
                </div>
                <div class="col-span-1">
                  <!-- Identifiers -->
                  <div class="col-span-2 flex mt-2">
                    <span class="text-gray-800 text-sm font-medium w-16">Client Patient ID</span>
                    <span class="text-gray-600 text-sm md:text-md">{{
                      patient?.clientPatientId
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


  <div class="w-3/4 mx-auto mt-4 py-4">
    <h5 class="mb-4">Add Analysis Request</h5>
      <form action="post" class="p-4 mb-8 bg-white">
        <div class="grid grid-cols-2 gap-x-4 mb-4">
          <label class="block col-span-2 mb-2">
            <span class="text-gray-700">Client Request ID</span>
            <input
              class="form-input mt-1 block w-full"
              v-model="form.clientRequestId"
              placeholder="CRID ..."
            />
          </label>
          <label class="block col-span-2 mb-2">
            <span class="text-gray-700">Clinical Data</span>
            <textarea
            cols="2"
              class="form-input mt-1 block w-full"
              v-model="form.clinicalData"
              placeholder="Clinical Data ..."
            />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Client</span>
            <input
              class="form-input mt-1 block w-full"
              v-model="form.client.name"
              placeholder="Name ..."
              list="ice-cream-flavors"
              @change="getClientContacts()"
            />
            <datalist id="ice-cream-flavors" >
                <option value="" />
                <option v-for="client in clients" :key="client.uid" :value="client.name" :data-client="client"></option>
            </datalist>
          </label>
          <label class="block col-span-2 mb-2">
              <span class="text-gray-700">Client Contacts</span>
              <select 
              name="clientContacts" 
              id="clientContacts" 
              v-model="form.client.clientContact"
              class="form-input mt-1 block w-full">
                <option value=""></option>
                <option  
                v-for="contact in clientContacts"
                :key="contact.uid"
                :value="contact.uid" >{{ contact.firstName }} {{ contact.lastName }}</option>
            </select>
          </label>
          <label class="block col-span-2 mb-2">
            <span class="text-gray-700">Priority</span>
            <input
              class="form-input mt-1 block w-full"
              v-model="form.priority"
              placeholder="Name ..."
            />
          </label>
        </div>
        <section id="samples">
            <hr>
            <div class="flex justify-between items-center py-2">
                <h5>Samples</h5>
                <button
                v-if="form.samples?.length !== 20"
                @click.prevent="addSample()"
                class="px-2 py-1 mr-2 border-green-500 border text-green-500 rounded transition duration-300 hover:bg-green-700 hover:text-white focus:outline-none">Add Sample</button>
            </div>
            <hr class="mb-4">
            <div v-for="(sample, index) in form.samples" :key="index">
                <div class="flex items-center justify-between">
                    <div class="">
                        <div class="grid grid-cols-6 gap-x-4">
                            <label class="block col-span-2 mb-2">
                              <span class="text-gray-700">Sample Type</span>
                                <select 
                                name="sampleTypes" 
                                id="sampleTypes" 
                                v-model="sample.sampleType"
                                class="form-input mt-1 block w-full" >
                                  <option value=""></option>
                                  <option  
                                  v-for="sampleType in sampleTypes"
                                  :key="sampleType.uid"
                                  :value="sampleType.uid" >{{ sampleType.name }}</option>
                              </select>
                            </label>
                            <label class="block col-span-2 mb-2">
                                <span class="text-gray-700">Analysis Profiles</span>
                                <select 
                                name="analysisProfiles" 
                                id="analysisProfiles" 
                                v-model="sample.profiles"
                                class="form-input mt-1 block w-full" multiple>
                                  <option value=""></option>
                                  <option  
                                  v-for="(profile, index) in analysesProfiles"
                                  :key="profile.uid"
                                  :value="profile.uid" >{{ profile.name }}</option>
                              </select>
                            </label>
                            <label class="block col-span-2 mb-2">
                                <span class="text-gray-700">Analysis Services</span>
                                <select 
                                name="analysesServices" 
                                id="analysesServices" 
                                v-model="sample.analyses"
                                class="form-input mt-1 block w-full" multiple>
                                  <option value=""></option>
                                  <option  
                                  v-for="(service, index) in analysesServices"
                                  :key="service.uid"
                                  :value="service.uid" >{{ service.name }}</option>
                              </select>
                            </label>
                        </div>
                    </div>
                    <div class="">
                        <button
                        @click.prevent="removeSample(index)"
                        class="px-2 py-1 mr-2 border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">Remove</button>
                    </div>
                </div>
                <hr>
            </div>

        </section>
        <hr />
        <button
          type="button"
          @click.prevent="saveForm()"
          class="-mb-4 w-full border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
        >
          Save Form
        </button>
      </form>
  </div>
</template>

<script lang="ts">

import { useMutation } from '@urql/vue';
import { defineComponent, ref, toRefs, reactive, computed, toRefs, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ActionTypes as SampleActionTypes } from '../../store/modules/samples';
import { ActionTypes, AnalysisRequest, IAnalysisRequest, ISample, Sample } from '../../store/modules/analyses';
import { ADD_ANALYSIS_SERVICE, EDIT_ANALYSIS_SERVICE, ADD_ANALYSIS_REQUEST  } from '../../graphql/analyses.mutations';
import { IPatient } from '../patient/Patients.vue';
import { ActionTypes as PatientActionTypes } from '../../store/modules/patients';
import { ActionTypes as ClientActionTypes } from '../../store/modules/clients';
import { isNullOrWs } from '../../utils';

export default defineComponent({
  name: "add-sample",
  props: {
    patient: {
    type: Object
  }
  },
  setup(props) {    
    const store = useStore();
    const route = useRoute();

    let formTitle = ref('');
    let formAction = ref(true);
    let form = reactive({ ...(new AnalysisRequest) });
    let clientQuery = ref('');

    const analysesProfiles = computed(() =>store.getters.getAnalysesProfiles);
    const analysesServices = computed(() => {
      const services = store.getters.getAnalysesServicesSimple;
      let s = new Set();
      services.forEach((service, index) => {
        if(service.profiles?.length === 0){
          s.add(service)
        }
      })
      return [...s];
    });

    store.dispatch(SampleActionTypes.FETCH_SAMPLE_TYPES);
    store.dispatch(ActionTypes.FETCH_ANALYSES_SERVICES);
    store.dispatch(ActionTypes.FETCH_ANALYSES_PROFILES);
    store.dispatch(ClientActionTypes.FETCH_CLIENTS);

    const patient = computed(() => store.getters.getPatientByUid(route?.query?.patientUid))
    const clients = computed(() => store.getters.getClients)

    const { executeMutation: createAnalysisRequest } = useMutation(ADD_ANALYSIS_REQUEST);

    function addAnalysesRequest(): void {
      console.log(form)
      createAnalysisRequest({ clientRequestId: form.clientRequestId, clientUid: form.client.uid, patientUid: form.patient.uid, samples: form.samples}).then((result) => {
       store.dispatch(SampleActionTypes.ADD_SAMPLES, result);
      });
    }

    function addSample(): void {
      form.samples?.push(new Sample());
    }

    function removeSample(index): void {
        form.samples?.splice(index, 1);
    }

    function setSampleType(sample: ISample, event: Event): void {
      sample.sampleType = store.getters.getSampleTypeByName(event.target.value);
    }

    function FormManager(create: boolean, obj: IAnalysisCategory):void {
      formAction.value = create;
      showModal.value = true;
      formTitle.value = (create ? 'CREATE' : 'EDIT') + ' ' + "ANALYSES ANALYSIS REQUEST";
      if (create) {
        Object.assign(form, { ...(new AnalysisRequest()) });
      } else {
        Object.assign(form, { ...obj });
      }
    }

    function getClientContacts(): void {
      if(!isNullOrWs(form.client.name)) {
        const clt = store.getters.getClientByName(form.client.name);
        store.dispatch(ClientActionTypes.FETCH_CLIENT_CONTACTS, clt?.uid);
        form.client = clt;
        console.log(form.client);
      }
    }

    function saveForm(): void {
      form.patient = patient.value;
      const clt = store.getters.getClientByName(form.client?.name);
      form.client = clt;
      if (formAction.value === true) addAnalysesRequest();
    }

    return {
      analysesCategories: computed(() =>store.getters.getAnalysesCategories),
      sampleTypes: computed(() => store.getters.getSampleTypes),
      analysesProfiles,
      analysesServices,
      clients,
      patient,
      FormManager,
      form,
      formTitle,
      saveForm,
      addSample,
      removeSample,
      setSampleType,
      getClientContacts,
      clientContacts: computed(() => store.getters.getClientContacts),
    };
  },
});
</script>
