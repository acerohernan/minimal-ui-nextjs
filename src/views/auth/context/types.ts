import { TenantLoginForm } from "../../../api/tenant/types";

export interface IAuthContext {
  state: IAuthContextState;
  actions: IAuthContextActions;
}

export interface IAuthContextState {}

export interface IAuthContextActions {
  login: (form: TenantLoginForm) => Promise<void>;
  logout: () => void;
}
