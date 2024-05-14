"use client";

import React, { useContext } from 'react'
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LanguageContext from '@/language/LanguageContext';

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

export default function PopularDestinationsHome() {

    const { languageData } = useContext(LanguageContext);

    return (

        <div className='flex flex-col gap-[36px] my-[180px] relative'>
            <h2 className='text-fs-28 m-b '>{languageData.homeDestinations[0].titleTop.title}</h2>

            <Swiper
                slidesPerView={1}
                className="rounded-lg w-full !static"
                spaceBetween={12}
                id="swiper-popular-destinations-home"
                initialSlide={0}
                navigation
                modules={[Navigation]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    390: {
                        slidesPerView: 1.4,
                    },
                    500: {
                        slidesPerView: 1.8,
                    },
                    620: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 3.5,
                    },
                    1280: {
                        slidesPerView: 5,
                    },
                }}
            >
                {[...Array(8)].map((_, index) => (
                    <SwiperSlide className="!rounded-lg" key={index}>
                        <div className='h-[280px] relative'>
                            <img src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/BannerHomeTour.webp`} alt='banner-offers' className="w-full h-full rounded-lg select-none object-cover" />

                            <div className='flex flex-col pl-[16px] pb-[16px] absolute bottom-0 gap-[4px]'>
                                <span className='m-b text-white text-fs-14'>Ciudad de Mexico</span>
                                <span className='flex items-center gap-1 m-m text-white text-fs-12'>hoteles desde <span className='text-fs-14'>MXN $1,427.00</span></span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}
