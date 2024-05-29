import { getDataFromCookie } from "@data-service";
import axios from "axios";
import type { AxiosInstance } from "axios";

const request: AxiosInstance = axios.create({
  baseURL: "http://store.go-clothes.uz:5555/v1",
});

request.interceptors.request.use((config) => {
  const token = getDataFromCookie("access_token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

export default request;