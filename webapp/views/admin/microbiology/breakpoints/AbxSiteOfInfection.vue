<script setup lang="ts">
import {onMounted, reactive, ref} from 'vue';

import useApiUtil from '@/composables/api_util';
import {AbxSiteOfInfectionType} from "@/types/gql";
import {
  AddAbxSiteOfInfectionDocument,
  AddAbxSiteOfInfectionMutation,
  AddAbxSiteOfInfectionMutationVariables,
  EditAbxSiteOfInfectionDocument,
  EditAbxSiteOfInfectionMutation,
  EditAbxSiteOfInfectionMutationVariables
} from "@/graphql/operations/microbiology.mutations";
import { GetAbxSiteOfInfectionAllQuery, GetAbxSiteOfInfectionAllQueryVariables, GetAbxSiteOfInfectionAllDocument } from '@/graphql/operations/microbiology.queries';

const {withClientMutation, withClientQuery} = useApiUtil()

let showModal = ref<boolean>(false);
let formTitle = ref<string>('');
let form = reactive({}) as AbxSiteOfInfectionType;
const formAction = ref<boolean>(true);

const abxSiteOfInfections = ref<AbxSiteOfInfectionType[]>([]);

onMounted(() => {
  withClientQuery<GetAbxSiteOfInfectionAllQuery, GetAbxSiteOfInfectionAllQueryVariables>(
      GetAbxSiteOfInfectionAllDocument, {}, "abxSiteOfInfectionAll"
  ).then((result) => {
    if (result) {
      abxSiteOfInfections.value = result as AbxSiteOfInfectionType[]
    }
  })
})

function FormManager(create: boolean, obj = {} as AbxSiteOfInfectionType): void {
  formAction.value = create;
  showModal.value = true;
  formTitle.value = (create ? 'Create' : 'Edit') + ' ' + "Abx SiteOfInfection";
  if (create) {
    Object.assign(form, {} as AbxSiteOfInfectionType);
  } else {
    Object.assign(form, {...obj});
  }
}

function saveForm(): void {
  const payload = {
    name: form.name,
    description: form.description,
  }

  if (formAction.value === true) {
    withClientMutation<AddAbxSiteOfInfectionMutation, AddAbxSiteOfInfectionMutationVariables>(
        AddAbxSiteOfInfectionDocument, {payload}, "createAbxSiteOfInfection"
    ).then((result) => {
      if (result) {
        abxSiteOfInfections.value.unshift(result as AbxSiteOfInfectionType);
      }
    });
  }

  if (formAction.value === false) {
    withClientMutation<EditAbxSiteOfInfectionMutation, EditAbxSiteOfInfectionMutationVariables>(EditAbxSiteOfInfectionDocument, {
      uid: form.uid!,
      payload
    }, "updateAbxSiteOfInfection")
        .then((result) => {
          if (result) {
            const idx = abxSiteOfInfections.value.findIndex(item => item.uid == result.uid);
            if (idx > -1) {
              abxSiteOfInfections.value = [
                ...abxSiteOfInfections.value.map((item, index) => index === idx ? result : item),
              ] as AbxSiteOfInfectionType[];
            }
          }
        });
  }

  showModal.value = false;
}

</script>

<template>
  <div class="space-y-6">
    <fel-heading title="Site of Infection"></fel-heading>

    <div class="overflow-x-auto">
      <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-card shadow-dashboard rounded-lg p-6">
        <table class="min-w-full divide-y divide-border">
          <thead>
            <tr>
              <th class="px-3 py-3.5 text-left text-sm font-semibold text-foreground">Name</th>
              <th class="px-3 py-3.5 text-left text-sm font-semibold text-foreground">Description</th>
              <th class="px-3 py-3.5"></th>
            </tr>
          </thead>
          <tbody class="bg-background divide-y divide-border">
            <tr v-for="soi in abxSiteOfInfections" :key="soi?.uid">
              <td class="px-3 py-3.5 whitespace-nowrap text-sm text-foreground">{{ soi?.name }}</td>
              <td class="px-3 py-3.5 whitespace-nowrap text-sm text-foreground">{{ soi?.description }}</td>
              <td class="px-3 py-3.5 whitespace-nowrap text-right text-sm">
                <!-- <button @click="FormManager(false, soi)"
                        class="px-3 py-1.5 bg-primary text-primary-foreground rounded-sm transition duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  Edit
                </button> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Location Edit Form Modal -->
  <fel-modal v-if="showModal" @close="showModal = false">
    <template v-slot:header>
      <h3 class="text-xl font-semibold text-foreground">{{ formTitle }}</h3>
    </template>

    <template v-slot:body>
      <form @submit.prevent="saveForm" class="space-y-6 p-4">
        <div class="grid grid-cols-2 gap-4">
          <label class="block">
            <span class="text-sm font-medium text-foreground">Name</span>
            <input
                class="mt-1 block w-full rounded-md border-border shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                v-model="form.name"
                placeholder="Name ..."
            />
          </label>
          <label class="block">
            <span class="text-sm font-medium text-foreground">Description</span>
            <input
                class="mt-1 block w-full rounded-md border-border shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                v-model="form.description"
                placeholder="Begin typing ..."
            />
          </label>
        </div>
        <hr class="border-border"/>
        <button
            type="submit"
            class="w-full bg-primary text-primary-foreground rounded-sm px-4 py-2 transition-colors duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Save Abx SiteOfInfection
        </button>
      </form>
    </template>
  </fel-modal>
</template>

<style scoped>
/* Remove the toggle-checkbox styles as they are not needed */
</style>
