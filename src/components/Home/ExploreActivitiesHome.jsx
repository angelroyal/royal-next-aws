"use client";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useEffect, useState } from "react";
import { Navigation, Controller } from "swiper/modules";

import CardTourHome from "./CardTourHome";
import { getActivitiesHome } from "./Api/RequestHome";
import LanguageContext from "@/language/LanguageContext";
import { getNextMonth } from "@/config/Others/getNextMonth";
import { BannerActivity, CartActivities } from "./Skeleton/ActivitysSkeleton";

export default function ExploreActivitiesHome() {
  const { languageData, language } = useContext(LanguageContext);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [activities, setActivities] = useState(null);
  const [positionActual, setPositionActual] = useState(0);
  const [resultActivities, setResultActivities] = useState(null);
  const router = useRouter();

  useEffect(() => {
    getActivitiesHome().then((response) => {
      setActivities(response.data);
    });
  }, []);

  useEffect(() => {
    setResultActivities(null);
    if (activities) {
      setTimeout(() => {
        setResultActivities(activities[positionActual]);
      }, 200);
    }
  }, [positionActual, activities]);

  const handleSlideChange = (swiper) => {
    setPositionActual(swiper.activeIndex);
  };

  const activityDetails = (activity) => {
    const body = {
      codeNameTour: activity.codeName,
      destination: activity.destinationName,
      code: activity.key,
      type: "destination",
      dateStart: getNextMonth(),
      adults: 2,
      children: 0,
    };
    const country = activity.country.toLowerCase();
    const query = new URLSearchParams(body).toString();

    const newURL = `/${language}/mx/${activity.codeName}-${country}/tours?${query}`;
    router.push(newURL);
  };

  // LP
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 4); // Genera un número entre 0 y 3
  }
  
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
        <div className="w-[50%] relative max-lg:w-full max-lg:h-[500px] overflow-hidden rounded-lg shadow-3xl">
          {/* SWIPER IMG */}
          <Swiper
            slidesPerView={1}
            className="h-full rounded-lg"
            id="swiper-home-explore-activities"
            onSlideChange={handleSlideChange}
            initialSlide={0}
            modules={[Controller]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
          >
            {activities ? (
              activities.map((activity, index) => (
                <SwiperSlide className="!rounded-lg z-[1]" key={index}>     
                  <Image
                    src={activity.activities[randomNumber].image}
                    alt="activity home"
                    width={547}
                    height={717}
                    className="h-[73%] w-full select-none object-cover max-lg:h-[61%]"
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <BannerActivity />
              </SwiperSlide>
            )}

            <div className="h-[314px] absolute bottom-0 w-full z-[2]">
              <img
                src={`${process.env.NEXT_PUBLIC_URL}img/home/curve-yellow.png`}
                alt="curve yellow"
                className="w-full h-full"
              />
            </div>

            <div className="w-[190px] h-[190px] rounded-full border-[32px] border-yw-100 absolute top-[-114px] right-[-31px] z-[2]" />
          </Swiper>

          {/* SWIPER TEXT */}
          <Swiper
            slidesPerView={1}
            className="h-full rounded-lg !absolute top-0 w-full"
            id="swiper-home-explore-activities"
            initialSlide={0}
            navigation
            modules={[Navigation, Controller]}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
          >
            {activities &&
              activities.map((activity, index) => (
                <SwiperSlide className="!rounded-lg z-[1]" key={index}>
                  <div className="absolute bottom-0 pb-[49px] pl-[32.5px] pr-[17.5px] md:pl-[47.5px] md:pr-[59.5px] pt-[30px] flex flex-col gap-[8px] max-sm:pb-[20px] z-[4] max-xl:pb-[10px] max-lg:pb-[49px]">
                    <h3 className="text-fs-28 m-s-b">
                      {activity.destinationName}
                    </h3>
                    <p className="m-m md:text-fs-14 text-fs-12 m-0">
                      {activity.description}
                    </p>
                    <button
                      className="m-b text-fs-16 flex items-center w-fit px-[24px] py-[10px] bg-white rounded-full gap-[8px] hover:!bg-gry-30"
                      onClick={() => activityDetails(activity)}
                    >
                      {languageData.titleBanners.bannerHoteldecided.knowMore}
                      <Image
                        src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/arrow-right.svg`}
                        width={16}
                        height={12}
                        alt="icon-arrow"
                      />
                    </button>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {/*CARDS TOUR EXPLORE ACTIVITIES HOME */}
        <div className="w-[55%] grid grid-cols-2 max-sm:grid-cols-1 gap-[16px] max-lg:w-full gap-x-[46px] max-xl:gap-[12px]">
          {resultActivities
            ? resultActivities.activities.map((activity, index) => (
                <CardTourHome activity={activity} key={index} />
              ))
            : [...Array(4)].map((_, index) => <CartActivities key={index} />)}
        </div>
      </div>
    </div>
  );
}
