import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import { API } from "../../../api";
import { TenantLoginForm } from "../../../api/tenant/types";
import { getHttpCode, getHttpError } from "../../../helpers/httpError";
import { useToast } from "../../../hooks/useToast";
import { IAuthContext, IAuthContextActions, IAuthContextState } from "./types";

const AuthContext = React.createContext({} as IAuthContext);

const initialState: IAuthContextState = {};

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, setState] = React.useState<IAuthContextState>(initialState);

  const { push } = useRouter();
  const toast = useToast();

  async function login(form: TenantLoginForm): Promise<void> {
    try {
      const response = await API.tenant.login(form);
      const { token } = response.data;
      Cookies.set("token", token);
      toast.success("Welcome back!");
      push("/admin");
    } catch (err) {
      const code = getHttpCode(err);
      if (code === 400) {
        toast.error("Invalid credentials");
      } else {
        toast.error(getHttpError(err));
      }
    }
  }

  function logout(): void {
    Cookies.remove("token");
    push("/login");
  }

  const actions: IAuthContextActions = { login, logout };

  const token = Cookies.get("token");

  React.useEffect(() => {
    if (token) push("/admin");
  }, [token]);

  return (
    <AuthContext.Provider value={{ state, actions }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => React.useContext(AuthContext);
