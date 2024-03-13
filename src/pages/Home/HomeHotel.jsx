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
// import { PopularState } from "@/utils/hotel/PopularStates";
// PopularState
import LanguageContext from "../../language/LanguageContext";
// import { BannerHomeDown } from "@/components/bannerJsx/bannerHomeHotel";
import {
  BannerExcDiscounts,
  BannerHomeHotelTop,
  BannerHomeKnowMore,
} from "@/services/Hotels/components/home/bannerHotel";

import ShuffleHotel from "@/services/Hotels/components/home/ShuffleHotel";
import TourRecommended from "@/services/Hotels/components/home/TourRecommended";
import { PopularState } from "@/services/Hotels/components/home/PopularEstates";
import { TransportBanner } from "@/services/Hotels/components/home/TransportBanner";
// import PopularStates from "@/services/Hotels/components/home/PopularEstates";


// const CardCarousel = lazy(() => import("../../utils/hotel/CardCarousel"));
// const PopularCarousel = lazy(() => import("../../utils/hotel/PopularCarousel"));

export const HomeHotel = () => {
  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <div className="relative flex justify-center align-center mb-[224px] lg:mb-[118px]">
        <BannerHomeHotelTop />
        <div className="absolute top-[67%] sm:top-[60%] md:top-[44%] lg:top-[73%] xl:top-[80%] 2xl:top-[81%] w-full flex flex-col items-center">
          <SearchBox />
        </div>
      </div>

      <Container>
        <BannerExcDiscounts />
        <PopularState />
        <ShuffleHotel />
        <TransportBanner />
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
