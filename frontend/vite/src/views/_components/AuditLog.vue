<template>
    <div class="relative mt-4">
        <div class="border-r-2 border-gray-400 border-dotted absolute h-full top-0 z-0" style="left: 7px"></div>
        <ul class="list-none m-0 p-0">
            <li 
            v-for="log in auditLogs" :key="log.uid"
            class="mb-2">
                <div class="flex items-center mb-1">
                    <div class="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10">
                    </div>
                    <div class="flex-1 flex justify-between ml-4 font-medium"><span>{{ log?.stateAfter?.updated_at }}</span><span>.. ....</span></div>
                </div>
                <div class="ml-12 w-100">
                     <div v-for="trail of changes(log)" class="grid grid-cols-4">
                        <span class="col-span-1">
                            <span class="text-sm text-gray-600 italic">{{trail?.key}}</span>
                        </span>
                        <span class="col-span-3">
                            <span class="text-muted text-xs text-red-400">{{trail?.old}}</span> 
                            &rarr; 
                            <span class="text-muted text-xs text-green-400">{{trail?.new}}</span>
                        </span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import {reactive, computed, toRefs, onMounted} from 'vue'
import { useStore } from 'vuex';
import { ActionTypes } from '../../store/actions'

export default {
    name: "tab-logs",
    props: {
        targetId: String,
        targetType: String
    },
    setup(props){
        const store = useStore();

        const { targetType, targetId } = toRefs(props);

        store.dispatch(ActionTypes.RESET_AUDIT_LOGS)
        store.dispatch(ActionTypes.FETCH_AUDIT_LOGS, { targetType: targetType.value, targetId: targetId.value })

        let auditLogs = computed(() => store.getters.getAuditLogs)

        function changes(log: any): any[] {
            let trails = new Set();
            Object.entries(log?.stateBefore)?.map(([keyB, valueB]) => {
                Object.entries(log?.stateAfter)?.map(([keyA, valueA]) => {
                    if((keyB === keyA) && (valueB !== valueA)) {
                        trails.add({
                            key: keyA,
                            old: valueB,
                            new: valueA,
                        })
                    }
                })
            })
            return trails;
        }

        return {
            auditLogs,
            changes
        }
    }
}
</script>