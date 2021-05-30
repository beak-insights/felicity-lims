import { defineComponent, ref, computed } from 'vue';

import tabAnalysesCategories from './comps/AnalysesCategories.vue';
import tabAnalysesProfiles from './comps/AnalysesProfiles.vue';
import tabAnalysesServices from './comps/AnalysesServices.vue';
import tabAnalysesQualityControl from './comps/AnalysesQC.vue';

export default defineComponent({
  name: 'analyses-conf',
  components: {
    tabAnalysesCategories,
    tabAnalysesProfiles,
    tabAnalysesServices,
    tabAnalysesQualityControl,
  },
  setup() {

    let currentTab = ref('analyses-profiles');
    const tabs = ['analyses-profiles', 'analyses-services', 'analyses-categories', 'analyses-quality-control'];
    let currentTabComponent = computed(() => 'tab-' + currentTab.value);
 
    return {
      currentTab,
      tabs,
      currentTabComponent
    };
  },
});