import Image from "next/image";
import { BannerConfig } from "../../config/BannersConfigH";
// import { Autoplay } from "swiper";
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/effect-fade';
import LanguageContext from "../../../../language/LanguageContext";
import { useContext } from "react";
export function BannerHomeHotelTop() {
  return (
    <div className="place-items-center">
      <img
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
  const test = "https://sandboxmexico.com/assets/banners/hotel/Feb2024/beach.webp";

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
            <Image src={test} width={100} height={100} className="w-full h-full" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="https://sandboxmexico.com/assets/banners/hotel/Feb2024/city.webp" alt="Img beach" className="w-full h-full" />
          </SwiperSlide>
        </Swiper>

        <img src="https://sandboxmexico.com/assets/banners/hotel/Feb2024/selfie.webp" alt="selfie" className="absolute right-0 bottom-0 z-50 w-full h-[29rem] max-lg:h-[30rem]" />
      </div>

    </div>

  );
}


export function BannerExcDiscounts() {

  const { languageData } = useContext(LanguageContext);
  return (
    <div className="flex h-[271px] gap-4 w-full max-lg:flex-col max-lg:h-auto">
      <div className="w-1/2 max-lg:w-full object-contain  max-lg:h-[245px] max-sm:h-[170px]">
        <img src="https://sandboxmexico.com/assets/general/ExcDiscounts-Es.webp" className="h-full w-full rounded-lg object-cover max-lg:object-contain" alt="Banner Exc Discounts" />
      </div>

      <div className="w-1/2 flex gap-4 max-lg:w-full max-lg:auto max-lg:h-[245px] max-sm:h-[170px]">

        <div className="w-1/2 relative">
          <img src="https://sandboxmexico.com/assets/general/Banner-Traveling.webp" className="h-full w-full rounded-lg" alt="Banner Experimenta los mejores tours" />
          <div className="absolute top-[39px] left-[59px] max-sm:left-[28px] max-sm:top-[28px]">
            <h2 className="m-b text-white text-fs-20 w-4/6 mb-4 max-xl:text-fs-15 max-lg:text-fs-20 max-sm:text-fs-12">{languageData.titleBanners.titleTourMexico}</h2>
            <h4 className="m-m text-white w-4/6 text-fs-18 max-lg:text-fs-12 max-sm:text-fs-10" >{languageData.titleBanners.subtitleTourM}</h4>
          </div>
        </div>

        <div className="w-1/2">
          <img src="https://sandboxmexico.com/assets/banners/tours/Feb2024/xplor-feb24.webp" className="h-full w-full rounded-lg" alt="Banner tour mes de feb" />
        </div>

      </div>

    </div>
  )
}