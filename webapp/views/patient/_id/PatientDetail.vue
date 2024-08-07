<script setup lang="ts">
import { storeToRefs } from "pinia";
import { defineAsyncComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { IPatient } from "@/models/patient";
import { usePatientStore } from "@/stores";
import * as shield from "@/guards";

const tabSamples = defineAsyncComponent(
  () => import("@/components/sample/FelAnalyisRequestListing.vue")
)
const tabCases = defineAsyncComponent(
  () => import("@/components/case/CaseTable.vue")
)
const tabLogs = defineAsyncComponent(
  () => import("@/components/audit/FelAuditLog.vue")
)
const tabPatientBills = defineAsyncComponent(
  () => import("./PatientBill.vue")
)


let patientStore = usePatientStore();
let router = useRouter();

const { patient } = storeToRefs(patientStore);

let currentTab = ref("samples");
const tabs = ["samples", "cases", "billing", "logs"];

function addSample(patient?: IPatient): void {
  router?.push({
    name: "samples-add",
    params: {
      patientUid: patient?.uid ?? "",
    },
  });
}
</script>

<template>
  <div class="">
    <section class="col-span-12">
      <section class="my-4">
        <button v-show="shield.hasRights(shield.actions.UPDATE, shield.objects.PATIENT)"
          class="px-2 py-1 mr-2 border-sky-800 border text-sky-800 rounded-sm transition duration-300 hover:bg-sky-800 hover:text-white focus:outline-none"
          @click.prevent="addSample(patient)">
          Add Sample
        </button>
      </section>

      <!-- Sample and Case Data -->
      <nav class="bg-white shadow-md mt-2">
        <div class="-mb-px flex justify-start">
          <a v-for="tab in tabs" :key="tab" :class="[
            'no-underline text-gray-500 uppercase tracking-wide font-bold text-xs py-1 px-4 tab hover:bg-sky-600 hover:text-gray-200',
            { 'tab-active': currentTab === tab },
          ]" @click="currentTab = tab">
            {{ tab }}
          </a>
        </div>
      </nav>

      <div>
        <tab-samples v-if="currentTab === 'samples'" target="patient-samples" :targetUid="patient?.uid" />
        <tab-cases v-if="currentTab === 'cases'" />
        <tab-logs v-if="currentTab === 'logs'" targetType="patient" :targetUid="patient?.uid" />
        <tab-patient-bills v-if="currentTab === 'billing'"  :patientUid="patient?.uid" />
      </div>
    </section>
  </div>
</template>
