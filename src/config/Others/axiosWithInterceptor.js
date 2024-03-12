"use client";

import axios from 'axios';
// import { useStarToken } from '../utils/others/StarToken';

const language = typeof window !== 'undefined' ? localStorage.getItem('language') || 'es' : 'es';

const axiosWithInterceptor = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROYAL + '/' + language,
});

axiosWithInterceptor.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

axiosWithInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error.response && error.response.status === 403) {      
    //   useStarToken();
    // }
    return Promise.reject(error);
  }
);

export default axiosWithInterceptor;
