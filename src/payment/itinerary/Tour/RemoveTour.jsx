import { useContext } from "react";

import { BookingContext } from "@/payment/context/BookingContext";
import Image from "next/image";

export function RemoveTour({ setIsRemove }) {
  const { removeIsLoader } = useContext(BookingContext);

  return (
    !removeIsLoader && (
      <div
        className="absolute right-0 top-0 cursor-pointer"
        onClick={() => setIsRemove(true)}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-100.svg`}
          alt="CloseIcon"
          width={10}
          height={10}
        />
      </div>
    )
  );
}
