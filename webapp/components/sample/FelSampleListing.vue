<script setup lang="ts">
import { h, ref, reactive, computed, defineAsyncComponent } from "vue";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { ProfileType, AnalysisType, SampleType } from "@/types/gql";
import { ifZeroEmpty, parseDate } from "@/utils";
import { useSampleStore } from "@/stores/sample";
import { useAnalysisStore } from "@/stores/analysis";
import useSampleComposable from "@/composables/samples";
const DataTable = defineAsyncComponent(
  () => import("@/components/ui/datatable/FelDataTable.vue")
)

import * as shield from "@/guards";
import { ExtSampleType } from "@/types/ext";

const sampleStore = useSampleStore();
const analysisStore = useAnalysisStore();

const { samplePageInfo, fetchingSamples } = storeToRefs(sampleStore);

let route = useRoute();
let router = useRouter();

const state = reactive({
  barcodes: false,
  can_cancel: false,
  can_receive: false,
  can_reinstate: false,
  can_reject: false,
  can_copy_to: false,
  can_download: false,
  can_print: false,
  can_publish: false,
  can_store: false,
  can_recover: false,
});

// samples
const samples = computed<ExtSampleType[]>(() => sampleStore.getSamples as ExtSampleType[]);
const filterOptions = ref([
  { name: "All", value: "" },
  { name: "Expected", value: "expected" },
  { name: "Received", value: "received" },
  { name: "Awaiting", value: "awaiting" },
  { name: "Approved", value: "approved" },
  { name: "Published", value: "published" },
  { name: "Invalidated", value: "invalidated" },
  { name: "Cancelled", value: "cancelled" },
  { name: "Rejected", value: "rejected" },
  { name: "Stored", value: "stored" },
  { name: "Referred", value: "referred" },
  { name: "Paired", value: "paired" },
]);

