"use client";

import moment from "moment";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

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

  const router = useRouter();

  useEffect(() => {
    const storedSelectedDates = localStorage.getItem("selectedDates");
    const storedRoomData = localStorage.getItem("roomData");

    if (!storedSelectedDates || !storedRoomData) {
      const params = new URLSearchParams(window.location.search);
      const checkIn = params.get("check-in");
      const checkOut = params.get("check-out");
      const occupancies = params.get("occupancies");

      if (checkIn && checkOut && occupancies) {
        const formattedCheckIn = moment(checkIn).toISOString();
        const formattedCheckOut = moment(checkOut).toISOString();
        const parsedOccupancies = JSON.parse(decodeURIComponent(occupancies));

        const newSelectedDates = [formattedCheckIn, formattedCheckOut];
        localStorage.setItem("selectedDates", JSON.stringify(newSelectedDates));
        localStorage.setItem("roomData", JSON.stringify(parsedOccupancies));

        setSelectedDates({
          formattedCheckIn,
          formattedCheckOut,
        });
        setRoomData(parsedOccupancies);
      }
    } else {
      setSelectedDates(JSON.parse(storedSelectedDates));
      setRoomData(JSON.parse(storedRoomData));
    }
  }, [router]);

  const handleDateChange = (dates) => {
    if (dates && dates.length >= 2) {
      const formattedCheckIn = moment(dates[0]).toISOString();
      const formattedCheckOut = moment(dates[1]).toISOString();

      setSelectedDates({
        formattedCheckIn,
        formattedCheckOut,
      });
      localStorage.setItem(
        "selectedDates",
        JSON.stringify([formattedCheckIn, formattedCheckOut])
      );
    }
  };

  const handleUpdateRooms = () => {
    const checkInDate =
      moment(selectedDates.formattedCheckIn).format("YYYY-MM-DD") ||
      requestBodyRooms["check-in"];
    const checkOutDate =
      moment(selectedDates.formattedCheckOut).format("YYYY-MM-DD") ||
      requestBodyRooms["check-out"];

    const queryParams = {
      code: requestBodyRooms.code,
      type: "hotel",
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
          {languageData.modalHotel.roomSelect}
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-start lg:gap-x-2 gap-y-2">
          <Calendar onDateChange={handleDateChange} hotelDetails={true} />
          <Room OnApply={setRoomData} roomData={roomData} />

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
