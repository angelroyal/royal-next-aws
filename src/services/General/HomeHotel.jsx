"use client";

import React from "react";

import "../../assets/styles/web/Hotel.css";

import SearchBox from "@/hooks/SearchBox";
import { Container } from "@/config/Others/Container";
import {
  BannerExcDiscounts,
  BannerHomeHotelTop,
  BannerHomeKnowMore,
} from "@/services/Hotels/components/home/bannerHotel";

import ShuffleHotel from "@/services/Hotels/components/home/ShuffleHotel";
import TourRecommended from "@/services/Hotels/components/home/TourRecommended";
import { PopularState } from "@/components/General/PopularEstates";
import { TransportBanner } from "@/services/Hotels/components/home/TransportBanner";
import AutocompleteHotel from "../Hotels/Search/AutocompleteHotel";

export const HomeHotel = () => {
  return (
    <>
      <div className="relative flex justify-center align-center mb-[256px] lg:mb-[118px]">
        <BannerHomeHotelTop />
        <div className="absolute top-[67%] sm:top-[60%] md:top-[63%] lg:top-[73%] xl:top-[80%] 2xl:top-[81%] w-full flex flex-col items-center">
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

        <AutocompleteHotel />
      </Container>
    </>
  );
};

export default HomeHotel;
