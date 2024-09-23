"use client";

import { useContext, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import RoomsHotelContext from "../../context/RoomsHotelContext";

export function TaxesNotIncludeRoomDetails() {
  const {
    roomSelected,
    setRoomSelected,
    openAlert,
    setOpenAlert,
    setSelectedRooms,
  } = useContext(RoomsHotelContext);
  const { languageData } = useContext(LanguageContext);

  const [isLoading, setIsLoading] = useState(false);

  // DELETED PRE CART ROOM
  const cancelAddRoom = () => {
    setOpenAlert(false);
    setRoomSelected(null);
  };

  const handleContinue = () => {
    setIsLoading(true);
    setSelectedRooms((rooms) => [...rooms, roomSelected]);
    setRoomSelected(null);
    setOpenAlert(false);
    setIsLoading(false);
  };

  return (
    openAlert && (
      <div className="fixed z-[4] top-0 left-0 w-full h-full backdrop-brightness-50 bg-white/30 flex items-center justify-center">
        <div className="max-md:w-[80%] w-[350px] h-auto bg-white rounded-lg sticky top-0 bottom-0 my-auto p-6">
          <div className="relative w-full h-full flex flex-col gap-y-6">
            {/* CONTAINER  TAXES NOT INCLUDE ROOMS*/}
            <div className="flex flex-col gap-y-2">
              <h2 className="m-s-b text-fs-14 text-center">
                {languageData.cardHotel.alertTaxesNotIncluded.title}
              </h2>

              <h4 className="m-m text-fs-12 text-center">
                {languageData.cardHotel.alertTaxesNotIncluded.message}
              </h4>
            </div>

            <div className="flex max-md:flex-col max-lg:gap-y-3 justify-center gap-x-6 items-center">
              <button
                className="px-4 py-2 text-gry-100 text-fs-12 rounded-xl focus:outline-none shadow-3xl"
                onClick={cancelAddRoom}
              >
                {languageData.cardHotel.alertTaxesNotIncluded.removeRooms}
              </button>

              <button
                className={`px-4 py-2 text-white text-fs-12 rounded-xl focus:outline-none ${
                  isLoading ? "bg-bl-70" : "bg-bl-100"
                }`}
                onClick={handleContinue}
                disabled={isLoading}
              >
                {languageData.cardHotel.alertTaxesNotIncluded.continue}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
