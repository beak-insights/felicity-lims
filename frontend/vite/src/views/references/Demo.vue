<template>
  <h1>{{state.count}} * 2={{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button>
</template>
<script>
import {reactive,computed,ref,onMounted} from 'vue'


export default {
  setup(){

    const {state,double} = useCounter(1)
    const num = ref(2)
    function add(){
      state.count++
      num.value+=10
    }
    onMounted(()=>{
      console.log('mouted')
    })
    return {state,add,double,num}
  }
}

function useCounter(count,n){
    const state = reactive({
      count
    })
    const double = computed(()=>state.count*2)
    return {state,double}
}
</script>