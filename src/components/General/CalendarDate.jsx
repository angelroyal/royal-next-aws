import { useContext, useEffect, useRef, useState } from "react";
import flatpickr from "flatpickr";

import LanguageContext from "@/language/LanguageContext";

export function CalendaRDate({ handelDate, setIsOpen, isOpen }) {
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

  //   const [minDate, setMinDate] = useState(
  //     new Date(new Date().getTime() + 72 * 60 * 60 * 1000)
  //   );

  useEffect(() => {
    flatpickr(calendarRef.current, {
      mode: "single",
      dateFormat: "d/m/y",
      minDate: new Date(new Date().getTime() + 72 * 60 * 60 * 1000),
      //   minDate: minDate,
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
      placeholder={languageData.SearchBox.tabTransportation.autoCompleteArrival}
    />
  );
}
