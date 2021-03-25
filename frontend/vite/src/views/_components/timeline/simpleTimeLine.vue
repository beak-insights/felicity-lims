<template>
    <div class="relative mt-4">
        <div class="border-r-2 border-gray-400 border-dotted absolute h-full top-0 z-0" style="left: 7px"></div>
        <ul class="list-none m-0 p-0">
            <li class="mb-2">
                <div class="flex items-center mb-1">
                    <div class="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10">
                    </div>
                    <div class="flex-1 flex justify-between ml-4 font-medium"><span>Oct 2020 01:55</span><span>by Aurthur</span></div>
                </div>
                <div class="ml-12 w-100">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, debitis ipsam. Ipsum, ex sequi quidem dolore atque in debitis asperiores?.
                </div>
            </li>
            <li class="mb-2">
                <div class="flex items-center mb-1">
                    <div class="bg-indigo-600 rounded-full h-4 w-4 border-gray-200 border-2 z-10">
                    </div>
                    <div class="flex-1 ml-4 font-medium">May 2019 10:45 by milton</div>
                </div>
                <div class="ml-12">
                    changes here ...
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {reactive, computed, ref, onMounted} from 'vue'

export default {
    name: "simple-timeline",
    setup(){
        return {}
    }
}
</script>