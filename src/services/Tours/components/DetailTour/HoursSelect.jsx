"use client";

import { useState, useContext, useEffect } from "react";
import moment from "moment";

import DetailTourContext from "../../context/DetailTourContext";

export function HoursSelect() {
  const { dayTour, setHourTour } = useContext(DetailTourContext);
  const [indexSelected, setIndexSelected] = useState(0);

  console.log(dayTour);

  // FIRST HOUR DEFAULT SET
  useEffect(() => {
    if (dayTour && dayTour.times && dayTour.times.length > 0) {
      setHourTour(dayTour.times[0]);
    }
  }, [dayTour, setHourTour]);

  // useEffect(() => {
  //   if (dayTour) {
  //     const firstAvailableIndex = dayTour.times.findIndex(
  //       (time) => time.quotaAvailable
  //     );
  //     if (firstAvailableIndex !== -1) {
  //       setHourTour(dayTour.times[firstAvailableIndex]);
  //       setIndexSelected(firstAvailableIndex);
  //     } else {
  //       setHourTour(null);
  //       setIndexSelected(null);
  //     }
  //   }
  // }, [dayTour, setHourTour]);

  // SELECT HOUR SET
  const hourSelected = (index) => {
    setIndexSelected(index);
    setHourTour(dayTour.times[index]);
  };

  return (
    <>
      {dayTour &&
        dayTour.times && (
        // dayTour.times.some((time) => time.quotaAvailable) && (
          <div className="py-9">
            <p className="m-s-b text-black text-fs-14 text-start pb-4">
              Horarios
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-x-4 gap-y-[9px] xl:pr-[63px]">
              {dayTour.times.map((hour, index) => (
                <div
                  onClick={() => hourSelected(index)}
                  className={`${
                    indexSelected === index
                      ? "border-bl-100"
                      : "hover:bg-gry-30 border-gry-70"
                  } border rounded py-2 px-4 w-[83px] cursor-pointer`}
                  key={index}
                >
                  <p
                    className={`${
                      indexSelected === index ? "text-bl-100" : "text-gry-100"
                    } text-center text-fs-12 m-s-b m-0 w-max`}
                  >
                    {moment(hour.time, "HH:mm").format("hh:mm A")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
    </>
  );
}
