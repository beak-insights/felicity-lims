import { defineComponent, ref, computed } from 'vue';

import tabAnalysesCategories from './comps/AnalysesCategories.vue';
import tabAnalysesProfiles from './comps/AnalysesProfiles.vue';
import tabAnalysesServices from './comps/AnalysesServices.vue';
import tabQualityControlLevels from './comps/QCLevels.vue';
import tabQualityControlTemplates from './comps/QCTemplates.vue';

export default defineComponent({
  name: 'analyses-conf',
  components: {
    tabAnalysesCategories,
    tabAnalysesProfiles,
    tabAnalysesServices,
    tabQualityControlLevels,
    tabQualityControlTemplates,
  },
  setup() {

    let currentTab = ref('analyses-profiles');
    const tabs = ['analyses-profiles', 'analyses-services', 'analyses-categories', 'quality-control-levels', 'quality-control-templates'];
    let currentTabComponent = computed(() => 'tab-' + currentTab.value);
 
    return {
      currentTab,
      tabs,
      currentTabComponent
    };
  },
});