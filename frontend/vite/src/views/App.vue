<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Test value="--" />
  <Demo />
  <div id="foot-container"></div>
  <ul>
    <fragment-demo :data="[5,3,1,6,9,4,2,8]" />
  </ul>
  <teleport-demo />
  <suspense-demo />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import Demo from './components/Demo.vue'
import FragmentDemo from './components/Fragment.vue'
import TeleportDemo from './components/Teleport.vue'
import SuspenseDemo from './components/Suspense.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test,
    Demo,
    FragmentDemo,
    TeleportDemo,
    SuspenseDemo
  }
}
</script>
