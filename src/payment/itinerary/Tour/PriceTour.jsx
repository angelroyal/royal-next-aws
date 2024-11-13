import { useContext, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { AlertPyC } from "@/components/Alerts/LottiePay/AlertPyC";

export function PriceTour({ tourInfo }) {
  const { languageData } = useContext(LanguageContext);
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <div className="flex flex-col justify-center gap-[4px]">
      <span className="m-s-b text-fs-10 text-gry-100 text-nowrap">
        {languageData.modalTourOptions.taxes}
      </span>
      <span className="m-b text-fs-16 text-nowrap">
        <span className="text-fs-12">MXN </span> $
        {Math.floor(tourInfo.price)
          .toLocaleString("es-MX", { currency: "MXN" })
          .replace(".00", "")}
        .<sup>{(tourInfo.price % 1).toFixed(2).slice(2)}</sup>
      </span>

      {tourInfo.cancelPolicies &&
        tourInfo.cancelPolicies.length > 0 &&
        tourInfo.cancelPolicies.map((cancelPolicy, item) => (
          <>
            <div
              key={item}
              className="text-bl-100 m-s-b text-fs-8 cursor-pointer relative"
            >
              <span onClick={() => setOpenAlert(true)}>
                {languageData.containerModalHotel.policies}
              </span>

              <AlertPyC
                openAlert={openAlert}
                setOpenAlert={() => setOpenAlert(false)}
                description={"policy"}
                cancelPolicy={cancelPolicy}
                isHours={true}
              />
            </div>
          </>
        ))}
    </div>
  );
}
