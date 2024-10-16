"use client";

import Image from "next/image";
import { TotalStars } from "@/components/General/Stars";
import LanguageContext from "@/language/LanguageContext";
import React, { useContext, useState } from "react";
import { getNextMonth } from "@/config/Others/getNextMonth";

export default function CardTopActivities({ tour }) {
    const [isHovered, setIsHovered] = useState(false);
    const { languageData, language } = useContext(LanguageContext);
  
    const sentTour = (tourInfo) => {
      const body = { dateStart: getNextMonth() };
      const query = new URLSearchParams(body).toString();
  
      window.open(
        `/${language}/mx/${tourInfo.destinationCodeName}-${
          tourInfo[language || "es"].country
        }/tours/${tourInfo.codeName}?${query}`,
        "_blank"
      );
    };

  return (
    // CARD TOP ACTIVITIES TOUR
    <div
      className="!w-fit !rounded-lg shadow-3xl colum-two"
      onClick={() => sentTour(tour)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="min-w-[266px] max-w-[280px] h-full cursor-pointer shadow-md shadow-gry-30 rounded-xl relative max-lg:min-w-[229px] max-lg:max-w-[229px] max-md:min-w-[266px] max-md:max-w-[280px] max-sm:max-w-fit">
        <div className="w-full h-[216px] overflow-hidden rounded-t-lg">
          <img
            className={`w-full h-full object-cover select-none transition-transform duration-500 transform ${
              isHovered ? "scale-105" : "scale-100"
            }`}
            src={tour.image}
            alt="card"
          />

          <p className="absolute m-b text-fs-10 text-gry-100 top-[2%] right-[2%] py-[14px] px-[10px] rounded-lg bg-[#EBEBEB] bg-opacity-70">
            <span>{languageData.cartTour.duration} </span>
            {tour.duration}
          </p>
        </div>

        <div className="w-full rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col">
          <div className="m-s-b pt-1 text-fs-14 text-start truncate max-sm:w-[250px] mb-[4px]">
            {validateLanguageName(language, tour).name}{" "}
          </div>

          <TotalStars
            className="my-1"
            name="read-only"
            stars={tour.category}
            readOnly
            width={"14px"}
            height={"14px"}
          />

          <div className="flex gap-1 mb-[26px] mt-[6px]">
            <Image
              className="w-auto h-auto"
              src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
              alt="icon-location"
              width={11}
              height={14}
            />
            <span className="text-bl-100 m-s-b text-fs-12">
              {validateLanguageName(language, tour).destination}
            </span>
          </div>

          <div className="flex justify-between border-t border-[#ebebeb] pt-[11px] items-center">
            <div className="flex flex-col text-fs-12">
              <span className="m-m text-black text-fs-12 text-start">
                {languageData.cartTour.from}
              </span>
              <span className="m-s-b text-or-100">
                MXN{" "}
                <span className="m-b text-fs-16">
                  ${Math.floor(validateLanguageName(language, tour).price)}
                </span>
                .
                <sup className="m-b">
                  {(validateLanguageName(language, tour).price % 1)
                    .toFixed(2)
                    .slice(2)}
                </sup>
              </span>
            </div>

            <button
              className={`m-b  text-fs-12 min-h-8 rounded-3xl border-2  px-4 py-2 text-nowrap ${
                isHovered ? "bg-bl-100 text-white" : "text-black border-bl-100"
              }`}
            >
              {languageData.cartTour.seeDetails}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const validateLanguageName = (language, value) => {
  if (language === "es") {
    if (value.es) {
      return {
        name: value.es.name,
        destination: value.es.destination,
        price: value.es.price,
      };
    } else {
      return {
        name: value.en.name,
        destination: value.en.destination,
        price: value.en.price,
      };
    }
  } else if (language === "en") {
    if (value.en) {
      return {
        name: value.en.name,
        destination: value.en.destination,
        price: value.en.price,
      };
    } else {
      return {
        name: value.es.name,
        destination: value.es.destination,
        price: value.es.price,
      };
    }
  }
};
