import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
});

const jwtPrefix = "Bearer ";

instance.interceptors.request.use(
  (config) => {
    const authorization: string =
      jwtPrefix + localStorage.getItem("token");
    config.headers["Authorization"] = authorization;

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject<AxiosError>(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject<AxiosError>(error);
  }
);

export default instance;
