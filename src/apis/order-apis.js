import axios from "../config/axios";

export const getLastOrder = () => axios.get("/order/:userId");
export const sendRef = (formData) => axios.patch("/order/sendRef", formData);

export const getAllCusHis = () => axios.get("/order/getAll");
export const getAllShop = () => axios.get("/order/:userId");
