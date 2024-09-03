"use client";

// import React, { useContext, useEffect } from "react";
import React, { useEffect,useContext } from 'react';
import SearchBox from "@/hooks/SearchBox";
import { Container } from "@/config/Others/Container";
import {
  BannerExcDiscounts,
  BannerHomeHotelTop,
  BannerHomeKnowMore,
} from "@/services/Hotels/components/home/bannerHotel";

import { ImageContext } from "@/context/ImageContext";
import { PopularState } from "@/components/General/PopularEstates";
import ShuffleHotel from "@/services/Hotels/components/home/ShuffleHotel";
import TourRecommended from "@/services/Hotels/components/home/TourRecommended";
import { TransportBanner } from "@/services/Hotels/components/home/TransportBanner";
// import BtnShowNotification from "@/components/Alerts/Notifications/BtnShowNotification";

export const HomeHotel = (props) => {
  const { dataImg } = props;
  const { setGetImg } = useContext(ImageContext);

   useEffect(() => {
     setGetImg(dataImg);
   }, []);

  return (
    <>
      <div className="relative flex justify-center align-center mb-[256px] lg:mb-[118px]">
        <BannerHomeHotelTop />
        <div className="absolute top-[67%] sm:top-[60%] md:top-[63%] lg:top-[73%] xl:top-[80%] 2xl:top-[81%] w-full flex flex-col items-center z-[1]">
          <SearchBox />
        </div>
      </div>

      <Container>
        <BannerExcDiscounts/>
        <PopularState />
        <ShuffleHotel />
        <TransportBanner />
        <TourRecommended />
        <BannerHomeKnowMore />
        {/* <BtnShowNotification /> */}
      </Container>
    </>
  );
};

export default HomeHotel;
