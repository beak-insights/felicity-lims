<template>
  <h1>{{ state.msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    <button @click="increment">Edit</button>
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <p>
    <code>{{state.count1}}</code>
  </p>
</template>

<script>
import { reactive, toRefs, watchEffect } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup (props) {
    let state = reactive({
      count1: 0,
      msg: props.msg
    })
    function increment() {
      state.count1++
    }
    return {
      state,
      increment
    }
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
