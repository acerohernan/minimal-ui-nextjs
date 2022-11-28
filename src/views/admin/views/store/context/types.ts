export interface IAdminStoreContext {
  state: IAdminStoreState;
  actions: IAdminStoreActions;
}
export interface IAdminStoreState {
  store: IStore | null;
}
export interface IAdminStoreActions {
  getInformation: () => Promise<void>;
}

export interface IStore {
  banner_img: string | null;
  category: string;
  country: string;
  currency: string;
  description: string | null;
  domain: string;
  id: string;
  logo_img: string | null;
  name: string;
  team_description: string | null;
  team_img: string | null;
  telephone: string;
  whatsapp: string;
  tenant_id: string;
}
