import { useContext } from "react";

import { PriceAndPyC } from "./PriceAndPyc";
import LanguageContext from "@/language/LanguageContext";

export function DescriptionTransportMobile({ transportInfo }) {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="border-t border-gry-50 pt-[15px] mt-2 w-full flex lg:justify-center justify-between xl:hidden">
      <div className="lg:hidden flex flex-col">
        <p className="text-fs-8 text-gry-100 m-s-b mb-1">
          {languageData.CardHomeTransport.typeTrip}
        </p>

        <p className="text-fs-12 text-black m-b mb-2">{transportInfo.trip}</p>

        <span className="flex items-center gap-x-1">
          <img
            className="w-[12px] h-[13px]"
            src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
            alt="adult b"
            width={12}
            height={13}
          />

          <p className="m-0 text-fs-10 text-gry-100 m-s-b text-nowrap">
            {transportInfo.tourists}
            {transportInfo.tourists > 1
              ? languageData.cardHotel.people
              : languageData.cardHotel.person}
          </p>
        </span>
      </div>

      <PriceAndPyC transportInfo={transportInfo}/>
    </div>
  );
}
