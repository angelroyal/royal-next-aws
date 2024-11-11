import LanguageContext from "@/language/LanguageContext";
import Image from "next/image";
import { useContext } from "react";

export function Baggage({ transportInfo }) {
  const { languageData } = useContext(LanguageContext);
  
  return (
    <div className="flex flex-col gap-y-1 ">
      <span className="flex items-center gap-x-1">
        <Image
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
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`}
                alt="icon baggage blue"
                width={10.6}
                height={12.3}
              />

              <p className="m-0 text-fs-10 text-gry-100">
                {Math.trunc(
                  transportInfo.suitcases[0].handSuitcase / transportInfo.places
                )}{" "}
                {languageData.CardHomeTransport.handLuggage}
              </p>
            </div>

            <div className="flex gap-x-[3px] items-center">
              <Image
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
  );
}
