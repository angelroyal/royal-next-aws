"use client";

import { Suspense, lazy, useContext, useEffect } from "react";
import { ReactComponent as IconSpanish } from "../assets/icons/utils/others/spanish.svg";
import { ReactComponent as IconEnglish } from "../assets/icons/utils/others/english.svg";

import LanguageContext from "./LanguageContext";

const SelectLanguage = lazy(()=>import("../components/Mobile/Hotel/General/CurrencyLanguage"));

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (event) => {
    const value = event.target.value;
    setLanguage(value);
    localStorage.setItem("language", value);
    window.location.reload();
  };

  const storedLanguage = localStorage.getItem("language");
  const defaultLanguage = storedLanguage || language;

  useEffect(() => {
    if (storedLanguage && storedLanguage !== language) {
      setLanguage(storedLanguage);
    }
  }, [storedLanguage, language, setLanguage]);

  return (
    <>
      <div className="d-language">
        {defaultLanguage === "es" ? (
          <IconSpanish className="icon-spanish" />
        ) : (
          <IconEnglish className="icon-english" />
        )}
        <select
          className="select-currencies"
          name="select"
          value={defaultLanguage}
          onChange={handleChange}
        >
          <option className="options-select-languaje" value="es">
            ESP
          </option>
          <option className="options-select-languaje" value="en">
            ENG
          </option>
        </select>
      </div>
      <div className="m-language">
        <Suspense fallback={null}>
          <SelectLanguage />
        </Suspense>
      </div>
    </>
  );
}
