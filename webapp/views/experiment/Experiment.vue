<script setup lang="ts">
import { defineAsyncComponent, reactive } from "vue";
const DataTable = defineAsyncComponent(
  () => import("@/components/ui/datatable/FelDataTable.vue")
)

const columns = reactive([
  {
    name: "UID",
    value: "uid",
    sortable: true,
    sortBy: "asc",
    defaultSort: true,
    hidden: true,
  },
  {
    name: "Patient Name",
    value: "patient.name",
    sortable: false,
    sortBy: "asc",
    hidden: false,
  },
  {
    name: "Gender",
    value: "patient.gender",
    sortable: false,
    sortBy: "asc",
    hidden: true,
  },
  {
    name: "BirthDate",
    value: "patient.birthDate",
    sortable: false,
    sortBy: "asc",
    hidden: true,
  },
  {
    name: "Sample ID",
    value: "sampleId",
    sortable: false,
    sortBy: "asc",
    hidden: false,
  },
  {
    name: "Sample Type",
    value: "sampleType.name",
    sortable: false,
    sortBy: "asc",
    hidden: false,
  },
]);

const entries = reactive<any[]>([
  {
    sampleId: "BP23-982392",
    sampleType: {
      name: "Blood Plasma",
    },
    patient: {
      name: "Aurthur",
      gender: "Female",
      birthDate: "2020-12-12",
    },
  },
  {
    sampleId: "DBS23-0001",
    sampleType: {
      name: "Dry Blood Spot",
    },
    patient: {
      name: "Tatenda",
      gender: "Female",
      birthDate: "2020-12-12",
    },
  },
]);

const onSort = (v) => {};
const onPaginate = (v) => {};
const onSearch = (v) => {};
const onCheck = (v) => {
  Object.assign(entries, [
    ...entries.map((e) => {
      if (e.sampleId === v.entry.sampleId) {
        return { ...e, checked: true };
      }
      return e;
    }),
  ]);
};
const onCheckAll = () =>
  Object.assign(entries, [...entries.map((e) => ({ ...e, checked: true }))]);
</script>

<template>
  <DataTable
    :columns="columns"
    :data="entries"
    :toggleColumns="true"
    :loading="false"
    @onSort="onSort"
    :paginable="true"
    :pageMeta="{ fetchCount: 50, hasNextPage: false }" 
    @onPaginate="onPaginate"
    :searchable="true"
    :searchMeta="{
      defaultFilter: 'all',
      filters: [{ name: 'All', value: 'all' }],
    }"
    @onSearch="onSearch"
    @onCheck="onCheck"
    @onCheckAll="onCheckAll"
  />
</template>
