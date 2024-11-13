"use client";
import React, { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";

export default function SearchReservation() {
    const { languageData } = useContext(LanguageContext);
  return (
    <div className="w-full flex justify-center absolute z-[3] top-[190px] mb-10 max-lg:top-[150px] max-md:top-[90px]">
      <div className="flex flex-col py-[32px] px-[24px] gap-[20px] rounded-[8px] shadow-[1px_0px_20px_1px_rgba(189,183,183,0.75)] bg-white w-fit justify-center items-center">
        {/* LOGO AND TITLE */}
        <div className="flex gap-2 text-fs-18 m-b justify-center w-full">
          <img
            src={`${process.env.NEXT_PUBLIC_URL}/icons/general/infotipo-staywuw.svg`}
            alt="logo"
            className="w-[26px] h-[26px] object-cover"
          />
          <span>{languageData.myReservation.checkReservation}</span>
        </div>
        {/* SUBTITLE */}
        <div className="w-full">
          <div className="text-gry-100 text-fs-14 m-s-b">
          {languageData.myReservation.enterCodeAndReservation}
          </div>
        </div>
        {/* INPUT CODE RESERVATION */}
        <input
          placeholder={languageData.myReservation.reservationCode}
          className="h-[44px] rounded-[4px] w-[359px] pl-[10px] m-s-b text-fs-12 max-lg:w-full focus:outline-none italic border border-gry-50"
        />

        {/* LAST NAME */}
        <input
          placeholder={languageData.myReservation.lastName}
          className="h-[44px] rounded-[4px] w-[359px] pl-[10px] m-s-b text-fs-12 max-lg:w-full focus:outline-none italic border border-gry-50"
        />

        {/* BTN SEARCH */}
        <button className="bg-bl-100 px-5 py-3 text-white m-m rounded-full hover:bg-bl-110 w-fit">
        {languageData.myReservation.findReservation}
        </button>

        <a className="text-bl-100 text-fs-12 cursor-pointer underline">{languageData.myReservation.haveYouForgotten}</a>
      </div>
    </div>
  );
}
