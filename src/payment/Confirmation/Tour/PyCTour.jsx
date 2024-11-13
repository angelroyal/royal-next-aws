import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";
import { AlertPyC } from "@/components/Alerts/LottiePay/AlertPyC";

export function PyCTour({ tourInfo }) {
  const { languageData } = useContext(LanguageContext);
  const [openAlert, setOpenAlert] = useState(false);
  
  return (
    tourInfo.cancelPolicies &&
    tourInfo.cancelPolicies.length > 0 &&
    tourInfo.cancelPolicies.map((cancelPolicy, item) => (
      <div
        key={item}
        className="text-bl-100 m-s-b text-fs-8 cursor-pointer relative"
      >
        <span
          onClick={() => setOpenAlert(true)}
          className="text-bl-100 !text-fs-8 cursor-pointer m-s-b !block max-lg:!text-left text-center text-nowrap"
        >
          {languageData.containerModalHotel.policies}
        </span>

        <AlertPyC
          openAlert={openAlert}
          setOpenAlert={() => setOpenAlert(false)}
          description={"policy"}
          cancelPolicy={cancelPolicy}
        />
      </div>
    ))
  );
}
