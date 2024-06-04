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
  const IndexDate = getIndexArrayDate(new Date().toISOString().slice(0, 10), arrayMouths);
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
  const [fullDateRange, setFullDateRange] = useState(false);
  // const [reserverDate, setReverseDate] = useState(false);

  // Boton antes o despues para las fechas
  const handleClick = (position = false) => {

    if (!position) {
      if (positionCalendar > IndexDate) {
        if (positionCalendar >= 0) {
          if (positionCalendar > 0) {
            let auxpositionCalendar = positionCalendar -1;
            setPositionCalendar(auxpositionCalendar);
            setMonths(arrayMouths[auxpositionCalendar]);
            // console.log(arrayMouths[auxpositionCalendar]);
          } else {
            setPositionCalendar(0);
            setMonths(arrayMouths[0]);
          }
        }
      }
    }

    if (position) {

      if (positionCalendar <= (arrayMouths.length - 1)) {
        let auxpositionCalendar = positionCalendar +1;
        // new
        // let newMouths = [
        //   arrayMouths[positionCalendar][1],
        //   arrayMouths[auxpositionCalendar][0]
        // ]
        // // console.log(newMouths);
        // newMouths[0].key = 0;
        // newMouths[1].key = 1;
        setPositionCalendar(auxpositionCalendar);
        // console.log(newMouths);
        // setMonths(newMouths);
        // old
        setMonths(arrayMouths[auxpositionCalendar]);
        // console.log(arrayMouths[auxpositionCalendar]);
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
    let updatedMonths = [];
    let reserverDate = false;
    if ((dateRange[0].date == '' || dateRange[1].date == '') && data.isCurrentMonth && !fullDateRange)
    {

      if (dateRange[0].date != '' &&  new Date(data.date) < new Date(dateRange[0].date)) {
        months[keyMonth].days[dateRange[0].keyDay].rangePosition = 1;
      }
      updatedMonths = months.map((month, index) => {
        const updatedDays = month.days.map((day, dayIdx) => {
          let isToday = false;
          let shouldFollowUp = false;
          let newDate = new Date(data.date);
          let startDate = new Date(dateRange[0].date);
          // let endDate = new Date(dateRange[1].date);

          if (dateRange[0].date !== '' && dateRange[1].date === '' && day.date === data.date && day.isCurrentMonth) {
            // Esto funciona para saber que las fechas se invirtieron
            if (newDate < startDate) {
              // setReverseDate(true);

              // console.log(reserverDate);
              // updatedMonths[dateRange[0].index].rangePosition = 1;




              isToday = true;
              day.rangePosition = 0;
              // Update date range with the end date
              let auxDateRange = dateRange;
              auxDateRange[1] = { ...dateRange[0] };
              auxDateRange[0].date = data.date;
              auxDateRange[0].keyMonth = keyMonth;
              auxDateRange[0].keyDay = keyDay;
              auxDateRange[0].index = data.key;
              setDateRange(auxDateRange);
              setFullDateRange(true);
              reserverDate = true;


            } else {
              // Set range end
              isToday = true;
              day.rangePosition = 1;
              // Update date range with the end date
              let auxDateRange = dateRange;
              auxDateRange[1].date = data.date;
              auxDateRange[1].keyMonth = keyMonth;
              auxDateRange[1].keyDay = keyDay;
              auxDateRange[1].index = data.key;
              setDateRange(auxDateRange);
              setFullDateRange(true);
            }

          }
          else if (dateRange[0].date == '' && day.date === data.date && day.isCurrentMonth) {
            // Set range start
            isToday = true;
            day.rangePosition = 0;
            // Update date range with the start date
            let auxDateRange = [...dateRange];
            auxDateRange[0] = { date: day.date, keyMonth: index, keyDay: dayIdx, index: index * 42 + dayIdx };
            setDateRange(auxDateRange);
          }

          // Calculate followUp for days between start and end
          if (dateRange[0].date !== '' && dateRange[1].date === '') {
            // console.log(index * 42 + dayIdx);
            let startKey = dateRange[0].index;
            let currentKey = index * 42 + dayIdx;
            let selectedKey = keyMonth * 42 + keyDay;
            shouldFollowUp = day.isCurrentMonth && currentKey > startKey && currentKey < selectedKey;
          }

          // if (test) {
          //   console.log('entro aqui');
          //   // console.log(index * 42 + dayIdx);
          //   // console.log('entro al if de fullDateRange');
          //   let startKey = dateRange[0].index;
          //   let currentKey = index * 42 + dayIdx;
          //   let selectedKey = keyMonth * 42 + keyDay;
          //   shouldFollowUp = day.isCurrentMonth && currentKey > startKey && currentKey < selectedKey;
          // }

          return {
            ...day,
            isToday: isToday || (day.isToday && day.isCurrentMonth),
            followUp: shouldFollowUp
          };
        });

        return { ...month, days: updatedDays };
      });

      setMonths(updatedMonths);
    }


    if ((dateRange[0].date != '' && dateRange[1].date != '') && data.isCurrentMonth && fullDateRange) {
      // setMonths(asignarKeys(arrayMouths[IndexDate]));
      // console.log(asignarKeys(arrayMouths[IndexDate]));
      // console.log('entro aqui');
      // setReverseDate(false);

      updatedMonths = asignarKeys(arrayMouths[positionCalendar]).map((month, index) => {
        let isToday = false;
        const updatedDays = month.days.map((day, dayIdx) => {
          if (day.date === data.date && day.isCurrentMonth) {
            // console.log('entro en el if');
            // console.log(index * 42 + dayIdx);
            isToday = true;
            day.rangePosition = 0;
            setDateRange(
              [
                {
                  date: day.date,
                  keyMonth: index,
                  keyDay: dayIdx,
                  index: index * 42 + dayIdx
                },
                {
                  date: '',
                  keyMonth: '',
                  keyDay: '',
                  index: ''
                }
              ]
            );
          }
          return {
            ...day,
            isToday: isToday || (day.isToday && day.isCurrentMonth),
          };
        });

        return { ...month, days: updatedDays };
      });
      setMonths(updatedMonths);
      setFullDateRange(false);
    }

    if (reserverDate) {
      updatedMonths = updatedMonths.map((month, index) => {
        let shouldFollowUp = false;
        const updatedDays = month.days.map((day, dayIdx) => {
          let startKey = dateRange[0].index;
          let currentKey = index * 42 + dayIdx;
          let selectedKey = dateRange[1].index;
          shouldFollowUp = day.isCurrentMonth && currentKey > startKey && currentKey < selectedKey;
          day.followUp = shouldFollowUp;

          return { ...day }
        });

        return { ...month, days: updatedDays };
      });
      setMonths(updatedMonths);
    }

    console.log(updatedMonths);
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
                    day.followUp === true && '!bg-[#b4b3b3]'
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
