"use client";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

import { useContext } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import LanguageContext from "@/language/LanguageContext";
import { BestHotelCart } from '@/services/Hotels/components/home/BestHotelCart'

export default function HotelRecommendation() {

    const { languageData } = useContext(LanguageContext);
    // TEST TO PAINT CARDHOTEL
    const hotelMap = {
        "code": 3982,
        "name": "Loreto Bay Golf Resort and Spa",
        "codeName": "loreto-bay-golf-resort-and-spa",
        "image": "https://api.sandboxmexico.com/assets/images/hotels/606/057753a_hb_a_007.webp",
        "destinationCodeName": "loreto",
        "price": 131.84,
        "stars": 4,
        "address": "Mision de Loreto S/N, Colonia Nopolo",
        "es": {
            "destination": "Loreto",
            "country": "mexico"
        },
        "en": {
            "destination": "Loreto",
            "country": "mexico"
        }
    };
    // END TEST TO PAINT CARDHOTEL

    return (
        <>
            <div className="bg-white p-[36px] relative rounded-lg my-[28px]">
                <div className="mb-[36px]">
                    {/* TITLE */}
                    <span className="m-b text-fs-20">{languageData.recommendations.hotel.titleRecommedation}</span>
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
                            slidesPerView: 1.2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                        1536: {
                            slidesPerView: 4.5,
                        },
                    }}
                >
                    {[...Array(10)].map((_, index) => (
                        <SwiperSlide key={index} className="!rounded-lg">
                            <BestHotelCart hotel={hotelMap} />
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>
        </>
    )
}