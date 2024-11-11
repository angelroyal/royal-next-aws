import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";

export function RemoveHotel({
  hotelInfo,
  isRemoveHotel,
  handleCancelHotelRemove,
  removeReservation,
}) {
  const { languageData } = useContext(LanguageContext);

  return (
    isRemoveHotel && (
      <>
        <div
          className="z-[1] absolute left-0 top-0 w-full h-full bg-[#96969691] rounded-lg "
          onClick={() => handleCancelHotelRemove()}
        />
        <div
          className="z-[1] absolute right-0 top-0 h-full px-[22px] flex items-center justify-center cursor-pointer bg-red-100 rounded-r-lg text-fs-16 text-white m-s-b"
          onClick={() => removeReservation(hotelInfo.code)}
        >
          {languageData.cart.remove}
        </div>
      </>
    )
  );
}
