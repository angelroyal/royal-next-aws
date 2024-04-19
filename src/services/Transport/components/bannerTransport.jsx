"use client";
import "swiper/css";
import Image from "next/image";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../assets/styles/general/Swiper.css";
import LanguageContext from "@/language/LanguageContext";

export function BannerHomeTransport() {

    const bannerCartLeading = `${process.env.NEXT_PUBLIC_URL}banners/transport/banner-home-transport.jpg`;
    const bannerCardSecond = `${process.env.NEXT_PUBLIC_URL}banners/transport/banner-home-transport-2.jpg`;
    const bannerCardFinish = `${process.env.NEXT_PUBLIC_URL}banners/transport/banner-home%20transport-3.jpg`;
    const { languageData } = useContext(LanguageContext);

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={16}
            className="h-[19rem] mb-16"
            id="swiper-banner-home-tour"
            initialSlide={0}
            breakpoints={{
                0: {
                    slidesPerView: .5,
                },
                350: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 2.5,
                },
                1440: {
                    slidesPerView: 3,
                },

            }}>

            {/* ONE CARD TRANSPORT */}

            <SwiperSlide className="!w-[47%] max-lg:!w-full max-sm:!w-full !bg-gry-30 !rounded-lg">
                <div className="flex bg-white justify-center items-center shadow-3xl">
                    <div className="w-[40%] flex flex-col pl-[25px] gap-3">
                        <span className="m-b text-fs-28">Asegura tu trayecto</span>
                        <bottom className="px-[24px] py-[16px] bg-yw-100 hover:bg-yw-110 m-s-b text-fs-14 w-fit rounded-full">¡Reserva ahora!</bottom>
                    </div>
                    <div className="w-[60%] !bg-white">
                        <Image src={bannerCartLeading} width={378} height={235} className="w-full h-[19rem] rounded-lg object-cover object-center select-none" alt="Banner Exc Discounts" />
                    </div>
                </div>
            </SwiperSlide>
            {/*END ONE CARD TRANSPORT */}

            {/*TWO CARD TRANSPORT */}
            <SwiperSlide className="!w-1/4 max-lg:!w-1/2 max-sm:!w-full !bg-gry-30 !flex !justify-center !bg-white">
                <div className="relative w-full flex justify-center ">
                    <Image src={bannerCardSecond} width={266} height={235} className="w-full rounded-lg select-none" alt="Banner Experimenta los mejores tours" />
                </div>
            </SwiperSlide>
            {/*END TWO CARD TRANSPORT */}

            {/* THREE CARD TRANSPORT */}
            <SwiperSlide className="!w-1/4 max-lg:!w-1/2 max-sm:!w-full !bg-gry-30 !flex !justify-center !bg-white">
                <div className="w-full flex justify-center">
                    <Image src={bannerCardFinish} width={266} height={235} className="w-full rounded-lg select-none object-cover object-bottom" alt="Banner tour mes de feb" />
                    <div className="absolute bottom-[30px] left-[33px] max-xl:top-[32px] max-xl:left-[33px] max-sm:left-[12%] max-sm:top-[40px]">
                        <h2 className="m-b w-9/12 text-white text-fs-44 mb-5 text-left max-2xl:text-fs-22 max-xl:text-fs-18 max-lg:text-fsw-48 max-sm:text-fs-24">¿Primera vez con nosotros?</h2>
                        <div className="bg-red-100 rounded-full flex w-fit">
                            <span className="m-s-b text-white pl-[10px] py-[10px]">Obten 10% menos</span>
                            <span className="m-s-b text-black p-[10px] bg-white rounded-lg ml-[10px]">Saber más</span>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/*END THREE CARD TRANSPORT*/}

        </Swiper>
    )
}
