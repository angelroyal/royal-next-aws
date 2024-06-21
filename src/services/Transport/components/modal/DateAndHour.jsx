import moment from "moment";
import React, { useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import {
  CalendarDate,
  CalendarDateRounded,
} from "@/components/General/CalendarDate";
import ModalTransportContext from "../../context/ModalTransportContext";

export default function DateAndHour(props) {
  const { languageData } = useContext(LanguageContext);

  const {
    departureTime,
    setDepartureTime,
    comebackTime,
    setComebackTime,
    departureDate,
    setDepartureDate,
    comebackDate,
    setComebackDate,
  } = useContext(ModalTransportContext);

  // Manejadores para los cambios en los inputs
  const handleDepartureDateChange = (e) => {
    const dateSelected = moment(e[0]).format("YYYY-MM-DD");
    setDepartureDate(dateSelected);
    setComebackDate(null);
  };

  const handleComebackDateChange = (e) => {
    const dateSelected = moment(e[0]).format("YYYY-MM-DD");
    setComebackDate(dateSelected);
  };

  const handleDepartureTimeChange = (e) => {
    setDepartureTime(e.target.value);
  };

  const handleComebackTimeChange = (e) => {
    setComebackTime(e.target.value);
  };

  const searchParams = new URLSearchParams(window.location.search);

  const typeTransport = searchParams.get("type");

  const [isOpenCalendarOne, setIsOpenCalendarOne] = useState(false);
  const [isOpenCalendarTwo, setIsOpenCalendarTwo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpenCalendarOne(true);
      setIsOpenCalendarTwo(true);
    }, 200);
  }, []);

  useEffect(() => {
    if (isOpenCalendarOne === false) {
      setTimeout(() => {
        setIsOpenCalendarOne(true);
      }, 200);
    }

    if (isOpenCalendarTwo === false) {
      setTimeout(() => {
        setIsOpenCalendarTwo(true);
      }, 200);
    }
  }, [isOpenCalendarOne, isOpenCalendarTwo]);

  return (
    <>
      <div className="flex w-full gap-[24px] mb-[36px]">
        {/* DATE */}
        <div className="w-1/2">
          <span className="text-fs-12 m-s-b text-gry-100">
            {languageData.SearchBox.tabHotel.date}
          </span>
          <div className="flex px-[16px] py-[12.8px] border border-[#ebebeb] items-center gap-2 relative">
            <img
              className="w-[14px] h-[16px]"
              src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
            />
            {isOpenCalendarOne ? (
              <CalendarDate
                handelDate={handleDepartureDateChange}
                setIsOpen={setIsOpenCalendarOne}
                isOpen={isOpenCalendarOne}
                starDate={departureDate}
              />
            ) : (
              <input
                className="m-b text-fs-12 focus:outline-none w-full cursor-pointer"
                placeholder={
                  languageData.SearchBox.tabTransportation.autoCompleteArrival
                }
                readOnly
              />
            )}
          </div>
        </div>

        {/* HOUR */}
        <div className="w-1/2">
          <div className="text-fs-12 m-s-b text-gry-100">
            {languageData.ModalTransport.Schedule}
          </div>
          <div className="flex py-[11.5px] px-[16px] border border-[#ebebeb] items-center gap-2 relative">
            <img
              className=""
              src={`${process.env.NEXT_PUBLIC_URL}icons/general/schedule.svg`}
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
            />
            <input
              type="time"
              id="timeInput"
              className="focus:outline-0 bg-white text-fs-12 m-m time-input"
              value={departureTime || ""}
              onChange={handleDepartureTimeChange}
            />
          </div>
        </div>
      </div>

      {/* ROUND */}
      {typeTransport === "round" && (
        <div className="flex w-full gap-[24px] mb-[36px]">
          {/* DATE */}
          <div className="w-1/2">
            <span className="text-fs-12 m-s-b text-gry-100">
              {languageData.SearchBox.tabHotel.date}
            </span>
            <div className="flex px-[16px] py-[11.5px] border border-[#ebebeb] items-center gap-2 relative">
              <img
                className="w-[14px] h-[16px]"
                src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
              />
              {isOpenCalendarOne ? (
                <CalendarDateRounded
                  handelDate={handleComebackDateChange}
                  setIsOpen={setIsOpenCalendarTwo}
                  isOpen={isOpenCalendarTwo}
                  starDate={departureDate}
                  comebackDate={comebackDate}
                />
              ) : (
                <input
                  className="m-b text-fs-12 focus:outline-none w-full cursor-pointe"
                  placeholder={
                    languageData.SearchBox.tabTransportation.autoCompleteArrival
                  }
                  readOnly
                />
              )}
            </div>
          </div>

          {/* HOUR */}
          <div className="w-1/2">
            <div className="text-fs-12 m-s-b text-gry-100">
              {languageData.ModalTransport.Schedule}
            </div>
            <div className="flex py-[11.5px] px-[16px] border border-[#ebebeb] items-center gap-2 relative">
              <img
                className=""
                src={`${process.env.NEXT_PUBLIC_URL}icons/general/schedule.svg`}
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
              />
              <input
                type="time"
                id="timeInput"
                className="focus:outline-0 bg-white text-fs-12 m-m time-input"
                value={comebackTime || ""}
                onChange={handleComebackTimeChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
