"use client";
// OLD
// import flatpickr from "flatpickr";
// import "flatpickr/dist/l10n/es.js";
// import "flatpickr/dist/flatpickr.min.css";
// import React, { useEffect, useRef, useContext } from "react";
// NEW
import { Fragment, useState } from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { getArrayMonth, getIndexArrayDate } from '@/config/calendar/GetArrayMonth';


// const months = arrayMouths[IndexDate];

const months = [
  {
    key:0,
    name: 'Enero',
    days: [
      { date: '2021-12-27' },
      { date: '2021-12-28' },
      { date: '2021-12-29' },
      { date: '2021-12-30' },
      { date: '2021-12-31' },
      { date: '2022-01-01', isCurrentMonth: true },
      { date: '2022-01-02', isCurrentMonth: true },
      { date: '2022-01-03', isCurrentMonth: true },
      { date: '2022-01-04', isCurrentMonth: true },
      { date: '2022-01-05', isCurrentMonth: true },
      { date: '2022-01-06', isCurrentMonth: true },
      { date: '2022-01-07', isCurrentMonth: true },
      { date: '2022-01-08', isCurrentMonth: true },
      { date: '2022-01-09', isCurrentMonth: true },
      { date: '2022-01-10', isCurrentMonth: true },
      { date: '2022-01-11', isCurrentMonth: true },
      { date: '2022-01-12', isCurrentMonth: true, isToday: true },
      { date: '2022-01-13', isCurrentMonth: true },
      { date: '2022-01-14', isCurrentMonth: true },
      { date: '2022-01-15', isCurrentMonth: true },
      { date: '2022-01-16', isCurrentMonth: true,  isToday: true },
      { date: '2022-01-17', isCurrentMonth: true },
      { date: '2022-01-18', isCurrentMonth: true },
      { date: '2022-01-19', isCurrentMonth: true },
      { date: '2022-01-20', isCurrentMonth: true },
      { date: '2022-01-21', isCurrentMonth: true },
      { date: '2022-01-22', isCurrentMonth: true },
      { date: '2022-01-23', isCurrentMonth: true },
      { date: '2022-01-24', isCurrentMonth: true },
      { date: '2022-01-25', isCurrentMonth: true },
      { date: '2022-01-26', isCurrentMonth: true },
      { date: '2022-01-27', isCurrentMonth: true },
      { date: '2022-01-28', isCurrentMonth: true },
      { date: '2022-01-29', isCurrentMonth: true },
      { date: '2022-01-30', isCurrentMonth: true },
      { date: '2022-01-31', isCurrentMonth: true },
      { date: '2022-02-01' },
      { date: '2022-02-02' },
      { date: '2022-02-03' },
      { date: '2022-02-04' },
      { date: '2022-02-05' },
      { date: '2022-02-06' },
    ],
  },
  {
    key:1,
    name: 'Febrero',
    days: [
      { date: '2021-12-27' },
      { date: '2021-12-28' },
      { date: '2021-12-29' },
      { date: '2021-12-30' },
      { date: '2021-12-31' },
      { date: '2022-01-01', isCurrentMonth: true },
      { date: '2022-01-02', isCurrentMonth: true },
      { date: '2022-01-03', isCurrentMonth: true },
      { date: '2022-01-04', isCurrentMonth: true },
      { date: '2022-01-05', isCurrentMonth: true },
      { date: '2022-01-06', isCurrentMonth: true },
      { date: '2022-01-07', isCurrentMonth: true },
      { date: '2022-01-08', isCurrentMonth: true },
      { date: '2022-01-09', isCurrentMonth: true },
      { date: '2022-01-10', isCurrentMonth: true },
      { date: '2022-01-11', isCurrentMonth: true },
      { date: '2022-01-12', isCurrentMonth: true },
      { date: '2022-01-13', isCurrentMonth: true },
      { date: '2022-01-14', isCurrentMonth: true },
      { date: '2022-01-15', isCurrentMonth: true },
      { date: '2022-01-16', isCurrentMonth: true },
      { date: '2022-01-17', isCurrentMonth: true },
      { date: '2022-01-18', isCurrentMonth: true },
      { date: '2022-01-19', isCurrentMonth: true },
      { date: '2022-01-20', isCurrentMonth: true },
      { date: '2022-01-21', isCurrentMonth: true },
      { date: '2022-01-22', isCurrentMonth: true },
      { date: '2022-01-23', isCurrentMonth: true },
      { date: '2022-01-24', isCurrentMonth: true },
      { date: '2022-01-25', isCurrentMonth: true },
      { date: '2022-01-26', isCurrentMonth: true },
      { date: '2022-01-27', isCurrentMonth: true },
      { date: '2022-01-28', isCurrentMonth: true },
      { date: '2022-01-29', isCurrentMonth: true },
      { date: '2022-01-30', isCurrentMonth: true },
      { date: '2022-01-31', isCurrentMonth: true },
      { date: '2022-02-01' },
      { date: '2022-02-02' },
      { date: '2022-02-03' },
      { date: '2022-02-04' },
      { date: '2022-02-05' },
      { date: '2022-02-06' },
    ],
  },
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}


