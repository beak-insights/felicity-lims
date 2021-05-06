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
  groups: any[];
  permissions: any[];
  users: any[];
  auditLogs: any[];
}

export const initialState = () => {
  return <IState>{
    title: 'Felicity LIMS',
    isAuthenticated: false,
    auth: null,
    token: "",
    groups: [],
    permissions: [],
    users: [],
    auditLogs: [],
  };
};

export const state: IState = initialState();
export type RootState = typeof state;
