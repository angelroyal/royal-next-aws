"use client";

import { TotalStars } from "@/components/General/Stars";
import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";
import RoomsHotelContext from "../../context/RoomsHotelContext";

export function HotelInfo(props) {
  const { hotel } = props;
  const { languageData } = useContext(LanguageContext);
  const { reviewsData } = useContext(RoomsHotelContext);

  const handleButtonClick = () => {
    if (typeof window !== "undefined") {
      const targetElement = document.getElementById("review-trip-advisor");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* IS TOP */}
      {hotel.isTop && (
        <div className="bg-[#fef0d2] w-[fit-content] rounded-full py-[4px] px-[8px] d-flex flex justify-between mb-2 gap-2">
          <img
            src={`${process.env.NEXT_PUBLIC_URL}/icons/sales/fire_department.svg`}
            alt="fire"
            width={12}
            height={12}
          />

          <span className="text-fs-12 text-nowrap ">
            {languageData.modalHotel.Highly}
          </span>
        </div>
      )}

      <h1 className="m-b text-fs-24">{hotel.name}</h1>

      <div className="flex items-center gap-x-2">
        <TotalStars
          stars={hotel.stars}
          width={"w-[16px]"}
          height={"h-[16px]"}
        />

        <button
          className="flex gap-x-2 text-bl-100 text-fs-12 m-m focus:outline-none"
          onClick={handleButtonClick}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_URL}img/general/tripadvisor-logo-circle-green.png`}
            alt="tripadvisor icon"
            width={24}
            height={24}
          />
          
          {`(${reviewsData ? reviewsData.length : '0'}) ${
            languageData.reviewsHotel.viewReviews
          }`}
        </button>
      </div>

      <div className="mt-3 flex mb-[6]">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
          alt="location"
          width={14}
          height={18}
        />

        <div className="m-m text-fs-13 ml-1 text-gry-70">
          {`${hotel.address}, ${hotel.destination}`}
        </div>
      </div>
    </>
  );
}
