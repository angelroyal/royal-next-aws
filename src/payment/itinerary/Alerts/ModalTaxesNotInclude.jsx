"use client";

import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

import LanguageContext from "@/language/LanguageContext";
import { BookingContext } from "@/payment/context/BookingContext";

export function ModalTaxesNotInclude() {
  const {
    openTaxesNotIncluded,
    setOpenTaxesNotIncluded,
    roomsWithTaxesNotIncluded,
  } = useContext(BookingContext);
  //   console.log(openTaxesNotIncluded);
  console.log(roomsWithTaxesNotIncluded);

  const { languageData } = useContext(LanguageContext);

  return (
    openTaxesNotIncluded && (
      <div className="fixed z-[4] bottom-0 top-0 left-0 w-full h-full backdrop-brightness-50 bg-white/30 flex items-center justify-center">
        <div className="sticky top-0 bottom-0 my-auto w-[97%] lg:w-[60%] xl:w-[45%] h-auto z-[4] bg-white rounded-xl">
          <div className="relative w-full h-full">
            <button
              className="border-0 absolute right-[22px] top-5 focus:outline-none"
              onClick={() => setOpenTaxesNotIncluded(!openTaxesNotIncluded)}
            >
              <XMarkIcon
                className="h-6 w-6 !text-gry-100 m-b"
                aria-hidden="true"
              />
            </button>
            <div className="p-12 flex flex-col gap-y-9">
              <h1 className="m-0 m-b text-black text-fs-20 text-center">
                {languageData.cardHotel.alertTaxesNotIncluded.title}
              </h1>

              <div className="flex flex-col gap-y-5 border-b border-gry-50 pb-9">
                {[...Array(3)].map((hotel, index) => (
                  <div key={index}>
                    <h2 className="mb-2.5 text-fs-14 text-black m-b">
                      Oasis Smart Cancún
                    </h2>

                    <div className="block">
                      {[...Array(2)].map((room, index) => (
                        <div
                          className={`flex justify-between items-center ${
                            2 - 1 !== index &&
                            "border-b border-gry-50 mb-2.5 pb-2.5"
                          }`}
                        >
                          <p className="text-fs-12 m-m">
                            Suite Imperial con vista al Mar
                          </p>

                          <p className="m-0 text-fs-12 m-b text-black">
                            $6,000 MXN
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <p className="m-0 text-fs-14 text-black m-b">
                  {languageData.itinerary.detailsPayment.totalTaxesNotIncluded}
                </p>

                <p className="m-0 text-fs-14 text-black m-b">$24,000 MXN</p>
              </div>

              <button className="focus:outline-none text-white text-fs-12 rounded-full bg-bl-100 px-4 py-3.5 w-max mx-auto">
                {languageData.itinerary.detailsPayment.accept}
              </button>

              {/* {
                roomsWithTaxesNotIncluded.hotels.map((rooms, index)=>(
                    <></>
                ))
            } */}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
