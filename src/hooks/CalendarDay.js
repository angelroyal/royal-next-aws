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
    <input
      className="calendar-results"
      type="text"
      ref={calendarRef}
      placeholder={languageData.SearchBox.tabTransportation.autoCompleteArrival}
      id="check-in"
    />
  );
}
