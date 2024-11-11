import { TotalStars } from "@/components/General/Stars";
import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";

export function HotelInformation({ hotelInfo }) {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col max-sm:gap-y-[4px]">
      <div className="flex flex-col">
        <h2 className="text-fs-16 text-black m-b">{hotelInfo.name}</h2>
        <TotalStars stars={hotelInfo.stars} width={12} height={12} />
      </div>

      <div className="flex gap-x-[165px]">
        {/* LEFT INFORMATION */}
        <div className="flex flex-col gap-y-1 items-start">
          <span className="flex items-center gap-x-1 mt-[8px]">
            <img
              className="w-[12px]"
              src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
              alt="IconLocationBorder"
              width={12}
              height={192}
            />
            <p className="m-0 text-fs-10 m-s-b text-gry-100">
              {hotelInfo.address}
            </p>
          </span>

          <span className="max-sm:hidden flex gap-x-4">
            <div className="flex gap-x-1 items-center">
              <img
                className="w-[12px]"
                src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                alt="IconLocationBorder"
                width={12}
                height={192}
              />

              <p className="m-0 text-fs-10 m-s-b text-gry-100 flex flex-wrap">
                {hotelInfo.totalAdults} {languageData.modalHotel.adults}{" "}
                {hotelInfo.totalChildren} {languageData.modalHotel.children}
              </p>
            </div>

            <div className="flex gap-x-1 items-center">
              <img
                className="w-[12px]"
                src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                alt="IconLocationBorder"
                width={12}
                height={192}
              />

              <p className="m-0 text-fs-10 m-s-b text-gry-100 flex flex-wrap">
                {/* {hotelInfo.rooms.length}{" "} */}
                {hotelInfo.totalRooms}{" "}
                {languageData.itinerary.detailsPayment.rooms}
              </p>
            </div>
          </span>
        </div>

        {/* PRICE HOTEL */}
        <div className="max-sm:hidden flex flex-col gap-y-1 items-start mr-[22px]">
          <p className="m-0 m-m text-fs-8 text-gry-100 ">
            {languageData.cartTour.taxesText}
          </p>

          <span className="m-b text-black flex gap-x-[2px] items-center">
            <p className="m-0 text-fs-12">MXN </p>
            <p className="m-0 text-fs-16">
              $
              {Math.floor(hotelInfo.price)
                .toLocaleString("es-MX", { currency: "MXN" })
                .replace(".00", "")}
              .<sup>{(hotelInfo.price % 1).toFixed(2).slice(2)}</sup>
            </p>
          </span>

          {/* PYC */}
          {/* <p className="text-fs-8 m-b text-bl-100 m-0">
                    {languageData.containerModalHotel.policies}
                  </p> */}
        </div>
      </div>
    </div>
  );
}

export function HotelInformationMobile({ hotelInfo }) {
  const { languageData } = useContext(LanguageContext);
  return (
    // {/* MOBILE DETAILS */}
    <div className="sm:hidden flex justify-between items-start pt-[7.5px] mt-[7.5px] border-t border-gry-70 pb-2 border-b">
      <div className="flex flex-col gap-y-[2px]">
        <span className="flex gap-x-[4px] items-center py-[2px]">
          <img
            className="w-[12px]"
            src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
            alt="IconLocationBorder"
            width={12}
            height={192}
          />

          <p className="m-0 text-fs-10 m-s-b text-gry-100 flex flex-wrap">
            {hotelInfo.totalAdults} {languageData.modalHotel.adults}{" "}
            {hotelInfo.totalChildren} {languageData.modalHotel.children}
          </p>
        </span>

        <span className="flex items-center gap-x-[4px] py-[2px]">
          <img
            className="w-[12px]"
            src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
            alt="IconLocationBorder"
            width={12}
            height={192}
          />

          <p className="m-0 text-fs-10 m-s-b text-gry-100 flex flex-wrap">
            {hotelInfo.rooms.length} {/* {hotelInfo.totalRooms}{" "} */}
            {languageData.itinerary.detailsPayment.rooms}
          </p>
        </span>
      </div>

      <div className="flex items-end flex-col gap-y-[4px]">
        <p className="m-0 m-m text-fs-8 text-gry-100 ">
          {languageData.cartTour.taxesText}
        </p>

        <span className="m-b text-black flex gap-x-[2px] items-center">
          <p className="m-0 text-fs-12">MXN </p>
          <p className="m-0 text-fs-16">
            $
            {Math.floor(hotelInfo.price)
              .toLocaleString("es-MX", { currency: "MXN" })
              .replace(".00", "")}
            .<sup>{(hotelInfo.price % 1).toFixed(2).slice(2)}</sup>
          </p>
        </span>

        {/* PYC */}
        {/* <p className="text-fs-8 m-b text-bl-100 m-0">
                  {languageData.containerModalHotel.policies}
                </p> */}
      </div>
    </div>
  );
}
