"use client";
import Image from "next/image";

import { useContext, useEffect } from "react";

import LanguageContext from "./LanguageContext";
import { SelectLanguage } from "@/components/Mobile/Hotel/General/CurrencyLanguage";

// const SelectLanguage = lazy(()=>import("../components/Mobile/Hotel/General/CurrencyLanguage"));

export function LanguageSelector() {
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

  const esLanguage = `${process.env.NEXT_PUBLIC_ASSETS}icons/leng/es.svg`
  const enLanguage = `${process.env.NEXT_PUBLIC_ASSETS}icons/leng/es.svg`
  return (
    <>
      <div className="flex pl-5 ">
        {defaultLanguage === "es" ? (
          <Image width={18} height={24} src={`${process.env.NEXT_PUBLIC_ASSETS}icons/leng/es.svg`} alt="MXN lang" />
          // <IconSpanish className="icon-spanish" />
          ) : (
            <Image width={18} height={24} src={`${process.env.NEXT_PUBLIC_ASSETS}icons/leng/en.svg`} alt="US lang" />
        )}
        <select
          className="w-max block border-0 bg-transparent focus:outline-none m-s-b text-gry-100"
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
      {/* <div className="m-language">
        <SelectLanguage />
      </div> */}
    </>
  );
}
