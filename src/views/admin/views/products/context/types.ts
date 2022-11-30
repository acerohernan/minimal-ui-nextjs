export interface IAdminProductContext {
  state: IAdminProductState;
  actions: IAdminProductActions;
}
export interface IAdminProductState {
  products: Array<IProduct>;
}
export interface IAdminProductActions {
  getAllProducts: () => Promise<void>;
}

export interface IProduct {
  id: string;
  category_id: string | null;
  name: string;
  sku: string;
  description: string;
  price: string;
  offer_price: string;
  stock: number;
  variants: Array<IProductVariant>;
}

export interface IProductVariant {
  name: string;
  mandatory: boolean;
  options_to_choose: number;
  options: Array<IVarianOption>;
}

export interface IVarianOption {
  name: string;
  price: string;
}
