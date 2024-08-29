"use client";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useState, useEffect } from "react";

import BannerCardHome from "./BannerCardHome";
import LanguageContext from "@/language/LanguageContext";
import { shuffleHotelTypes } from "@/services/Hotels/config/shuffleHotelTypes";
import { ImageContext } from "@/context/ImageContext";

export default function BannersHeaderHome(props) {
  const [dashedOne, setDashedOne] = useState([
    { key: 1, value: true },
    { key: 2, value: false },
    { key: 3, value: false },
    { key: 4, value: false },
    { key: 5, value: false },
    { key: 6, value: false },
    { key: 7, value: false },
    { key: 8, value: false },
  ]);

  useEffect(() => {
    const interval = 30000 / dashedOne.length;

    dashedOne.forEach((item, index) => {
      setTimeout(() => {
        setDashedOne((prevDashedOne) =>
          prevDashedOne.map((el) =>
            el.key === item.key ? { ...el, value: true } : el
          )
        );
      }, interval * index);
    });
    setGetImg(dataImg);
  }, []);

  const { dataImg } = props;
  const { getImg, setGetImg } = useContext(ImageContext);

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
    <div className="relative flex items-center justify-center h-[442px] md:h-72 2xl:h-[480px] w-full ">
      {getImg ? (
        <img
          src={getImg.home.bannerHome[deviceType]}
          width="1366px"
          height="480px"
          alt="Banner Home"
          className="w-full h-full object-cover select-none"
        />
      ) : (
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full" />
      )}
    </div>
  );
}

