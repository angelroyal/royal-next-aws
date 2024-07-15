import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";
import RoomsHotelContext from "@/services/Hotels/context/RoomsHotelContext";

export const Language = () => {
  const { languageData } = useContext(LanguageContext);
  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="text-black m-b text-fs-12 lg:text-fs-14">
          {languageData.language.language}
        </h3>

        <FilterLanguage />
      </div>
    </>
  );
};

const languagesFilter = [
  { value: "all", label: "All" },
  { value: "es", label: "ESP" },
  { value: "en", label: "EN" },
  { value: "ptr", label: "PTR" },
];

const FilterLanguage = () => {
  const { setLanguage, language } = useContext(RoomsHotelContext);
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col gap-y-4">
      {languagesFilter.map((lang, index) => (
        <div className="flex gap-x-2 items-center" key={index}>
          <div
            className={`border relative rounded-full w-[14px] h-[14px] bursor-pointer ${
              language && language === lang.value
                ? "border-[#0075ff] before:content-[' '] before:absolute before:z-[1] before:inset-y-0 before:inset-x-0 before:rounded-full before:w-[8px] before:h-[8px] before:bg-[#0075ff] before:m-auto"
                : "border-gry-100"
            }`}
            onClick={() => setLanguage(lang.value)}
          />
          <span className="text-black text-fs-12 m-m">
            {languageData.language[lang.label]}
          </span>
        </div>
      ))}
    </div>
  );
};