const tableColumns = ref([
  {
    name: "UID",
    value: "uid",
    sortable: true,
    sortBy: "asc",
    defaultSort: true,
    showInToggler: false,
    hidden: true,
  },
  {
    name: "",
    value: "",
    sortable: false,
    showInToggler: false,
    hidden: false,
    customRender: function (sample, _) {
      return h("div", { class: "flex items-center gap-2" }, [
        sample.priority! > 1
          ? h(
            "span",
            { class: "text-destructive" },
            h("i", { class: "fa fa-star" })
          )
          : "",
        sample.status === "stored" 
          ? h("span", { class: "text-muted-foreground" }, h("i", { class: "fa-briefcase" })) 
          : "",
      ]);
    },
  },
  {
    name: "Sample ID",
    value: "sampleId",
    sortable: true,
    sortBy: "asc",
    hidden: false,
    customRender: function (sample, _) {
      return h(RouterLink, {
        to: {
          name: "sample-detail",
          params: {
            patientUid: sample?.analysisRequest?.patient?.uid,
            sampleUid: sample?.uid,
          },
        },
        class: "text-primary hover:underline",
        innerHTML: sample?.sampleId,
      });
    },
  },
  {
    name: "Sample Type",
    value: "sampleType.name",
    sortable: false,
    sortBy: "asc",
    hidden: true,
  },
  {
    name: "Test(s)",
    value: "",
    sortable: false,
    sortBy: "asc",
    hidden: false,
    customRender: function (sample, _) {
      return h(
        "span",
        {
          innerHTML: profileAnalysesText(sample["profiles"], sample["analyses"]),
        },
        []
      );
    },
  },
  {
    name: "Patient",
    value: "",
    sortable: false,
    sortBy: "asc",
    hidden: false,
    customRender: function (sample, _) {
      const firstName = "analysisRequest.patient.firstName"
        .split(".")
        .reduce((acc, val) => acc?.[val], sample);
      const lasstName = "analysisRequest.patient.lastName"
        .split(".")
        .reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: `${firstName} ${lasstName}`,
        },
        []
      );
    },
  },
  {
    name: "Gender",
    value: "analysisRequest.patient.gender",
    sortable: false,
    sortBy: "asc",
    hidden: true,
  },
  {
    name: "Age",
    value: "analysisRequest.patient.age",
    sortable: false,
    sortBy: "asc",
    hidden: true,
  },
  {
    name: "Client Patient ID",
    value: "analysisRequest.patient.clientPatientId",
    sortable: false,
    sortBy: "asc",
    hidden: false,
  },
  {
    name: "Client",
    value: "analysisRequest.client.name",
    sortable: false,
    sortBy: "asc",
    hidden: false,
  },
  {
    name: "Client Code",
    value: "analysisRequest.client.code",
    sortable: false,
    sortBy: "asc",
    hidden: true,
  },
  {
    name: "Province",
    value: "analysisRequest.client.district.province.name",
    sortable: false,
    sortBy: "asc",
    hidden: true,
  },
  {
    name: "District",
    value: "analysisRequest.client.district.name",
    sortable: false,
    sortBy: "asc",
    hidden: true,
  },
  {
    name: "Client Request Id",
    value: "analysisRequest.clientRequestId",
    sortable: false,
    sortBy: "asc",
    hidden: false,
  },
  {
    name: "Date Collected",
    value: "dateCollected",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Date Created",
    value: "createdAt",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Creator",
    value: "createdBy.firstName",
    sortable: false,
    sortBy: "asc",
    hidden: false,
  },
  {
    name: "Date Received",
    value: "dateReceived",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Date Submitted",
    value: "dateSubmitted",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Date Verified",
    value: "dateVerified",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Date Published",
    value: "datePublished",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Date Printed",
    value: "datePrinted",
    sortable: false,
    sortBy: "asc",
    hidden: true,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "span",
        {
          innerHTML: parseDate(value),
        },
        []
      );
    },
  },
  {
    name: "Printed",
    value: "printed",
    sortable: false,
    sortBy: "asc",
    hidden: true,
  },
  {
    name: "Status",
    value: "status",
    sortable: false,
    sortBy: "asc",
    hidden: false,
    customRender: function (sample, column) {
      const value = column.value.split(".").reduce((acc, val) => acc?.[val], sample);
      return h(
        "button",
        {
          type: "button",
          class: "bg-primary text-primary-foreground py-1 px-2 rounded-sm leading-none",
          innerHTML: value,
        },
        []
      );
    },
  },
]);

if (route?.query?.clientUid) {
  sampleStore.resetSamples();
}

sampleStore.fetchSampleTypes();

let analysesParams = reactive({
  first: undefined,
  after: "",
  text: "",
  sortBy: ["name"],
});
analysisStore.fetchAnalysesServices(analysesParams);
analysisStore.fetchAnalysesProfiles();

function profileAnalysesText(
  profiles: ProfileType[],
  analyses: AnalysisType[]
): string {
  let names: string[] = [];
  profiles.forEach((p) => names.push(p.name!));
  analyses.forEach((a) => names.push(a.name!));
  return names.join(", ");
}

let sampleParams = reactive({
  first: 50,
  before: "",
  status: "received",
  text: "",
  sortBy: ["-uid"],
  clientUid: ifZeroEmpty(route?.query?.clientUid),
  filterAction: false,
});
sampleStore.fetchSamples(sampleParams);

function showMoreSamples(opts: any): void {
  sampleParams.first = opts.fetchCount;
  sampleParams.before = samplePageInfo?.value?.endCursor ?? "";
  sampleParams.text = opts.filterText;
  sampleParams.status = opts.filterStatus;
  sampleParams.filterAction = false;
  sampleStore.fetchSamples(sampleParams);
}

function filterSamples(opts: any): void {
  sampleParams.first = 50;
  sampleParams.before = "";
  sampleParams.text = opts.filterText;
  sampleParams.status = opts.filterStatus;
  sampleParams.filterAction = true;
  sampleStore.fetchSamples(sampleParams);
}

