<script setup lang="ts">
import Swal from "sweetalert2";
import { ref, computed, reactive, defineAsyncComponent } from "vue";
import { useWorksheetStore} from "@/stores/worksheet";
import { useAnalysisStore } from "@/stores/analysis";
import { useSampleStore } from "@/stores/sample";
import useApiUtil  from "@/composables/api_util";
import {
  EditWorkSheetApplyTemplateDocument,
  EditWorkSheetApplyTemplateMutation,
  EditWorkSheetApplyTemplateMutationVariables,
  ManualyAssignWorsheetDocument, ManualyAssignWorsheetMutation, ManualyAssignWorsheetMutationVariables
} from "@/graphql/operations/worksheet.mutations";

import * as shield from "@/guards";
import { AnalysisResultType } from "@/types/gql";

const worksheetStore = useWorksheetStore();
const analysisStore = useAnalysisStore();
const sampleStore = useSampleStore();
const { withClientMutation } = useApiUtil();

const templateUid = ref<number>();

worksheetStore.fetchWorkSheetTemplates();
const worksheet = computed(() => worksheetStore.getWorkSheet);
const workSheetTemplates = computed(() => worksheetStore.getWorkSheetTemplates);

const applyTemplate = async () => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to apply this template to add samples?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, apply now!",
      cancelButtonText: "No, cancel apply!",
    }).then((result) => {
      if (result.isConfirmed) {
        withClientMutation<EditWorkSheetApplyTemplateMutation, EditWorkSheetApplyTemplateMutationVariables>(EditWorkSheetApplyTemplateDocument,
          { worksheetUid: worksheet?.value?.uid, templateUid: templateUid.value },
          "updateWorksheetApplyTemplate"
        ).then((result) => {});
      }
    });
  } catch (error) {}
};

analysisStore.fetchAnalysesServices({
  first: undefined,
  after: "",
  text: "",
  sortBy: ["name"],
});
sampleStore.fetchSampleTypes();
analysisStore.fetchQCTemplates();
const qcTemplates = computed(() => analysisStore.getQCTemplates);
const qcTemplateUid = ref<number | undefined>(undefined);

const filterForm = reactive({
  sampleTypeUid: undefined,
  analysisUid: undefined,
});

const allChecked = ref(false);
const analysisResults = computed(() => {
  const results = checkedAnalyses;
  const incoming = worksheetStore.getAnalysisResults;
  incoming?.forEach((result) => {
    if (!results?.some((item) => item.uid === result.uid)) {
      results.push(result);
    }
  });
  return results;
});

const filterAnalysis = () => {
  getResultsChecked();
  worksheetStore.fetchForWorkSheetsAssign({
    first: 50,
    after: "",
    text: "",
    sortBy: undefined,
    ...filterForm,
  });
};

const assignToWorkSheet = () => {
  const selected = getResultsUids();

  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to assign selected to worksheet?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, assign now!",
      cancelButtonText: "No, cancel apply!",
    }).then((result) => {
      if (result.isConfirmed) {
        withClientMutation<ManualyAssignWorsheetMutation, ManualyAssignWorsheetMutationVariables>(ManualyAssignWorsheetDocument,
          {
            uid: worksheet?.value?.uid,
            qcTemplateUid: qcTemplateUid.value,
            analysesUids: selected,
          },
          "updateWorksheetManualAssign"
        ).then((result) => {
        });
      }
    });
  } catch (error) {}
};

// Analysis CheckMark Management
let checkedAnalyses: AnalysisResultType[] = [];

function getResultsChecked(): any {
  let results: AnalysisResultType[] = [];
  analysisResults?.value?.forEach((result) => {
    if (result.checked) results.push(result);
  });
  checkedAnalyses = results;
  return results;
}

function getResultsUids(): string[] {
  const results = getResultsChecked();
  let ready: string[] = [];
  results?.forEach((result: AnalysisResultType) => ready.push(result.uid!));
  return ready;
}

function checkCheck(result: AnalysisResultType): void {
  if (areAllChecked()) {
    allChecked.value = true;
  } else {
    allChecked.value = false;
  }
}

function check(result: AnalysisResultType): void {
  result.checked = true;
}

function unCheck(result: AnalysisResultType): void {
  result.checked = false;
}

async function toggleCheckAll() {
  await analysisResults?.value?.forEach((result) =>
    allChecked.value ? check(result) : unCheck(result)
  );
}

function areAllChecked(): Boolean {
  return analysisResults?.value?.every((item: AnalysisResultType) => item.checked === true);
}
</script>

