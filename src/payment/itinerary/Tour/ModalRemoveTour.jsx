import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";
import { BookingContext } from "@/payment/context/BookingContext";

export function ModalRemoveTour({
  isRemove,
  tourInfo,
  cancelRemove,
  handleRemoveTour,
}) {
  const { languageData } = useContext(LanguageContext);
  const { removeIsLoader } = useContext(BookingContext);
  return (
    isRemove &&
    !removeIsLoader && (
      <>
        <div
          className="absolute left-0 top-0 h-full w-full rounded-lg bg-[#0000002e] rounded-l-[8px]"
          onClick={() => cancelRemove()}
        />
        <div
          className="absolute right-0 top-0 h-full px-[22px] flex items-center justify-center cursor-pointer bg-red-100 rounded-r-lg text-fs-16 text-white m-s-b"
          onClick={() => handleRemoveTour(tourInfo.key)}
        >
          {languageData.cart.remove}
        </div>
      </>
    )
  );
}
