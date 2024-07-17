import { useContext, useEffect, useRef, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import PolicyCardTransportWhite from "@/services/Transport/components/ToolTip/PolicyCardTransportWhite";

export function TripAdvisorButton({ modal }) {
  const { languageData } = useContext(LanguageContext);
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef(null);

  const dataDialogWhite = {
    text: languageData.reviewsHotel.tripAdvisorButton,
    width:"w-full"
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //CLICK OCCURRED OUTSIDE THE DIVE, CLOSE THE DIV
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpenModal(false);
    }
  };

  return (
    !modal && (
      <div className="relative" ref={ref}>
        <button
          className="bg-white text-black text-fs-12 m-m p-2 rounded-full border border-gry-70 flex items-center gap-x-2"
          onClick={() => setOpenModal(!openModal)}
        >
          <img
            className="w-6 h-6"
            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
            alt="logo tripavisor"
            loading="lazy"
            width={24}
            height={24}
          />

          <span>{languageData.reviewsHotel.tripadvisorRating}</span>

          <img
            className="w-[17px] h-[18px]"
            src={`${process.env.NEXT_PUBLIC_URL}icons/general/help-grn.svg`}
            alt="question icon"
            width={17}
            height={17}
          />
        </button>

        {openModal && (
          <PolicyCardTransportWhite dataDialogWhite={dataDialogWhite} />
        )}
      </div>
    )
  );
}


