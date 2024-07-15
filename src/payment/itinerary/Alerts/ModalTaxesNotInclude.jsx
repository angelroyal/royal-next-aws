"use client";

import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

import { BookingContext } from "@/payment/context/BookingContext";

export function ModalTaxesNotInclude() {
  const {
    openTaxesNotIncluded,
    setOpenTaxesNotIncluded,
    roomsWithTaxesNotIncluded,
  } = useContext(BookingContext);
  //   console.log(openTaxesNotIncluded);
  console.log(roomsWithTaxesNotIncluded);

  return (
    openTaxesNotIncluded && (
      <div className="fixed z-[4] bottom-0 top-0 left-0 w-full h-full backdrop-brightness-50 bg-white/30 flex items-center justify-center">
        <div className="sticky top-0 bottom-0 my-auto w-[80%] h-[50%] z-[4] bg-white rounded-xl p-4">
          <div className="relative w-full h-full">
            <div className="flex justify-end">
              <button
                className="border-0 focus:outline-none"
                onClick={() => setOpenTaxesNotIncluded(!openTaxesNotIncluded)}
              >
                <XMarkIcon
                  className="h-6 w-6 !text-gry-100 m-b"
                  aria-hidden="true"
                />
              </button>
            </div>
            {/* {
                roomsWithTaxesNotIncluded.hotels.map((rooms, index)=>(
                    <></>
                ))
            } */}
          </div>
        </div>
      </div>
    )
  );
}
