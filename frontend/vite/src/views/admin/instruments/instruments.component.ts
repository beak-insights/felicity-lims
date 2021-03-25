import { defineComponent, ref, computed } from 'vue';

import tabInstruments from './comps/Instruments.vue'
import tabMethods from './comps/Methods.vue'

export default defineComponent({
  name: 'instruments-conf',
  components: {
    tabInstruments,
    tabMethods
  },
  setup() {

    let currentTab = ref('instruments');
    const tabs = ['instruments', 'methods'];
    let currentTabComponent = computed(() => 'tab-' + currentTab.value);
 
    return {
      currentTab,
      tabs,
      currentTabComponent
    };
  },
});