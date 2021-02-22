<template>
  <div class="mt-4">
    <div class="grid grid-cols-12 gap-4 mt-2">
      <section class="col-span-3">
        Countries
        <button
          class="p-2 my-2 ml-8 text-sm border-blue-500 border text-dark-700 transition-colors duration-150 rounded-lg focus:outline-none hover:bg-blue-500 hover:text-gray-100"
          @click="FormManager(true, 'country')"
        >
          Add Country
        </button>
        <div class="overflow-y-scroll overscroll-contain scroll-section">
          <div
            v-for="c in countries?.countryAll.edges"
            :key="c.node.uid"
              :class="country?.uid === c.node.uid ? 'bg-white w-full flex justify-between p-2 mb-1 rounded-xl shadow border c-active' : 'bg-white w-full flex justify-between p-2 mb-1 rounded-xl shadow border' "
          >
            <a
              href="#"
              @click.prevent.stop="selectLocation('country', c.node)"
              class="font-semibold text-gray-700"
            >
              <span>{{ c.node.name }}</span>
            </a>
            <a href="#" @click="FormManager(false, 'country', c.node)" class="px-2 cursor">
              <font-awesome-icon icon="pen" />
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
        <div class="overflow-y-scroll overscroll-contain scroll-section">
          <div
            v-for="p in provinces"
            :key="p.uid"
            :class="province?.uid === p.uid ? 'bg-white w-full flex justify-between p-2 mb-1 rounded-xl shadow border c-active' : 'bg-white w-full flex justify-between p-2 mb-1 rounded-xl shadow border' "
          >
            <a
              href="#"
              @click.prevent.stop="selectLocation('province', p)"
              class="font-semibold text-gray-700"
            >
              <span>{{ p.name }}</span>
              
            </a>
            <a href="#" @click="FormManager(false, 'province', p)" class="px-2 cursor">
              <font-awesome-icon icon="pen" />
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
        <div class="overflow-y-scroll overscroll-contain scroll-section">
          <div
            v-for="d in districts"
            :key="d.uid"
            :class="district?.uid === d.uid ? 'bg-white w-full flex justify-between p-2 mb-1 rounded-xl shadow border c-active' : 'bg-white w-full flex justify-between p-2 mb-1 rounded-xl shadow border' "
          >
            <a
              href="#"
              @click.prevent.stop="selectLocation('district', d)"
              class="font-semibold text-gray-700"
            >
              <span>{{ d.name }}</span>
            </a>
            <a href="#" @click="FormManager(false, 'district', d)" class="px-2 cursor">
              <font-awesome-icon icon="pen" />
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- Location Edit Form Modal -->
  <modal v-if="showModal" @close="showModal = false">
    <template v-slot:header>
      <h3>{{ formTitle }}</h3>
    </template>

    <template v-slot:body>
      <form action="post" class="p-1">
        <div class="grid grid-cols-2 gap-x-4 mb-4">
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Name</span>
            <input
              class="form-input mt-1 block w-full"
              v-model="form.name"
              placeholder="Name ..."
            />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Code</span>
            <input
              class="form-input mt-1 block w-full"
              v-model="form.code"
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
.scroll-section {
  height: 400px;
}

.tab-active {
  border-bottom: 2px solid rgb(194, 193, 193);
  color: rgb(37, 37, 37) !important;
}

.c-active {
  background-color: lightblue;
}
</style>

<script scope="ts">
import { defineComponent, ref, reactive, computed } from 'vue';
import { useQuery, useMutation } from '@urql/vue';
import modal from '../../_components/modals/simpleModal.vue';
import { 
  Country, 
  Province, 
  District, 
  GenericLocation 
} from '../../../store/common';
import {
  GET_ALL_COUNTRIES,
  GET_ALL_PROVINCES,
  FILTER_PROVINCES_BY_COUNTRY,
  GET_ALL_DISTRICTS,
  FILTER_DISTRICTS_BY_PROVINCE,
} from '../../../graphql/admin/queries';
import { ADD_COUNTRY, UPDATE_COUNTRY, ADD_PROVINCE, ADD_DISTRICT, UPDATE_DISTRICT, UPDATE_PROVINCE } from '../../../graphql/admin/mutations';

export const ICountry = typeof Country;

