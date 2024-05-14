"use client";

import { useContext } from "react";
import { Navigation } from "swiper/modules";
import BannerCardHome from "./BannerCardHome";
import { Swiper, SwiperSlide } from "swiper/react";
import LanguageContext from "@/language/LanguageContext";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

import React from 'react'

export default function BannersHeaderHome() {
    return (
        <div className='relative flex items-center justify-center h-[442px] md:h-72 2xl:h-[480px] w-full '>
            <img
                src={`${process.env.NEXT_PUBLIC_URL}img/home/banner-home-top.webp`}
                width="1366px"
                height="480px"
                alt="Banner-transport-home-top"
                className='w-full h-full object-cover select-none'>

            </img>
        </div>
    )
}


export function BannersHomeOffers() {

    return (
        <div className="flex w-full gap-[16px] h-[400px] my-[32px] max-lg:flex-col max-lg:h-auto">

            <div className="!w-[70%] shadow-3xl rounded-lg max-lg:!w-full max-lg:h-[400px]">

                <Swiper
                    slidesPerView={1}
                    className="h-full rounded-lg"
                    id="swiper-banner-home-offers"
                    initialSlide={0}
                    navigation
                    modules={[Navigation]}
                >
                    {[...Array(5)].map((_, index) => (

                        <SwiperSlide className="!rounded-lg" key={index}>
                            <img src={`${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-offers.jpg`} alt='banner-offers' className="h-full w-full rounded-lg select-none object-cover" />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

            <picture className="w-[30%] max-lg:!w-full max-lg:h-[400px]">

                <div className="w-full h-full shadow-3xl rounded-lg">
                    <img src={`${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-offers-second.jpg`} className="w-full h-full rounded-lg select-none object-cover" alt="Banner Experimenta los mejores tours" />
                </div>

            </picture>

        </div>
    )
}


export function BannersHomeExclusiveDiscounts() {

    const { languageData } = useContext(LanguageContext);
    const bannerDiscounts = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-discounts.jpg`;
    const bannerDiscountsSecond = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-discounts-second.jpg`;

    return (
        <div>

            <div className="flex w-full gap-[10px] h-[280px] my-[32px] max-lg:flex-col max-lg:h-auto">

                <div className="w-1/2 flex gap-[10px] max-lg:w-full max-lg:hidden">

                    <div className="w-1/2 shadow-3xl rounded-lg">
                        <img src={bannerDiscounts} className="w-full h-full rounded-lg select-none" />
                    </div>

                    <div className="w-1/2 shadow-3xl rounded-lg">
                        <img src={bannerDiscountsSecond} className="w-full h-full rounded-lg select-none" />
                    </div>

                </div>

                {/* SWIPER MOBILE */}
                <div className="lg:hidden max-sm:h-[280px]">

                    <Swiper
                        slidesPerView={1}
                        className="h-full rounded-lg"
                        initialSlide={0}
                    >

                        <SwiperSlide className="!rounded-lg">
                            <div className="shadow-3xl rounded-lg">
                                <img src={bannerDiscounts} className="w-full h-full rounded-lg select-none" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="!rounded-lg">
                            <div className="shadow-3xl rounded-lg">
                                <img src={bannerDiscountsSecond} className="w-full h-full rounded-lg select-none" />
                            </div>
                        </SwiperSlide>


                    </Swiper>
                </div>
                {/* END SWIPER MOBILE */}

                <div className="w-1/2 shadow-3xl rounded-lg max-lg:w-full max-sm:h-[280px]">

                    <Swiper
                        slidesPerView={1}
                        className="h-full rounded-lg"
                        id="swiper-exclusive-discounts"
                        initialSlide={0}
                        navigation
                        modules={[Navigation]}
                    >
                        {[...Array(5)].map((_, index) => (

                            <SwiperSlide className="!rounded-lg" key={index}>

                                <img src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/BannerHomeTour.webp`} alt='banner-offers' className=" relarive h-full w-full rounded-lg select-none" />

                                <BannerCardHome />

                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>

            <div className="m-m text-fs-12 text-gry-100 flex justify-center gap-1">{languageData.bannersHome.textTyC} <a className="m-s-b text-black decoration-solid"> {languageData.bannersHome.here}</a></div>

        </div>
    )
}


export function BannersHomeOffersNow() {

    const { languageData } = useContext(LanguageContext);
    const offersNow = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-offers-now.jpg`;
    const offersNowSecond = `${process.env.NEXT_PUBLIC_URL}banners/home/banner-offers-now-2.jpg`;

    return (

        <div className="flex flex-col my-[180px]">

            <span className="m-b text-fs-28 ">{languageData.bannersHome.currentOffers}</span>

            <span className="m-m text-fs-16 text-gry-100 mb-[12px]">{languageData.bannersHome.limitedPromotions}</span>

            <div className="w-full flex h-[250px] gap-[10px] max-lg:hidden">

                <div className="w-1/2">
                    <img src={offersNow} alt='banner-offers' className="h-full w-full rounded-lg select-none object-cover" />
                </div>

                <div className="w-1/2">
                    <img src={offersNowSecond} alt='banner-offers' className="h-full w-full rounded-lg select-none object-cover" />
                </div>

            </div>

            {/* SWIPER MOBILE BANNER OFFERS NOW */}
            <div className="lg:hidden h-[278px]">

                <Swiper
                    slidesPerView={1}
                    className="h-full rounded-lg"
                    initialSlide={0}
                >

                    <SwiperSlide className="!rounded-lg">
                        <div className="w-full h-full">
                            <img src={offersNow} alt='banner-offers' className="h-full w-full rounded-lg select-none object-cover" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="!rounded-lg">
                        <div className="w-full h-full">
                            <img src={offersNowSecond} alt='banner-offers' className="h-full w-full rounded-lg select-none object-cover" />
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
            {/* END SWIPER MOBILE BANNER OFFERS NOW */}

        </div>
    )
}
