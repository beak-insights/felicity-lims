<template>
  <div class="h-screen bg-gray-200 font-roboto">
    <div class="grid grid-cols-12">
      <div class="col-span-2 h-screen bg-gray-700">
        <side-bar />
      </div>
      <div class="col-span-10">
        <header-main />
        <main class="bg-gray-100 p-4">
          <slot />
        </main>
        <footer-main><slot /></footer-main>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import SideBar from '../components/nav/NavigationAside.vue';
import HeaderMain from '../components/nav/NavigationMain.vue';
import FooterMain from '../components/FooterMain.vue';
export default defineComponent({
  components: {
    HeaderMain,
    SideBar,
    FooterMain,
  },
});
</script>