import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { API } from "../../../../../api";
import { IPorfileContext, IProfileActions, IProfileState } from "./types";

const ProfileContext = React.createContext({} as IPorfileContext);

const initialState: IProfileState = {
  tenant: null,
};

export const ProfileProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, setState] = useState<IProfileState>(initialState);

  const { push } = useRouter();

  async function getInformation() {
    try {
      const response = await API.tenant.getInformation();
      const tenant = response.data.tenant;
      setState({ ...state, tenant });
    } catch (err) {
      console.log("Ha ocurrido un error, ingresa nuevamente");
      Cookies.remove("token");
      push("/login");
    }
  }

  const actions: IProfileActions = { getInformation };

  return (
    <ProfileContext.Provider value={{ state, actions }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => React.useContext(ProfileContext);
