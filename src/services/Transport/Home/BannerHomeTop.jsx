"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function BannerHomeTop() {
    return (
        <Swiper
            className="h-[442px] md:h-72 2xl:h-[480px] w-full"
            slidesPerView={1}
            id="swiper-banner-home"
            navigation
            modules={[Navigation]}
            loop={true}
        >
            {[...Array(2)].map((_, index) => (
                <SwiperSlide key={index}>
                    <img
                        src={`${process.env.NEXT_PUBLIC_URL}banners/transport/Banner-transport-home-top.webp`}
                        width="1366px"
                        height="480px"
                        alt="Banner-transport-home-top"
                        className='w-full h-full object-cover select-none'
                    />
                </SwiperSlide>
            ))}
        </Swiper>

    )
}