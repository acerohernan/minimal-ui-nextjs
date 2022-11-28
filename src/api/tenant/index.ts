import { BASE_URL, fetchData } from "..";
import { TenantUpdateInformationForm } from "./types";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTA0MDNjNS0wNTFlLTQzZWUtYmRiMy05NzEzNTg3ZWE0ODEiLCJzdG9yZSI6ImI5YzkzYmQ4LTRiMjktNDk5Ni1hNmFjLTViY2I5NGMyYTlhMSIsImlhdCI6MTY2OTY1ODEzOSwiZXhwIjoxNjcwMjYyOTM5fQ.-vvlPUeZq3bSmG_DvbJxBOt78btYXSwglPpOjK3zVMI`;
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
