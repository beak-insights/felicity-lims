import { RootState } from '../state';
import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { IClient, IDistrict, IProvince, ICountry } from '../common'

export interface IPatient {
  uid?: number,
  clientPatientId?: string;
  patientId?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  client?: IClient;
  gender?: string;
  age?: number;
  dateOfBirth?: Date;
  ageDobEstimated?: Boolean;
  phoneHome?: string;
  phoneMobile?: string;
  consentSms?: string;
}

export class Patient implements IPatient {
  constructor(
    public uid?: number,
    public patientId?: string,
    public clientPatientId?: string,
    public firstName?: string,
    public lastName?: string,
    public gender?: string,
    public age?: number,
    public dateOfBirth?: Date,
    public ageDobEstimated?: Boolean,
    public client?: IClient,
    public phoneMobile?: string,
    public phoneHome?: string
  ) {}
}

// state contract
export interface IState {
  patient?: IPatient | null;
  patients?: IPatient[];
}

export const initialState = () => {
  return <IState>{
    patient: null,
    patients: [],
  };
};

export const state: IState = initialState();

export enum MutationTypes {
  RESET_STATE = 'RESET_STATE',
  SET_PATIENT = 'SET_PATIENT',
  CLEAR_PATIENT = 'CLEAR_PATIENT',
  SET_PATIENTS = 'SET_PATIENTS',
}

export enum ActionTypes {
  RESET_STATE = 'RESET_STATE',
  SET_PATIENT = 'SET_PATIENT',
  CLEAR_PATIENT = 'CLEAR_PATIENT',
  SET_PATIENTS = 'SET_PATIENTS',
}

// Getters
export const getters = <GetterTree<IState, RootState>>{
  getPatient: (state) => state.patient,
  getPatients: (state) => state.patients,
};

// Mutations
export const mutations = <MutationTree<IState>>{
  [MutationTypes.RESET_STATE](state: IState): void {
    Object.assign(state, initialState());
  },

  [MutationTypes.SET_PATIENT](state: IState, payload: IPatient): void {
    state.patient = payload;
  },
};

// Actions
export const actions = <ActionTree<IState, RootState>>{
  async [ActionTypes.RESET_STATE]({ commit }) {
    commit(MutationTypes.RESET_STATE);
  },

  async [ActionTypes.SET_PATIENT]({ commit }, payload: IPatient) {
    commit(MutationTypes.SET_PATIENT, payload);
  },
};

// namespaced: true,
export const patients = {
  state,
  mutations,
  actions,
  getters,
};
