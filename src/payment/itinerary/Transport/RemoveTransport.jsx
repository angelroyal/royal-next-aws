import Image from "next/image";
import { useContext } from "react";

import { BookingContext } from "@/payment/context/BookingContext";

export function RemoveTransport({ setIsRemove }) {
  const { removeIsLoader } = useContext(BookingContext);
  
  return !removeIsLoader ? (
    <button
      className="border-0 absolute right-0 top-0"
      onClick={() => setIsRemove(true)}
    >
      <Image
        className="w-[10px] h-[10px] "
        src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-100.svg`}
        alt="close card icon"
        width={10}
        height={10}
      />
    </button>
  ) : (
    <></>
  );
}
