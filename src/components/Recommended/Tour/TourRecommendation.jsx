"use client";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

import React, { useContext } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LanguageContext from "@/language/LanguageContext";
import CardTopActivities from "@/services/Tours/Home/CardTopActivities";
import { CardTopActivitiesSkeleton } from "@/components/Skeleton/CardTopActivitiesSkeleton";

export default function TourRecommendation({ params, toursMap }) {
  const { languageData } = useContext(LanguageContext);

  return (
    <>
      {toursMap.length !== 0 && (
        <div className="bg-white p-[36px] relative rounded-lg my-[28px] max-md:p-[20px]">
          <div className="mb-[36px]">
            {/* TITLE */}
            <span className="m-b text-fs-20 max-md:text-fs-16">
              {languageData.recommendations.tour.titleRecommendation}
            </span>
          </div>

          <Swiper
            slidesPerView={4}
            spaceBetween={12}
            id="swiper-tour-recommendation"
            navigation
            modules={[Navigation]}
            className="mySwiper !static mb-0"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              500: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2.8,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1536: {
                slidesPerView: 4.8,
              },
            }}
          >
            {/* CART TOUR */}
            {toursMap.length > 0
              ? toursMap.map((tour, index) => (
                  <SwiperSlide key={index} className="!rounded-lg">
                    <CardTopActivities
                      tour={tour}
                      key={index}
                      params={params}
                    />
                  </SwiperSlide>
                ))
              : [...Array(5)].map((_, index) => (
                  <SwiperSlide key={index} className="!rounded-lg">
                    <CardTopActivitiesSkeleton />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
