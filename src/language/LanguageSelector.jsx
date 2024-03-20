"use client";

import Image from "next/image";

import { useContext, useEffect } from "react";

import LanguageContext from "./LanguageContext";
// import { SelectLanguage } from "@/components/Mobile/Hotel/General/CurrencyLanguage";

// const SelectLanguage = lazy(()=>import("../components/Mobile/Hotel/General/CurrencyLanguage"));

export function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (event) => {
    const value = event.target.value;
    setLanguage(value);
    localStorage.setItem("language", value);
    window.location.reload();
  };

  const storedLanguage =
    typeof window !== "undefined"
      ? localStorage.getItem("language") || "es"
      : "es";

  const defaultLanguage = storedLanguage || language;

  useEffect(() => {
    if (storedLanguage && storedLanguage !== language) {
      setLanguage(storedLanguage);
    }
  }, [storedLanguage, language, setLanguage]);

  return (
    <>
      <div className="flex pr-[30px]">
        {defaultLanguage === "es" && (
          <Image
            className="w-[25px] h-[30px]"
            width={25}
            height={30}
            src={`${process.env.NEXT_PUBLIC_URL}icons/leng/es.svg`}
            alt="lang"
          />
        )}
        {defaultLanguage === "en" && (
          // <IconSpanish className="icon-spanish" />
          <Image
            className="w-[25px] h-[30px]"
            width={25}
            height={30}
            src={`${process.env.NEXT_PUBLIC_URL}icons/leng/en.svg`}
            alt="lang"
          />
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
    </>
  );
}