// sample tooltip
const sampleToolTip = (sample: SampleType) => {
  const sc = sample?.storageContainer;
  const ss = sc?.storageSection;
  const sl = ss?.storageLocation;
  const sr = sl?.storeRoom;
  return `${sr?.name} > ${sl?.name} > ${ss?.name} > ${sc?.name} > ${sample?.storageSlot}`;
};

// user actions perms

const allChecked = ref(false);
function toggleCheckAll(opts: any): void {
  samples.value?.forEach((sample: ExtSampleType) => (sample.checked = opts.checked));
  allChecked.value = opts.checked;
  checkUserActionPermissios();
}

function toggleCheck(sample: ExtSampleType): void {
  const index = samples.value.findIndex((s) => s.uid === sample.uid);
  samples.value[index].checked = sample.checked;
  if (areAllChecked()) {
    allChecked.value = true;
  } else {
    allChecked.value = false;
  }
  checkUserActionPermissios();
}

function unCheck(sample: ExtSampleType): void {
  const index = samples.value.findIndex((s) => s.uid === sample.uid);
  samples.value[index].checked = false;
  allChecked.value = false;
  checkUserActionPermissios();
}

async function unCheckAll() {
  samples.value?.forEach((sample: ExtSampleType) => (sample.checked = false));
  allChecked.value = false;
  checkUserActionPermissios();
}

function areAllChecked(): Boolean {
  return samples.value?.every((sample: ExtSampleType) => sample.checked === true);
}

function getSamplesChecked(): ExtSampleType[] {
  let box: ExtSampleType[] = [];
  samples.value?.forEach((sample: ExtSampleType) => {
    if (sample.checked) box.push(sample);
  });
  return box;
}

function checkUserActionPermissios(): void {
  // reset
  state.can_cancel = false;
  state.can_receive = false;
  state.can_reinstate = false;
  state.can_download = false;
  state.can_publish = false;
  state.can_print = false;
  state.can_reject = false;
  state.can_store = false;
  state.can_recover = false;
  state.can_copy_to = false;
  state.barcodes = false;

  const checked: SampleType[] = getSamplesChecked();
  if (checked.length === 0) {
    return;
  } else {
    state.barcodes = true;
  };

  // can_receive
  if (checked.every((sample: SampleType) => sample.status === "expected")) {
    state.can_receive = true;
  }

  // can_cancel
  if (
    checked.every((sample: SampleType) => ["received", "expected"].includes(sample.status!))
  ) {
    state.can_cancel = true;
    state.can_reject = true;
  }

  // can_store;
  if (checked.every((sample: SampleType) => ["received"].includes(sample.status!))) {
    state.can_store = true;
    state.can_copy_to = true;
  }

  if (checked.every((sample: SampleType) => ["stored"].includes(sample.status!))) {
    state.can_recover = true;
  }

  // can_reinstate
  if (checked.every((sample: SampleType) => sample.status === "cancelled")) {
    state.can_reinstate = true;
  }

  // can_download
  if (
    checked.every((sample: SampleType) => ["approved", "published"].includes(sample.status!))
  ) {
    state.can_copy_to = true;
  }

  // can_print
  if (checked.every((sample: SampleType) => sample.status === "approved")) {
    state.can_publish = true;
  }

  // can_print
  if (checked.every((sample: SampleType) => sample.status === "published")) {
    state.can_print = true;
    state.can_download = true;
  }
}

function getSampleUids(): string[] {
  const items: SampleType[] = getSamplesChecked();
  let ready: string[] = [];
  items?.forEach((item) => ready.push(item.uid!));
  return ready;
}

function getSampleIds(): string[] {
  const items: SampleType[] = getSamplesChecked();
  let ready: string[] = [];
  items?.forEach((item) => ready.push(item.sampleId!));
  return ready;
}

//
const {
  cancelSamples,
  reInstateSamples,
  receiveSamples,
  printSamples,
  downloadSamplesImpress,
  publishSamples,
  recoverSamples,
  cloneSamples
} = useSampleComposable();

const countNone = computed(
  () => sampleStore.getSamples?.length + " of " + sampleStore.getSampleCount + " samples"
);

