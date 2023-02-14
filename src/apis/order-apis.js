import axios from "../config/axios";

export const getOrder = () => axios.get("/order/:userId");

export const sendRef = (formData) => axios.patch("/order/sendRef", formData);
