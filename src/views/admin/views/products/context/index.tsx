import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { API } from "../../../../../api";
import {
  CreateProductCategoryForm,
  UpdateProductCategoryForm,
} from "../../../../../api/product/types";
import {
  IAdminProductActions,
  IAdminProductContext,
  IAdminProductState,
} from "./types";

const AdminProductContext = React.createContext({} as IAdminProductContext);

const initialState: IAdminProductState = {
  products: [],
  metadata: {
    page: 1,
    entities_count: 0,
    has_next_page: false,
    has_previous_page: false,
    limit: 1,
    next_page: 2,
    page_count: 0,
  },
};

export const AdminProductProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, setState] = useState<IAdminProductState>(initialState);

  const { push } = useRouter();

  async function getAllProducts() {
    try {
      const response = await API.product.getAllProducts();
      const products = response.data.products;
      const metadata = response.data.meta;
      setState({ ...state, products, metadata });
    } catch (err) {
      toast.error("Ha ocurrido un error, ingresa nuevamente");
      Cookies.remove("token");
      push("/login");
    }
  }

  async function createProductCategory(form: CreateProductCategoryForm) {
    try {
      await API.product.createProductCategory(form);
      toast.success("Categoría creada correctamente");
    } catch (err) {
      toast.error("Ha ocurrido un error al crear la categoría");
    }
  }

  async function updateProductCategory(data: UpdateProductCategoryForm) {}

  const actions: IAdminProductActions = { getAllProducts };

  return (
    <AdminProductContext.Provider value={{ actions, state }}>
      {children}
    </AdminProductContext.Provider>
  );
};

export const useAdminProductsContext = () =>
  React.useContext(AdminProductContext);
