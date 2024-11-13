import { useContext } from "react";

import { PriceAndPyC } from "./PriceAndPyc";
import LanguageContext from "@/language/LanguageContext";

export function DescriptionTransportDesktop({ transportInfo }) {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <h2 className="m-b text-fs-16 text-black">{transportInfo.title}</h2>

      <div className="flex gap-x-6 items-start justify-between lg:pr-[32px]">
        <div className="flex flex-col w-1/2 gap-y-1 max-md:w-[65%]">
          <span className="flex items-center gap-x-1">
            <img
              className="w-[11px] h-[14px]"
              src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
              alt="location bl"
              width={11}
              height={14}
            />

            <p className="text-gry-100 text-fs-10 m-0 m-s-b truncate">
              {transportInfo.fromLabel}
            </p>
          </span>

          <span className="flex flex-col gap-y-[3px] ">
            {transportInfo.suitcases && (
              <>
                <div className="flex gap-x-[3px] items-center">
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`}
                    alt="icon baggage blue"
                    width={10.6}
                    height={12.3}
                  />

                  <p className="m-0 text-fs-10 text-gry-100">
                    {Math.trunc(
                      transportInfo.suitcases[0].handSuitcase /
                        transportInfo.places
                    )}{" "}
                    {languageData.CardHomeTransport.handLuggage}
                  </p>
                </div>

                <div className="flex gap-x-[3px] items-center">
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`}
                    alt="icon baggage blue"
                    width={10.6}
                    height={12.3}
                  />

                  <p className="m-0 text-fs-10 text-gry-100">
                    {Math.trunc(
                      transportInfo.suitcases[0].largeSuitcase /
                        transportInfo.places
                    )}{" "}
                    {languageData.CardHomeTransport.suitcases}
                  </p>
                </div>
              </>
            )}
          </span>
        </div>

        <div className="flex gap-x-[67px] max-lg:hidden">
          <div className="flex flex-col">
            <p className="text-fs-8 text-gry-100 m-s-b mb-1">
              {languageData.CardHomeTransport.typeTrip}
            </p>

            <p className="text-fs-12 text-black m-b mb-2">
              {transportInfo.trip}
            </p>

            <span className="flex items-center gap-x-1">
              <img
                className="w-[12px] h-[13px]"
                src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                alt="adult b"
                width={12}
                height={13}
              />

              <p className="m-0 text-fs-10 text-gry-100 m-s-b text-nowrap">
                {transportInfo.tourists}{" "}
                {transportInfo.tourists > 1
                  ? languageData.cardHotel.people
                  : languageData.cardHotel.person}
              </p>
            </span>
          </div>

          <PriceAndPyC transportInfo={transportInfo} />
        </div>
      </div>
    </div>
  );
}
