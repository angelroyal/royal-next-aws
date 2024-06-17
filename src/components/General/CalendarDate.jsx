import moment from "moment";
import flatpickr from "flatpickr";
import { useContext, useEffect, useRef } from "react";

import LanguageContext from "@/language/LanguageContext";

export function CalendarDate({ starDate, handelDate, setIsOpen, isOpen }) {
  const calendarRef = useRef(null);
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //CLICK OCCURRED OUTSIDE THE DIVE, CLOSE THE DIV
  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    flatpickr(calendarRef.current, {
      mode: "single",
      dateFormat: "d/m/y",
      minDate: new Date(new Date().getTime() + 72 * 60 * 60 * 1000),
      maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
      locale: "es",
      inline: false,
      disableMobile: true,
      onChange: handelDate,
    });
  }, [isOpen]);

  return (
    <input
      className="m-b text-fs-12 focus:outline-none w-full cursor-pointer"
      type="text"
      ref={calendarRef}
      readOnly
      value={starDate ? moment(starDate).format("DD/MM/YYYY") : ""}
      placeholder={languageData.SearchBox.tabTransportation.autoCompleteArrival}
    />
  );
}

export function CalendarDateRounded({
  handelDate,
  setIsOpen,
  isOpen,
  starDate,
  comebackDate,
}) {
  const calendarRef = useRef(null);
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //CLICK OCCURRED OUTSIDE THE DIVE, CLOSE THE DIV
  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    flatpickr(calendarRef.current, {
      mode: "single",
      dateFormat: "d/m/y",
      minDate: validationDate(),
      maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
      locale: "es",
      inline: false,
      disableMobile: true,
      onChange: handelDate,
    });
  }, [isOpen, starDate]);

  const validationDate = () => {
    if (!starDate) {
      return new Date(new Date().getTime() + 72 * 60 * 60 * 1000);
    } else {
      return new Date(new Date(starDate).getTime() + 12 * 60 * 60 * 1000);
    }
  };

  return (
    <input
      className="m-b text-fs-12 focus:outline-none w-full cursor-pointer"
      type="text"
      ref={calendarRef}
      readOnly
      value={comebackDate ? moment(comebackDate).format("DD/MM/YYYY") : ""}
      placeholder={languageData.SearchBox.tabTransportation.autoCompleteArrival}
    />
  );
}
