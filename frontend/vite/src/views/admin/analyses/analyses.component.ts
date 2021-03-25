import { defineComponent, ref, computed } from 'vue';

import tabAnalysesCategories from './comps/AnalysesCategories.vue';
import tabAnalysesProfiles from './comps/AnalysesProfiles.vue';
import tabAnalysesServices from './comps/AnalysesServices.vue';

export default defineComponent({
  name: 'analyses-conf',
  components: {
    tabAnalysesCategories,
    tabAnalysesProfiles,
    tabAnalysesServices
  },
  setup() {

    let currentTab = ref('analyses-profiles');
    const tabs = ['analyses-profiles', 'analyses-services', 'analyses-categories'];
    let currentTabComponent = computed(() => 'tab-' + currentTab.value);
 
    return {
      currentTab,
      tabs,
      currentTabComponent
    };
  },
});