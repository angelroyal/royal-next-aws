"use client";

import { useState } from "react";

const Hours = [
  "9:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "1:00 pm",
  "2:00 pm",
  "3:00 pm",
  "4:00 pm",
  "5:00 pm",
];

export function HoursSelect() {
  const [indexSelected, setIndexSelected] = useState(0);

  const hourSelected = (index) => {
    setIndexSelected(index);
  };

  return (
    <div className="py-9">
      <p className="m-s-b text-black text-fs-14 text-start pb-4">Horarios</p>

      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-x-4 gap-y-[9px] xl:pr-[63px]">
        {Hours.map((hour, index) => (
          <div
            onClick={() => hourSelected(index)}
            className={`${
              indexSelected === index ? "border-bl-100" : "hover:bg-gry-30 border-gry-70"
            } border rounded py-2 px-4 w-[83px] cursor-pointer`}
          >
            <p
              className={`${
                indexSelected === index ? "text-bl-100" : "text-gry-100"
              } text-center text-fs-12 m-s-b m-0 w-max`}
            >
              {hour}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
