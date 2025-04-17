"use client";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

import { useContext, useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  fetchHotelDetailsByKeys,
  fetchPostHotels,
} from "@/services/Hotels/config/axiosService";
import LanguageContext from "@/language/LanguageContext";
import { combineHotelData } from "@/services/Hotels/utils/hotelUtils";
import { BestHotelCart } from "@/services/Hotels/components/home/BestHotelCart";
import { CardTopActivitiesSkeleton } from "@/components/Skeleton/CardTopActivitiesSkeleton";

export default function HotelRecommendation({ params, paramsHotel, hotelsMap }) {
  const { languageData } = useContext(LanguageContext);
  // const [hotelsMap, setHotelsMap] = useState([]);
  const [hotelsInfo, setHotelsInfo] = useState([]);


  useEffect(() => {
    console.log(hotelsMap);
    
    if (hotelsMap.length > 0) {
      let hotelsKeysReduce = hotelsMap.slice(0, 20);
      const keysHotel = hotelsKeysReduce.map((hotel) => hotel.key);

      fetchHotelDetailsByKeys(keysHotel).then((response) => {
        let dataCombine = combineHotelData(hotelsKeysReduce, response);
        setHotelsInfo(dataCombine);
      });
    }
  }, [hotelsMap]);

  return (
    <>
      <div className="bg-white p-[36px] relative rounded-lg my-[28px]">
        {/* TITLE */}
        <div className="mb-[36px]">
          <span className="m-b text-fs-20">
            {languageData.recommendations.hotel.titleRecommedation}
          </span>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={12}
          id="swiper-tour-recommendation"
          navigation
          modules={[Navigation]}
          className="mySwiper !static mb-0"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
            1536: {
              slidesPerView: 4.5,
            },
          }}
        >
          {/* CARD HOTEL */}
          {hotelsInfo.length > 0
            ? hotelsInfo.map((hotelMap, index) => (
                <SwiperSlide key={index} className="!rounded-lg">
                  <BestHotelCart
                    params={params}
                    hotel={hotelMap}
                    paramsH={paramsHotel}
                  />
                </SwiperSlide>
              ))
            : [...Array(5)].map((_, index) => (
                <SwiperSlide key={index} className="!rounded-lg">
                  <CardTopActivitiesSkeleton />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </>
  );
}
