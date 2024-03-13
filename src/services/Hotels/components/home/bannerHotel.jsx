import Image from "next/image";
import { BannerConfig } from "../../config/BannersConfigH";
// import { Autoplay } from "swiper";
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useIsMobile } from '@/config/Mobile/isMobile';
import 'swiper/css';
import 'swiper/css/effect-fade';
import LanguageContext from "../../../../language/LanguageContext";
import { useContext } from "react";
export function BannerHomeHotelTop() {
  return (
    <div className="h-[16rem] md:h-72 2xl:h-[480px] w-full">
      <img
        className="object-cover	w-full h-full object-center"
        src={BannerConfig.bannerTop.img}
        alt="banner-top"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export function BannerHomeHotelUp() {
  const Random =
    BannerConfig.bannerUp.text[
    Math.floor(Math.random() * BannerConfig.bannerUp.text.length)
    ];

  return (
    <div className="relative flex items-center my-10">
      <img src={BannerConfig.bannerUp.img} width="100%" />

      <div className="absolute pl-10 w-3/5 ">
        <h2 className="m-b text-yw-70 text-fsw-28 leading-6 max-md:leading-5">
          {Random.title}
        </h2>
        <p className="m-s-b text-or-50 text-fsw-18">{Random.subtitle}</p>
      </div>
    </div>
  );
}

export function BannerIcons() {
  return (
    <div className="flex m-b my-6 overflow-x-auto">
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img src="https://sandboxmexico.com/assets/icons/beach/beach-b.svg" alt="icon-beach-b" />
        <span>Playa</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img src="https://sandboxmexico.com/assets/icons/family/family-b.svg" alt="icon-family-b" />
        <span>Familia</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img src="https://sandboxmexico.com/assets/icons/romantic/romantic-b.svg" alt="icon-romantic-b" />
        <span>Romántico</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img src="https://sandboxmexico.com/assets/icons/business/business-b.svg" alt="icon-business-b" />
        <span>Negocios</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img src="https://sandboxmexico.com/assets/icons/adults/adults-b.svg" alt="icon-adults-b" />
        <span>Adultos</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img src="https://sandboxmexico.com/assets/icons/pet/pet-b.svg" alt="icon-pet-b" />
        <span>Pet Friendly</span>
      </div>
    </div>
  )
}

export function BannerHomeKnowMore() {
  const { languageData } = useContext(LanguageContext);
  const beach =`${process.env.NEXT_PUBLIC_URL}banners/hotel/Feb2024/beach.webp`;
  const city = `${process.env.NEXT_PUBLIC_URL}/banners/hotel/Feb2024/city.webp`;
  const selfie =`${process.env.NEXT_PUBLIC_URL}/banners/hotel/Feb2024/selfie.webp`;

  return (

    <div className="flex h-[408px] mb-10 mt-10 max-lg:flex-col max-lg:h-auto">
      <div className="flex flex-col justify-center w-[55%] p-12 bg-white rounded-l-lg max-lg:w-full max-lg:rounded-t-lg max-lg:rounded-b-none max-lg:items-center">
        <h2 className="m-b text-fs-32 mb-5 max-lg:text-fs-26 max-md:text-fs-20 max-sm:text-fs-16 max-sm:mb-2">{languageData.titleBanners.bannerHoteldecided.havenDecided}</h2>

        <div className="mb-5 w-11/12 max-sm:leading-3 max-lg:text-center">
          <span className="m-m text-fs-24 max-lg:text-fs-18 max-md:text-fs-16 max-sm:text-fs-10 ">
            {languageData.titleBanners.bannerHoteldecided.dontWorry}
            <span className="m-s-b text-bl-100"> {languageData.titleBanners.bannerHoteldecided.hereSimplify} </span>
            {languageData.titleBanners.bannerHoteldecided.planning}</span>
        </div>

        <button className="bg-or-100 px-7 text-nowrap py-3 rounded-full text-white m-m w-fit text-fs-12 hover:bg-or-70">
          {languageData.titleBanners.bannerHoteldecided.knowMore}
        </button>

      </div>

      <div className="w-[45%] h-full relative max-lg:w-full max-lg:h-[26rem] max-lg:rounded-b-lg max-lg:rounded-t-none">
        <Swiper
          loop={true}
          effect={'fade'}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}

          modules={[Autoplay, EffectFade]}
          className="mySwiper h-full"

        >
          <SwiperSlide>
            <Image src={beach} width={553} height={500} className="w-full h-full"  alt="Img beach"/>
          </SwiperSlide>

          <SwiperSlide>
            <Image src={city}  width={553} height={500} alt="Img city" className="w-full h-full" />
          </SwiperSlide>
        </Swiper>

        <div className="absolute right-0 bottom-0 z-50 w-full h-[29rem] max-lg:h-[30rem]"><Image src={selfie}  width={505} height={472} alt="selfie" className="object-cover" /></div>
      </div>

    </div>

  );
}


export function BannerExcDiscounts() {

  const excDiscounts = `${process.env.NEXT_PUBLIC_URL}general/ExcDiscounts-Es.webp`;
  const bannerTraveling = `${process.env.NEXT_PUBLIC_URL}general/Banner-Traveling.webp`;
  const bannertour = `${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/xplor-feb24.webp`;

  const { languageData } = useContext(LanguageContext);
  const isMobile = useIsMobile();
  return (
    <div className="flex h-[271px] gap-4 w-full max-lg:flex-col  max-xl:h-[227px] max-lg:h-auto">
      <div className="w-1/2 max-lg:w-full  max-lg:h-[340px] max-sm:h-[235px]">
        <Image src={excDiscounts} width={547} height={235} className="h-full w-full rounded-lg object-cover" alt="Banner Exc Discounts" />
      </div>

      {!isMobile && (
              <div className="w-1/2 flex gap-4 max-lg:w-full max-lg:auto max-lg:h-[245px] max-sm:h-[170px]">

              <div className="w-1/2 relative">
                <Image src={bannerTraveling} width={500} height={500} className="h-full w-full rounded-lg" alt="Banner Experimenta los mejores tours" />
      
                <div className="absolute top-[39px] left-[59px] max-xl:top-[32px] max-xl:left-[33px] max-sm:left-[28px] max-sm:top-[28px]">
                  <h2 className="m-b text-white text-fs-22 w-4/6 mb-4 max-xl:text-fs-16 max-lg:text-fs-22">{languageData.titleBanners.titleTourMexico}</h2>
                  <h4 className="m-m w-4/6 text-[#BEE0EE] text-fs-18 max-xl:text-fs-14  max-lg:text-fs-18" >{languageData.titleBanners.subtitleTourM}</h4>
                </div>
              </div>
      
              <div className="w-1/2">
                <Image src={bannertour} width={300} height={300} className="h-full w-full rounded-lg" alt="Banner tour mes de feb" />
              </div>
      
            </div>

      )}



    </div>
  )
}