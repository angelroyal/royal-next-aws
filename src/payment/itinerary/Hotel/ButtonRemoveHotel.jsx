import { useContext } from "react";

import { BookingContext } from "@/payment/context/BookingContext";

export function ButtonRemoveHotel({hotelInfo, setIsRemoveHotel}) {
    const { removeIsLoader } = useContext(BookingContext);
  return (
    !removeIsLoader && (
      <button onClick={() => setIsRemoveHotel(true)} className={`w-[10px] h-[10px] absolute right-0 top-0 ${
        hotelInfo.available === false && "z-[1]"
      }`}>
        <img
          src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-100.svg`}
          alt="icon close"
          width={10}
          height={10}
        />
      </button>
    )
  );
}
