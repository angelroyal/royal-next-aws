"use client";

import { Navigation } from "swiper/modules";
import { TotalStars } from "../General/Stars";
import { Swiper, SwiperSlide } from "swiper/react";
// import LanguageContext from "@/language/LanguageContext";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

export default function EnjoyStayHome() {
    return (
        <div className='flex h-[448px] w-full rounded-lg'>

            {/* TEXT AND BTN SEE OFFERS */}
            <div className='w-[40%] relative'>
                <img
                    src={`${process.env.NEXT_PUBLIC_URL}banners/home/Frame-1693.jpg`}
                    alt='fondo azul con palmeras'
                    className='h-full w-full rounded-l-lg'
                />

                <div className='absolute bottom-0 flex flex-col gap-[16px] pb-[90px] pl-[49px] w-[80%]'>
                    <h2 className='text-white m-s-b text-fs-32'>Disfruta de tu estancia en hoteles exclusivos</h2>

                    <span className='text-white m-m text-fs-14'>Ofertas para las fechas: <b>del 29 de abril al 14 de mayo.</b></span>

                    <span className='text-white m-m text-fs-16'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. </span>

                    <button className='px-[16px] py-[14px] bg-or-100 text-white text-fs-14 m-s-b rounded-full w-fit hover:!bg-or-110 mt-[20px]'>ver todas las ofertas</button>
                </div>

            </div>

            {/* SWIPER CARDS HOTEL */}
            <div className='w-[60%] relative'>
                <img
                    src={`${process.env.NEXT_PUBLIC_URL}banners/home/Pool_view_4.tmedium.jpg`}
                    alt='alberca con palmeras alrededor'
                    className='h-full w-full pt-[1px] rounded-r-lg brightness-75'
                />

                <div className="absolute bottom-0 w-full h-full">

                    <Swiper
                        slidesPerView={1}
                        className="h-full rounded-lg"
                        id="swiper-home-explore-activities"
                        initialSlide={0}
                        navigation
                        modules={[Navigation]}
                    >
                        {[...Array(5)].map((_, index) => (

                            <SwiperSlide className="!rounded-lg shadow-3xl" key={index}>
                                <img src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/BannerHomeTour.webp`} alt='banner-offers' className="rounded-lg select-none object-cover" />

                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>

        </div>
    )
}
