"use client";

import Image from "next/image";
import { useState, useContext } from "react";
import { TotalStars } from "@/components/General/Stars";
import LanguageContext from "@/language/LanguageContext";
import { CleanRoute } from "@/config/Others/CleanRoute";
import ImageGet from "@/utils/others/ImageGet";

export function BestHotelCart({ params, hotel, paramsH }) {
  const [isHovered, setIsHovered] = useState(false);
  const { languageData, language } = useContext(LanguageContext);

  const searchHotel = (hotel, query) => {
    const cleanedQuery = { ...query };
    delete cleanedQuery.checkIn;
    delete cleanedQuery.checkOut;

    const queryParamsString = [
      `codeName=${cleanedQuery.codeName}`,
      `check-in=${cleanedQuery["check-in"]}`,
      `check-out=${cleanedQuery["check-out"]}`,
      `occupancies=${cleanedQuery.occupancies}`,
    ].join("&");

    window.open(
      `/${language}/mx/${params.codeName}/${paramsH.codeName}-hotels/${hotel.codeName}?${queryParamsString}`,
      "_blank"
    );
  };

  return (
    <div
      onClick={() => searchHotel(hotel, paramsH)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="shadow-3xl !rounded-lg"
    >
      <div className="w-full h-[216px] overflow-hidden rounded-t-lg">
        <ImageGet
          imageUrl={hotel.images[0]}
          type={"hotel"}
          language={language}
          altDescription={"card recommendations hotel"}
          classN={`w-full h-full rounded-t-lg object-cover select-none transition-transform duration-500 transform ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        {/* <img
          className={`w-full h-full rounded-t-lg object-cover select-none transition-transform duration-500 transform ${
            isHovered ? "scale-105" : "scale-100"
          }`}
          src={hotel.images[0]}
          alt="card"
        /> */}
      </div>

      {/* bottom-0 w-full h-1/4 rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col */}
      <div className="w-full rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col">
        <div className="m-s-b pt-1 text-fs-14 text-start truncate mb-[4px]">
          {hotel.name}
          {""}
        </div>

        <div className="mb-[4px]">
          <TotalStars
            name="read-only"
            stars={hotel.stars}
            width={"w-[14px]"}
            height={"h-[14px]"}
          />
        </div>

        <div className="flex gap-1 mb-[11px]">
          <Image
            className="w-auto h-auto"
            src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
            alt="location icon"
            width={11}
            height={14}
          />
          <span className="text-bl-100 m-s-b text-fs-12 truncate">
            {hotel.address}
          </span>
        </div>

        <div className="flex justify-between border-t border-[#ebebeb] pt-[11px] items-center">
          <div className="flex flex-col">
            <span className="m-m text-gry-100 text-fs-12 text-start">
              {languageData.cartTour.from}
            </span>
            <span className="m-b text-or-100 text-fs-12">
              MXN{" "}
              <span className="m-b text-fs-16">
                $
                {Math.floor(hotel.minRate)
                  .toLocaleString("es-MX", { currency: "MXN" })
                  .replace(".00", "")}
                .<sup>{(hotel.minRate % 1).toFixed(2).slice(2)}</sup>
              </span>
            </span>
          </div>

          <button
            className={`m-s-b  text-fs-12 min-h-8 rounded-3xl border-2  px-4 py-2 text-nowrap border-bl-100 ${
              isHovered ? "bg-bl-100 text-white" : "text-bl-100"
            }`}
          >
            {languageData.cartTour.seeDetails}
          </button>
        </div>
      </div>
    </div>
  );
}

// http://localhost:3000/es/mx/cancun-mexico/cancun-hotels/park-royal-beach-cancun?codeNameHotel=park-royal-beach-cancun&code=18&type=destination&codeName=cancun&check-in=2025-04-17&check-out=2025-04-19&occupancies=%255B%257B%2522adults%2522%253A1%252C%2522children%2522%253A%255B%255D%257D%255D

// http://localhost:3000/es/mx/cancun-mexico/cancun-hotels/park-royal-beach-cancun?codeNameHotel=park-royal-beach-cancun&name=Park+Royal+Beach+Cancun&cartUid=1f0165da-060f-6a26-b0a4-5b2b7ec6e75c&codeName=cancun&code=18&check-in=2025-04-17&check-out=2025-04-19&occupancies=%255B%257B%2522adults%2522%253A2%252C%2522children%2522%253A%255B%255D%257D%255D
