<script setup lang="ts">
import { onMounted, reactive, ref} from 'vue';

import useApiUtil from '@/composables/api_util';
import {AbxBreakpointTypeType} from "@/types/gql";
import {
  AddAbxBreakpointTypeDocument,
  AddAbxBreakpointTypeMutation,
  AddAbxBreakpointTypeMutationVariables,
  EditAbxBreakpointTypeDocument,
  EditAbxBreakpointTypeMutation,
  EditAbxBreakpointTypeMutationVariables
} from "@/graphql/operations/microbiology.mutations";
import { GetAbxBreakpointTypeAllQuery, GetAbxBreakpointTypeAllQueryVariables, GetAbxBreakpointTypeAllDocument } from '@/graphql/operations/microbiology.queries';

const {withClientMutation, withClientQuery} = useApiUtil()

let showModal = ref<boolean>(false);
let formTitle = ref<string>('');
let form = reactive({}) as AbxBreakpointTypeType;
const formAction = ref<boolean>(true);

const abxBreakpointTypes = ref<AbxBreakpointTypeType[]>([]);

onMounted(() => {
  withClientQuery<GetAbxBreakpointTypeAllQuery, GetAbxBreakpointTypeAllQueryVariables>(
      GetAbxBreakpointTypeAllDocument, {}, "abxBreakpointTypeAll"
  ).then((result) => {
    if (result) {
      abxBreakpointTypes.value = result as AbxBreakpointTypeType[]
    }
  })
})

function FormManager(create: boolean, obj = {} as AbxBreakpointTypeType): void {
  formAction.value = create;
  showModal.value = true;
  formTitle.value = (create ? 'Create' : 'Edit') + ' ' + "Abx BreakpointType";
  if (create) {
    Object.assign(form, {} as AbxBreakpointTypeType);
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
    withClientMutation<AddAbxBreakpointTypeMutation, AddAbxBreakpointTypeMutationVariables>(
        AddAbxBreakpointTypeDocument, {payload}, "createAbxBreakpointType"
    ).then((result) => {
      if (result) {
        abxBreakpointTypes.value.unshift(result as AbxBreakpointTypeType);
      }
    });
  }

  if (formAction.value === false) {
    withClientMutation<EditAbxBreakpointTypeMutation, EditAbxBreakpointTypeMutationVariables>(EditAbxBreakpointTypeDocument, {
      uid: form.uid!,
      payload
    }, "updateAbxBreakpointType")
        .then((result) => {
          if (result) {
            const idx = abxBreakpointTypes.value.findIndex(item => item.uid == result.uid);
            if (idx > -1) {
              abxBreakpointTypes.value = [
                ...abxBreakpointTypes.value.map((item, index) => index === idx ? result : item),
              ] as AbxBreakpointTypeType[];
            }
          }
        });
  }

  showModal.value = false;
}

</script>

<template>
  <div class="space-y-6">
    <fel-heading title="Antibiotic Breakpoint Type"></fel-heading>

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
            <tr v-for="bpt in abxBreakpointTypes" :key="bpt?.uid">
              <td class="px-3 py-3.5 whitespace-nowrap text-sm text-foreground">{{ bpt?.name }}</td>
              <td class="px-3 py-3.5 whitespace-nowrap text-sm text-foreground">{{ bpt?.description }}</td>
              <td class="px-3 py-3.5 whitespace-nowrap text-right text-sm">
                <!-- <button @click="FormManager(false, bpt)"
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
          Save Abx BreakpointType
        </button>
      </form>
    </template>
  </fel-modal>
</template>

<style scoped>
/* Remove the toggle-checkbox styles as they are not needed */
</style>
