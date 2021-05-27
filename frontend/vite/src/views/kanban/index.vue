<template>
  <div class="">
    <router-view />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: "kanban-view",
  setup() {
    return { };
  },
});
</script>