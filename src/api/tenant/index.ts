import { BASE_URL, fetchData } from "..";
import { authHeaders } from "../helpers";
import { TenantLoginForm, TenantUpdateInformationForm } from "./types";

export const login = (form: TenantLoginForm) =>
  fetchData.post(`${BASE_URL}/tenant/auth/login`, form, {});

export const getInformation = () => {
  return fetchData.get(`${BASE_URL}/tenant/information`, {
    headers: {
      ...authHeaders(),
    },
  });
};

export const updateInformation = (data: TenantUpdateInformationForm) =>
  fetchData.put(`${BASE_URL}/tenant/information`, data, {
    headers: {
      ...authHeaders(),
    },
  });

export const uploadImage = (form: FormData) =>
  fetchData.post(`${BASE_URL}/tenant/upload/image`, form, {
    headers: {
      ...authHeaders(),
    },
  });
