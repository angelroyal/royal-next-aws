"use client";

import Calendar from "@/hooks/Calendar";
import Room from "../../config/RoomBox";
import { useContext } from "react";
import LanguageContext from "@/language/LanguageContext";

export function SearchModalHotel() {
  const { languageData } = useContext(LanguageContext);
  return (
    <div>
      <div className="flex flex-col gap-y-4 pr-4 lg:pr-9 w-full ">
        <h2 className="m-b text-black text-fs-16 text-start">
          Seleccionar habitaciones
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-2 gap-y-2">
          <Calendar />
          <Room />
          
          <button className="border-0 rounded-full bg-or-100 py-3.5 px-[103px] m-b text-fs-12 text-white hover:bg-or-110 flex gap-x-2 items-center justify-center">
            {languageData.modalHotel.buttonUpdate}{" "}
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/search/search-w.svg`}
              alt="search"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
