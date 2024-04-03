"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import "../../../../assets/css/Hotel/GalleryImage.css";

export default function GalleryTour() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[20rem] md:h-[22rem] xl:h-[30rem] mt-4 rounded-lg
     "
      >
        <SwiperSlide>
          <img
            src="https://f.civitatis.com/mexico/cancun/excursion-bahia-akumal-cenote.jpg"
            className="object-cover w-full h-full select-none"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://f.civitatis.com/mexico/cancun/galeria/pez-bahia-akumal.jpg"
            className="object-cover w-full h-full select-none"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://f.civitatis.com/mexico/cancun/galeria/snorke-bahia-akumal-biodiversidad.jpg"
            className="object-cover w-full h-full select-none"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://f.civitatis.com/mexico/cancun/excursion-bahia-akumal-cenote.jpg"
            className="object-cover w-full h-full select-none"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://f.civitatis.com/mexico/cancun/excursion-bahia-akumal-cenote.jpg"
            className="object-cover w-full h-full select-none"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
