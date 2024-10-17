"use client";

import moment from "moment";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import Calendar from "@/hooks/Calendar";
import Room from "../../config/RoomBox";
import LanguageContext from "@/language/LanguageContext";
import RoomsHotelContext from "../../context/RoomsHotelContext";

export function SearchModalHotel() {
  const router = useRouter();
  const { languageData } = useContext(LanguageContext);
  const { requestBodyRooms, handleFetchPostRooms, setRequestBodyRooms } =
    useContext(RoomsHotelContext);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const checkInDate = queryParams.get("check-in");
    const checkOutDate = queryParams.get("check-out");

    if (checkInDate && checkOutDate) {
      const formattedCheckIn = moment(checkInDate).toISOString();
      const formattedCheckOut = moment(checkOutDate).toISOString();
      localStorage.setItem(
        "selectedDates",
        JSON.stringify([formattedCheckIn, formattedCheckOut])
      );
    }
  }, []);

  const handleDateChange = (dates) => {
    if (dates && dates.length >= 2) {
      const formattedCheckIn = moment(dates[0]).toISOString();
      const formattedCheckOut = moment(dates[1]).toISOString();

      localStorage.setItem(
        "selectedDates",
        JSON.stringify([formattedCheckIn, formattedCheckOut])
      );

      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set("check-in", moment(dates[0]).format("YYYY-MM-DD"));
      queryParams.set("check-out", moment(dates[1]).format("YYYY-MM-DD"));
      router.replace(`${window.location.pathname}?${queryParams.toString()}`);
    }
  };

  const handleUpdateRooms = () => {
    const storedRoomData = localStorage.getItem("roomData");
    const roomData = storedRoomData ? JSON.parse(storedRoomData) : [];

    const storedDates = localStorage.getItem("selectedDates");

    if (storedDates) {
      const [storedCheckIn, storedCheckOut] = JSON.parse(storedDates);
      const checkInDate = moment(storedCheckIn).format("YYYY-MM-DD");
      const checkOutDate = moment(storedCheckOut).format("YYYY-MM-DD");

      const queryParams = {
        code: requestBodyRooms.code,
        type: "hotel",
        "check-in": checkInDate,
        "check-out": checkOutDate,
        occupancies: roomData,
      };

      setRequestBodyRooms(queryParams);
      handleFetchPostRooms(queryParams);
    } else {
      console.error("No hay fechas guardadas en el localStorage");
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-y-4 pr-4 lg:pr-9 w-full">
        <h2 className="m-b text-black text-fs-16 text-start">
          {languageData.modalHotel.roomSelect}
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-start lg:gap-x-2 gap-y-2">
          <Calendar onDateChange={handleDateChange} hotelDetails={true} />
          <Room />

          <button
            onClick={handleUpdateRooms}
            className="border-0 rounded-full bg-or-100 py-3.5 px-[103px] m-b text-fs-12 text-white hover:bg-or-110 flex gap-x-2 items-center justify-center"
          >
            {languageData.modalHotel.buttonUpdate}
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/search/search-w.svg`}
              alt="search"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
