"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import RoomsHotelContext from "../../context/RoomsHotelContext";

export function TaxesNotIncludeRoomDetails() {
  const { roomSelected, setRoomSelected, selectedRooms, setSelectedRooms } =
    useContext(RoomsHotelContext);
  const [openAlert, setOpenAlert] = useState(false);
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    if (roomSelected && roomSelected?.taxesNotIncluded) {
      setOpenAlert(!openAlert);
    }
  }, [roomSelected]);

  // DELETED PRE CART ROOM
  const deleteRoom = () => {
    const newRooms = selectedRooms.filter(
      (room, i) => room.rateKey !== roomSelected.rateKey
    );
    setSelectedRooms(newRooms);
    setOpenAlert(!openAlert);
    setRoomSelected(null);
  };

  const handleContinue = () => {
    setOpenAlert(!openAlert);
    setRoomSelected(null);
  };
  return (
    openAlert && (
      <div className="fixed z-[4] top-0 left-0 w-full h-full backdrop-brightness-50 bg-white/30 flex items-center justify-center">
        <div className="max-md:w-[80%] w-[350px] h-auto bg-white rounded-lg sticky top-0 bottom-0 my-auto p-6">
          <div className="flex w-full h-auto justify-end">
            <button
              className="border-0 focus:outline-none"
              onClick={handleContinue}
            >
              <XMarkIcon
                className="h-5 w-5 !text-gry-100 m-b"
                aria-hidden="true"
              />
            </button>
          </div>

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
                className="px-4 py-2 bg-red-100 text-white text-fs-12 rounded-xl focus:outline-none"
                onClick={deleteRoom}
              >
                {languageData.cardHotel.alertTaxesNotIncluded.removeRooms}
              </button>

              <button
                className="px-4 py-2 bg-bl-100 text-white text-fs-12 rounded-xl focus:outline-none"
                onClick={handleContinue}
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