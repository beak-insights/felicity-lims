<template>
  <div class="mt-4">
    <div class="flex items-center">
      <h1 class="h1 my-4 font-bold text-dark-700">Clients</h1>
        <button
          class="p-2 my-2 ml-8 text-sm border-blue-500 border text-dark-700 transition-colors duration-150 rounded-lg focus:outline-none hover:bg-blue-500 hover:text-gray-100"
          @click="FormManager(true, 'client')"
        >
          Add client
        </button>
        <input
          class="w-64 h-10 ml-6 pl-4 pr-2 py-1 text-sm text-gray-700 placeholder-gray-600 border-1 border-gray-400 rounded-md  focus:placeholder-gray-500 focus:border-green-100 focus:outline-none focus:shadow-outline-purple form-input"
          type="text" placeholder="Search ..." aria-label="Search"
          @keyup="searchClients($event)"
        />
    </div>
    <hr />

    <div class="grid grid-cols-12 gap-4 mt-2">
      <section class="col-span-4">
        <div class="overflow-y-scroll overscroll-contain scroll-section">
          <div
            v-for="c in clients"
            :key="c.uid"
              :class="client?.uid === c.uid ? 'bg-white w-full flex justify-between p-2 mb-1 rounded-xl shadow border c-active' : 'bg-white w-full flex justify-between p-2 mb-1 rounded-xl shadow border' "
          >
            <a
              href="#"
              @click.prevent.stop="selectItem('client', c)"
              class="font-semibold text-gray-700"
            >
              <span>{{ c.name }}</span>
            </a>
            <a href="#" @click="FormManager(false, 'client', c)" class="px-2 cursor">
              <font-awesome-icon icon="pen" />
            </a>
          </div>
        </div>
      </section>

      <!-- <section class="col-span-5" v-if="isClientSelected()">
        Client Contacts
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
      </section> -->
    </div>
  </div>

  <!-- Location Edit Form Modal -->
  <modal v-if="showClientModal" @close="showClientModal = false">
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
              v-model="clientForm.name"
              placeholder="Name ..."
            />
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Code</span>
            <input
              class="form-input mt-1 block w-full"
              v-model="clientForm.code"
              placeholder="Code ..."
            />
          </label>
        </div>

        <div class="grid grid-cols-3 gap-x-4 mb-4">
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Country</span>
            <select class="form-select block w-full mt-1" v-model="countryUid" @change="getProvinces($event)">
              <option></option>
              <option v-for="country in countries?.countryAll?.edges" :key="country.node.uid" :value="country.node.uid"> {{ country.node.name }} {{ country.node.uid }}</option>
            </select>
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">Province</span>
            <select class="form-select block w-full mt-1" v-model="provinceUid" @change="getDistricts($event)">
               <option></option>
              <option v-for="province in provinces" :key="province.uid" :value="province.uid"> {{ province.name }} {{ province.uid }}</option>
            </select>
          </label>
          <label class="block col-span-1 mb-2">
            <span class="text-gray-700">District</span>
            <select class="form-select block w-full mt-1" v-model="clientForm.districtUid">
               <option></option>
              <option v-for="district in districts" :key="district.uid" :value="district.uid"> {{ district.name }} {{ district.uid }}</option>
            </select>
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
import { useMutation, useQuery } from '@urql/vue';
import { mapGetters, useStore } from 'vuex';
import { defineComponent, ref, reactive, computed } from 'vue';
import modal from '../../_components/modals/simpleModal.vue';
import { Client } from '../../../store/modules/clients';
import {  GET_ALL_CLIENTS } from '../../../graphql/clients/queries';
import { ADD_CLIENT } from '../../../graphql/clients/mutations';
import {
  GET_ALL_COUNTRIES,
  FILTER_PROVINCES_BY_COUNTRY,
  FILTER_DISTRICTS_BY_PROVINCE,
} from '../../../graphql/admin/queries';

export const IClient = typeof Client;
import { ActionTypes } from '../../../store/modules/clients';
import { ActionTypes as AdminActionTypes } from '../../../store/modules/admin';

