import { TotalStars } from "@/components/General/Stars";
import LanguageContext from "@/language/LanguageContext";
import ImageGet from "@/utils/others/ImageGet";
import { useContext } from "react";
import { PrinceAndTaxesHotel } from "./PrinceAndTaxesHotel";
import { Occupancy } from "./Occupancy";

export function HotelIsNotAvailable({ hotelInfo }) {
  const { languageData, language } = useContext(LanguageContext);

  return (
    <div
      className={`flex gap-x-8 items-center max-sm:gap-[10px]`}
    >
      <div
        className={`w-[133px] h-[117.7px] max-sm:h-[80px] max-sm:w-[90px] rounded-lg overflow-hidden`}
      >
        <ImageGet
          imageUrl={hotelInfo.image}
          type={"hotel"}
          language={language}
          width={133}
          height={117}
          altDescription={"hotel rooms itinerary"}
        />
      </div>

      <div className="flex justify-between my-auto w-[74%] max-sm:w-[65%]">
        <div className="flex flex-col gap-y-2">
          <div className="d-flex title-start gap-2">
            <span className="text-fs-16 m-b text-black !line-clamp-2">
              {hotelInfo.name}
            </span>

            <TotalStars
              stars={hotelInfo.stars}
              width={"w-[12px]"}
              height={"h-[12px]"}
            />
          </div>

          <div className="flex items-center gap-[6px]">
            <img
              className="w-[11px] h-[14px]"
              src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
              alt="icon-location-bl"
              width={11}
              height={14}
            />

            <span className="text-gry-100 text-fs-10 m-s-b truncate max-lg:text-wrap">
              {hotelInfo.address}
            </span>
          </div>

          <div className="max-lg:!hidden">
            <Occupancy hotelInfo={hotelInfo} />
          </div>
        </div>

        <div className="max-lg:hidden">
          <PrinceAndTaxesHotel hotelInfo={hotelInfo} />
        </div>
      </div>
    </div>
  );
}
