import Image from "next/image";
import { BannerConfig } from "../../config/BannersConfigH";
// import { Autoplay } from "swiper";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import LanguageContext from "../../../../language/LanguageContext";
import { useContext } from "react";
export function BannerHomeHotelTop() {
  return (
    <div className="h-[442px] md:h-72 2xl:h-[480px] w-full">
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
        <img
          src="https://sandboxmexico.com/assets/icons/beach/beach-b.svg"
          alt="icon-beach-b"
        />
        <span>Playa</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img
          src="https://sandboxmexico.com/assets/icons/family/family-b.svg"
          alt="icon-family-b"
        />
        <span>Familia</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img
          src="https://sandboxmexico.com/assets/icons/romantic/romantic-b.svg"
          alt="icon-romantic-b"
        />
        <span>Romántico</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img
          src="https://sandboxmexico.com/assets/icons/business/business-b.svg"
          alt="icon-business-b"
        />
        <span>Negocios</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img
          src="https://sandboxmexico.com/assets/icons/adults/adults-b.svg"
          alt="icon-adults-b"
        />
        <span>Adultos</span>
      </div>
      <div className="mx-5 hover:text-or-100 grid place-items-center">
        <img
          src="https://sandboxmexico.com/assets/icons/pet/pet-b.svg"
          alt="icon-pet-b"
        />
        <span>Pet Friendly</span>
      </div>
    </div>
  );
}

export function BannerHomeKnowMore() {
  const { languageData } = useContext(LanguageContext);
  const beach = `${process.env.NEXT_PUBLIC_URL}banners/hotel/Feb2024/beach.webp`;
  const city = `${process.env.NEXT_PUBLIC_URL}/banners/hotel/Feb2024/city.webp`;
  const selfie = `${process.env.NEXT_PUBLIC_URL}/banners/hotel/Feb2024/selfie.webp`;

  return (
    <div className="flex h-[408px] mb-10 mt-16 lg:mt-32 max-lg:flex-col max-lg:h-auto">
      <div className="flex flex-col justify-center w-[50%] p-12 lg:py-12 lg:pr-12 bg-white rounded-tl-lg rounded-bl-lg max-lg:rounded-tr-lg max-lg:rounded-bl-none max-lg:w-full  max-lg:items-start">
        {/* FIX BOOSTRAP mb-5 - mb-[20px */}
        <h2 className="m-s-b text-fs-28 mb-[20px]">
          {languageData.titleBanners.bannerHoteldecided.havenDecided}
        </h2>

        {/* FIX BOOSTRAP mb-5 - mb-[20px */}
        <div className="mb-[20px] w-11/12">
          <span className="m-m text-fs-20 mb-[20px] m-m ">
            {languageData.titleBanners.bannerHoteldecided.dontWorry}
            <span className="m-m text-bl-100">
              {" "}
              {languageData.titleBanners.bannerHoteldecided.hereSimplify}{" "}
            </span>
            {languageData.titleBanners.bannerHoteldecided.planning}
          </span>
        </div>

        <button className="bg-or-100 w-[164px] h-[44px] text-nowrap rounded-full text-white m-m w-fit text-fs-12 hover:bg-or-70 mb-[50px]">
          {languageData.titleBanners.bannerHoteldecided.knowMore}
        </button>
      </div>

      <div className="w-full lg:w-[50%] relative lg:h-full lg:rounded-b-lg lg:rounded-t-none">
        <Swiper
          loop={true}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="mySwiper h-full"
        >
          <SwiperSlide className="bg-transparent">
            <Image
              src={beach}
              width={364}
              height={259}
              className="relative w-full h-[259px] lg:h-full opacity-75 bottom-0"
              alt="Img beach"
            />
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <Image
              src={city}
              width={364}
              height={259}
              alt="Img city"
              className="relative w-full h-[259px] lg:h-full opacity-75 bottom-0"
            />
          </SwiperSlide>
        </Swiper>

        <Image
          src={selfie}
          width={364}
          height={480}
          alt="selfie"
          className="absolute right-0 bottom-[0] z-50 w-full h-[20rem] lg:h-[426px] xl:h-[472px] object-contain"
        />
      </div>
    </div>
  );
}

export function BannerExcDiscounts() {
  const excDiscounts = `${process.env.NEXT_PUBLIC_URL}general/ExcDiscounts-Es.webp`;
  const bannerTraveling = `${process.env.NEXT_PUBLIC_URL}general/Banner-Traveling.webp`;
  const bannerTour = `${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/xplor-feb24.webp`;
  const excDiscountsMobile = `${process.env.NEXT_PUBLIC_URL}banners/hotel/Feb2024/Discounts-Es-M.webp`;

  const { languageData } = useContext(LanguageContext);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={16}
      className="h-[235px]"
      // loop={true}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        1024:{
          slidesPerView: 3,
        },

      }}>
      

      {/* <div className="flex h-[271px] gap-4 w-full  max-xl:h-[227px] max-lg:h-auto overflow-x-auto"> */}
        <SwiperSlide className="w-full lg:!w-1/2 max-md:!w-full">
          <div className="w-full h-[235px]">
            <Image src={excDiscounts} width={547} height={235} className="max-lg:hidden h-full w-full rounded-lg object-cover" alt="Banner Exc Discounts" />
            <Image src={excDiscountsMobile} width={332} height={235} className="h-full w-full rounded-lg object-cover bg-gry-30" alt="Banner Exc Discounts mobile" />
          </div>
        </SwiperSlide>
       
          <SwiperSlide className="!w-[266px] !bg-gry-30 !flex !justify-center max-md:!w-full">
            <div className="relative w-[266px] h-[235px] max-md:!w-332px]">
              <Image src={bannerTraveling} width={266} height={235} className="h-full w-full rounded-lg" alt="Banner Experimenta los mejores tours" />

              <div className="absolute top-[39px] left-[33px] max-xl:top-[32px] max-xl:left-[33px] max-sm:left-[28px] max-sm:top-[28px]">
                <h2 className="m-b w-9/12 text-white text-fs-20 mb-4 text-left">{languageData.titleBanners.titleTourMexico}</h2>
                <h4 className="m-m w-9/12 text-[#BEE0EE] text-fs-18 text-left" >{languageData.titleBanners.subtitleTourM}</h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="!w-[265px] !bg-gry-30 !flex !justify-center max-md:!w-full">
            <div className="w-[265px] h-[235px]">
              <Image src={bannerTour} width={300} height={300} className="h-full w-full rounded-lg" alt="Banner tour mes de feb" />
            </div>
          </SwiperSlide>
        
      {/* </div> */}
    </Swiper>
  );
}
