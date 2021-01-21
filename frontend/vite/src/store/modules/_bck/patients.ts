import { state as RootState } from '../../state';
import { ActionTree, GetterTree, MutationTree } from "vuex"

class State {
    patient: IPatient | null = null;
    patients: IPatient[] = [];
}

export interface IPatient {
  firstName?: string,
  lastName?: string,
  clientName?: string,
  provinceName?: string,
  age?: number,
  gender?: string,
  patientId?:string,
  clientPatientId?: string,
}

export enum MutationTypes {

}

export enum ActionTypes {
  
}

export const getters = <GetterTree<State, typeof RootState>>{
  
}

export const mutations = <MutationTree<State>>{

}

export const actions = <ActionTree<State, typeof RootState>>{
  
}

export const patients = {
  // namespaced: true,
  state: new State,
  mutations,
  actions,
  getters,
}
