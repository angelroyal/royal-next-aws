"use client";

// import Image from "next/image";
// import { useContext } from "react";
import { Navigation } from "swiper/modules";
import { TotalStars } from "../General/Stars";
import { Swiper, SwiperSlide } from "swiper/react";
// import LanguageContext from "@/language/LanguageContext";


import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

export function BannersHomeOffers() {

    // const { languageData } = useContext(LanguageContext);
    return (
        <div className="flex w-full gap-[16px] h-[400px] my-[32px]">
            <div className="!w-[70%] shadow-3xl rounded-lg">
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
                            <img src={`${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-offers.jpg`} alt='banner-offers' className="h-full w-full rounded-lg select-none" />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <picture className="w-[30%]">
                <div className="w-full h-full shadow-3xl rounded-lg">
                    <img src={`${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-offers-second.jpg`} className="w-full h-full rounded-lg select-none object-cover" alt="Banner Experimenta los mejores tours" />
                </div>
            </picture>
        </div>
    )
}


export function BannersHomeExclusiveDiscounts() {
    return (
        <div>
            <div className="flex w-full gap-[10px] h-[280px] my-[32px]">
                <div className="w-1/4 shadow-3xl rounded-lg">
                    <img src={`${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-discounts.jpg`} className="w-full h-full rounded-lg select-none" />
                </div>

                <div className="w-1/4 shadow-3xl rounded-lg">
                    <img src={`${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-discounts-second.jpg`} className="w-full h-full rounded-lg select-none" />
                </div>

                <div className="w-1/2 shadow-3xl rounded-lg">
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

                                <img src={`${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-offers.jpg`} alt='banner-offers' className=" relarive h-full w-full rounded-lg select-none" />

                                <div className="absolute flex justify-between w-full bottom-0">

                                    <div className="text-fs-20 m-s-b text-white pl-[24px] w-[250px] items-center flex">Lorem ipsum dolor sit amet</div>

                                    <div className="bg-white rounded-tl-lg px-[16px] py-[8px] w-[189px]">
                                        <h4 className="text-fs-12 m-m">Hotel Nickelodeon riviera maya</h4>
                                        <TotalStars
                                            stars={5}
                                            width={"w-[11]"}
                                            height={"h-[11]"}
                                        />

                                        <span className="flex m-b text-fs-10 gap-2 items-center">desde <span className="text-fs-16"> MXN $10,000</span></span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>

            <div className="m-m text-fs-12 text-gry-100 flex justify-center gap-1">**Precios y descuentos válidos en servicios seleccionados y sujetos a disponibilidad al momento de la compra. Consulta términos y condiciones haciendo clic <a className="m-s-b text-black decoration-solid"> Aquí</a></div>
        </div>
    )
}


export function BannersHomeOffersNow() {
    return (
        <div className="flex flex-col my-[180px]">
            <span className="m-b text-fs-28 ">Ofertas de ahora</span>

            <span className="m-m text-fs-16 text-gry-100 mb-[12px]">Promociones y ofertas válidas durante tiempo limitado.</span>

            <div className="w-full flex h-[250px] gap-[10px]">
                <div className="w-1/2">
                    <img src={`${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-offers.jpg`} alt='banner-offers' className="h-full w-full rounded-lg select-none" />
                </div>

                <div className="w-1/2">
                    <img src={`${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-offers.jpg`} alt='banner-offers' className="h-full w-full rounded-lg select-none" />
                </div>
            </div>

        </div>
    )
}
