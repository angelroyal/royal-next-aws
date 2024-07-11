import { useContext, useState } from "react";

import RoomsHotelContext from "../../../context/RoomsHotelContext";
import { ModalReviews } from "./ModalReviews";
import LanguageContext from "@/language/LanguageContext";

export function AllReviews() {
  const [openModal, setOpenModal] = useState(false);
  const { reviewDataFilter } = useContext(RoomsHotelContext);
  const { languageData } = useContext(LanguageContext);
  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className={`mx-auto mt-10 p-4 border-2 border-gry-50 rounded-[4px] text-black m-b text-fs-12 focus:outline-none ${
          !reviewDataFilter || reviewDataFilter.length === 0
            ? "cursor-not-allowed"
            : "hover:bg-gry-30"
        }`}
        disabled={!reviewDataFilter || reviewDataFilter.length === 0}
      >
        {" "}
        {languageData.reviewsHotel.showAllOptions}
      </button>

      <ModalReviews
        showModal={openModal}
        handleCloseModal={() => setOpenModal(false)}
      />
    </>
  );
}
