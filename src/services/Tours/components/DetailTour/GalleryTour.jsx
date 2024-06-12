"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../../assets/styles/general/Swiper.css";
import "../../../../assets/css/Hotel/GalleryImage.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";


export default function GalleryTour({ images }) {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        id="swiper-gallery-tour"
        className="mySwiper h-[20rem] md:h-[22rem] xl:h-[30rem] mt-4 rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt="image tour details carrousel"
              className="object-cover w-full h-full select-none"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
