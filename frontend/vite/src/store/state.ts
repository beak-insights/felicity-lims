export interface IAuth {
  uid?: string;
  email?: string;
  username?: string;
  firstName?: string;
  lastName?: string;
}
export class Auth implements IAuth {
  constructor(public email?: string, public username?: string, public password?: string) {}
}
export interface IState {
  title: string;
  isAuthenticated: boolean;
  token: string ;
  auth?: IAuth | null;
}

export const initialState = () => {
  return <IState>{
    title: 'Felicity LIMS',
    auth: null,
    token: "",
  };
};

export const state: IState = initialState();
export type RootState = typeof state;
