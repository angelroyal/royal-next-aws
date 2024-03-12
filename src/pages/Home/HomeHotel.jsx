"use client";

import React, { useContext } from "react";

import "../../assets/styles/web/Hotel.css";

// import {
//   BannerHomeTop,
//   BannerHomeDown,
// } from "../../components/bannerJsx/bannerHomeHotel";
// import MetaHomeH from "../../components/Meta/MetaHomeH";
import LanguageContext from "../../language/LanguageContext";
import {
  BannerHomeDown,
  BannerHomeTop,
} from "@/assets/bannerJsx/bannerHomeHotel";
import PopularCarousel from "@/utils/hotel/PopularCarousel";
import { PopularState } from "@/utils/hotel/PopularStates";
import { BannerExcDiscounts, BannerHomeKnowMore } from "@/services/Hotels/components/home/bannerHotel";
import { Container } from "@/config/Others/Container";

// import ShuffleHotel from "@/services/Hotels/components/home/ShuffleHotel";

// const CardCarousel = lazy(() => import("../../utils/hotel/CardCarousel"));
// const PopularCarousel = lazy(() => import("../../utils/hotel/PopularCarousel"));

export const HomeHotel = () => {
  const { languageData } = useContext(LanguageContext);

  return (
    <>
      {/* <MetaHomeH /> */}
      <BannerHomeTop />

      <Container>
      <BannerExcDiscounts/>
      <BannerHomeKnowMore/>
      </Container>
      <BannerHomeDown />

      {/* CARD POPULAR" */}
      <article className="top-destination container">
        <h1 data-aos="fade-right" className="container title-popular">
          {languageData.homeDestinations[0].titleTop.title}
        </h1>

        <PopularCarousel />
        <br />
      </article>
      <br />
      <br />
      <div className="container">
        <PopularState />
      </div>

      {/* Card TYPE HOTELS */}
      <article className="carousel-destination container">
        <h1 data-aos="fade-right" className="title-popular">
          {languageData.homeDestinations[1].titleType}
        </h1>

        {/* <CardCarousel /> */}
      </article>
    </>
  );
};

export default HomeHotel;
