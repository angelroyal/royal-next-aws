"use client";

import { Image } from "react-bootstrap";
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

                <div className="absolute bottom-[-43px] w-full h-full px-[53px]">

                    <Swiper
                        slidesPerView={2}
                        className="h-full rounded-lg"
                        id="swiper-home-enjoy-stay"
                        initialSlide={0}
                        spaceBetween={12}
                        navigation
                        modules={[Navigation]}
                    >
                        {[...Array(5)].map((_, index) => (


                            <SwiperSlide className="!rounded-lg shadow-3xl" key={index}>

                                {/* CARDS HOTEL */}
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

                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>

        </div>
    )
}
