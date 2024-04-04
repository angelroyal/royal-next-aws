"use client";

import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";

export function InfantButton({ infant, setInfant }) {
  const { languageData } = useContext(LanguageContext);

  const removeInfant = () => {
    if (infant > 0) {
      setInfant(infant - 1);
    }
  };

  const addInfant = () => {
    setInfant(infant + 1);
  };
  return (
    <div className="flex flex-col items-end w-full">
      <div className="flex w-full justify-between items-center">
        <span className="m-s-b text-fs-12 text-white">
          {languageData.itinerary.tourItinerary.infant}
        </span>

        <div className="flex h-[32px] justify-between items-center lg:w-[64%] xl:w-[56%] w-[56%] rounded bg-white">
          <button
            disabled={infant === 0}
            className={`${
                infant === 0 ? "disable cursor-not-allowed" : "cursor-pointer hover:bg-gry-30 rounded-l"
            } w-[32px] flex justify-center items-center h-full`}
            onClick={removeInfant}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/remove/remove-100.svg`}
              alt="Remove adults"
              width="9.3px"
              height="1.3px"
            />
          </button>

          <span className="text-fs-12 m-s-b w-max text-black">
            {infant}
          </span>

          <button className={`cursor-pointer w-[32px] flex justify-center items-center h-full hover:bg-gry-30 rounded-r`} onClick={addInfant}>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/add/add-or.svg`}
              width="9.3px"
              height="9.3px"
              alt="Add adults"
            />
          </button>
        </div>
      </div>

      <span className="w-max text-white m-s-b text-fs-10 h-[20px]">
        Menores de 6 {languageData.itinerary.tourItinerary.years}
      </span>
    </div>
  );
}
