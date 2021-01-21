<template>
    <simpleTimeLine />
</template>
<script>
import {reactive, computed, ref, onMounted} from 'vue'
import simpleTimeLine from '../timelines/simpleTimeLine.vue'

export default {
    name: "tab-logs",
    components: {
        simpleTimeLine,
    },
    setup(){
        return {}
    }
}
</script>