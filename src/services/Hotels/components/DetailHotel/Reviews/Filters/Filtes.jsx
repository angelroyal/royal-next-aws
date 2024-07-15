import { useContext, useState } from "react";

import { Months } from "./Months";
import { Language } from "./Language";
import { TravelType } from "./TravelType";
import LanguageContext from "@/language/LanguageContext";

export default function Filters({ modal }) {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el dropdown está abierto o cerrado
  const { languageData } = useContext(LanguageContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col gap-y-4`}>
      <div
        className="lg:hidden flex justify-between cursor-pointer"
        onClick={handleToggle}
      >
        <p className="m-0 text-fs-14 m-b text-black ">
          {languageData.ListingPhrases.filters}
        </p>

        <svg
          className={`block lg:hidden w-5 h-5 transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      <div
        className={`hidden lg:flex max-md:flex-col md:flex-wrap ${
          modal ? "md:gap-x-16" : "md:gap-x-14 gap-y-4"
        }`}
      >
        {/* FILTER MONTH */}
        <Months />

        {/* FILTER TRAVEL*/}
        <TravelType />

        {/* FILTER LANGUAGE */}
        <Language />
      </div>

      <div
        className={`lg:hidden flex max-md:flex-col md:flex-wrap max-md:gap-y-4 ${
          modal ? "md:gap-x-16" : "md:gap-x-14"
        }`}
      >
        {isOpen && (
          <>
            {/* FILTER MONTH */}
            <Months />

            {/* FILTER TRAVEL*/}
            <TravelType />

            {/* FILTER LANGUAGE */}
            <Language />
          </>
        )}
      </div>
    </div>
  );
}