export function BannersHomeOffers(props) {
  const { languageData } = useContext(LanguageContext);

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
  }, [dataImg]);

  return (
    <div className="w-full flex h-[434px] justify-between gap-[12px] max-xl:h-[347px] max-lg:h-[262px] max-md:flex-col max-md:h-auto">
      <div className="w-[70%] max-md:w-full max-sm:h-[440px] z-0">
        {getImg ? (
          <Swiper
            slidesPerView={1}
            className="h-full rounded-lg"
            id="swiper-banner-home-offers"
            initialSlide={0}
            navigation
            modules={[Navigation]}
          >
            {getImg.home.offertsCarrousel[deviceType].map(
              (imgCarrousel, index) => (
                <SwiperSlide className="!rounded-lg relative" key={index}>
                  <img
                    src={imgCarrousel}
                    alt="banner-offers"
                    className="md:block  w-full select-none object-cover max-sm:h-full" // Cambiado de object-contain a object-cover
                  />

                  {/* HIDDEN BUTTON BANNER */}
                  <button className="hidden absolute left-0 max-lg:right-0 w-fit max-lg:mx-auto lg:left-[49px] bottom-[60px] lg:bottom-[114px] bg-white rounded-full items-center h-[38px] lg:h-[44px] px-[18px] lg:px-[22px] hover:bg-gry-30 focus:outline-none border-0 gap-x-[6px]">
                    <p className="m-0 text-or-100 m-b text-fs-12 lg:text-fs-16">
                      {languageData.enjoyStayHome.bookNowBtn}
                    </p>

                    <Image
                      className="w-[12px] lg:w-[16px] h-[8px] lg:h-[12px]"
                      width={16}
                      height={12}
                      src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/right-or-100.svg`}
                      alt="arrows-right-or-100"
                    />
                  </button>
                </SwiperSlide>
              )
            )}
          </Swiper>
        ) : (
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
        )}
      </div>

      <div className="w-[30%] max-md:w-full">
        {getImg ? (
          <img
            src={getImg.home.offerBaggage[deviceType]}
            className="h-full w-full rounded-lg select-none object-cover" // Cambiado de object-contain a object-cover
            alt="Banner Experimenta los mejores tours"
          />
        ) : (
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
        )}
      </div>
    </div>
  );
}

export function BannersHomeExclusiveDiscounts(props) {
  const { languageData, language } = useContext(LanguageContext);
  // const bannerDiscounts = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-discounts.jpg`;
  // const bannerDiscountsSecond = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-discounts-second.jpg`;

  const shuffleTypes = shuffleHotelTypes;
  const [randomNumber, setRandomNumber] = useState(null);
  const [shuffle, setShuffle] = useState(null);

  useEffect(() => {
    const generateRandomNumber = () => {
      return Math.floor(Math.random() * 3) + 1; // Genera un número entre 0 y 3
    };
    setRandomNumber(generateRandomNumber());
  }, []);

  useEffect(() => {
    if (randomNumber) {
      const hotelList = shuffleTypes.find((item) => item[randomNumber]);
      setShuffle(Object.values(hotelList[randomNumber]).slice(0, 6));
    }
  }, [randomNumber]);

  const searchHotel = (hotel) => {
    window.open(
      `/${language}/mx/${hotel.destinationCodeName}-mexico/${hotel.destinationCodeName}-hotels/${hotel.codeName}`,
      "_blank"
    );
  };

  // IMG MARK
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
  }, [dataImg]);
  return (
    <>
      <div className="flex w-full 2xl:gap-[1vw] gap-[10px] h-[280px] my-[32px] max-md:flex-col max-md:h-auto max-lg:h-[252px] justify-between">
        <div className="2xl:w-fit 2xl:gap-[3vw] w-[570px] flex gap-[10px] max-lg:w-full max-lg:hidden max-md:flex max-md:justify-between max-sm:hidden">
          <div className="w-[280px] shadow-3xl rounded-lg">
            {getImg ? (
              <img
                src={getImg.home.offerHotel[deviceType]}
                className="w-full h-full rounded-lg select-none aspect-square object-contain"
                alt="banner offers hotel"
              />
            ) : (
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
            )}
          </div>

          <div className="w-[280px] shadow-3xl rounded-lg">
            {getImg ? (
              <img
                src={getImg.home.offerTour[deviceType]}
                className="w-full h-full rounded-lg select-none aspect-square"
                alt="banner discounts second"
              />
            ) : (
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
            )}
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
                {getImg ? (
                  <img
                    src={getImg.home.offerHotel[deviceType]}
                    className="w-full h-full rounded-lg select-none"
                  />
                ) : (
                  <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide className="!rounded-lg">
              <div className="rounded-lg">
                {getImg ? (
                  <img
                    src={getImg.home.offerTour[deviceType]}
                    className="w-full h-full rounded-lg select-none"
                  />
                ) : (
                  <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
                )}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* END SWIPER MOBILE */}

        <div className="2xl:w-[54.6%] w-[60.6%] shadow-3xl rounded-lg max-sm:h-[250px] max-2xl:w-[52.6%] max-xl:w-[39.6%] max-lg:w-[63.6%] max-md:w-full max-md:h-[280px] ">
          <Swiper
            slidesPerView={1}
            className="h-full rounded-lg"
            id="swiper-exclusive-discounts"
            initialSlide={0}
            navigation
            modules={[Navigation]}
          >
            {shuffle &&
              shuffle.map((hotel, index) => (
                <SwiperSlide
                  className="!rounded-lg cursor-pointer"
                  key={index}
                  onClick={() => searchHotel(hotel)}
                >
                  <img
                    src={hotel.image}
                    alt="banner-offers"
                    className="object-cover relative h-full w-full rounded-lg select-none"
                  />

                  <BannerCardHome hotel={hotel} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>

      <div className="m-m text-fs-12 text-gry-100 flex justify-center gap-1 mb-[80px]">
        <span>
          {languageData.bannersHome.textTyC}{" "}
          <a
            className="text- m-s-b text-black underline decoration-solid"
            href={`/${language}/tyc`}
            target="_blank"
          >
            {" "}
            {languageData.bannersHome.here}
          </a>
        </span>
      </div>
    </>
  );
}

export function BannersHomeOffersNow(dataImg) {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col">
      <span className="m-b text-fs-28 ">
        {languageData.bannersHome.currentOffers}
      </span>

      <span className="m-m text-fs-16 text-gry-100 mb-[22px]">
        {languageData.bannersHome.limitedPromotions}
      </span>

      <OffersNow dataImg={dataImg.dataImg} />
    </div>
  );
}

export function OffersNow(props) {
  // const offersNow = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-offers-now.jpg`;
  // const offersNowSecond = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-offers-now-2.jpg`;

  // const offersNowMobile = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-publicity-2-m.jpg`;
  // const offersNowSecondMobile = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-publicity-m.jpg`;

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
  }, [dataImg]);

  return (
    <>
      <div className="w-full flex gap-[2vw] max-lg:hidden justify-between">
        <div className="w-[50%]">
          {getImg ? (
            <img
              src={getImg.home.bannerBlue[deviceType]}
              alt="banner-offers"
              className="w-full rounded-lg select-none "
            />
          ) : (
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
          )}
        </div>

        <div className="w-[50%] ">
          {getImg ? (
            <img
              src={getImg.home.bannerYellow[deviceType]}
              alt="banner-offers"
              className="w-full rounded-lg select-none object-cover"
            />
          ) : (
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
          )}
        </div>
      </div>

      {/* SWIPER MOBILE BANNER OFFERS NOW */}
      <div className="lg:hidden lg:h-[278px]">
        <Swiper
          slidesPerView={1}
          className="h-full rounded-lg"
          initialSlide={0}
          loop={true}
        >
          <SwiperSlide className="!rounded-lg">
            <div className="w-full h-full">
              {getImg ? (
                <img
                  src={getImg.home.bannerBlue[deviceType]}
                  alt="banner-offers"
                  className="h-full w-full rounded-lg select-none object-cover"
                />
              ) : (
                <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
              )}
            </div>
          </SwiperSlide>

          <SwiperSlide className="!rounded-lg">
            <div className="w-full h-full">
            {getImg ? (
                <img
                src={getImg.home.bannerYellow[deviceType]}
                alt="banner yellow tablet and mobile"
                className="h-full w-full rounded-lg select-none object-cover"
              />
              ) : (
                <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
              )}
             
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* END SWIPER MOBILE BANNER OFFERS NOW */}
    </>
  );
}
