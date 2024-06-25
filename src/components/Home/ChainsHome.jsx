"use client";

import Image from "next/image";
import { useContext } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LanguageContext from "@/language/LanguageContext";

import "swiper/css";

export default function ChainsHome({ typePage = null }) {
  const { languageData } = useContext(LanguageContext);
  const hotels = [
    {
      url: `${process.env.NEXT_PUBLIC_URL}img/home/logo-riu.jpg`,
      description: "Logo Oasis chains",
      width: 184,
      height: 81,
      class: "select-none",
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}img/home/logo-nick.jpg`,
      description: "Logo Riu chains",
      width: 156,
      height: 101,
      class: "select-none",
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}img/home/logo-oasis.jpg`,
      description: "Logo Iberostar chains",
      width: 185,
      height: 135,
      class: "select-none",
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}img/home/logo-dorado.jpg`,
      description: "Logo Barcelo chains",
      width: 156,
      height: 101,
      class: "select-none",
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}img/home/logo-barcelo.jpg`,
      description: "Logo Nickelodeon chains",
      width: 156,
      height: 101,
      class: "select-none object-cover",
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}img/home/logo-iberostar.jpg`,
      description: "Logo El Dorado chains",
      width: 156,
      height: 101,
      class: "select-none",
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}img/home/logo-barcelo.jpg`,
      description: "Logo Barcelo chains",
      width: 156,
      height: 101,
      class: "select-none",
    },
  ];

  return (
    <div className="mb-[56px]">
      <h2 className="m-b text-fs-28 mb-[36px]">
        {typePage
          ? languageData.exploreActivitiesHome.titleExploreTransport
          : languageData.exploreActivitiesHome.bestHotels}
      </h2>

      <div className="h-[135px]">
        <Swiper
          slidesPerView={6}
          spaceBetween={24}
          className="h-full rounded-lg mySwiper"
          id="swiper-banner-home-offers"
          initialSlide={0}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            428: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {hotels.map((hotel, index) => (
            <SwiperSlide
              className="!rounded-lg !flex !items-center"
              key={index}
            >
              <Image
                src={hotel.url}
                alt={hotel.description}
                className={hotel.class}
                width={hotel.width}
                height={hotel.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
