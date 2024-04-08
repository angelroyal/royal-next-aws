"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../../assets/styles/general/Swiper.css";
import { Navigation } from 'swiper/modules';
export default function DayCalendar() {
   const [selectIndex, setSelectIndex] = useState(0)

  const selectDate = (index)=>{
    setSelectIndex(index)
  }
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <span className="text-black m-s-b text-16 w-max">
          Elige fecha y hora
        </span>

        <div className="flex gap-x-[6px] items-center cursor-pointer">
          <img
            src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-bl-100.svg`}
            width="14px"
            height="13.3px"
            alt="calendar bl"
            className="h-[19px] w-[19px]"
          />

          <p className="m-0 text-bl-100 m-s-b text-fs-16 mr-">
            Ver más detalles
          </p>
        </div>
      </div>

      <div className="relative pr-[58px] mt-[16px]">
        <Swiper
          // slidesPerView={"auto"}
          spaceBetween={8}
          // loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.7,
            },
            500:{
              slidesPerView: 4,
            },
            800:{

              slidesPerView: 5,
            },
            1024:{
              slidesPerView: 3.5,
            },
            1270: {
              slidesPerView: 5.4,
            },
          }}
          id="dates-tour-modal"
          className="!static h-max"
          navigation={true}
          modules={[ Navigation]}
        >
          {[...Array(8)].map((_, index) => (
            <SwiperSlide
              id="date-tour-modal"
              className={`${selectIndex === index ? 'bg-bl-100' : 'bg-white hover:bg-gry-30'} rounded-md p-2 flex flex-col border border-gry-70 cursor-pointer`}
              onClick={()=>selectDate(index)}
              key={index}
            >
              <div className="border-b border-gry-70 pb-[3.5px] mb-[3.5px] flex flex-col items-center">
                <span className={`${selectIndex === index ? 'text-white' : 'text-gry-100'} m-s-b text-fs-12 `}>Mar</span>
                <h3 className={`${selectIndex === index ? 'text-white' : 'text-black'} m-b test-fs-20 `}>27</h3>
                <span className={`${selectIndex === index ? 'text-white' : 'text-black'} m-s-b text-fs-12 `}>Enero</span>
              </div>

              <div className="flex flex-col gap-y-1 items-center">
                <span className={`${selectIndex === index ? 'text-white' : 'text-gry-100'} text-fs-10 m-m`}>
                  Desde
                </span>
                <span className={`${selectIndex === index ? 'text-white' : 'text-black'} m-b text-fs-14`}>$691</span>
                <span className={`${selectIndex === index ? 'text-white' : 'text-black'} text-8 m-b text-fs-8`}>MXN</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
