import { BASE_URL, fetchData } from "..";
import { authHeaders } from "../helpers";

export const getInformation = () =>
  fetchData.get(`${BASE_URL}/tenant/store/information`, {
    headers: {
      ...authHeaders(),
    },
  });

export const updateInformation = (form: any) =>
  fetchData.put(`${BASE_URL}/tenant/store/information`, form, {
    headers: {
      ...authHeaders(),
    },
  });
