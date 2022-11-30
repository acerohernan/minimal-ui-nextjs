import { BASE_URL, fetchData } from "..";
import { authHeaders } from "../helpers";
import { CreateProductForm, UpdateProductForm } from "./types";

export const getAllProducts = (page = 1, limit = 10) =>
  fetchData.get(`${BASE_URL}/product/store?page=${page}&&limit=${limit}`, {
    headers: {
      ...authHeaders(),
    },
  });

export const getProduct = (id: string) =>
  fetchData.get(`${BASE_URL}/product/${id}`);

export const createProduct = (form: CreateProductForm) =>
  fetchData.post(`${BASE_URL}/product`, form, {
    headers: {
      ...authHeaders(),
    },
  });

export const updateProduct = (productId: string, form: UpdateProductForm) =>
  fetchData.patch(`${BASE_URL}/product/${productId}`, form, {
    headers: {
      ...authHeaders(),
    },
  });

export const deleteProduct = (productId: string) =>
  fetchData.delete(`${BASE_URL}/product/${productId}`, {
    headers: {
      ...authHeaders(),
    },
  });
