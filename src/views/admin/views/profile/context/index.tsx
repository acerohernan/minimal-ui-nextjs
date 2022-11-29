import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { API } from "../../../../../api";
import { TenantUpdateInformationForm } from "../../../../../api/tenant/types";
import { getHttpError } from "../../../../../helpers/httpError";
import { useToast } from "../../../../../hooks/useToast";
import {
  IPorfileContext,
  IProfileActions,
  IProfileState,
  ITenant,
} from "./types";

const ProfileContext = React.createContext({} as IPorfileContext);

const initialState: IProfileState = {
  tenant: null,
};

export const ProfileProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, setState] = useState<IProfileState>(initialState);

  const { push } = useRouter();
  const toast = useToast();
  const token = Cookies.get("token");

  async function getInformation() {
    try {
      const response = await API.tenant.getInformation();
      const tenant = response.data.tenant;
      setState({ ...state, tenant });
    } catch (err) {
      toast.error("Ha ocurrido un error, ingresa nuevamente");
      Cookies.remove("token");
      push("/login");
    }
  }

  async function updateInformation(form: TenantUpdateInformationForm) {
    try {
      await API.tenant.updateInformation(form);
      setState({ ...state, tenant: { ...(state.tenant as ITenant), ...form } });
      toast.success("Información actualizada.");
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

  const actions: IProfileActions = {
    getInformation,
    updateInformation,
    uploadImage,
  };

  if (!token) return <></>;

  return (
    <ProfileContext.Provider value={{ state, actions }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => React.useContext(ProfileContext);
