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
    // Enviar mensaje a Slack en caso de error en la solicitud
    axios.post("https://royal-next-aws.vercel.app/api/sendToSlack", {
      title: "Request Error",
      errorType: "Request Error",
      errorDetails: error,
    });
    return Promise.reject(error);
  }
);

axiosWithInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Enviar mensaje a Slack en caso de error en la respuesta
    axios.post("https://royal-next-aws.vercel.app/api/sendToSlack", {
      title: "Response Error",
      errorType: "Response Error",
      errorDetails: error,
    });
    return Promise.reject(error);
  }
);

export default axiosWithInterceptor;
