// src/config/Others/axiosWithInterceptor.js
import axios from "axios";

const getLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language") || "en";
  }
  return "en";
};

const language = getLanguage();
const clientIP = "187.188.15.87";

const axiosWithInterceptor = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROYAL + "/" + language,
});

axiosWithInterceptor.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `${token}`;
      }
    }
    config.headers["X-Client-IP"] = clientIP;
    return config;
  },
  (error) => {
    axios
      .post("https://sandboxmexico.com/logger/SendToSlackDev.php", {
        title: "Request Error",
        errorType: "Request Error",
        errorDetails: {
          message: error.message,
          stack: error.stack,
          config: error.config,
          code: error.code,
          status: error.response ? error.response.status : null,
        },
      })
      .catch((err) =>
        console.error("Failed to send request error to PHP endpoint:", err)
      );
    return Promise.reject(error);
  }
);

axiosWithInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    axios
      .post("https://sandboxmexico.com/logger/SendToSlackDev.php", {
        title: "Response Error",
        errorType: "Response Error",
        errorDetails: {
          message: error.message,
          stack: error.stack,
          config: error.config,
          code: error.code,
          status: error.response ? error.response.status : null,
        },
      })
      .catch((err) =>
        console.error("Failed to send response error to PHP endpoint:", err)
      );
    return Promise.reject(error);
  }
);

export default axiosWithInterceptor;
