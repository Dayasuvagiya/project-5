import axios from "axios";

axios.defaults.baseURL = "https://react-api-p5-3222a1d91d69.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();