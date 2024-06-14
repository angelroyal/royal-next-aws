import "@/assets/styles/general/Swiper.css";

import Image from "next/image";
import { useContext, useState } from "react";

import { TotalStars } from "../General/Stars";
import LanguageContext from "@/language/LanguageContext";
import { getNextMonth } from "@/config/Others/getNextMonth";

export default function CardTourHome({ activity }) {
  const { languageData, language } = useContext(LanguageContext);
  const [isHovered, setIsHovered] = useState(false);

  const activityDetails = () => {
    const body = { dateStart: getNextMonth() };
    const query = new URLSearchParams(body).toString();
    window.open(
      `${language}/mx/${activity.destinationName}-mexico/tours/${activity.codeName}?${query}`,
      "_blank"
    );
  };

  return (
    <div
      className="shadow-3xl rounded-lg colum-one cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={activityDetails}
    >
      <div className="w-full h-[241px] overflow-hidden rounded-t-lg">
        <img
          className={`w-full h-full rounded-t-lg object-cover select-none transition-transform duration-500 transform
                     ${isHovered ? "scale-105" : "scale-100"}`}
          src={activity.image}
          //   src={`${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-offers.jpg`}
          alt="card"
        />
      </div>

      <div className="w-full rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col h-[109px]">
        <div className="m-s-b pt-1 text-fs-14 text-start truncate mb-[4px]">
          {activity.name}
        </div>

        <div className="mb-[4px]">
          <TotalStars
            name="read-only"
            stars={activity.stars}
            width={"10px"}
            height={"10px"}
          />
        </div>

        <div className="flex w-full">
          <div className="flex gap-1 w-1/2">
            <Image
              className="w-[11px] h-[14px]"
              src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
              alt="location icon"
              width={11}
              height={14}
            />

            <span className="text-bl-100 m-s-b text-fs-12 truncate">
              {activity.destinationName}
            </span>
          </div>

          <div className="flex justify-end w-1/2 items-center">
            <div className="flex flex-col">
              <span className="m-m text-gry-100 text-fs-12 text-start">
                {languageData.cartTour.from}
              </span>

              <span className="m-b text-or-100 text-fs-12">
                MXN $
                <span className="m-b text-fs-16">
                  {Math.floor(activity.price)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                  .<sup>{(activity.price % 1).toFixed(2).slice(2)}</sup>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
