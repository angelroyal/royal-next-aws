"use client"
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { useContext } from "react";
import Image from "next/image";
import LanguageContext from "@/language/LanguageContext";
import "../../../assets/styles/general/Swiper.css";

export function BannerHomeTour() {
    const excDiscounts = `${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/cenote-san-antonio.webp`;
    const bannerTraveling = `${process.env.NEXT_PUBLIC_URL}general/Banner-Traveling.webp`;
    const bannerTour = `${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/xplor-feb24.webp`;

    const { languageData } = useContext(LanguageContext);

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={16}
            className="h-[235px] my-[30px]"
            // loop={true}
            breakpoints={{
                0: {
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

            {/* ONE CARD IMAGE AND TEXT */}
            <SwiperSlide className="!w-1/2 max-lg:!w-full max-md:!w-full !bg-gry-30 !rounded-lg">
                <div className="relative w-full h-[235px] rounded-lg bg-[#1B1464]">

                    <div className="absolute top-[0%] left-[0%] w-[65%] h-[80%] pr-[50px] bg-[#2743A6] rounded-tl-lg rounded-bl-lg pt-[32px] pl-[22px]">
                        <h2 className="text-white text-fs-24 m-b text-left w-[254px]">
                            {languageData.bannersFooter.destination}
                        </h2>
                    </div>

                    <div className="absolute bottom-[35px] left-0 bg-[#1B1464] w-[57%] h-[35%] rounded-bl-lg transform skew-y-[-4deg]"></div>

                    <div className="absolute bottom-0 left-0 h-[45%] pl-[22px] w-[43%]">
                        <span className="text-white text-fs-12 m-m">
                            {languageData.bannersFooter.descriptionOfTheDestination}
                        </span>
                    </div>

                    <div className="absolute h-[235px] right-0 rounded-lg  clip-custom">
                        <Image src={excDiscounts} width={547} height={273} className="w-full h-full rounded-r-lg object-cover " alt="Banner Exc Discounts" />
                    </div>

                    <a
                        // href="https://api.whatsapp.com/send?phone=529981342286&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!"
                        // target="_blank"
                        // rel="noopener noreferrer" 
                        className="absolute bottom-[8%] right-[9%] rounded-full py-[10px] px-[30px] bg-yw-100 m-b text-fs-12 text-black no-underline hover:bg-yw-70">
                        {languageData.cartTour.youWantMore}
                    </a>


                </div>

            </SwiperSlide>
            {/*END ONE CARD IMAGE AND TEXT */}

            {/*TWO CARD TEXT */}
            <SwiperSlide className="!w-[266px] max-lg:!w-1/2 max-sm:!w-full !bg-gry-30 !flex !justify-center">

                <div className="relative w-full h-[235px] flex justify-center">
                    <Image src={bannerTraveling} width={266} height={235} className="w-[99%] h-[99%] max-sm:w-auto rounded-lg" alt="Banner Experimenta los mejores tours" />

                    <div className="absolute top-[39px] left-[33px] max-xl:top-[32px] max-xl:left-[33px] max-sm:left-[26%] max-sm:top-[40px] max-sm:w-[53%]">
                        <h2 className="m-b w-9/12 text-white text-fs-20 mb-4 text-left">{languageData.titleBanners.titleTourMexico}</h2>
                        <h4 className="m-m w-9/12 text-[#BEE0EE] text-fs-18 text-left" >{languageData.titleBanners.subtitleTourM}</h4>
                    </div>
                </div>
            </SwiperSlide>
            {/*END TWO CARD TEXT */}

            {/* THREE CARD IMAGE TOUR */}
            <SwiperSlide className="!w-[266px] max-lg:!w-1/2 max-sm:!w-full !bg-gry-30 !flex !justify-center">
                <div className="w-full h-[235px] flex justify-center">
                    <Image src={bannerTour} width={266} height={235} className="w-[99%] h-[99%] max-sm:w-auto rounded-lg " alt="Banner tour mes de feb" />
                </div>
            </SwiperSlide>
            {/*END THREE CARD IMAGE TOUR */}

        </Swiper>
    );
}
