import { createStore } from 'vuex';

// root state
import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

// modules
import { admin } from './modules/admin';
import { clients } from './modules/clients';
import { patients } from './modules/patients';
import { samples } from './modules/samples';
import { analyses } from './modules/analyses';
import { cases } from './modules/cases';
import { worksheets } from './modules/worksheets';
import { markdown } from './modules/markdown';
import { kanban } from './modules/kanban';
import { toast } from './modules/toast';
import { setup } from './modules/setup';

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    admin,
    clients,
    patients,
    samples,
    analyses,
    cases,
    worksheets,
    kanban,
    setup,
    toast,
    markdown,
  },
});
