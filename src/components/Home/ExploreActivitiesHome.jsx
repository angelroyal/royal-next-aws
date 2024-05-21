"use client";

import Image from "next/image";
import { useContext } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import CardTourHome from "./CardTourHome";
import LanguageContext from "@/language/LanguageContext";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

export default function ExploreActivitiesHome() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col my-[180px] max-sm:my-[90px]">
      {/* TITLE EXPLORE ACTIVITIES HOME*/}
      <span className="m-b text-fs-28 mb-[4px]">
        {languageData.exploreActivitiesHome.titleExplore}
      </span>

      {/* SUBTITLE EXPLORE ACTIVITIES HOME */}
      <span className="m-m text-fs-16 text-gry-100 mb-[32px]">
        {languageData.exploreActivitiesHome.weRecommended}
      </span>

      <div className="w-full flex h-[717px] gap-[5vw] max-lg:flex-col max-lg:h-auto max-xl:gap-[12px]">
        {/* SWIPER EXPLORE ACTIVITIES HOME */}
        <div className="w-[45%] relative max-lg:w-full max-lg:h-[500px]">
          <Swiper
            slidesPerView={1}
            className="h-full rounded-lg"
            id="swiper-home-explore-activities"
            initialSlide={0}
            navigation
            modules={[Navigation]}
          >
            {[...Array(5)].map((_, index) => (
              <SwiperSlide className="!rounded-lg shadow-3xl" key={index}>
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/BannerHomeTour.webp`}
                  alt="banner-offers"
                  className="h-full w-full rounded-lg select-none object-cover"
                />

                <div className="w-[190px] h-[190px] rounded-full border-[32px] border-yw-100 absolute top-[-114px] right-[-31px]" />

                <div className="h-[395px] absolute bottom-0 w-full">
                  <div style={{ height: 138, overflow: "hidden" }}>
                    <svg
                      viewBox="0 0 500 150"
                      preserveAspectRatio="none"
                      style={{ height: "100%", width: "100%" }}
                    >
                      <path
                        d="M429.73,151.48 C487.30,161.36 500.84,102.14 502.54,72.55 L512.13,156.42 L506.49,183.06 Z"
                        style={{ stroke: "none", fill: "#FCB41E" }}
                      />
                    </svg>
                  </div>

                  <div className="w-full h-[80%] bg-yw-100 rounded-tl-[50px]" />

                  <div className="absolute bottom-0 pb-[49px] pl-[47.5px] pr-[59.5px] flex flex-col gap-[8px] max-sm:pb-[20px]">
                    <h3 className="text-fs-28 m-s-b">Cancún</h3>

                    <p className="m-m text-fs-14">
                      En Cancún encontrarás fascinantes sitios arqueológicos
                      como el cercano complejo de ruinas mayas de Tulum y la
                      misteriosa ciudad precolombina de Chichén Itzá.
                    </p>

                    <button className="m-b text-fs-16 flex items-center w-fit px-[24px] py-[10px] bg-white rounded-full gap-[8px] hover:!bg-gry-30">
                      {languageData.titleBanners.bannerHoteldecided.knowMore}
                      <Image
                        src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/arrow-right.svg`}
                        width={16}
                        height={12}
                        alt="icon-arrow"
                      />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/*CARDS TOUR EXPLORE ACTIVITIES HOME */}
        <div className="w-[55%] grid grid-cols-2 gap-[16px] max-lg:w-full gap-x-[46px] max-xl:gap-[12px] max-sm:grid-cols-1">
          {[...Array(4)].map((_, index) => (
            <CardTourHome key={index} />
          ))}
        </div>

      </div>
    </div>
  );
}
