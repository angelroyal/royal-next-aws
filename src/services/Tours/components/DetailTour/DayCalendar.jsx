"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DayCalendar() {
  return (
    <Swiper
      // slidesPerView={"auto"}
      spaceBetween={18}
      // loop={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 2.7,
        },
        600: { slidesPerView: 4 },

        700: {
          slidesPerView: 4.5,
        },

        850: {
          slidesPerView: 5.5,
        },

        1200: {
          slidesPerView: 6,
        },

        1500: {
          slidesPerView: 7,
        },
      }}
      id="dates-tour-modal"
      navigation={true}
    >
      <SwiperSlide id="date-tour-modal">
        <div>hola</div>
      </SwiperSlide>
    </Swiper>
  );
}
