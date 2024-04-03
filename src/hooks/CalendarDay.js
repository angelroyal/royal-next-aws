import flatpickr from "flatpickr";

import React, { useEffect, useRef, useContext } from "react";
import LanguageContext from "../language/LanguageContext";

export default function CalendarDay({ onDateChange }) {
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleDateChange = (calendarDay) => {
      onDateChange(calendarDay);
      localStorage.setItem("calendarDay", JSON.stringify(calendarDay));
    };

    const storedDates = localStorage.getItem("calendarDay");

    // ACCEPT DATE SELECTED 0

    if (storedDates) {
      const startDate = new Date(storedDates[0]);
      const currentDate = new Date();

      const minDate =
        startDate.getTime() - currentDate.getTime() < 48 * 60 * 60 * 1000
          ? startDate
          : new Date(currentDate.getTime() + 48 * 60 * 60 * 1000);

      const calendarDay = JSON.parse(storedDates);
      flatpickr(calendarRef.current, {
        mode: "single",
        dateFormat: "d/m/y",
        minDate: minDate,
        maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
        locale: "es",
        inline: false,
        onChange: handleDateChange,
        defaultDate: calendarDay,
      });
    } else {
      flatpickr(calendarRef.current, {
        mode: "single",
        dateFormat: "d/m/y",
        minDate: new Date(new Date().getTime() + 72 * 60 * 60 * 1000),
        maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
        locale: "es",
        inline: false,
        onChange: handleDateChange,
      });
    }
  }, []);
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="border-2 border-gray-200 rounded py-2.5 px-4 flex items-center w-full lg:w-[290px] h-[54px]">
      <div className="flex items-center gap-2 w-full">
        <img
          className="h-[18px] w-4 invert"
          src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
          alt="calendar icon royal vacation"
        />
        <div className="flex relative w-full">
          <span className="absolute top-0 left-0 m-s-b text-fs-10 text-gry-70">
            Fecha
          </span>
          
          <input
            className="mt-3 m-b text-fs-12 focus:outline-none w-full cursor-pointer"
            type="text"
            ref={calendarRef}
            placeholder={
              languageData.SearchBox.tabTransportation.autoCompleteArrival
            }
            id="check-in"
          />
        </div>
      </div>
    </div>
  );
}
