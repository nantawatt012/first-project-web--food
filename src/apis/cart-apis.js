import axios from "../config/axios";

export const getCart = (userId) => axios.get("/cart/" + userId);
export const createOrder = (sum) => axios.post("/cart/createOrder", sum);
export const incre = (item) => axios.post("/cart/incre", item);
export const decre = (item) => axios.post("/cart/decre", item);
