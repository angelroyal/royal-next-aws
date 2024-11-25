import { useContext, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { AlertPyC } from "@/components/Alerts/LottiePay/AlertPyC";

export function PriceAndPyC({ transportInfo }) {
  const { languageData } = useContext(LanguageContext);
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <div className="flex flex-col gap-y-1 items-start ">
      <p className="min-xl:text-fs-8 text-fs-10 text-gry-100 min-xl:m-m m-s-b max-xl:mb-1">
        {languageData.cart.taxes}
      </p>

      <span className="text-black m-b flex items-center gap-x-1">
        <p className="text-fs-12 m-0">MXN</p>
        <p className="text-fs-16 m-0">
          $
          {Math.floor(transportInfo.price)
            .toLocaleString("es-MX", { currency: "MXN" })
            .replace(".00", "")}
          .<sup>{(transportInfo.price % 1).toFixed(2).slice(2)}</sup>
        </p>
      </span>

      <div className="relative">
        <p
          className="text-bl-100 text-fs-8 m-s-b max-xl:text-nowrap cursor-pointer"
          onClick={() => setOpenAlert(true)}
        >
          {languageData.containerModalHotel.policies}
        </p>

        <AlertPyC
          openAlert={openAlert}
          setOpenAlert={() => setOpenAlert(false)}
          cancelPolicy={transportInfo.cancelPolicies}
          cardView={"transport"}
        />
      </div>
    </div>
  );
}
