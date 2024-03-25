"use client"
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import Image from "next/image";
import LanguageContext from "@/language/LanguageContext";

export function BannerHomeTour() {
    const excDiscounts = `${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/cenote-san-antonio.webp`;
    const bannerTraveling = `${process.env.NEXT_PUBLIC_URL}general/Banner-Traveling.webp`;
    const bannerTour = `${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/xplor-feb24.webp`;
  
    const { languageData } = useContext(LanguageContext);
  
    return (
      <Swiper
        slidesPerView={3}
        spaceBetween={16}
        className="h-[235px]"
        // loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
          1440: {
            slidesPerView: 3,
          },
  
        }}>
  
  
        {/* <div className="flex h-[271px] gap-4 w-full  max-xl:h-[227px] max-lg:h-auto overflow-x-auto"> */}
        <SwiperSlide className="!w-1/2 max-lg:!w-full max-md:!w-full !bg-gry-30">
          <div className="w-full  h-[235px] flex justify-center">
            <Image src={excDiscounts} width={547} height={273} className=" max-sm:hidden w-full h-full rounded-lg object-cover" alt="Banner Exc Discounts"/>
          </div>
        </SwiperSlide>
  
        <SwiperSlide className="!w-[266px] max-lg:!w-1/2 max-sm:!w-full !bg-gry-30 !flex !justify-center">
          <div className="relative w-full h-[235px] flex justify-center">
            <Image src={bannerTraveling} width={266} height={235} className="w-[99%] h-[99%] max-sm:w-auto rounded-lg" alt="Banner Experimenta los mejores tours" />
  
            <div className="absolute top-[39px] left-[33px] max-xl:top-[32px] max-xl:left-[33px] max-sm:left-[26%] max-sm:top-[40px] max-sm:w-[53%]">
              <h2 className="m-b w-9/12 text-white text-fs-20 mb-4 text-left">{languageData.titleBanners.titleTourMexico}</h2>
              <h4 className="m-m w-9/12 text-[#BEE0EE] text-fs-18 text-left" >{languageData.titleBanners.subtitleTourM}</h4>
            </div>
          </div>
        </SwiperSlide>
  
        <SwiperSlide className="!w-[266px] max-lg:!w-1/2 max-sm:!w-full !bg-gry-30 !flex !justify-center">
          <div className="w-full h-[235px] flex justify-center">
            <Image src={bannerTour} width={266} height={235} className="w-[99%] h-[99%] max-sm:w-auto rounded-lg " alt="Banner tour mes de feb" />
          </div>
        </SwiperSlide>
  
        {/* </div> */}
      </Swiper>
    );
  }
