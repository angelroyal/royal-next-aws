"use client";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

import React, { useContext, useEffect, useState } from 'react'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LanguageContext from "@/language/LanguageContext";
import { getCatalogueTransport } from "../Api/RequestRecommendation";
import { CatalogueRoutesCard } from "@/services/Transport/Home/RecommendedTransport";
export default function TransportRecommendation() {
    
    const { languageData } = useContext(LanguageContext);

    const [transportCatalogs, setTransportCatalogs] = useState([]);

    useEffect(() => {
      const responseCatalogue = async ()=>{
        const response = await getCatalogueTransport();
        console.log(response);
        if(response){
          setTransportCatalogs(response.data);
        }
      }
      responseCatalogue();
    }, []);


    return (

        <div className='bg-white rounded-lg p-[36px] relative'>

            <div className='flex justify-between items-center mb-[36px] max-md:flex-col max-md:items-start'>

                {/* TITLE */}
                <span className='text-fs-20 m-b max-md:text-fs-16'>{languageData.recommendations.transport.titleRecommedation}</span>

                {/* BTN CHOOSE TRANSPORT */}
                <button className='m-s-b bg-bl-100 text-white text-fs-12 rounded-full py-[14px] px-[16px] hover:bg-bl-110'>{languageData.recommendations.transport.btnchoose}</button>
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
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 3.5,
                    },
                    1280: {
                        slidesPerView: 4.5,
                    },
                    1536: {
                        slidesPerView: 5,
                    },
                }}
            >
                {/* CART TRANSPORT */}
                {transportCatalogs.length > 0 && transportCatalogs.map((transportData, index) => (
                    <SwiperSlide key={index} className="!rounded-lg">
                        <div className="flex flex-col gap-2 p-[16px] rounded-lg bg-white shadow-3xl">
                            <CatalogueRoutesCard transport={transportData} recommended={true}/>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}