import LanguageContext from "../language/LanguageContext";
import { GetArrayMonth } from '@/config/calendar/GetArrayMonth';

function Calendar({ onDateChange, listing = false, hotelDetails = false }) {
  // OLD
    // const calendarRef = useRef(null);
    // // const language = localStorage.getItem("language") || "es";
    // const language =
    //   typeof localStorage !== "undefined"
    //     ? localStorage.getItem("language") || "es"
    //     : "es";

    // useEffect(() => {
    //   const handleDateChange = (selectedDates) => {
    //     onDateChange(selectedDates);
    //     localStorage.setItem("selectedDates", JSON.stringify(selectedDates));
    //   };

    //   const storedDates = localStorage.getItem("selectedDates");
    //   if (storedDates) {
    //     const selectedDates = JSON.parse(storedDates);
    //     const startDate = new Date(selectedDates[0]);
    //     const currentDate = new Date();

    //     // ACCEPT DATE SELECTED 0
    //     const minDate =
    //       startDate.getTime() - currentDate.getTime() < 48 * 60 * 60 * 1000
    //         ? startDate
    //         : new Date(currentDate.getTime() + 48 * 60 * 60 * 1000);

    //     flatpickr(calendarRef.current, {
    //       mode: "range",
    //       dateFormat: "d/m/y",
    //       minDate: minDate,
    //       maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
    //       inline: false,
    //       onChange: handleDateChange,
    //       locale: {
    //         ...flatpickr.l10ns[language],
    //         rangeSeparator: " - ",
    //         separator: " - ",
    //       },
    //       defaultDate: selectedDates,
    //       showMonths: window.innerWidth < 768 ? 1 : 2,
    //       disableMobile: true,
    //     });
    //   } else {
    //     flatpickr(calendarRef.current, {
    //       mode: "range",
    //       dateFormat: "d/m/y",
    //       minDate: new Date(new Date().getTime() + 48 * 60 * 60 * 1000),
    //       maxDate: new Date(new Date().getFullYear() + 1, 11, 31),
    //       locale: {
    //         ...flatpickr.l10ns[language],
    //         rangeSeparator: " - ",
    //         separator: " - ",
    //       },
    //       showMonths: window.innerWidth < 768 ? 1 : 2,
    //       inline: false,
    //       onChange: handleDateChange,
    //       disableMobile: true,
    //     });
    //   }
    // }, []);
    // const { languageData } = useContext(LanguageContext);
  // NEW

  const arrayMouths = getArrayMonth();
  const IndexDate = getIndexArrayDate('2024-04-16', arrayMouths);
  const [months, setMonths] = useState(arrayMouths[IndexDate]);
  const [positionCalendar, setPositionCalendar] = useState(IndexDate);

  const handleClick = (position = false) => {
    console.log('El div fue clickeado con el parámetro:', position);
    if (!position) {
      if (positionCalendar >= 0) {
        if (positionCalendar > 0) {
          console.log('entro al if del false');
          let auxpositionCalendar = positionCalendar -1;
          setPositionCalendar(auxpositionCalendar);
          setMonths(arrayMouths[auxpositionCalendar]);
        } else {
          console.log('entro al else del false');
          setPositionCalendar(0);
          setMonths(arrayMouths[0]);
        }
      }
    }

    // if (position) {
    //   if (positionCalendar <= (arrayMouths.length - 1)) {
    //     if (positionCalendar > 0) {
    //       console.log('entro al if del false');
    //       let auxpositionCalendar = positionCalendar -1;
    //       setPositionCalendar(auxpositionCalendar);
    //       setMonths(arrayMouths[auxpositionCalendar]);
    //     } else {
    //       console.log('entro al else del false');
    //       setPositionCalendar(0);
    //       setMonths(arrayMouths[0]);
    //     }
    //   }
    // }

    if (position) {
      if (positionCalendar <= (arrayMouths.length - 1)) {
        console.log('entro al if del true');
        let auxpositionCalendar = positionCalendar +1;
        setPositionCalendar(auxpositionCalendar);
        setMonths(arrayMouths[auxpositionCalendar]);
      }
      if(positionCalendar == arrayMouths.length -1){
        console.log('entro al else del true');
        setPositionCalendar(arrayMouths.length -1);
        setMonths(arrayMouths[arrayMouths.length -1]);
      }
    }

    // console.log(positionCalendar);

    // Aquí puedes agregar la lógica que desees ejecutar cuando el div sea clickeado

  };

  console.log(arrayMouths);
  console.log(IndexDate);
  return (

    // <>
    // </>
    ///OLD
      // <div
      //   className={`${
      //     listing === false && "lg:w-[290px]"
      //   } border-2 border-gray-200 rounded py-2.5 px-4 flex items-center w-full `}
      // >
      //   <div className="flex items-center gap-2 w-full">
      //     {listing === false && (
      //       <img
      //         className="h-[18px] w-4 invert"
      //         src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
      //         alt="calendar icon royal vacation"
      //       />
      //     )}
      //     <div className="flex relative w-full">
      //       <span className="absolute top-0 left-0 m-s-b text-fs-10 text-gry-70">
      //         Fecha
      //       </span>

      //       <input
      //         className={`${
      //           hotelDetails && "bg-gry-30"
      //         } mt-3 m-b text-fs-12 focus:outline-none w-full cursor-pointer`}
      //         type="text"
      //         ref={calendarRef}
      //         placeholder={languageData.SearchBox.tabHotel.dateText}
      //         // id="check-in"
      //       />
      //     </div>
      //   </div>
      // </div>
    // NEW
    <div className='absolute z-[4]'>
      <div className="w-[700px]">
        <div  className="bg-white p-[25px] rounded-[9px]  grid grid-cols-2 gap-6">
          {months.map((month) => (
            <section key={month.name} className="text-center">
              {
                month.key == 0 ?
                <div className='flex justify-between'>
                    <div
                      className='bg-[#efefef] hover:bg-[#ee8b43] cursor-pointer w-[30px] pl-[12px] pt-[5px] rounded-[9px] h-[24px]'
                      onClick={() => handleClick()}
                    >
                    <img src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/left-bl.svg`} className='w-[6px]'/>
                  </div>
                    <h2 className="m-auto text-sm font-semibold text-gray-900">{month.name} {month.año}</h2>
                </div>
                :
                <div className='flex justify-between'>
                  <h2 className="m-auto text-sm font-semibold text-gray-900">{month.name} {month.año}</h2>
                  <div
                    className='bg-[#efefef] hover:bg-[#ee8b43] cursor-pointer w-[30px] pl-[13px] pt-[5px] rounded-[9px] h-[24px]'
                    onClick={() => handleClick(true)}
                  >
                    <img src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/right-bl.svg`} className='w-[6px]'/>
                  </div>
                </div>
              }

              <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
                <div>Do</div>
                <div>Lu</div>
                <div>Ma</div>
                <div>Mi</div>
                <div>Ju</div>
                <div>Vi</div>
                <div>Sa</div>
              </div>
              <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg  text-sm ring-gray-200">
                {month.days.map((day, dayIdx) => (
                  <button
                    key={day.date}
                    type="button"
                    className={classNames(
                      day.isCurrentMonth ? 'bg-white text-gray-900' : 'text-gray-400 opacity-[0.3]',
                      dayIdx === 0 && 'rounded-tl-lg',
                      dayIdx === 6 && 'rounded-tr-lg',
                      dayIdx === month.days.length - 7 && 'rounded-bl-lg',
                      dayIdx === month.days.length - 1 && 'rounded-br-lg',
                      'py-1.5 hover:bg-gray-100 focus:z-10'
                    )}
                  >
                    <time
                      dateTime={day.date}
                      className={classNames(
                        day.isToday && 'bg-indigo-600 font-semibold text-white',
                        'mx-auto flex h-7 w-7 items-center justify-center rounded-full'
                      )}
                    >
                      {day.date.split('-').pop().replace(/^0/, '')}
                    </time>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>

  );
}

export default Calendar;
