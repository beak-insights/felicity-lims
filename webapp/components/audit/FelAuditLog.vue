<script setup lang="ts">
import { computed, defineAsyncComponent, toRefs } from "vue";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
import { useAuditLogStore } from "@/stores/audit_log";
import { parseDate } from "@/utils/helpers";
const LoadingMessage = defineAsyncComponent(
  () => import("@/components/ui/spinners/FelLoadingMessage.vue")
)

const props = defineProps({
  targetUid: String,
  targetType: String,
});
const { targetType, targetUid } = toRefs(props);

const userStore = useUserStore();
const auditLogStore = useAuditLogStore();
auditLogStore.restLogs();

const { auditLogs, fetchingAudits } = storeToRefs(auditLogStore);

userStore.fetchUsers({});
auditLogStore.fetchAuditLogs({
  targetType: targetType?.value,
  targetUid: targetUid?.value,
});

let users = computed(() => userStore.getUsers);

function translateUser(userUid: any): string {
  const user = users?.value?.find(
    (u: any) => u["uid"]?.toString() === userUid?.toString()
  );
  if (!user) return "";
  return (user as any)["userName"];
}

function translateAction(action: number): string {
  if (action === 1) return "created";
  if (action === 2) return "updated";
  if (action === 3) return "deleted";
  return "";
}

function changes(log: any): any {
  let trails = new Set();
  Object.entries(log?.stateBefore)?.map(([keyB, valueB]) => {
    Object.entries(log?.stateAfter)?.map(([keyA, valueA]) => {
      if (keyB === keyA && valueB !== valueA) {
        // user_uids translation
        if (keyA && keyA === "updated_by_uid") {
          keyA = "updated_by";
          valueB = translateUser(valueB);
          valueA = translateUser(valueA);
        }
        if (keyA && keyA === "submitted_by_uid") {
          keyA = "submitted_by";
          valueB = translateUser(valueB);
          valueA = translateUser(valueA);
        }
        if (keyA && keyA === "verified_by_uid") {
          keyA = "verified_by";
          valueB = translateUser(valueB);
          valueA = translateUser(valueA);
        }
        if (keyA && keyA === "updated_at") {
          keyA = "updated_on";
          valueB = parseDate(valueB);
          valueA = parseDate(valueA);
        }
        if (keyA && keyA === "cancelled_by_uid") {
          keyA = "cancelled_by";
          valueB = translateUser(valueB);
          valueA = translateUser(valueA);
        }
        if (keyA && keyA === "received_by_uid") {
          keyA = "received_by";
          valueB = translateUser(valueB);
          valueA = translateUser(valueA);
        }

        trails.add({
          key: keyA,
          old: (valueB as any)?.length > 0 ? valueB : "None",
          new: (valueA as any)?.toString()?.length > 0 ? valueA : "None",
        });
      }
    });
  });
  return trails;
}
</script>

<template>
  <div class="relative mt-4">
    <div class="border-r-2 border-gray-400 border-dotted absolute h-full top-0 z-0" style="left: 7px"></div>
    <div v-if="fetchingAudits" class="py-4 text-center">
      <LoadingMessage message="Fetching audit logs ..." />
    </div>
    <ul v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }"
      :variants="{ custom: { scale: 2 } }" :delay="200" class="list-none m-0 p-0" v-else>
      <li v-for="log in auditLogs" :key="log.uid" class="mb-2">
        <div class="flex items-center mb-1">
          <div class="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10"></div>
          <div class="ml-4 font-medium italic">
            <span>
              {{ translateUser(log?.userUid) }} {{ translateAction(log?.action) }}
              {{ log?.targetType }}
            </span>
            on <span> {{ parseDate(log?.stateAfter?.updated_at) }}</span>
          </div>
        </div>
        <div class="ml-12 w-100">
          <div v-for="trail of changes(log)" :key="trail.key" class="grid grid-cols-4">
            <span class="col-span-1">
              <span class="text-sm text-gray-600 italic">{{ trail?.key }}</span>
            </span>
            <span class="col-span-3">
              <span class="text-muted text-xs text-orange-600">{{ trail?.old }}</span>
              &rarr;
              <span class="text-muted text-xs text-sky-800">{{ trail?.new }}</span>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
