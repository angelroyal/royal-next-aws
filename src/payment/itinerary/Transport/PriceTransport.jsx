import { useContext, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { AlertPyC } from "@/components/Alerts/LottiePay/AlertPyC";

export function PriceTransport({ transportInfo }) {
  const { languageData } = useContext(LanguageContext);
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <div className="flex flex-col gap-y-1 items-start">
      <p className="text-fs-10 text-gry-100 m-s-b text-nowrap">
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

      <div
        onClick={() => setOpenAlert(true)}
        className="relative text-bl-100 text-fs-8 m-s-b text-nowrap cursor-pointer"
      >
        {/* <span className="relative text-bl-100 text-fs-8 m-s-b text-nowrap cursor-pointer"> */}
        {languageData.containerModalHotel.policies}
        {/* </span> */}

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
