"use client";

import Cookies from "js-cookie";
import { createContext, useEffect} from "react";

import { encrypt } from "@/config/Others/encrypt";
import codePayProvider from "@/config/Others/codePayProvider";

const PaymentContext = createContext();

const PaymentProvider = ({ children, gatewayProvider }) => {
  //GATEWAY PAYMENT
  const nameProvider = codePayProvider(gatewayProvider.name);
  const encrypted = encrypt(nameProvider);

  useEffect(() => {
    Cookies.set("payment", encrypted);
  }, []);

  return (
    <PaymentContext.Provider value={{}}>{children}</PaymentContext.Provider>
  );
};

export { PaymentContext, PaymentProvider };
