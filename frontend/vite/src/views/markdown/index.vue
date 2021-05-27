<template>
  <div class="">
    <router-view />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: "markdown-view",
  setup() {
    return { };
  },
});
</script>