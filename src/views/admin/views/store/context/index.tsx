import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import { API } from "../../../../../api";
import { getHttpError } from "../../../../../helpers/httpError";
import { useToast } from "../../../../../hooks/useToast";
import {
  IAdminStoreActions,
  IAdminStoreContext,
  IAdminStoreState,
} from "./types";

const AdminStoreContext = React.createContext({} as IAdminStoreContext);

const initialState: IAdminStoreState = {
  store: null,
};

export const AdminStoreProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, setState] = React.useState<IAdminStoreState>(initialState);

  const { push } = useRouter();
  const toast = useToast();

  async function getInformation() {
    try {
      const response = await API.store.getInformation();
      const store = response.data.store;
      setState({ ...state, store });
    } catch (err) {
      toast.error(getHttpError(err));
      Cookies.remove("token");
      push("/login");
    }
  }

  const actions: IAdminStoreActions = { getInformation };

  return (
    <AdminStoreContext.Provider value={{ actions, state }}>
      {children}
    </AdminStoreContext.Provider>
  );
};

export const useAdminStoreContext = () => React.useContext(AdminStoreContext);
