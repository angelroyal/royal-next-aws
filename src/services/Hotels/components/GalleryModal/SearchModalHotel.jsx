"use client";

import moment from "moment";
import { useContext, useState } from "react";

import Calendar from "@/hooks/Calendar";
import Room from "../../config/RoomBox";
import LanguageContext from "@/language/LanguageContext";
import RoomsHotelContext from "../../context/RoomsHotelContext";

export function SearchModalHotel() {
  const { languageData } = useContext(LanguageContext);
  const { requestBodyRooms, handleFetchPostRooms, setRequestBodyRooms } =
    useContext(RoomsHotelContext);

  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);

  const [selectedDates, setSelectedDates] = useState({
    formattedCheckIn: null,
    formattedCheckOut: null,
  });

  const handleDateChange = (dates) => {
    setSelectedDates((prevDates) => {
      if (dates && dates.length >= 2) {
        const formattedCheckIn = moment(dates[0]).format("YYYY-MM-DD");
        const formattedCheckOut = moment(dates[1]).format("YYYY-MM-DD");
        localStorage.setItem(
          "selectedDates",
          JSON.stringify({ formattedCheckIn, formattedCheckOut })
        );
        return { ...prevDates, formattedCheckIn, formattedCheckOut };
      }
      return prevDates;
    });
  };

  const handleUpdateRooms = () => {
    const checkInDate =
      selectedDates.formattedCheckIn || requestBodyRooms.CheckIn;
    const checkOutDate =
      selectedDates.formattedCheckOut || requestBodyRooms.CheckOut;

    const queryParams = {
      code: requestBodyRooms.code,
      type: requestBodyRooms.type,
      "check-in": checkInDate,
      "check-out": checkOutDate,
      occupancies: roomData,
    };
    setRequestBodyRooms(queryParams);
    handleFetchPostRooms(queryParams);
  };

  return (
    <div>
      <div className="flex flex-col gap-y-4 pr-4 lg:pr-9 w-full">
        <h2 className="m-b text-black text-fs-16 text-start">
          Seleccionar habitaciones
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-2 gap-y-2">
<<<<<<< HEAD
          <Calendar hotelDetails={true} />
          <Room />
          
          <button className="border-0 rounded-full bg-or-100 py-3.5 px-[103px] m-b text-fs-12 text-white hover:bg-or-70 flex gap-x-2 items-center justify-center">
            {languageData.modalHotel.buttonUpdate}{" "}
=======
          <Calendar onDateChange={handleDateChange} />
          <Room OnApply={setRoomData} />

          <button
            onClick={handleUpdateRooms}
            className="border-0 rounded-full bg-or-100 py-3.5 px-[103px] m-b text-fs-12 text-white hover:bg-or-110 flex gap-x-2 items-center justify-center"
          >
            {languageData.modalHotel.buttonUpdate}
>>>>>>> 3d5dfff90f08f334823f08700603275fe995125a
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
