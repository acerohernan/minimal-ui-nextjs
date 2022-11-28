import { BASE_URL, fetchData } from "..";
import { TenantUpdateInformationForm } from "./types";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0M2EwNDRkYy1iMTQzLTQ3N2UtYTEzYi1hODAyY2Y1ZmVkZTIiLCJzdG9yZSI6Ijg0ZGQ2NjFkLTI2ZDYtNDNiMy1iZWVjLTEyZTA2ZDU2OTVhNCIsImlhdCI6MTY2OTY2OTc1NywiZXhwIjoxNjcwMjc0NTU3fQ.g7yIjkl0h0ttF8WIndE_GQOJ7eTHGBoUZF54JSF3dsk`;
const authorization = `Bearer ${token}`;

export const getInformation = () =>
  fetchData.get(`${BASE_URL}/tenant/information`, {
    headers: {
      authorization,
    },
  });

export const updateInformation = (data: TenantUpdateInformationForm) =>
  fetchData.put(`${BASE_URL}/tenant/information`, data, {
    headers: {
      authorization,
    },
  });

export const uploadImage = (form: FormData) =>
  fetchData.post(`${BASE_URL}/tenant/upload/image`, form, {
    headers: {
      authorization,
    },
  });
