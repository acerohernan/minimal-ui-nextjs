import { BASE_URL, fetchData } from "..";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTU5MzYyOC02YTQxLTQzYmItODcxNi1mMjBiY2M2N2RlZWMiLCJzdG9yZSI6Ijg0ZmQ0YTY2LWIzZjctNGY0My04YTFmLTgwNTZmMGY0NTUyOCIsImlhdCI6MTY2OTY3OTMwMCwiZXhwIjoxNjcwMjg0MTAwfQ.ErHfs6rVjpgjGIpxniHyyv1iOT4Ji6yAh4INRl5RKWU`;
const authorization = `Bearer ${token}`;

export const getInformation = () =>
  fetchData.get(`${BASE_URL}/tenant/store/information`, {
    headers: {
      authorization,
    },
  });

export const updateInformation = (form: any) =>
  fetchData.put(`${BASE_URL}/tenant/store/information`, form, {
    headers: {
      authorization,
    },
  });
