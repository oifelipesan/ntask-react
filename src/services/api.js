import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  // baseURL: 'https://ntask-api.felipesan.com/'
  baseURL: "http://192.168.1.4:3333"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
