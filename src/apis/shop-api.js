import axios from "../config/axios";

export const getAllItem = (shopId) => axios.get("/shop/" + shopId);
export const createItem = (input) => axios.post("/shop", input);
export const updateItem = (input, shopId) =>
  axios.patch("/shop/" + shopId, input);

export const deleteItem = (shopId, itemId) =>
  axios.delete(`/shop/${+shopId}/${itemId}`);

export const getShopOwner = (shopId) => axios.get(`/shop/owner/${+shopId}`);