<template>
  <section class="space-y-6">
    <div class="border-t border-border pt-6">
      <form action="post" class="space-y-4" v-motion-slide-right>
        <div class="flex items-center space-x-4">
          <span class="text-sm font-medium text-foreground">Worksheet Template</span>
          <label class="flex-1 max-w-xs">
            <select 
              class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" 
              v-model="templateUid"
            >
              <option value=""></option>
              <option
                v-for="template in workSheetTemplates"
                :key="template.uid"
                :value="template.uid"
              >
                {{ template.name }}
              </option>
            </select>
          </label>
          <button
            v-show="shield.hasRights(shield.actions.CREATE, shield.objects.WORKSHEET)"
            type="button"
            @click.prevent="applyTemplate()"
            class="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
          >
            Apply Template
          </button>
        </div>
      </form>
    </div>
  </section>

  <hr class="mt-4 mb-2" />
  <h3 class="font-bold">Manual Analyses Assignment</h3>
  <hr class="mb-4 mt-2" />

  <div class="overflow-x-auto mt-4">
    <form action="post" class="p-1" v-motion-slide-left>
      <div class="flex justify-start mb-4">
        <label class="flex justify-between items-center">
          <span class="text-foreground mr-2">SampleType</span>
          <select
            name="analyses_uids"
            v-model="filterForm.sampleTypeUid"
            class="form-input mt-1 block w-full py-1"
          >
            <option
              v-for="sampleType in sampleStore.sampleTypes"
              :key="sampleType.uid"
              :value="sampleType.uid"
            >
              {{ sampleType.name }}
            </option>
          </select>
        </label>
        <label class="flex justify-between items-center ml-6">
          <span class="text-foreground mr-2">Analyses</span>
          <select
            name="analyses_uids"
            v-model="filterForm.analysisUid"
            class="form-input mt-1 block w-full py-1"
          >
            <option
              v-for="service in analysisStore.analysesServices"
              :key="service.uid"
              :value="service.uid"
            >
              {{ service.name }}
            </option>
          </select>
        </label>
        <div class="ml-6 mt-2">
          <FButton
            v-show="true"
            @click.prevent="filterAnalysis()"
            :color="'sky-800'"
            class="p-1"
            >Apply Filters</FButton
          >
        </div>
      </div>
    </form>
  </div>

  <div class="overflow-x-auto mt-4">
    <div
      class="align-middle inline-block min-w-full shadow overflow-hidden bg-background shadow-dashboard px-2 pt-1 rounded-bl-lg rounded-br-lg"
    >
      <div v-if="worksheetStore.fetchingAnalysisResults" class="py-4 text-center">
        <fel-loader message="Fetching analytes ..." />
      </div>
      <table class="min-w-full" v-else>
        <thead>
          <tr>
            <th
              class="px-1 py-1 border-b-2 border-border text-left leading-4 text-foreground tracking-wider"
            >
              <input type="checkbox" @change="toggleCheckAll" v-model="allChecked" />
            </th>
            <th
              class="px-1 py-1 border-b-2 border-border text-left leading-4 text-foreground tracking-wider"
            ></th>
            <th
              class="px-1 py-1 border-b-2 border-border text-left leading-4 text-foreground tracking-wider"
            >
              Sample ID
            </th>
            <th
              class="px-1 py-1 border-b-2 border-border text-left text-sm leading-4 text-foreground tracking-wider"
            >
              Analysis
            </th>
            <th
              class="px-1 py-1 border-b-2 border-border text-left text-sm leading-4 text-foreground tracking-wider"
            >
              Date Created
            </th>
            <th
              class="px-1 py-1 border-b-2 border-border text-left text-sm leading-4 text-foreground tracking-wider"
            >
              Date Received
            </th>
            <th
              class="px-1 py-1 border-b-2 border-border text-left text-sm leading-4 text-foreground tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody class="bg-background" v-motion-slide-right>
          <tr v-for="analysisResult in analysisResults" :key="analysisResult?.uid">
            <td>
              <input
                type="checkbox"
                v-model="analysisResult.checked"
                @change="checkCheck(analysisResult)"
              />
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-border"></td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-border">
              <div class="text-sm leading-5 text-primary font-semibold">
                {{ analysisResult?.sample?.sampleId }}
              </div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-border">
              <div class="text-sm leading-5 text-primary">
                {{ analysisResult?.analysis?.name }}
              </div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-border">
              <div class="text-sm leading-5 text-primary">
                {{ analysisResult?.sample?.createdAt }}
              </div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-border">
              <div class="text-sm leading-5 text-primary">
                {{ analysisResult?.sample?.dateReceived }}
              </div>
            </td>
            <td class="px-1 py-1 whitespace-no-wrap border-b border-border">
              <div class="text-sm leading-5 text-primary">
                {{ analysisResult?.sample?.status }}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <section class="my-4">
    <form action="post" class="mb-4">
      <div class="flex justify-start items-center mr-4">
        <span class="text-foreground">Apply QC Template</span>
        <label class="block mx-4">
          <select class="form-select block w-full py-1" v-model="qcTemplateUid">
            <option></option>
            <option
              v-for="template in qcTemplates"
              :key="template.uid"
              :value="template.uid"
            >
              {{ template.name }}
            </option>
          </select>
        </label>
      </div>
    </form>

    <FButton v-show="true" @click.prevent="assignToWorkSheet" :color="'orange-600'"
      >Assign Analyses</FButton
    >
  </section>
</template>
