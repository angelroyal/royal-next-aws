import { useContext } from "react";

import { BookingContext } from "@/payment/context/BookingContext";
import LanguageContext from "@/language/LanguageContext";

export function ContainerRemoveTransport({ isRemove, removeReservation, cancelRemove }) {
  const { removeIsLoader } = useContext(BookingContext);
  const { languageData } = useContext(LanguageContext);

  return (
    isRemove &&
    !removeIsLoader && (
      <>
        <div
          className="absolute left-0 top-0 w-full h-full bg-[#96969691] rounded-lg"
          onClick={() => cancelRemove()}
        />
        <div
          className="absolute right-0 top-0 h-full px-[22px] flex items-center justify-center cursor-pointer bg-red-100 rounded-r-lg text-fs-16 text-white m-s-b"
          onClick={() => removeReservation(itemTransport)}
        >
          {languageData.cart.remove}
        </div>
      </>
    )
  );
}
