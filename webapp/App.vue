<script setup lang="ts">
import { computed, onMounted, onBeforeMount, watch } from "vue";
import { useRouter } from "vue-router";
import axios from "./axios/no-auth";
import { useStreamStore, useAuthStore } from "./stores";
import { userPreferenceComposable } from "./composables";

const { currentRoute, push } = useRouter();
const authStore = useAuthStore();

if (!authStore.auth.isAuthenticated) {
  push({ name: "LOGIN" });
}

watch(
  () => authStore.auth.isAuthenticated,
  (newAuth, oldAuth) => {
    if (!newAuth) {
      push({ name: "LOGIN" });
    } else {
      push({ name: "DASHBOARD" });
    }
  }
);

const streamStore = useStreamStore();
const { loadPreferedTheme } = userPreferenceComposable();

onBeforeMount(() => {
  axios.get("setup/installation/").then((resp) => {
    if (!resp.data.installed) {
      push({ name: "INSTALLATION" });
    }
  });
});

onMounted(() => {
  loadPreferedTheme();
  streamStore.subscribeToActivityStream();
});

if (
  window.performance
    .getEntriesByType("navigation")
    .map((nav: any) => nav.type)
    .includes("reload")
) {
  loadPreferedTheme();
}

const defaultLayout = "default";
const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
);
</script>

<template>
  <component :is="layout">
    <!-- <div class="text-center">Flash Messages will come here.</div> -->
    <router-view />
  </component>
</template>