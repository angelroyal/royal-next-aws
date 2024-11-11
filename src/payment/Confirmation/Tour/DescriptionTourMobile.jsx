import { useContext } from "react";

import { PyCTour } from "./PyCTour";
import { PrinceTour } from "./PrinceTour";
import LanguageContext from "@/language/LanguageContext";

export function DescriptionTourMobile({ tourInfo }) {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="sm:hidden border-t border-gry-50 mt-2 pt-[16px] w-full flex justify-between">
      {/* RIGHT INFORMATION */}
      <div className="flex flex-col gap-y-1">
        <p className="m-0 text-fs-10 text-gry-100 m-s-b">
          {languageData.confirmation.cardTour.duration}
        </p>
        <h3 className="m-0 text-fs-12 text-black m-b">{tourInfo.duration}</h3>
      </div>

      {/* PRICE TOUR */}
      <div className="flex flex-col gap-y-1 items-start mr-[26px]">
        <PrinceTour tourInfo={tourInfo} />

        <PyCTour tourInfo={tourInfo} />
      </div>
    </div>
  );
}