const cloneSamples_ = async () =>
  cloneSamples(getSampleUids()).finally(() => unCheckAll());

const cancelSamples_ = async () =>
  cancelSamples(getSampleUids()).finally(() => unCheckAll());

const reInstateSamples_ = async () =>
  reInstateSamples(getSampleUids()).finally(() => unCheckAll());

const receiveSamples_ = async () =>
  receiveSamples(getSampleUids()).finally(() => unCheckAll());

const publishReports_ = async () => {
  const samples = getSampleUids().map((uid) => ({ uid, action: "publish" }));
  await publishSamples(samples).finally(() => unCheckAll());
};

const printReports_ = async () =>
  await printSamples(getSampleUids()).finally(() => unCheckAll());

const impressDownload_ = async () =>
  await downloadSamplesImpress(getSampleIds()).finally(() => unCheckAll());

const prepareRejections = async () => {
  const selection = getSamplesChecked();
  router.push({ name: "reject-samples", state: { samples: JSON.stringify(selection) } });
};

const prepareStorages = async () => {
  const selection = getSamplesChecked();
  router.push({ name: "store-samples", state: { samples: JSON.stringify(selection) } });
};
const recoverSamples_ = async () =>
  recoverSamples(getSampleUids()).finally(() => unCheckAll());

const printBarCodes = async () => router.push({ 
  name: "print-barcodes",
  state: { sampleUids: JSON.stringify(getSampleUids()) }}
)
</script>

<template>
  <div class="rounded-lg border border-border bg-card shadow-sm p-6">
    <DataTable 
    :columns="tableColumns" 
    :data="samples" 
    :toggleColumns="true" 
    :loading="fetchingSamples" 
    :paginable="true"
      :pageMeta="{
        fetchCount: sampleParams.first,
        hasNextPage: samplePageInfo?.hasNextPage,
        countNone,
      }" :searchable="true" 
    :filterable="true" 
    :filterMeta="{
      defaultFilter: sampleParams.status,
      filters: filterOptions,
    }" 
    :selectable="true" 
    :allChecked="allChecked" 
    @onSearch="filterSamples" 
    @onPaginate="showMoreSamples"
    @onCheck="toggleCheck" 
    @onCheckAll="toggleCheckAll">
      <template v-slot:footer>
        <div>
          <fel-button v-show="
            shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
            state.can_cancel
          " @click.prevent="cancelSamples_()"
            >
            Cancel
          </fel-button>
          <fel-button v-show="
            shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
            state.can_reinstate
          " @click.prevent="reInstateSamples_()"
            >
            ReInstate
          </fel-button>
          <fel-button v-show="
            shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
            state.can_receive
          " @click.prevent="receiveSamples_()"
            >
            Reveive
          </fel-button>
          <fel-button v-show="
            shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
            state.can_store
          " @click.prevent="prepareStorages()"
            >
            Store
          </fel-button>
          <fel-button v-show="
            shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
            state.can_recover
          " @click.prevent="recoverSamples_()"
            >
            Recover
          </fel-button>
          <fel-button v-show="
            shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
            state.can_reject
          " @click.prevent="prepareRejections()"
            >
            Reject
          </fel-button>
          <fel-button v-show="
            shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
            state.can_copy_to
          " @click.prevent="cloneSamples_()"
            >
            Copy to New
          </fel-button>
          <fel-button v-show="
            shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
            state.can_download
          " @click.prevent="impressDownload_()"
            >
            Download
          </fel-button>
          <fel-button v-show="
            shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
            state.can_publish
          " @click.prevent="publishReports_()"
            >
            Publish
          </fel-button>
          <fel-button v-show="
            shield.hasRights(shield.actions.CANCEL, shield.objects.SAMPLE) &&
            state.can_print
          " @click.prevent="printReports_()"
            >
            Print
          </fel-button>
          <fel-button 
            v-show="state.barcodes"
            @click.prevent="printBarCodes"
            >
            Print Barcodes
          </fel-button>
        </div>
      </template>
    </DataTable>
  </div>
</template>