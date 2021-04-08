<template>
  <div class="mx-auto flex flex-col h-full">
    <div class="flex-none">
      <router-link to="/" id="brand" class="flex items-center md:w-auto pl-6 py-2 text-white">
        <font-awesome-icon icon="meteor" class="text-4xl" />
        <h1 class="text-left text-2xl font-medium ml-2">Felicity LIMS</h1>
      </router-link>
      <nav id="aside-nav" class="" role="navigation">
        <router-link to="/" id="dashboard-link" class="flex items-center mt-1 py-2 px-6 bg-gray-600 bg-opacity-25 text-gray-100 border-l-4 border-gray-100">
        <font-awesome-icon icon="tachometer-alt" />
          <span class="mx-4">Dashboard</span>
        </router-link>
        <router-link to="/patients" id="patients-link" class="flex items-center mt-1 py-2 px-6 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100 border-l-4 border-gray-700">
        <font-awesome-icon icon="user-injured" />
          <span class="mx-4">Patients</span>
        </router-link>
        <router-link to="/clients" id="patients-link" class="flex items-center mt-1 py-2 px-6 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100 border-l-4 border-gray-700">
        <font-awesome-icon icon="user-injured" />
          <span class="mx-4">Clients</span>
        </router-link>
        <router-link to="/samples" id="patients-link" class="flex items-center mt-1 py-2 px-6 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100 border-l-4 border-gray-700">
        <font-awesome-icon icon="user-injured" />
          <span class="mx-4">Samples</span>
        </router-link>
        <router-link to="/worksheets" id="patients-link" class="flex items-center mt-1 py-2 px-6 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100 border-l-4 border-gray-700">
        <font-awesome-icon icon="user-injured" />
          <span class="mx-4">WorkSheets</span>
        </router-link>
      </nav>
    </div>
    <div class="flex-grow"></div>
    <footer id="asideFooter" class="flex-none bg-gray-700 text-center text-gray-100 p-4">
      <hr>
      <span>Copyright 2020 </span>|
      <router-link to="/about" class="text-gray-200"> About</router-link>
      <hr>
    </footer>
  </div>
</template>


<style scoped>
/* #asideFooter {
    position:fixed;
    margin: 0 auto;
    width: 100%;
    bottom: 0;
} */
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FooterMain from '../FooterMain.vue';
export default defineComponent({
  components: {
    FooterMain
  },
});
</script>