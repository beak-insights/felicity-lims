export interface IState {
  title: string;
}

export const state: IState = {
  title: 'Felicity LIMS',
};

export type RootState = typeof state;
