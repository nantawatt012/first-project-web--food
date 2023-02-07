import axios from "../config/axios";

export const getAllItem = (shopId) => axios.get("/shop/" + shopId);
export const createItem = (input) => axios.post("/shop", input);
