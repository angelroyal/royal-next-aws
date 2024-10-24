"use client";

import "swiper/css";
import "../../../assets/styles/general/Swiper.css";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useEffect, useState } from "react";

import { ImageContext } from "@/context/ImageContext";
import LanguageContext from "@/language/LanguageContext";

export function BannerHomeTransport() {
  // DISPLAY LAP , TAB and MOB
  const [deviceType, setDeviceType] = useState(null);
  useEffect(() => {
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
    <>
      <div className="max-lg:hidden">
        <BannerHomeTransportD deviceType={deviceType} />
      </div>
      <div className="lg:hidden">
        <BannerHomeTransportSwiper deviceType={deviceType} />
      </div>
    </>
  );
}

export function BannerHomeTransportSwiper(props) {
  // const bannerCartLeading = `${process.env.NEXT_PUBLIC_URL}banners/transport/banner-home-transport.jpg`;
  // const bannerCardSecond = `${process.env.NEXT_PUBLIC_URL}banners/transport/banner-home-transport-2.jpg`;
  // const bannerCardFinish = `${process.env.NEXT_PUBLIC_URL}banners/transport/banner-home%20transport-3.jpg`;
  const { deviceType } = props;
  const { getImg } = useContext(ImageContext);
  const { languageData } = useContext(LanguageContext);
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={16}
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
      }}
      loop={true}
      className="h-[19rem] mb-16 !z-0"
      id="swiper-banner-home-tour"
      initialSlide={0}
      breakpoints={{
        0: {
          slidesPerView: 0.5,
        },
        350: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.5,
        },
        // 1024: {
        //   slidesPerView: 2.5,
        // },
        // 1440: {
        //   slidesPerView: 3,
        // },
      }}
    >
      {/* ONE CARD TRANSPORT */}

      <SwiperSlide className="!w-[47%] max-lg:!w-full max-sm:!w-full !bg-gry-30 !rounded-lg">
        <div className="flex bg-white justify-center items-center shadow-3xl">
          <div className="w-[40%] flex flex-col pl-[25px] gap-3 max-sm:!w-[58%]">
            <span className="m-b text-fs-28">
              {languageData.bannerTransport.secureJourney}
            </span>
            <bottom className="px-[24px] py-[16px] bg-yw-100 hover:bg-yw-110 m-s-b text-fs-14 w-fit rounded-full text-nowrap">
              {languageData.bannerTransport.bookNowBtn}
            </bottom>
          </div>
          <div className="w-[60%] !bg-white">
            {getImg?.transporte?.bannerCar?.[deviceType]?.length === 0 ? (
              <img
                src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-t-new.jpg`}
                alt="no-availability"
                className="w-full h-full"
              />
            ) : getImg ? (
              <Image
                src={getImg.transporte.bannerCar[deviceType]}
                width={378}
                height={235}
                className="w-full h-[19rem] rounded-lg object-contain object-center select-none "
                alt="banner transport"
              />
            ) : (
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
            )}
          </div>
        </div>
      </SwiperSlide>
      {/*END ONE CARD TRANSPORT */}

      {/*TWO CARD TRANSPORT */}
      <SwiperSlide className="!w-1/4 max-lg:!w-1/2 max-sm:!w-full !flex !justify-center !bg-white">
        <div className="relative w-full flex justify-center ">
          {getImg?.transporte?.bannerBlue?.[deviceType]?.length === 0 ? (
            <img
              src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-t-new.jpg`}
              alt="no-availability"
              className="w-full h-full"
            />
          ) : getImg ? (
            <Image
              src={getImg.transporte.bannerBlue[deviceType]}
              width={266}
              height={235}
              className="w-full rounded-lg select-none"
              alt="Banner Experimenta los mejores tours"
            />
          ) : (
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
          )}
        </div>
      </SwiperSlide>
      {/*END TWO CARD TRANSPORT */}

      {/* THREE CARD TRANSPORT */}
      <SwiperSlide className="!w-1/4 max-lg:!w-1/2 max-sm:!w-full !flex !justify-center !bg-white">
        <div className="w-full flex justify-center">
          {getImg?.transporte?.bannerTransport?.[deviceType]?.length === 0 ? (
            <img
              src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-t-new.jpg`}
              alt="no-availability"
              className="w-full h-full"
            />
          ) : getImg ? (
            <Image
              src={getImg.transporte.bannerTransport[deviceType]}
              width={266}
              height={235}
              className="w-full rounded-lg select-none object-cover object-bottom"
              alt="Banner tour mes de feb"
            />
          ) : (
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
          )}
          <div className="absolute bottom-[30px] left-[33px] max-xl:top-[32px] max-xl:left-[33px] max-sm:left-[12%] max-sm:top-[40px]">
            <h2 className="m-b w-9/12 text-white text-fs-44 mb-5 text-left max-2xl:text-fs-22 max-xl:text-fs-18 max-lg:text-fsw-48 max-sm:text-fs-24">
              {languageData.bannerTransport.firstTime}
            </h2>
            <div className="bg-red-100 rounded-full flex w-fit">
              <span className="m-s-b text-white pl-[10px] py-[10px]">
                {languageData.bannerTransport.getOff}
              </span>
              <span className="m-s-b text-black p-[10px] bg-white rounded-lg ml-[10px]">
                {languageData.titleBanners.bannerHoteldecided.knowMore}
              </span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/*END THREE CARD TRANSPORT*/}
    </Swiper>
  );
}

export function BannerHomeTransportD(props) {
  // const bannerCartLeading = `${process.env.NEXT_PUBLIC_URL}banners/transport/banner-home-transport.jpg`;
  // const bannerCardSecond = `${process.env.NEXT_PUBLIC_URL}banners/transport/banner-home-transport-2.jpg`;
  // const bannerCardFinish = `${process.env.NEXT_PUBLIC_URL}banners/transport/banner-home%20transport-3.jpg`;

  const { deviceType } = props;
  const { getImg } = useContext(ImageContext);
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex gap-[16px] min-h-[320px]">
      <div className="flex bg-white justify-center items-center shadow-3xl w-1/2">
        <div className="w-[40%] flex flex-col pl-[25px] gap-3 max-sm:!w-[58%]">
          <span className="m-b text-fs-28">
            {languageData.bannerTransport.secureJourney}
          </span>
          <div className="px-[24px] py-[16px] bg-yw-100 m-s-b text-fs-14 w-fit rounded-full">
            {languageData.bannerTransport.bookNowBtn}
          </div>
        </div>
        <div className="w-[60%] !bg-white">
          {getImg?.transporte?.bannerCar?.[deviceType]?.length === 0 ? (
            <SwiperSlide>
              <img
                src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-t-new.jpg`}
                alt="no-availability"
                className="w-full h-full"
              />
            </SwiperSlide>
          ) : getImg ? (
            <Image
              // src={bannerCartLeading}
              src={getImg.transporte.bannerCar[deviceType]}
              width={378}
              height={235}
              className="w-full h-[19rem] rounded-lg object-contain object-center select-none "
              alt="Banner transport banner car"
            />
          ) : (
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
          )}
        </div>
      </div>

      <div className="relative flex justify-center w-3/12">
        {getImg?.transporte?.bannerBlue?.[deviceType]?.length === 0 ? (
          <SwiperSlide>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-t-new.jpg`}
              alt="no-availability"
              className="w-full h-full"
            />
          </SwiperSlide>
        ) : getImg ? (
          <Image
            // src={bannerCardSecond}
            src={getImg.transporte.bannerBlue[deviceType]}
            width={266}
            height={235}
            className="w-full rounded-lg select-none"
            alt="Banner Experimenta los mejores tours"
          />
        ) : (
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
        )}
      </div>

      <div className=" flex justify-center w-3/12 relative">
        {getImg?.transporte?.bannerTransport?.[deviceType]?.length === 0 ? (
          <SwiperSlide>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-t-new.jpg`}
              alt="no-availability"
              className="w-full h-full"
            />
          </SwiperSlide>
        ) : getImg ? (
          <Image
            // src={bannerCardFinish}
            src={getImg.transporte.bannerTransport[deviceType]}
            width={266}
            height={235}
            className="w-full rounded-lg select-none object-cover object-bottom"
            alt="Banner tour mes de feb"
          />
        ) : (
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
        )}
        <div className="absolute bottom-[30px] left-[33px] max-xl:top-[32px] max-xl:left-[2px] max-sm:left-[12%] max-sm:top-[40px]">
          <h2 className="m-b w-9/12 text-white text-fs-44 mb-5 text-left max-2xl:text-fs-30">
            {languageData.bannerTransport.firstTime}
          </h2>
          <div className="bg-red-100 rounded-full flex w-fit">
            <span className="m-s-b text-white pl-[10px] py-[10px] text-nowrap max-xl:text-fs-12">
              {languageData.bannerTransport.getOff}
            </span>
            <span className="m-s-b text-black p-[10px] bg-white rounded-lg ml-[10px] text-nowrap max-xl:text-fs-12">
              {languageData.titleBanners.bannerHoteldecided.knowMore}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BannerSafelyTransport({ scrollToTarget }) {
  const { languageData } = useContext(LanguageContext);

  const handleButtonClick = () => {
    if (typeof window !== "undefined") {
      const targetElement = document.getElementById("tab-search-home");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <div className="bg-gry-30 rounded-lg flex gap-[16px] max-lg:flex-col my-32">
      <img
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        src={`${process.env.NEXT_PUBLIC_URL}banners/transport/client-happy-transport.jpg`}
        alt="banner transporte persona sonriendo"
        className="w-1/2 rounded-l-lg max-lg:rounded-t-lg max-lg:rounded-bl-none max-lg:w-full max-lg:h-[22rem] select-none object-cover"
      />

      <div
        data-aos="fade-left"
        className="flex flex-col gap-4 pl-[56px] py-[80px] pr-[25px] items-start justify-center max-md:py-[24px] max-md:pl-[16px] max-md:pr-[36px]"
      >
        <h3 className="text-fs-36 m-b w-[75%] max-md:text-fs-26 max-lg:w-full">
          {languageData.bannerTransport.titleTravelSafely}
        </h3>
        <span className="m-m text-fs-16">
          {languageData.bannerTransport.ourDrivers}
        </span>
        <button
          className="px-[16px] py-[16px] rounded-full bg-yw-100 text-fs-14 m-s-b hover:bg-yw-110"
          onClick={handleButtonClick}
        >
          {languageData.bannerTransport.bookTransferBtn}
        </button>
      </div>
    </div>
  );
}
