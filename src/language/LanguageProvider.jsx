"use client";

import Cookies from "js-cookie";
import  { useEffect, useState } from "react";

import { es } from "./es";
import { en } from "./en";
import LanguageContext from "./LanguageContext";


function LanguageProvider(props) {
  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("MXN");

  useEffect(() => {
    const storedLanguage = Cookies.get("language") || "en";
    setLanguage(storedLanguage);

    const currencyData = sessionStorage.getItem("selectedCurrency");
    setCurrency(currencyData);
  }, []);

  const handleSetLanguage = (lang) => {
    setLanguage(lang);
    Cookies.set("language", lang);
  };

  const languageData = language === "es" ? es : en;

  const value = {
    language,
    setLanguage: handleSetLanguage,
    languageData,
    currency,
  };

  return (
    <LanguageContext.Provider value={value}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;