export interface IPorfileContext {
  state: IProfileState;
  actions: IProfileActions;
}

export interface IProfileState {
  tenant: ITenant | null;
}

export interface IProfileActions {
  getInformation: () => void;
}

export interface ITenant {
  id: string;
  store_id: string;
  status: number;
  expiration_date: Date;
  email: string;
  phone: string;
  name: string;
  surname: string;
  country: string;
}
