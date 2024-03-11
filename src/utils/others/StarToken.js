"use client";

import {useEffect} from 'react'
import { checkJwt } from '@/scripts/TokenJwt';
import { useToken } from '@/config/context/AuthContext';

export const useStarToken = () => {
  const { setToken } = useToken();

  useEffect(() => {
    const interval = setInterval(async () => {
      if (!localStorage.token || (localStorage.token && tokenExpired(localStorage.exp))) {
        const newToken = await renewToken();
        setToken(newToken);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const tokenExpired = (exp) => {
    const currentTime = Date.now();
    return currentTime >= exp;
  };

  const renewToken = async () => {
    const newToken = await checkJwt();
    return newToken;
  };
};