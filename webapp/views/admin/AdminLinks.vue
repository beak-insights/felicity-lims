<script setup lang="ts">
import {defineAsyncComponent, ref} from "vue";

const ItemSetting = defineAsyncComponent(
    () => import("@/components/nav/FelAdminBreadCrumb.vue")
);

const configs = ref([
  {title: "Country, Provinces, Districts", path: "/admin/location-conf", icon: "flag"},
  {
    title: "Laboratory, Departments",
    path: "/admin/laboratory-conf",
    icon: "file-medical",
  },
  {title: "Users, Groups", path: "/admin/users-conf", icon: "users"},
  {title: "Suppliers, Manufacturers", path: "/admin/suppliers-conf", icon: "caravan"},
  {
    title: "Instruments, Methods, Units",
    path: "/admin/instruments-conf",
    icon: "laptop-medical",
  },
  {title: "Sample Types", path: "/admin/sampletypes-conf", icon: "fill"},
  {title: "Coding Standard", path: "/admin/coding-conf", icon: "fill"},
  {title: "Person Identification", path: "/admin/identification-conf", icon: "fill"},
  {
    title: "Tests, Categories, Profiles, QC",
    path: "/admin/analyses-conf",
    icon: "microscope",
  },
  {
    title: "WorkSheet Templates",
    path: "/admin/worksheets-conf",
    icon: "grip-horizontal",
  },
  // {title: "Email, SMS", path: "/admin/publication-conf", icon: "copy"},
  {title: "Reflex Rules", path: "/admin/reflex-rule-conf", icon: "code-branch"},
  {title: "Load Setup Data", path: "/admin/setup-data-conf", icon: "database"},
  {title: "Inventory Mgt", path: "/admin/inventory-conf", icon: "database"},
  {title: "Sample Referral", path: "/admin/shipment-conf", icon: "truck"},
  {title: "Billing", path: "/admin/billing-conf", icon: "money-bill"},
  {title: "Antibiotics", path: "/admin/antibiotics-conf", icon: "pills"},
  {title: "Organisms", path: "/admin/organisms-conf", icon: "bacteria"},
  {title: "Break Points", path: "/admin/breakpoints-conf", icon: "life-ring"},
  {title: "Abx Mediums, QC", path: "/admin/medium-qc-conf", icon: "circle-dot"},
  {title: "Resistance Rules", path: "/admin/resistance-rules-conf", icon: "scale-balanced"},
  {title: "AST Panel", path: "/admin/ast-panel-conf", icon: "tablets"},
]);
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="setting in configs" class="col-span-1">
      <item-setting 
      :key="setting.path" 
      :title="setting.title" 
      :path="setting.path"
      :icon="setting.icon"
      />
    </div>
  </div>
</template>
