<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import useShipmentComposable from "@/composables/shipment";
import { useShipmentStore } from "@/stores/shipment";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
const LoadingMessage = defineAsyncComponent(
  () => import("@/components/ui/spinners/FelLoadingMessage.vue")
)

const loadongMeta = ref(false);

const { shipment } = useShipmentStore()
const { downloadManifest } = useShipmentComposable();
const manifestDownloader = async (report_uid) => await downloadManifest(report_uid);
</script>

<template>
  <div class="pt-4">
    <LoadingMessage v-if="loadongMeta" :message="'Loading your manifest report ...'" />
    <section v-else>
      <div v-if="shipment?.jsonContent" class="flex justify-start mt-4 mr-4">
        <div class="mb-2 p-3 rounded-sm border w-96">
            <div class="flex justify-between items-center space-x-4">
              <p>Manifest Report</p>
              <span
                class="flex justify-center items-center animate-bounce h-8 w-8 rounded-full bg-white border border-gray-200 drop-shadow-sm"
                @click="manifestDownloader(shipment.uid)">
                <FontAwesomeIcon class="text-blue-500" icon="fa-download" />
              </span>
            </div>
          </div>
      </div>
      <div v-else class="mt-4 text-red-500">This shipment has no Manifest Report</div>
    </section>
  </div>
</template>
