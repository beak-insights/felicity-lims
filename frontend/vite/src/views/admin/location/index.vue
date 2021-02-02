<template>
  <div class="mt-4">
    <div class="grid grid-cols-12 gap-4 mt-2">
      <section class="col-span-3">
        Countries
        <button
          class="p-2 my-2 ml-8 text-sm border-blue-500 border text-dark-700 transition-colors duration-150 rounded-lg focus:outline-none hover:bg-blue-500 hover:text-gray-100"
          @click="FormManager(true, 'country')">
          Add Country
        </button>
        <div class="overflow-y-scroll overscroll-contain patient-scroll">
            <div v-for="c in countries?.countryAll.edges" :key="c.node.uid" 
              class="bg-white w-full flex justify-between p-2 mb-1 rounded-xl shadow border">
              <a href="#" @click.prevent.stop="selectLocation('country', c.node)" class="font-semibold text-gray-700">
                <span>{{c.node.name}}</span>
              </a>
              <a href="#" @click="FormManager(false, 'country')" class="px-2 cursor">
                <font-awesome-icon icon="pen"/>
              </a>
            </div>
        </div>
      </section>

      <section class="col-span-4" v-if="isCountrySelected()">
        Provinces
        <button
          class="p-2 my-2 ml-8 text-sm border-blue-500 border text-dark-700 transition-colors duration-150 rounded-lg focus:outline-none hover:bg-blue-500 hover:text-gray-100"
          @click="FormManager(true, 'province')"
        >
          Add Province
        </button>
        <div class="overflow-y-scroll overscroll-contain patient-scroll">
            <div v-for="p in provinces?.provinceAll.edges" :key="p.node.uid" 
              class="bg-white w-full flex justify-between p-2 mb-1 rounded-xl shadow border">
              <a href="#" @click.prevent.stop="selectLocation('province', p.node)" class="font-semibold text-gray-700">
                <span>{{p.node.name}}</span>
              </a>
              <a href="#" @click="FormManager(false, 'province')" class="px-2 cursor">
                <font-awesome-icon icon="pen"/>
              </a>
            </div>
        </div>
      </section>

      <section class="col-span-5" v-if="isProvinceSelected()">
        Districts
        <button
          class="p-2 my-2 ml-8 text-sm border-blue-500 border text-dark-700 transition-colors duration-150 rounded-lg focus:outline-none hover:bg-blue-500 hover:text-gray-100"
          @click="FormManager(true, 'district')"
        >
          Add District
        </button>
        <div class="overflow-y-scroll overscroll-contain patient-scroll">
            <div v-for="d in districts?.districtAll.edges" :key="d.node.uid" 
              class="bg-white w-full flex justify-between p-2 mb-1 rounded-xl shadow border">
              <a href="#" @click.prevent.stop="selectLocation('district', d.node)" class="font-semibold text-gray-700">
                <span>{{d.node.name}}</span>
              </a>
              <a href="#" @click="FormManager(false, 'district')" class="px-2 cursor">
                <font-awesome-icon icon="pen"/>
              </a>
            </div>
        </div>
      </section>
    </div>
  </div>

  <!-- Patient Edit Form Modal -->
  <modal v-if="showModal" @close="showModal = false">
    <template v-slot:header>
      <h3>{{formTitle}}</h3>
    </template>

    <template v-slot:body>
      <form action="post" class="p-1">
        <div class="grid grid-cols-2 gap-x-4 mb-4">
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Name</span>
            <input class="form-input mt-1 block w-full" :value="form.name" placeholder="Name ..." />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Code</span>
            <input
              class="form-input mt-1 block w-full"
              :value="form.code"
              placeholder="Code ..."
            />
          </label>
        </div>
        <hr />
        <button
          type="button"
          @click.prevent="saveForm()"
          class="-mb-4 w-full border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition-colors duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
        >
          Save Form
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
import tabSamples from '../../_components/sample/patientSampleTab.vue';
import tabCases from '../../_components/sample/patientCaseTab.vue';
import tabLogs from '../../_components/sample/patientLogTab.vue';
import modal from '../../_components/modals/simpleModal.vue';
import { Country, Province, District, GenericLocation } from '../../../store/common';
import { GET_ALL_COUNTRIES, GET_ALL_PROVINCES, GET_ALL_DISTRICTS } from '../../../graphql/admin/queries'

export const ICountry = typeof Country;


export default defineComponent({
  name: 'location',
  components: {
    tabSamples,
    tabCases,
    tabLogs,
    modal,
  },
  setup() {
    const nullCountry = new Country();
    const nullProvince = new Province();
    const nullDistrict = new District();
    const nullLocation = new GenericLocation();

    let store = useStore();
    let createLocation = ref(true);
    let showModal = ref(false);

    let country = reactive({ ...nullCountry });
    let province = reactive({ ...nullProvince });
    let district = reactive({ ...nullDistrict });
    let form = reactive({ ...nullLocation });
    let formTitle = ref('');

    const { data: countries, fetching: CFetching, error: CError } = useQuery({
      query: GET_ALL_COUNTRIES,
    })

    const { data: provinces, fetching: PFetching, error: PError } = useQuery({
      query: GET_ALL_PROVINCES,
    })

    const { data: districts, fetching: DFetching, error: DError } = useQuery({
      query: GET_ALL_DISTRICTS,
    })

    function isCountrySelected() {
      return country.uid !== undefined;
    }

    function isProvinceSelected() {
      return province.uid !== undefined;
    }

    let selectLocation = (target, selected) => {
      if (target === 'country') Object.assign(country, { ...selected });
      if (target === 'province') Object.assign(province, { ...selected });
      if (target === 'district') Object.assign(district, { ...selected });
    };

    let resetSelected = (target) => {
      if (target === 'country') {
        Object.assign(country, { ...nullCountry });
        Object.assign(province, { ...nullProvince });
        Object.assign(district, { ...nullDistrict });
      };
      if (target === 'province') {
        Object.assign(province, { ...nullProvince })
        Object.assign(district, { ...nullDistrict });
      };
      if (target === 'district') Object.assign(district, { ...nullDistrict });
    };

    function FormManager(create, target) {
      createLocation.value = create;
      showModal.value = true;
      formTitle.value = (create ? "CREATE" : "EDIT") + " " + target.toUpperCase();
      if(create) {
          resetSelected(target);
      } else { }
    }

    function saveForm(target) {
      console.log(target);
    }
    //

    return {
      showModal,
      FormManager,
      form,
      formTitle,
      isCountrySelected,
      isProvinceSelected,
      selectLocation,
      countries,
      provinces,
      districts
    };
  },
});
</script>
