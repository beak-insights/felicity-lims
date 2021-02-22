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
import { cases } from './modules/cases';
import { worksheets } from './modules/worksheets';

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
    cases,
    worksheets,
  },
});
