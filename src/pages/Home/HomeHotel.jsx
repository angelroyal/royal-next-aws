"use client";

import React, { useContext } from "react";

import "../../assets/styles/web/Hotel.css";

// import {
//   BannerHomeTop,
//   BannerHomeDown,
// } from "../../components/bannerJsx/bannerHomeHotel";
// import MetaHomeH from "../../components/Meta/MetaHomeH";
import SearchBox from "@/hooks/SearchBox";
import { Container } from "@/config/Others/Container";
import { PopularState } from "@/utils/hotel/PopularStates";
import PopularCarousel from "@/utils/hotel/PopularCarousel";
import LanguageContext from "../../language/LanguageContext";
// import { BannerHomeDown } from "@/components/bannerJsx/bannerHomeHotel";
import {
  BannerExcDiscounts,
  BannerHomeHotelTop,
  BannerHomeKnowMore,
} from "@/services/Hotels/components/home/bannerHotel";

import ShuffleHotel from "@/services/Hotels/components/home/ShuffleHotel";
import TourRecommended from "@/services/Hotels/components/home/TourRecommended";

// const CardCarousel = lazy(() => import("../../utils/hotel/CardCarousel"));
// const PopularCarousel = lazy(() => import("../../utils/hotel/PopularCarousel"));

export const HomeHotel = () => {
  const { languageData } = useContext(LanguageContext);

  return (
    <>
      {/* <MetaHomeH /> */}
      {/* <BannerHomeTop /> */}
      <div className="relative flex justify-center align-center mb-[306px] xl:mb-[118px]">
        <BannerHomeHotelTop />
        <div className="absolute top-2/4 sm:top-2/4 md:top-3/4 xl:top-[80%] 2xl:top-[86%] w-full flex flex-col items-center">
          <SearchBox />
        </div>
      </div>

      <Container>
        <BannerExcDiscounts />
        <PopularState />
        <ShuffleHotel />
        <TourRecommended />
        <BannerHomeKnowMore />
      </Container>

      {/* <BannerHomeDown /> */}

      {/* CARD POPULAR" */}
      {/* <article className="top-destination container">
        <h1 data-aos="fade-right" className="container title-popular">
          {languageData.homeDestinations[0].titleTop.title}
        </h1>

        <PopularCarousel />
        <br />
      </article>
      <br />
      <br />
      <div className="container"></div> */}

      {/* Card TYPE HOTELS */}
      {/* <article className="carousel-destination container">
        <h1 data-aos="fade-right" className="title-popular">
          {languageData.homeDestinations[1].titleType}
        </h1>

        <CardCarousel />
      </article> */}
    </>
  );
};

export default HomeHotel;
