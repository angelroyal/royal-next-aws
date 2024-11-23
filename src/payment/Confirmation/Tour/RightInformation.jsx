import { useContext } from "react";

import { PyCTour } from "./PyCTour";
import LanguageContext from "@/language/LanguageContext";

export function RightInformation({ tourInfo }) {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="hidden sm:flex sm:gap-x-[95px] ">
      {/* RIGHT INFORMATION */}
      <div className="flex flex-col gap-y-1">
        <p className="m-0 text-fs-10 text-gry-100 m-s-b ">
          {languageData.confirmation.cardTour.duration}
        </p>
        <h3 className="m-0 text-fs-12 text-black m-s-b">{tourInfo.duration}</h3>
      </div>

      {/* PRICE TOUR */}
      <div className="flex flex-col gap-y-1 items-start mr-[26px]">
        <p className="text-fs-10 text-gry-100 m-s-b text-nowrap items-center">
          {languageData.modalTourOptions.taxes}
        </p>

        <div className="text-black m-s-b flex gap-x-[2px] items-center">
          <h3 className="text-fs-12 m-0">MXN</h3>
          <h3 className="text-fs-16 m-0">
            {Math.floor(tourInfo.price)
              .toLocaleString("es-MX", { currency: "MXN" })
              .replace(".00", "")}
            .<sup>{(tourInfo.price % 1).toFixed(2).slice(2)}</sup>
          </h3>
        </div>

        <PyCTour tourInfo={tourInfo} />
      </div>
    </div>
  );
}
