import { defineComponent, ref, computed } from 'vue';

import tabAnalysesCategories from './AnalysesCategories.vue';
import tabAnalysesProfiles from './AnalysesProfiles.vue';
import tabAnalysesServices from './services/index.vue';
import tabQualityControlLevels from './QCLevels.vue';
import tabQualityControlTemplates from './QCTemplates.vue';

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