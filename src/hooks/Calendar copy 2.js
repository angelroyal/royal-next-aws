"use client";

import { Fragment, useState } from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import LanguageContext from "../language/LanguageContext";
import { getArrayMonth, getIndexArrayDate, asignarKeys  } from '@/config/calendar/GetArrayMonth';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const Calendar = ({ onDateChange, listing = false, hotelDetails = false }) => {

  const arrayMouths = getArrayMonth();
  const IndexDate = getIndexArrayDate('2024-04-18', arrayMouths);
  const [months, setMonths] = useState(asignarKeys(arrayMouths[IndexDate]));
  const [positionCalendar, setPositionCalendar] = useState(IndexDate);
  const [dateRange, setDateRange] = useState(
    [
      {
        date: '',
        keyMonth: '',
        keyDay: '',
        index:''
      },
      {
        date: '',
        keyMonth: '',
        keyDay: '',
        index:''
      }
    ]
  );

  // Boton antes o despues para las fechas
  const handleClick = (position = false) => {

    if (!position) {
      if (positionCalendar >= 0) {
        if (positionCalendar > 0) {
          let auxpositionCalendar = positionCalendar -1;
          setPositionCalendar(auxpositionCalendar);
          setMonths(arrayMouths[auxpositionCalendar]);
        } else {
          setPositionCalendar(0);
          setMonths(arrayMouths[0]);
        }
      }
    }

    if (position) {
      if (positionCalendar <= (arrayMouths.length - 1)) {
        let auxpositionCalendar = positionCalendar +1;
        setPositionCalendar(auxpositionCalendar);
        setMonths(arrayMouths[auxpositionCalendar]);
      }
      if(positionCalendar == arrayMouths.length -1){
        setPositionCalendar(arrayMouths.length -1);
        setMonths(arrayMouths[arrayMouths.length -1]);
      }
    }

  };

  const renderTime = (day) => {
    // const commonClasses = 'bg-indigo-600 font-semibold text-white mx-auto flex h-7 w-7 items-center justify-center rounded-full';

    if (day.isToday && day.rangePosition === 0) {
      return classNames('bg-indigo-600 font-semibold text-white mx-auto flex h-7 w-7 items-center justify-center rounded-l-[9px]');
    } else if (day.isToday && day.rangePosition === 1) {
      return classNames('bg-indigo-600 font-semibold text-white mx-auto flex h-7 w-7 items-center justify-center rounded-r-[9px]');
    } else {
      return '';
    }
  };

  // Boton selecionar fecha rango
  //FUNCIONAL
  const selectDateRange = (keyMonth, keyDay, data) => {

    if ((dateRange[0].date == '' || dateRange[1].date == '') && data.isCurrentMonth) {
      // console.log(data);
      // FUNCIONAL

        const updatedMonths = months.map((month, index) => {
          if (index === keyMonth) {

            const updatedDays = month.days.map((day, dayIdx) => {
              // console.log(dateRange[0].keyDay);
              // console.log(dayIdx);
              // console.log(keyDay);

              if (dayIdx === keyDay) {
                return {
                  ...day,
                  isToday: true,
                  rangePosition: dateRange[0].date !== '' && dateRange[1].date === '' ? 1 : 0,
                };
              }
              // else if (
              //   dateRange[0].date !== '' && dateRange[1].date === '' &&
              //   dayIdx > dateRange[0].keyDay && dayIdx <= keyDay
              // ) {
              //   console.log(dayIdx);
              //   return {
              //     ...day,
              //     followUp: true,
              //   };
              // }
              else if (
                dateRange[0].date !== '' && dateRange[1].date === ''
                && ((keyMonth * 42) + dayIdx) > dateRange[0].index && ((keyMonth * 42) + dayIdx) <= data.key && day.isCurrentMonth
              ) {

                // console.log(((keyMonth * 42) + dayIdx));
                console.log(((dateRange[0].keyMonth * 42) + dayIdx));

                // console.log(((dateRange[0].keyMonth * 42) + dayIdx));
                // console
                // console.log(((dateRange[0].keyMonth * 42) + dayIdx));
                // console.log(((dateRange[0].keyMonth * 42) + dayIdx));


                // console.log(dateRange[0].index);
                // console.log(((keyMonth * 42) + dayIdx));
                // console.log(data.key);
                // console.log(dayIdx);
                // console.log(keyDay);

                return {
                  ...day,
                  followUp: true,
                };
              }
              else if (
                dateRange[1].date !== '' && dateRange[0].date !== '' &&
                dayIdx >= dateRange[0].keyDay && dayIdx < keyDay
              ) {
                return {
                  ...day,
                  followUp: true,
                };
              } else {
                return day;
              }
            });
            return {
              ...month,
              days: updatedDays,
            };
          } else {
            return month;
          }
        });
      //


      console.log(updatedMonths);
      setMonths(updatedMonths);
      if (dateRange[0].date != '' && dateRange[1].date == '') {
        let auxDateRange = dateRange;
        auxDateRange[1].date = data.date;
        auxDateRange[1].keyMonth = keyMonth;
        auxDateRange[1].keyDay = keyDay;
        auxDateRange[1].index = data.key;
        setDateRange(auxDateRange);
      }

      if (dateRange[0].date == '' && dateRange[1].date == '') {
        let auxDateRange = dateRange;
        auxDateRange[0].date = data.date;
        auxDateRange[0].keyMonth = keyMonth;
        auxDateRange[0].keyDay = keyDay;
        auxDateRange[0].index = data.key;
        setDateRange(auxDateRange);
      }
    }

    // if (dateRange[0].date != '' && dateRange[1].date != '') {
    //   console.log(dateRange);
    // }
  }



  return (
  <div className='absolute z-[4]'>
    <div className="w-[700px]">
      <div  className="bg-white p-[25px] rounded-[9px]  grid grid-cols-2 gap-6">
        {months.map((month, keyMonth) => (
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
                  <h2 className="m-auto text-sm font-semibold text-gray-900">{month.name} {month.year}</h2>
              </div>
              :
              <div className='flex justify-between'>
                <h2 className="m-auto text-sm font-semibold text-gray-900">{month.name} {month.year}</h2>
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
                    'py-1.5 hover:bg-gray-100 focus:z-10',
                    day.followUp && 'bg-[#c4c0c0]'
                  )}
                  onClick={() => selectDateRange(keyMonth,dayIdx, day)}
                >
                  <time
                    dateTime={day.date}
                    className={renderTime(day)}
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
