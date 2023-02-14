import axios from "../config/axios";

export const getItemFood = () => axios.get("/home/getItemFood");
