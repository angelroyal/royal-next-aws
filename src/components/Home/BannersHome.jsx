"use client";

import { useContext } from "react";
import { Navigation } from "swiper/modules";
import BannerCardHome from "./BannerCardHome";
import { Swiper, SwiperSlide } from "swiper/react";
import LanguageContext from "@/language/LanguageContext";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

import React from "react";

export default function BannersHeaderHome() {
  return (
    <div className="relative flex items-center justify-center h-[442px] md:h-72 2xl:h-[480px] w-full ">
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/home/banner-home-top.webp`}
        width="1366px"
        height="480px"
        alt="Banner-transport-home-top"
        className="w-full h-full object-cover select-none"
      ></img>
    </div>
  );
}

export function BannersHomeOffers() {
  return (
    <div className="w-full flex h-[434px] justify-between gap-[12px] max-xl:h-[347px] max-lg:h-[262px] max-md:flex-col max-md:h-auto">
      <div className="w-[70%] max-md:w-full max-sm:h-[250px]">
        <Swiper
          slidesPerView={1}
          className="h-full rounded-lg"
          id="swiper-banner-home-offers"
          initialSlide={0}
          navigation
          modules={[Navigation]}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide className="!rounded-lg" key={index}>
              <img
                src={`${process.env.NEXT_PUBLIC_URL}banners/home/Rectangle 372.png`}
                alt="banner-offers"
                className="w-full select-none object-cover max-sm:h-full" // Cambiado de object-contain a object-cover
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-[30%] max-md:w-full">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-offers-second.jpg`}
          className="h-full w-full rounded-lg select-none object-cover" // Cambiado de object-contain a object-cover
          alt="Banner Experimenta los mejores tours"
        />
      </div>
    </div>
  );
}

export function BannersHomeExclusiveDiscounts() {
  const { languageData } = useContext(LanguageContext);
  const bannerDiscounts = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-discounts.jpg`;
  const bannerDiscountsSecond = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-discounts-second.jpg`;

  return (
    <div className="w-full">
      <div className="flex w-full 2xl:gap-[2vw] gap-[10px] h-[280px] my-[32px] max-md:flex-col max-md:h-auto max-lg:h-[252px]">

        <div className="2xl:w-fit 2xl:gap-[2vw] w-[570px] flex gap-[10px] max-lg:w-full max-lg:hidden max-md:block max-md:flex max-md:justify-between max-sm:hidden">

          <div className="w-[280px] shadow-3xl rounded-lg">
            <img
              src={bannerDiscounts}
              className="w-full h-full rounded-lg select-none aspect-square object-contain"
              alt="banner discounts"
            />
          </div>

          <div className="w-[280px] shadow-3xl rounded-lg">
            <img
              src={bannerDiscountsSecond}
              className="w-full h-full rounded-lg select-none aspect-square"
              alt="banner discounts second"
            />
          </div>
        </div>

        {/* SWIPER MOBILE */}
        <div className="lg:hidden w-[35%] max-md:w-full max-md:hidden max-sm:block">
          <Swiper
            slidesPerView={1}
            className="h-full rounded-lg shadow-3xl"
            initialSlide={0}
          >
            <SwiperSlide className="!rounded-lg">
              <div className="rounded-lg">
                <img
                  src={bannerDiscounts}
                  className="w-full h-full rounded-lg select-none"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="!rounded-lg">
              <div className="rounded-lg">
                <img
                  src={bannerDiscountsSecond}
                  className="w-full h-full rounded-lg select-none"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* END SWIPER MOBILE */}

        <div className="2xl:w-[56.6%] w-[60.6%] shadow-3xl rounded-lg max-sm:h-[250px] max-2xl:w-[52.6%] max-xl:w-[39.6%] max-lg:w-[63.6%] max-md:w-full max-md:h-[280px] ">
          <Swiper
            slidesPerView={1}
            className="h-full rounded-lg"
            id="swiper-exclusive-discounts"
            initialSlide={0}
            navigation
            modules={[Navigation]}
          >
            {[...Array(5)].map((_, index) => (
              <SwiperSlide className="!rounded-lg" key={index}>
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/BannerHomeTour.webp`}
                  alt="banner-offers"
                  className=" relarive h-full w-full rounded-lg select-none"
                />

                <BannerCardHome />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="m-m text-fs-12 text-gry-100 flex justify-center gap-1">
        <span>{languageData.bannersHome.textTyC}{" "}<span className="m-s-b text-black decoration-solid">
          {" "}
          {languageData.bannersHome.here}
        </span></span>

      </div>
    </div>
  );
}

export function BannersHomeOffersNow() {
  const { languageData } = useContext(LanguageContext);
  const offersNow = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-offers-now.jpg`;
  const offersNowSecond = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-offers-now-2.jpg`;

  return (
    <div className="flex flex-col my-[180px] max-sm:my-[90px]">
      <span className="m-b text-fs-28 ">
        {languageData.bannersHome.currentOffers}
      </span>

      <span className="m-m text-fs-16 text-gry-100 mb-[22px]">
        {languageData.bannersHome.limitedPromotions}
      </span>

      <div className="w-full flex h-[250px] gap-[2vw] max-lg:hidden justify-between">
        <div className="w-[50%]">
          <img
            src={offersNowSecond}
            alt="banner-offers"
            className="w-full rounded-lg select-none "
          />
        </div>

        <div className="w-[50%] ">
          <img
            src={offersNow}
            alt="banner-offers"
            className="w-full rounded-lg select-none object-cover"
          />
        </div>
      </div>

      {/* SWIPER MOBILE BANNER OFFERS NOW */}
      <div className="lg:hidden h-[278px]">
        <Swiper
          slidesPerView={1}
          className="h-full rounded-lg"
          initialSlide={0}
          loop={true}
        >
          <SwiperSlide className="!rounded-lg">
            <div className="w-full h-full">
              <img
                src={offersNow}
                alt="banner-offers"
                className="h-full w-full rounded-lg select-none object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="!rounded-lg">
            <div className="w-full h-full">
              <img
                src={offersNowSecond}
                alt="banner-offers"
                className="h-full w-full rounded-lg select-none object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* END SWIPER MOBILE BANNER OFFERS NOW */}
    </div>
  );
}
