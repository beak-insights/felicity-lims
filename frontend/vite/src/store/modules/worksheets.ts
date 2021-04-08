import { useQuery } from '@urql/vue';
import { urqlClient } from '../../urql';
import { RootState } from '../state';
import { ActionTree, GetterTree, MutationTree } from 'vuex';

import {
  GET_ALL_WORKSHEET_TEMPLATES,
} from '../../graphql/worksheet.queries';
import { IInstrument } from './setup';
import { IAnalysisService } from './analyses';
import { parseEdgeNodeToList } from '../../utils';
import { X_OK } from 'constants';


export interface IReserved {
  position: number;
  row?: number;
  col?: number;
  name?: string;
  sampleUid?: string;
}

export class Reserved implements IReserved {
  constructor(
    public position: number,
    public row?: number,
    public col?: number,
    public name?: string,
    public sampleUid?: string,
  ){}
}

export interface IWorkSheetTemplate {
  uid?: string;
  name?: string;
  reserved?: IReserved[];
  preview?: IReserved[];
  numberOfSamples?: number;
  rows?: number;
  cols?: number;
  rowWise?: Boolean;
  worksheetType?: string;
  instrument?: IInstrument;
  description?: string;
  analyses?: IAnalysisService[];
  state?: string;
}

export class WorkSheetTemplate implements IWorkSheetTemplate {
  constructor(
    public uid?: string,
    public name?: string,
    public reserved?: IReserved[],
    public preview?: IReserved[],
    public numberOfSamples?: number,
    public rows?: number,
    public cols?: number,
    public rowWise?: Boolean,
    public worksheetType?: string,
    public instrument?: IInstrument,
    public description?: string,
    public analyses?: IAnalysisService[],
    public state?: string,
    ){
      this.analyses = [];
      this.worksheetType = 'flat';
      this.rowWise = true;
      this.reserved = [new Reserved(1,undefined,undefined,'Blank',''), new Reserved(2,undefined,undefined,'Control',''), new Reserved(3,undefined,undefined,'Control','')];
  }
}


export interface IWorkSheet {
  uid?: string;
  name?: string;
  reserved?: string[];
  plate?: Map<string, string>;
  numberOfSamples?: number;
  rows?: number;
  cols?: number;
  rowWise?: Boolean;
  worksheetType?: string;
  instrument?: IInstrument;
  description?: string;
  analyses?: IAnalysisService[];
  state?: string;
}

export class WorkSheet implements IWorkSheet {
  constructor(
    public uid?: string,
    public name?: string,
    public reserved?: string[],
    public plate?: Map<string, string>,
    public numberOfSamples?: number,
    public rows?: number,
    public cols?: number,
    public rowWise?: Boolean,
    public worksheetType?: string,
    public instrument?: IInstrument,
    public description?: string,
    public analyses?: IAnalysisService[],
    public state?: string,
    ){}
}

// state contract
export interface IState {
  workSheetTemplates: IWorkSheetTemplate[];
  workSheets: IWorkSheet[];
}

export const initialState = () => {
  return <IState>{
    workSheetTemplates: [],
    workSheets: [],
  };
};

export const state: IState = initialState();

export enum MutationTypes {
  RESET_STATE = 'RESET_STATE',

  SET_WORKSHEETS = 'SET_WORKSHEETS',

  SET_WORKSHEET_TEMPLATES = 'SET_WORKSHEET_TEMPLATES',
}

export enum ActionTypes {
  RESET_STATE = 'RESET_STATE',

  FETCH_WORKSHEETS = 'FETCH_WORKSHEETS',

  FETCH_WORKSHEET_TEMPLATES = 'FETCH_WORKSHEET_TEMPLATES',
}

// Getters
export const getters = <GetterTree<IState, RootState>>{
  getWorkSheetTemplates: (state) => state.workSheetTemplates,
  getWorkSheets: (state) => state.workSheets,
};

// Mutations
export const mutations = <MutationTree<IState>>{
  [MutationTypes.RESET_STATE](state: IState): void {
    Object.assign(state, initialState());
  },

  [MutationTypes.SET_WORKSHEETS](state: IState, payload: any): void {
    state.workSheets = [];
    let wst = parseEdgeNodeToList(payload);
    wst?.forEach((worksheet: IWorkSheetTemplate) => {
      worksheet.analyses = parseEdgeNodeToList(worksheet?.analyses) || [];
    });
    state.workSheets = wst;
  },

  [MutationTypes.SET_WORKSHEET_TEMPLATES](state: IState, payload: any): void {
    state.workSheetTemplates = [];
    let wst = parseEdgeNodeToList(payload);
    wst?.forEach((template: IWorkSheetTemplate) => {
      template.analyses = parseEdgeNodeToList(template?.analyses) || [];
      const data: any = template.reserved;
      template.reserved = Object.entries(JSON.parse(data)) as any[];
    });
    state.workSheetTemplates = wst;
  },
};

// Actions
export const actions = <ActionTree<IState, RootState>>{
  async [ActionTypes.RESET_STATE]({ commit }) {
    commit(MutationTypes.RESET_STATE);
  },

  async [ActionTypes.FETCH_WORKSHEET_TEMPLATES]({ commit }){
    await useQuery({ query: GET_ALL_WORKSHEET_TEMPLATES })
          .then(payload => commit(MutationTypes.SET_WORKSHEET_TEMPLATES, payload.data.value.worksheetTemplateAll));
  },
};

// namespaced: true,
export const worksheets = {
  state,
  mutations,
  actions,
  getters,
};