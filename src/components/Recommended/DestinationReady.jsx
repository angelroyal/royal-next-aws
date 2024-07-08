"use client";

import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/navigation";

import LanguageContext from "@/language/LanguageContext";

export default function DestinationReady({ type, reservationDetails }) {
  const router = useRouter();

  // DATE VALIDATE
  let date = null;

  if (type === "hotel") {
    date = {
      checkIn: reservationDetails.checkIn,
      checkOut: reservationDetails.checkOut,
    };
  } else {
    date = reservationDetails?.date;
  }

  const service = type;
  const { languageData, language } = useContext(LanguageContext);

  // SEND TO BOOKING
  const handleItinerary = () => {
    router.push(`/${language}/booking?uid=${reservationDetails.cartUid}`);
  };

  return (
    date && (
      <div className="h-[180px] rounded-lg p-[36px] bg-white mb-[28px] mt-[32px] flex justify-between items-center max-md:flex-col max-md:items-start max-lg:h-auto max-lg:gap-[30px]">
        <div className="flex flex-col gap-[8px]">
          {/* TITLE TOUR OR (HOTEL AND TRANSPORT) */}
          <span className="m-b text-fs-24 max-md:text-fs-20">
            {service === "tour"
              ? languageData.recommendations.titleReadyT
              : languageData.recommendations.titleReadyH}
          </span>

          <span className="text-fs-14 text-gry-100 m-m">
            {languageData.recommendations.subtitleReady}
          </span>

          {/* BTN SEE DETAILS */}
          <button
            className="m-b text-fs-12 flex items-center w-fit px-[24px] py-[10px] bg-bl-100 rounded-full gap-[8px] text-white hover:!bg-bl-110"
            onClick={() => handleItinerary()}
          >
            {languageData.cartTour.seeDetails}
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/arrow-right-w.svg`}
              width={20}
              height={15}
              alt="icon-arrow"
              className="w-[20px] h-[15px]"
            />
          </button>
        </div>

        <div className="min-w-[350px] max-lg:w-full bg-grn-30 flex flex-col p-[16px] gap-[8px] rounded-lg max-w-[500px]">
          {/* NAME */}
          <div className="flex gap-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}icons/check/check-g.svg`}
              width={16}
              height={16}
              alt="done name"
              className="w-[16px] h-[20px] pt-[4px]"
            />
            <span className="m-b text-fs-16 items-center gap-x-[8px] truncate">
              {" "}
              {reservationDetails.name}
            </span>
          </div>

          {/* DATE */}
          <span className="m-m text-gry-100 text-fs-14 flex items-center gap-x-1">
            {service === "hotel"
              ? languageData.recommendations.checkInAndOut
              : languageData.recommendations.reservationDate}

            {service === "hotel" ? (
              <div className="flex items-start mr-[4px]">
                <p className="m-0 !border-r pr-[4px] mr-[4px] !border-gry-100 ">
                  {date.checkIn}
                </p>

                <p className="m-0">{date.checkOut}</p>
              </div>
            ) : (
              <p className="m-0 mr-[4px]">{date}</p>
            )}
          </span>
        </div>
      </div>
    )
  );
}
