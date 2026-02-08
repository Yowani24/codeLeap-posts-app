import axios, { type AxiosInstance } from "axios";
export const api: AxiosInstance = axios.create({
  baseURL: "https://dev.codeleap.co.uk/careers/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = error.response?.data
      ? JSON.stringify(error.response.data)
      : error.message;

    console.error(
      `[API Error] ${error.config?.method?.toUpperCase()} ${error.config?.url}:`,
      errorMessage,
    );

    return Promise.reject(error);
  },
);
