"use client";

import { useEffect } from "react";
import { createContext, useState } from "react";

import { EnBlog } from "./language/EnBlog";
import { EsBlog } from "./language/EsBlog";
import Cookies from "js-cookie";

const LanguageContext = createContext();

const languages = {
  es: EsBlog,
  en: EnBlog,
};

const LanguageProvideContext = ({ children }) => {
  const [language, setLanguage] = useState("es");

  //USEEFFECT TO SET LANGUAGE

  useEffect(() => {
    const currentLanguageLs = Cookies.get("language") || "en";
    if (currentLanguageLs) {
      setLanguage(currentLanguageLs.toLowerCase());
    }
  }, []);

  //VARIABLE READ AND SET OF VALUE FOR LANGUAGE
  const value = {
    language,
    languageData: languages[language],
    setLanguage: (newLanguage) => {
      Cookies.get("language") || "en"
      Cookies.set("language", newLanguage.toUpperCase());
      // localStorage.setItem("language", newLanguage.toUpperCase());
      setLanguage(newLanguage.toLowerCase());
    },
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
export { LanguageContext, LanguageProvideContext };
