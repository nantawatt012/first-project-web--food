import axios from "axios";
import { haveAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;
// interceptor= adjust res||req before excute
axios.interceptors.request.use(
  (config) => {
    if (haveAccessToken()) {
      config.headers.authorization = `Bearer ${haveAccessToken()}`;
    }
    // console.log(config);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default axios;
