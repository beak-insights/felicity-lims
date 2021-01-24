<template>
  <div class="px-6">
    <div class="flex">
      <h1 class="h1 my-4 font-bold text-dark-700">CPD</h1>
      <button
        class="px-4 my-2 ml-8 text-sm border-blue-500 border text-dark-700 transition-colors duration-150 rounded-lg focus:outline-none hover:bg-blue-500 hover:text-gray-100"
        @click="patientFormManager(true)"
      >
        Add Patient
      </button>
    </div>
    <hr />

    <div class="grid grid-cols-12 gap-4 mt-2">
      <section class="col-span-4 overflow-y-scroll overscroll-contain patient-scroll">
        <a
          v-for="pt in patients?.patientAll.edges"
          :key="pt.node.patientId"
          href="#"
          @click.prevent.stop="selectPatient(pt.node)"
          class="bg-white w-full flex items-center p-1 mb-1 rounded-xl shadow border"
        >
          <div class="flex-grow p-1">
            <div class="font-semibold text-gray-700 flex justify-between">
              <span>{{ getPatientFullName(pt.node) }}</span>
              <span class="text-sm text-gray-500">{{ pt.node.age }} yrs, {{ pt.node.gender }}</span>
            </div>
            <div class="text-sm text-gray-500 flex justify-between">
              <span>{{ pt.node.patientId }}</span>
              <span>{{ pt.node.clientPatientId }}</span>
            </div>
            <div class="text-sm text-gray-500 flex justify-between">
              <span>{{ pt.node?.client?.district?.province?.name }}</span>
              <span>{{ pt.node?.client?.name }}</span>
            </div>
          </div>
          <div class="p-2">
            <span class="block h-4 w-4 bg-green-400 rounded-full bottom-0 right-0"></span>
          </div>
        </a>
      </section>

      <section class="col-span-8" v-if="isPatientSelected()">
        <!-- Question Listing Item Card -->
        <div
          class="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-4 sm:px-6 md:px-2 py-4"
        >
          <div class="grid grid-cols-12 gap-3">
            <!-- Meta Column -->
            <div class="sm:col-span-2 text-center hidden sm:block">
              <div class="inline-block font-md text-medium mb-2">{{ patient.patientId }}</div>
              <!-- Age -->
              <div
                class="grid grid-rows-2 mx-auto mb-1 py-1 w-4/5 2lg:w-3/5 rounded-md bg-green-400"
              >
                <div class="inline-block font-medium text-2xl text-white">{{ patient.age }}</div>
                <div class="inline-block font-medium text-white text-sm lg:text-md">Yrs Old</div>
              </div>
            </div>
            <!-- Summary Column -->
            <div class="col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0">
              <div
                class="flex justify-between sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold"
              >
                <span>{{ getPatientFullName(patient) }}</span>
                <div>
                  <span class="font-medium text-md">{{ patient.dob }}</span>
                  <button
                    @click="patientFormManager(false)"
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
                    <span class="text-gray-600 text-sm md:text-md">{{ patient?.client?.name }}</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-800 text-sm font-medium w-16">District:</span>
                    <span class="text-gray-600 text-sm md:text-md">{{ patient?.client?.district?.name }}</span>
                  </div>
                  <div class="flex">
                    <span class="text-gray-800 text-sm font-medium w-16">Province:</span>
                    <span class="text-gray-600 text-sm md:text-md">{{ patient?.client?.district?.province?.name }}</span>
                  </div>
                </div>
                <div class="col-span-1">
                  <!-- Identifiers -->
                  <div class="col-span-2 flex mt-2">
                    <span class="text-gray-800 text-sm font-medium w-16">Client Patient ID</span>
                    <span class="text-gray-600 text-sm md:text-md">{{
                      patient.clientPatientId
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sample and Case Data -->
        <nav class="bg-white px-6 pt-2 shadow-md mt-2">
          <div class="-mb-px flex justify-start">
            <a
              v-for="tab in tabs"
              :key="tab"
              :class="[
                'no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 mr-8 tab',
                { 'tab-active': currentTab === tab },
              ]"
              @click="currentTab = tab"
              href="#"
            >
              {{ tab }}
            </a>
          </div>
        </nav>

        <keep-alive>
          <component :is="currentTabComponent"></component>
        </keep-alive>
      </section>
    </div>
  </div>

  <!-- Patient Edit Form Modal -->
  <modal v-if="showModal" @close="showModal = false">
    <template v-slot:header>
      <h3>Patient Form</h3>
    </template>

    <template v-slot:body>
      <form action="post" class="p-1">
        <label class="block mb-2">
          <span class="text-gray-700">Patient Unique Identifier</span>
          <input class="form-input mt-1 block w-full" placeholder="Patient Unique Identifier" />
        </label>
        <div class="flex justify-between">
          <label class="block mb-2">
            <span class="text-gray-700">First Name</span>
            <input
              class="form-input mt-1 block w-full"
              :value="patient.firstName"
              placeholder="First Name"
            />
          </label>
          <label class="block mb-2 mx-2">
            <span class="text-gray-700">Middle Name</span>
            <input class="form-input mt-1 block w-full" placeholder="Middle Name" />
          </label>
          <label class="block mb-2">
            <span class="text-gray-700">Last Name</span>
            <input
              class="form-input mt-1 block w-full"
              :value="patient.lastName"
              placeholder="Last Name"
            />
          </label>
        </div>
        <div class="flex justify-between">
          <label class="block mb-2">
            <span class="text-gray-700">Age</span>
            <input
              class="form-input mt-1 block w-full"
              type="number"
              :value="patient.age"
              placeholder="Age"
            />
          </label>
          <label class="block mb-2 mx-2">
            <span class="text-gray-700">Date of Birth</span>
            <input
              class="form-input mt-1 block w-full"
              type="date"
              :value="patient.dob"
              placeholder="Date of Birth"
            />
          </label>
          <label class="inline-flex items-center -mb-6">
            <input type="checkbox" class="form-checkbox text-green-500 mx-4" checked />
            <span class="ml-2">Age/DOB Estimated?</span>
          </label>
        </div>
        <div class="grid grid-cols-6 justify-between">
          <label class="block mb-2 col-span-4">
            <span class="text-gray-700">Mobile Number</span>
            <input
              class="form-input mt-1 block w-full"
              type="number"
              :value="patient.mobile"
              placeholder="Mobile Number"
            />
          </label>
          <label class="inline-flex items-center -mb-6 col-span-2">
            <input type="checkbox" class="form-checkbox text-green-500 mx-4" checked />
            <span class="ml-2">Consent to SMS</span>
          </label>
        </div>
        <!-- other identifiers: passport, client pid, national id -->
        <label class="block mb-2">
          <span class="text-gray-700">Primary Referrer</span>
          <select class="form-select block w-full mt-1" :value="patient.client">
            <option>Referrer One</option>
            <option>Referrer Two</option>
            <option>Referrer Three</option>
            <option>Referrer Four</option>
          </select>
        </label>
        <div class="grid grid-cols-3 gap-x-4 mb-4">
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Country</span>
            <select class="form-select block w-full mt-1" :value="patient.countryId">
              <option>Zimbabwe</option>
              <option>South Africa</option>
              <option>Zambia</option>
              <option>Angola</option>
            </select>
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Province</span>
            <select class="form-select block w-full mt-1" :value="patient.provinceId">
              <option>Bulawayo</option>
              <option>Harare</option>
              <option>Midlands</option>
              <option>Matabeleland North</option>
            </select>
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">District</span>
            <select class="form-select block w-full mt-1" :value="patient.districtId">
              <option>Harare</option>
              <option>Bulawayo</option>
              <option>Gweru</option>
              <option>Kariba</option>
            </select>
          </label>
        </div>
        <hr />
        <button
          type="button"
          @click.prevent="savePatientForm()"
          class="-mb-4 w-full border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
        >
          Save Patient
        </button>
      </form>
    </template>
  </modal>
</template>

<style lang="postcss">
.patient-scroll {
  height: 400px;
}

.tab-active {
  border-bottom: 2px solid rgb(194, 193, 193);
  color: rgb(37, 37, 37) !important;
}
</style>

<script scope="ts">
import { defineComponent, ref, reactive, computed } from 'vue';
import { mapGetters, useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useQuery } from '@urql/vue';
import tabSamples from '../_components/sample/patientSampleTab.vue';
import tabCases from '../_components/sample/patientCaseTab.vue';
import tabLogs from '../_components/sample/patientLogTab.vue';
import modal from '../_components/modals/simpleModal.vue';
import { Patient } from '../../store/modules/patients';
import { GET_ALL_PATIENTS } from '../../graphql/queries'

export const IPatient = typeof Patient;

export default defineComponent({
  name: 'patients',
  components: {
    tabSamples,
    tabCases,
    tabLogs,
    modal,
  },
  setup(context) {
    const nullPatient = new Patient();
    let store = useStore();
    let createPatient = ref(true);
    let showModal = ref(false);
    let currentTab = ref('samples');
    const tabs = ['samples', 'cases', 'logs'];
    let currentTabComponent = computed(() => 'tab-' + currentTab.value);
    let patient = reactive({ ...nullPatient });
    const { data: patients, fetching: ptFetching, error: ptError } = useQuery({
      query: GET_ALL_PATIENTS,
    })

    function isPatientSelected() {
      return patient.patientId !== undefined;
    }

    let getPatientFullName = (pt) => {
      return pt.firstName + ' ' + pt.lastName;
    };

    let selectPatient = (pt) => {
      Object.assign(patient, { ...pt });
    };

    let setPatientToNull = () => {
      Object.assign(patient, { ...nullPatient });
    };

    function patientFormManager(create) {
      showModal.value = true;
      createPatient.value = create;
      if (create) setPatientToNull();
      console.log(patient);
    }

    function savePatientForm() {
      console.log(createPatient);
    }
    //

    return {
      showModal,
      tabs,
      currentTab,
      currentTabComponent,
      patient,
      getPatientFullName,
      patients,// computed(() => store.getters.getPatients),
      isPatientSelected,
      selectPatient,
      patientFormManager,
      savePatientForm,
    };
  },
});
</script>
