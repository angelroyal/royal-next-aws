"use client";

import { useContext } from "react";
import CardHotelHome from "./CardHotelHome";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import LanguageContext from "@/language/LanguageContext";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

export default function EnjoyStayHome() {

    const { languageData } = useContext(LanguageContext);

    return (
        <div className='flex h-[448px] w-full rounded-lg max-lg:flex-col max-lg:h-auto'>

            {/* TEXT AND BTN SEE OFFERS */}
            <div className='w-[40%] relative max-lg:w-full max-lg:h-[448px] max-lg:rounded-t-lg max-lg:bg-bl-100'>
                <img
                    src={`${process.env.NEXT_PUBLIC_URL}banners/home/Frame-1693.jpg`}
                    alt='fondo azul con palmeras'
                    className='h-full w-full rounded-l-lg max-lg:rounded-t-lg max-lg:rounded-l-0'
                />

                <div className='absolute bottom-0 flex flex-col gap-[16px] pb-[90px] pl-[49px] w-[80%] max-md:pb-[45px]'>
                    <h2 className='text-white m-s-b text-fs-32 max-md:text-fs-28'>{languageData.enjoyStayHome.titleEnjoy}</h2>

                    <span className='text-white m-m text-fs-14'>{languageData.enjoyStayHome.offersDates}: <b>del 29 de abril al 14 de mayo.</b></span>

                    <span className='text-white m-m text-fs-16'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit. </span>

                    <button className='px-[16px] py-[14px] bg-or-100 text-white text-fs-14 m-s-b rounded-full w-fit hover:!bg-or-110 mt-[20px]'>
                        {languageData.enjoyStayHome.btnViewOffers}
                    </button>
                </div>

            </div>

            {/* SWIPER CARDS HOTEL */}
            <div className='w-[60%] relative max-lg:w-full max-lg:h-[448px] max-lg:rounded-b-lg max-lg:bg-bl-100'>
                <img
                    src={`${process.env.NEXT_PUBLIC_URL}banners/home/Pool_view_4.tmedium.jpg`}
                    alt='alberca con palmeras alrededor'
                    className='h-full w-full pt-[1px] rounded-r-lg brightness-75 max-lg:rounded-b-lg'
                />

                <div className="absolute top-0 w-full h-full pl-[70px] pr-[83px] max-md:px-[40px] pt-[54.2px]">

                    <Swiper
                        slidesPerView={1}
                        className="h-full rounded-lg !static"
                        id="swiper-home-enjoy-stay"
                        initialSlide={0}
                        spaceBetween={12}
                        navigation
                        modules={[Navigation]}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {[...Array(5)].map((_, index) => (


                            <SwiperSlide className="!rounded-lg shadow-3xl" key={index}>

                                {/* CARDS HOTEL */}
                                <CardHotelHome />

                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>

        </div>
    )
}
