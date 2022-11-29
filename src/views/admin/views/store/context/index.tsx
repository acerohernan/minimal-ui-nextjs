import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { PropsWithChildren } from "react";
import { API } from "../../../../../api";
import { StoreUpdateInformationForm } from "../../../../../api/store/types";
import { getHttpError } from "../../../../../helpers/httpError";
import { useToast } from "../../../../../hooks/useToast";
import {
  IAdminStoreActions,
  IAdminStoreContext,
  IAdminStoreState,
  IStore,
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

  async function updateInformation(form: StoreUpdateInformationForm) {
    try {
      await API.store.updateInformation(form);
      setState({ ...state, store: { ...(state.store as IStore), ...form } });
      toast.success("Información actualizada");
    } catch (err) {
      toast.error(getHttpError(err));
    }
  }

  async function uploadImage(img: File): Promise<{ url: string | null }> {
    try {
      const formData = new FormData();
      formData.append("img", img);
      const response = await API.tenant.uploadImage(formData);
      return { url: response.data.url };
    } catch (err) {
      toast.error(getHttpError(err));
      return { url: null };
    }
  }

  const actions: IAdminStoreActions = {
    getInformation,
    updateInformation,
    uploadImage,
  };

  return (
    <AdminStoreContext.Provider value={{ actions, state }}>
      {children}
    </AdminStoreContext.Provider>
  );
};

export const useAdminStoreContext = () => React.useContext(AdminStoreContext);
