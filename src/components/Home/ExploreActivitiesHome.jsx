"use client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { TotalStars } from "../General/Stars";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

export default function ExploreActivitiesHome() {
    return (
        <div className="flex flex-col my-[180px]">

            {/* TITLE EXPLORE ACTIVITIES HOME*/}
            <span className="m-b text-fs-28 ">Explora una variedad de actividades</span>

            {/* SUBTITLE EXPLORE ACTIVITIES HOME */}
            <span className="m-m text-fs-16 text-gry-100 mb-[12px]">Te recomendamos aquí los mejores tours de México.</span>

            <div className="w-full flex h-[750px] gap-[32px]">

                {/* SWIPER EXPLORE ACTIVITIES HOME */}
                <div className="w-1/2 relative">
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
                                <img src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/BannerHomeTour.webp`} alt='banner-offers' className="h-full w-full rounded-lg select-none object-cover" />

                                <div className='w-[190px] h-[190px] rounded-full border-[32px] border-yw-100 absolute top-[-114px] right-[-31px]' />

                                <div className="h-[395px] absolute bottom-0 w-full">
                                    <div style={{ height: 150, overflow: "hidden" }}>
                                        <svg
                                            viewBox="0 0 500 150"
                                            preserveAspectRatio="none"
                                            style={{ height: "100%", width: "100%" }}
                                        >
                                            <path
                                                d="M429.73,151.48 C487.30,161.36 500.84,102.14 502.54,72.55 L512.13,156.42 L506.49,183.06 Z"
                                                style={{ stroke: "none", fill: "#FCB41E" }}
                                            />
                                        </svg>
                                    </div>

                                    <div className="w-full h-[80%] bg-yw-100 rounded-tl-[50px]" />

                                    <div className="absolute bottom-0 pb-[49px] pl-[47.5px] pr-[59.5px] flex flex-col gap-[8px]">
                                        <h3 className="text-fs-28 m-s-b">Cancún</h3>

                                        <p className="m-m text-fs-14">En Cancún encontrarás fascinantes sitios arqueológicos como el
                                            cercano complejo de ruinas mayas de Tulum y la misteriosa ciudad
                                            precolombina de Chichén Itzá.</p>

                                        <button className="m-b text-fs-16 flex items-center w-fit px-[24px] py-[10px] bg-white rounded-full gap-[8px] hover:!bg-gry-30">
                                            Saber más
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/arrow-right.svg`}
                                                width={16}
                                                height={12}
                                                alt="icon-calendar"
                                            /></button>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>

                {/*CARDS TOUR EXPLORE ACTIVITIES HOME */}
                <div className="w-1/2 grid grid-cols-2 gap-[16px]">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="shadow-3xl rounded-lg">
                            <div className="w-full h-[216px]">
                                <img
                                    className="w-full h-full rounded-t-lg object-cover select-none"
                                    src={`${process.env.NEXT_PUBLIC_URL}banners/home/banner-home-offers.jpg`}
                                    alt="card"
                                />
                            </div>

                            <div className="w-full rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col h-[151px]">
                                <div className="m-s-b pt-1 text-fs-14 text-start truncate mb-[4px]">
                                    Excursion a chichén itzá
                                    {""}
                                </div>

                                <div className="mb-[4px]">
                                    <TotalStars
                                        name="read-only"
                                        stars={5}
                                        width={"11px"}
                                        height={"11px"}
                                    />
                                </div>

                                <div className="flex gap-1 mb-[11px]">
                                    <Image
                                        className="w-auto h-auto"
                                        src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
                                        alt="location icon"
                                        width={11}
                                        height={14}
                                    />
                                    <span className="text-bl-100 m-s-b text-fs-12 truncate">Yucatán</span>
                                </div>

                                <div className="flex justify-between border-t border-[#ebebeb] pt-[11px] items-center">
                                    <div className="flex flex-col">
                                        <span className="m-m text-gry-100 text-fs-12 text-start">
                                            {/* {languageData.cartTour.from} */}desde
                                        </span>
                                        <span className="m-b text-or-100 text-fs-12">
                                            MXN <span className="m-b text-fs-16">$5,000</span>
                                        </span>
                                    </div>

                                    <button className="m-s-b text-bl-100 text-fs-12 min-h-8 rounded-3xl border-2 border-bl-100 px-4 py-2 hover:bg-bl-100 hover:text-white text-nowrap">
                                        {/* {languageData.cartTour.seeDetails} */}
                                        Ver detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
