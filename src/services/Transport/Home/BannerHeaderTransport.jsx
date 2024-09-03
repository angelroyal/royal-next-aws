"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { ImageContext } from "@/context/ImageContext";
import { Navigation, Autoplay } from "swiper/modules";
import { useContext, useEffect, useState } from "react";

export function BannerHeaderTransport(props) {
  const { dataImg } = props;
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
          {getImg.transporte.bannerTransportHome[deviceType].map((imgCarrousel, index) => (
            <SwiperSlide
              className="!flex items-center justify-center"
              key={index}
            >
              <img
                src={imgCarrousel}
                className="object-cover	w-full h-full object-center select-none"
                alt="banner-principal-home"
                width="100%"
                height="100%"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full" />
      )}
    </div>
    // <div className="relative flex items-center justify-center h-[442px] md:h-72 2xl:h-[480px] w-full ">
    //   <img
    //     src={`${process.env.NEXT_PUBLIC_URL}banners/transport/Banner-transport-home-top.webp`}
    //     width="1366px"
    //     height="480px"
    //     alt="Banner-transport-home-top"
    //     className="w-full h-full object-cover select-none"
    //   />
    // </div>
  );
}
