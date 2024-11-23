import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";

export function Occupancy({hotelInfo}) {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="flex gap-x-4 max-lg:flex-col max-lg:gap-y-[1rem]">
      <div className="flex gap-[6px] items-center">
        <img
          className="w-[14px] h-[15px]"
          src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
          alt="icon-adult-b"
          width={14}
          height={15}
        />

        <span className="text-fs-10 text-gry-100 m-s-b">
          {/* TEXT ADULTS AND CHILDREN /LP 15-02-24 */}
          {hotelInfo.totalAdults} {languageData.modalHotel.adults}{" "}
          {hotelInfo.totalChildren} {languageData.modalHotel.children}
        </span>
      </div>

      <div className="flex gap-[6px] items-center text-fs-10 text-gry-100 m-s-b">
        <img
          className="w-[14px] h-[15px]"
          src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
          alt="icon Room"
          width={14}
          height={15}
        />

        <span className="text-fs-10 text-gry-100 m-s-b">
          {hotelInfo.totalRooms} {languageData.itinerary.detailsPayment.rooms}
        </span>
      </div>
    </div>
  );
}
