"use client";

import "swiper/css";
import "swiper/css/navigation";

import React, { useContext, useEffect, useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Tour } from "@/config/Others/imagesBanners";
import { ImageContext } from "@/context/ImageContext";
import LanguageContext from "@/language/LanguageContext";

export default function BannerHeaderTour(props) {
  const { dataImg } = props;
  const { languageData } = useContext(LanguageContext);
  const { getImg, setGetImg } = useContext(ImageContext);

  // DISPLAY LAP , TAB and MOB
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    setGetImg(dataImg);

    const handleResize = () => {
      const width = window.innerWidth;

      if (width > 1024) {
        setDeviceType("laptop");
      } else if (width > 640 && width <= 1024) {
        setDeviceType("tablet");
      } else if (width <= 640) {
        setDeviceType("mobile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // BANNER TOUR HEADER

    <div className="relative flex items-center justify-center h-[442px] md:h-72 2xl:h-[480px] w-full ">
      {getImg ? (
        <Swiper
          className="h-[442px] md:h-72 2xl:h-[480px] w-full !z-0"
          slidesPerView={1}
          id="swiper-banner-home"
          navigation
          modules={[Navigation, Autoplay]}
          loop={true}
          cssMode={true}
          autoplay={{
            delay: 6000,
          }}
        >
          {getImg?.tour?.bannerTour?.[deviceType]?.length === 0 ? (
            <SwiperSlide>
              <img
                src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-t.jpg`}
                alt="no-availability principal banner tour"
                className="w-full h-full"
              />
            </SwiperSlide>
          ) : (
            getImg.tour.bannerTour[deviceType].map((imgCarrousel, index) => (
              <SwiperSlide
                className="!flex items-center justify-center"
                key={index}
              >
                <img
                  src={imgCarrousel}
                  className="object-cover	w-full h-full object-center select-none"
                  alt="banner-principal-tour"
                  width="100%"
                  height="100%"
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      ) : (
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full" />
      )}
      <h1 className="absolute text-white m-b lg:text-fs-60 md:text-fs-40 max-sm:text-fs-20">
        {languageData.titleBanners[Tour.bannerHome.title]}
      </h1>
    </div>
  );
}
