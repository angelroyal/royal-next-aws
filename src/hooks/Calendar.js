"use client";
import flatpickr from "flatpickr";
import "flatpickr/dist/l10n/es.js";
import "flatpickr/dist/flatpickr.min.css";
import React, { useEffect, useRef, useContext } from "react";
import LanguageContext from "../language/LanguageContext";

function Calendar({ onDateChange, listing = false, hotelDetails = false }) {
  const calendarRef = useRef(null);
  const language =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("language") || "es"
      : "es";

  useEffect(() => {
    let calendarInstance;
    const currentDate = new Date();

    const storedDates = localStorage.getItem("selectedDates");
    let validStoredDates = null;

    if (storedDates) {
      const selectedDates = JSON.parse(storedDates);
      const [startDate, endDate] = selectedDates;

      if (
        new Date(startDate) < currentDate ||
        (endDate && new Date(endDate) < currentDate)
      ) {
        localStorage.removeItem("selectedDates");
      } else {
        validStoredDates = selectedDates;
      }
    }

    const handleDateChange = (selectedDates) => {
      if (selectedDates.length === 0) return;

      const startDate = selectedDates[0];

      if (startDate < currentDate) {
        alert("La fecha de inicio no puede ser anterior a la fecha actual.");
        calendarInstance.clear();
        localStorage.removeItem("selectedDates");
        return;
      }

      if (selectedDates.length === 1) {
        const maxDate = new Date(
          startDate.getTime() + 30 * 24 * 60 * 60 * 1000
        );
        calendarInstance.set("maxDate", maxDate);
      }

      if (selectedDates.length === 2) {
        onDateChange(selectedDates);
        localStorage.setItem("selectedDates", JSON.stringify(selectedDates));

        calendarInstance.set("maxDate", new Date(new Date().getFullYear() + 1, 11, 31));
      }
    };

    calendarInstance = flatpickr(calendarRef.current, {
      mode: "range",
      dateFormat: "d/m/y",
      minDate: new Date(new Date().getTime() + 48 * 60 * 60 * 1000),
      maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
      locale: {
        ...flatpickr.l10ns[language],
        rangeSeparator: " - ",
        separator: " - ",
      },
      showMonths: window.innerWidth < 768 ? 1 : 2,
      inline: false,
      onChange: handleDateChange,
      defaultDate: validStoredDates || null,
      disableMobile: true,
    });

    return () => {
      if (calendarInstance) {
        calendarInstance.destroy();
      }
    };
  }, [onDateChange, language]);

  const { languageData } = useContext(LanguageContext);

  return (
    <div
      className={`${
        listing === false && "lg:w-[290px]"
      } border-2 border-gray-200 rounded py-2.5 px-4 flex items-center w-full `}
    >
      <div className="flex items-center gap-2 w-full">
        {listing === false && (
          <img
            className="h-[18px] w-4 invert"
            src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
          />
        )}
        <div className="flex relative w-full">
          <span className="absolute top-0 left-0 m-s-b text-fs-10 text-gry-70">
            {languageData.SearchBox.tabHotel.date}
          </span>

          <input
            className={`${
              hotelDetails && "bg-white"
            } mt-3 m-b text-fs-12 focus:outline-none w-full cursor-pointer`}
            type="text"
            ref={calendarRef}
            placeholder={languageData.SearchBox.tabHotel.dateText}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
