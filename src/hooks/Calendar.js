import flatpickr from "flatpickr";
import "flatpickr/dist/l10n/es.js";
import "flatpickr/dist/flatpickr.min.css";
import React, { useEffect, useRef, useContext } from "react";

import LanguageContext from "../language/LanguageContext";

function Calendar({ onDateChange }) {
  const calendarRef = useRef(null);
  const language = localStorage.getItem("language") || "es";

  useEffect(() => {
    const handleDateChange = (selectedDates) => {
      onDateChange(selectedDates);
      localStorage.setItem("selectedDates", JSON.stringify(selectedDates));
    };

    const storedDates = localStorage.getItem("selectedDates");
    if (storedDates) {
      const selectedDates = JSON.parse(storedDates);
      const startDate = new Date(selectedDates[0]);
      const currentDate = new Date();

      // ACCEPT DATE SELECTED 0
      const minDate =
        startDate.getTime() - currentDate.getTime() < 48 * 60 * 60 * 1000
          ? startDate
          : new Date(currentDate.getTime() + 48 * 60 * 60 * 1000);

      flatpickr(calendarRef.current, {
        mode: "range",
        dateFormat: "d/m/y",
        minDate: minDate,
        maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
        inline: false,
        onChange: handleDateChange,
        locale: {
          ...flatpickr.l10ns[language],
          rangeSeparator: " - ",
          separator: " - ",
        },
        defaultDate: selectedDates,
        showMonths: window.innerWidth < 768 ? 1 : 2,
      });
    } else {
      flatpickr(calendarRef.current, {
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
      });
    }
  }, []);
  const { languageData } = useContext(LanguageContext);
  return (
    <input
      className="vertical-range-calendar MuiAutocomplete-root MuiAutocomplete-hasPopupIcon Autocomplete-box css-gcwvw8-MuiAutocomplete-root calendar-results"
      type="text"
      ref={calendarRef}
      placeholder={languageData.SearchBox.tabHotel.dateText}
      id="check-in"
    />
  );
}

export default Calendar;