export default defineComponent({
  name: 'clients-conf',
  components: {
    modal,
  },
  setup() {
    const store = useStore();

    const nullClient = new Client();
    const nullClientContact = new Client();

    let showClientModal = ref(false);
    let createItem = ref(null);
    let targetItem = ref('');

    let provinces = ref([]);
    let districts = ref([]);
    let clientContacts = ref([]);

    let client = reactive({ ...nullClient });
    let clientContact = reactive({ ...nullClientContact });

    let clientUid = ref(null);
    let countryUid = ref(null);
    let provinceUid = ref(null);

    let formTitle = ref('');
    let clientForm = reactive({ ...nullClient });

    store.dispatch(AdminActionTypes.FETCH_COUNTRIES);
    store.dispatch(ActionTypes.FETCH_CLIENTS);

    const provincesfilter = useQuery({
      query: FILTER_PROVINCES_BY_COUNTRY,
      variables: { uid: countryUid },
      pause: computed(() => countryUid !== null), // not working
      requestPolicy: 'network-only',
    });

    const districtsfilter = useQuery({
      query: FILTER_DISTRICTS_BY_PROVINCE,
      variables: { uid: provinceUid },
      pause: computed(() => provinceUid !== null), // not working
      requestPolicy: 'network-only',
    });

    const clientContactsfilter = useQuery({
      query: FILTER_DISTRICTS_BY_PROVINCE, // FILTER_CLIENT_CONTACTS_BY_CLIENT,
      variables: { uid: clientUid },
      pause: computed(() => clientUid !== null), // not working
      requestPolicy: 'network-only',
    });

    const { executeMutation: createClient } = useMutation(ADD_CLIENT);

    function addClient() {
      createClient({ name: clientForm.name, code: clientForm.code, districtUid: clientForm.districtUid }).then((result) => {
        Object.assign(client, result);
      });
    }

    function editClient() {
      updateCountry({ uid: form.uid, name: form.name, code: form.code, active: true }).then(
        (result) => {
          Object.assign(country, result);
        },
      );
    }

    function addClientContact() {
      createProvince({name: form.name, code:form.code, countryUid: country.uid}).then((result) => {
        Object.assign(province, result);
      });
    }

    function editClientContact() {
      updateProvince({ uid: form.uid, name: form.name, code: form.code, active: true }).then(
        (result) => {
          Object.assign(province, result);
        },
      );
    }

    function getProvinces(event) {
      // countryUid.value = event.target.value;
      provincesfilter.executeQuery({requestPolicy: 'network-only'}).then(result => {
        provinces.value = result.data.value?.provincesByCountryUid;
      });
    }

    function getDistricts(event) {
      // provinceUid.value = event.target.value;
      districtsfilter.executeQuery({requestPolicy: 'network-only'}).then(result => {
        districts.value = result.data.value?.districtsByProvinceUid;
      });
    }

    function isClientSelected() {
      return client.uid !== undefined;
    }

    let selectItem = (target, selected) => {
      if (target === 'client') { 
        Object.assign(country, { ...selected });
        countryUid.value = selected.uid;
        clientContacts.value = [];
        clientContactsfilter.executeQuery({requestPolicy: 'network-only'}).then(result => {
          provinces.value = result.data.value?.provincesByCountryUid;
        });
      };

      if (target === 'client-contact') {
        Object.assign(province, { ...selected });
      };
    };

    let resetSelected = (target) => {
      if (target === 'client') {
        Object.assign(client, { ...nullClient });
      }
      if (target === 'client-contact') Object.assign(clientContact, { ...nullClientContact });
    };

    let searchClients = (event) => store.dispatch(ActionTypes.SEARCH_CLIENTS, event.target.value);

    function FormManager(create, target, obj) {
      createItem.value = create;
      targetItem.value = target;
      formTitle.value = (create ? 'CREATE' : 'EDIT') + ' ' + target.toUpperCase();
      if(target == "client") showClientModal.value = true;
      if (create) {
        resetSelected(target);
        if(target == "client") Object.assign(clientForm, { ...nullClient });
      } else {
        if(target == "client") Object.assign(clientForm, { ...obj });
      }
    }

    function saveForm() {
      console.log(clientForm);
      if (targetItem.value === 'client') {
        if (createItem.value === true) addClient();
        showClientModal.value = false;
      }
    }

    return {
      showClientModal,
      FormManager,
      clientForm,
      saveForm,
      formTitle,
      isClientSelected,
      selectItem,
      countries: computed(() => store.getters.getCountries),
      countryUid,
      provinceUid,
      client,
      clients: computed(() => store.getters.getClients),
      getProvinces,
      provinces,
      getDistricts,
      districts,
      searchClients
    };
  },
});
</script>
