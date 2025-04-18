<script setup lang="ts">
  import { ref, reactive, computed, defineAsyncComponent } from 'vue';
  import { IManufacturer } from '@/models/setup'
  import { AddManufacturerDocument, AddManufacturerMutation, AddManufacturerMutationVariables,
    EditManufacturerDocument, EditManufacturerMutation, EditManufacturerMutationVariables } from '@/graphql/operations/instrument.mutations';
  import { useSetupStore } from '@/stores/setup';
  import  useApiUtil  from '@/composables/api_util';
  const modal = defineAsyncComponent(
    () => import('@/components/ui/FelModal.vue')
  )

  const setupStore = useSetupStore();
  const { withClientMutation } = useApiUtil()
  
  let showModal = ref<boolean>(false);
  let formTitle = ref<string>('');
  let form = reactive({}) as IManufacturer;
  const formAction = ref<boolean>(true);

  setupStore.fetchManufacturers()
  const manufacturers = computed(() => setupStore.getManufacturers)

  function addManufacturer(): void {
    const payload = { name: form.name, description: form.description}
    withClientMutation<AddManufacturerMutation, AddManufacturerMutationVariables>(AddManufacturerDocument, { payload }, "createManufacturer")
    .then((result) => setupStore.addManufacturer(result));
  }

  function editManufacturer(): void {
    const payload = { name: form.name, description: form.description}
    withClientMutation<EditManufacturerMutation, EditManufacturerMutationVariables>(EditManufacturerDocument, { uid: form.uid, payload }, "updateManufacturer")
    .then((result) => setupStore.updateManufacturer(result));
  }

  function FormManager(create: boolean, obj = {} as IManufacturer):void {
    formAction.value = create;
    showModal.value = true;
    formTitle.value = (create ? 'CREATE' : 'EDIT') + ' ' + "MANUFACTURER";
    if (create) {
      Object.assign(form, {} as IManufacturer);
    } else {
      Object.assign(form, { ...obj });
    }
  }

  function saveForm():void {
    if (formAction.value === true) addManufacturer();
    if (formAction.value === false) editManufacturer();
    showModal.value = false;
  }
</script>


<template>

    <div class="container w-full my-4">
        <hr>
          <button @click="FormManager(true)"
           class="px-2 py-1 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">Add Manufacturer</button>
        <hr>

        <div class="overflow-x-auto mt-4">
            <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg">
            <table class="min-w-full">
                <thead>
                <tr>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Manufacturer</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-800 tracking-wider">Description</th>
                    <th class="px-1 py-1 border-b-2 border-gray-300"></th>
                </tr>
                </thead>
                <tbody class="bg-white">
                <tr v-for="manufacturer in manufacturers" :key="manufacturer?.uid">
                    <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                        <div>
                        <div class="text-sm leading-5 text-gray-800">{{ manufacturer?.name }}</div>
                        </div>
                    </div>
                    </td>
                    <td class="px-1 py-1 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-sky-800">{{ manufacturer?.description }}</div>
                    </td>
                    <td class="px-1 py-1 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                        <button @click="FormManager(false, manufacturer)" class="px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none">Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
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
          <label class="block col-span-2 mb-2">
            <span class="text-gray-700">Description</span>
            <textarea
            cols="2"
              class="form-input mt-1 block w-full"
              v-model="form.description"
              placeholder="Description ..."
            />
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


