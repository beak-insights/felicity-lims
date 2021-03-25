import { defineComponent, ref, computed } from 'vue';

import tabUsers from './comps/Users.vue'
import tabGroups from './comps/Groups.vue'

export default defineComponent({
  name: 'users-conf',
  components: {
    tabUsers,
    tabGroups
  },
  setup() {

    let currentTab = ref('users');
    const tabs = ['users', 'groups'];
    let currentTabComponent = computed(() => 'tab-' + currentTab.value);
 
    return {
      currentTab,
      tabs,
      currentTabComponent
    };
  },
});