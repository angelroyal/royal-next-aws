import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";

export function PrinceTour({ tourInfo }) {
  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <p className="text-fs-8 text-gry-100 m-s-b">
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
    </>
  );
}
