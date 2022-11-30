import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";

const AdminContext = React.createContext({});

export const AdminProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { push } = useRouter();
  const token = Cookies.get("token");

  React.useEffect(() => {
    if (!token) {
      push("/login");
    }
  }, []);

  return <AdminContext.Provider value={{}}>{children}</AdminContext.Provider>;
};
