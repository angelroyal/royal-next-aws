import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";

export function PrinceAndTaxesHotel({hotelInfo}) {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="w-auto flex flex-col gap-y-1 justify-center">
      <span className="text-fs-10 text-gry-100 m-m">
        {languageData.cartTour.taxesText}
      </span>

      <span className="m-b text-black flex items-center gap-x-[2px]">
        <p className="text-fs-12 m-0">MXN</p>
        <p className="text-fs-16 m-0">
          $
          {Math.floor(hotelInfo.price ? hotelInfo.price : 0)
            .toLocaleString("es-MX", { currency: "MXN" })
            .replace(".00", "")}
          .
          <sup>
            {(hotelInfo.price ? hotelInfo.price % 1 : 0 % 1)
              .toFixed(2)
              .slice(2)}
          </sup>
        </p>
      </span>
    </div>
  );
}
