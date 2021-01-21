import { State } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

export const patients = {
    namespaced: true,
    state: new State(),
    getters,
    mutations,
    actions,
}