export default defineComponent({
  name: 'location',
  components: {
    modal,
  },
  setup() {
    const nullCountry = new Country();
    const nullProvince = new Province();
    const nullDistrict = new District();
    const nullLocation = new GenericLocation();

    let createLocation = ref(true);
    let showModal = ref(false);
    let targetLocation = ref('');

    let provinces = ref([]);
    let districts = ref([]);

    let country = reactive({ ...nullCountry });
    let countryUid = ref(null);
    let provinceUid = ref(null);
    let province = reactive({ ...nullProvince });
    let district = reactive({ ...nullDistrict });
    let form = reactive({ ...nullLocation });
    let formTitle = ref('');

    const { data: countries, fetching: CFetching, error: CError } = useQuery({
      query: GET_ALL_COUNTRIES,
    });

    const provincesfilter = useQuery({
      query: FILTER_PROVINCES_BY_COUNTRY,
      variables: { uid: countryUid },
      pasuse: computed(() => countryUid !== null), // not working
      requestPolicy: 'network-only',
    });

    const districtsfilter = useQuery({
      query: FILTER_DISTRICTS_BY_PROVINCE,
      variables: { uid: provinceUid },
      pasuse: computed(() => provinceUid !== null), // not working
      requestPolicy: 'network-only',
    });

    const { executeMutation: createCountry } = useMutation(ADD_COUNTRY);
    const { executeMutation: updateCountry } = useMutation(UPDATE_COUNTRY);
    const { executeMutation: createProvince } = useMutation(ADD_PROVINCE);
    const { executeMutation: updateProvince } = useMutation(UPDATE_PROVINCE);
    const { executeMutation: createDistrict } = useMutation(ADD_DISTRICT);
    const { executeMutation: updateDistrict } = useMutation(UPDATE_DISTRICT);

    function addCountry() {
      createCountry({ name: form.name, code: form.code }).then((result) => {
        Object.assign(country, result);
      });
    }

    function editCountry() {
      updateCountry({ uid: form.uid, name: form.name, code: form.code, active: true }).then(
        (result) => {
          Object.assign(country, result);
        },
      );
    }

    function addProvince() {
      createProvince({name: form.name, code:form.code, countryUid: country.uid}).then((result) => {
        Object.assign(province, result);
      });
    }

    function editProvince() {
      updateProvince({ uid: form.uid, name: form.name, code: form.code, active: true }).then(
        (result) => {
          Object.assign(province, result);
        },
      );
    }

    function addDistrict() {
      createDistrict({name: form.name, code:form.code, provinceUid: province.uid}).then((result) => {
        Object.assign(district, result);
      });
    }

    function editDistrict() {
      updateDistrict({ uid: form.uid, name: form.name, code: form.code, active: true }).then(
        (result) => {
          Object.assign(district, result);
        },
      );
    }

    function isCountrySelected() {
      return country.uid !== undefined;
    }

    function isProvinceSelected() {
      return province.uid !== undefined;
    }

    let selectLocation = (target, selected) => {
      if (target === 'country') { 
        Object.assign(country, { ...selected });
        countryUid.value = selected.uid;
        districts.value = [];
        provincesfilter.executeQuery({requestPolicy: 'network-only'}).then(result => {
          provinces.value = result.data.value?.provincesByCountryUid;
        });
      };

      if (target === 'province') {
        Object.assign(province, { ...selected });
        provinceUid.value = selected.uid;
        districtsfilter.executeQuery({requestPolicy: 'network-only'}).then(result => {
          districts.value = result.data.value?.districtsByProvinceUid;
        });
      };

      if (target === 'district') Object.assign(district, { ...selected });
    };

    let resetSelected = (target) => {
      if (target === 'country') {
        Object.assign(country, { ...nullCountry });
        Object.assign(province, { ...nullProvince });
        Object.assign(district, { ...nullDistrict });
      }
      if (target === 'province') {
        Object.assign(province, { ...nullProvince });
        Object.assign(district, { ...nullDistrict });
      }
      if (target === 'district') Object.assign(district, { ...nullDistrict });
    };

    function FormManager(create, target, locationObj) {
      createLocation.value = create;
      targetLocation.value = target;
      showModal.value = true;
      formTitle.value = (create ? 'CREATE' : 'EDIT') + ' ' + target.toUpperCase();
      if (create) {
        resetSelected(target);
        Object.assign(form, { ...nullLocation });
      } else {
        Object.assign(form, { ...locationObj });
      }
    }

    function saveForm() {
      console.log(form);
      if (targetLocation.value === 'country') {
        if (createLocation.value === true) addCountry();
        if (createLocation.value === false) editCountry();
      }
      if (targetLocation.value === 'province') {
        if (createLocation.value === true) addProvince();
        if (createLocation.value === false) editProvince();
      }
      if (targetLocation.value === 'district') {
        if (createLocation.value === true) addDistrict();
        if (createLocation.value === false) editDistrict();
      }
      showModal.value = false;
    }

    return {
      showModal,
      FormManager,
      form,
      saveForm,
      formTitle,
      isCountrySelected,
      isProvinceSelected,
      selectLocation,
      country,
      countries,
      province,
      provinces,
      district,
      districts,
    };
  },
});
</script>
