"use client";

import { useEffect } from "react";
import { createContext, useState } from "react";

import { EnBlog } from "./language/EnBlog";
import { EsBlog } from "./language/EsBlog";

const LanguageContext = createContext();

const languages = {
  es: EsBlog,
  en: EnBlog,
};

const LanguageProvideContext = ({ children }) => {
  const [language, setLanguage] = useState("es");

  //USEEFFECT TO SET LANGUAGE

  useEffect(() => {
    const currentLanguageLs = localStorage.getItem("language");
    if (currentLanguageLs) {
      setLanguage(currentLanguageLs.toLowerCase());
    }
  }, []);

  //VARIABLE READ AND SET OF VALUE FOR LANGUAGE
  const value = {
    language,
    languageData: languages[language],
    setLanguage: (newLanguage) => {
      localStorage.setItem("language", newLanguage.toUpperCase());
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
