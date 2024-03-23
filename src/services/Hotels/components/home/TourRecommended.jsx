import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import LanguageContext from "../../../../language/LanguageContext";
import Image from "next/image";
import { homeRecommendedTour } from "@/config/Others/HomeRecommendedTour";

export default function CartTourOptions() {
  const { languageData } = useContext(LanguageContext);
  const tour = homeRecommendedTour;

  return (
    <>
      <div className="mb-10 mt-[128px] max-sm:mt-10">
        <h2 className="m-b text-center text-fs-24 mb-2">
          {languageData.TourRecommended.title}
        </h2>
        <div className="flex w-full text-center justify-center max-sm:text-fs-12 w-11/12">
          <div className="m-m text-gry-100">
            {languageData.TourRecommended.subtitle}
            <b className="text-black">
              {languageData.TourRecommended.subtitle2}
            </b>
            {languageData.TourRecommended.subtitle3}
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        className="mySwiper !pb-12 max-sm:!pb-16"
        id="swiper-recommended-hotel"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          390: {
            slidesPerView: 2,
          },
          570: {
            slidesPerView: 2.5,
          },
          700: {
            slidesPerView: 3,
          },
          846: {
            slidesPerView: 4,
          },
          1286: {
            slidesPerView: 5,
          },
          1440: {
            slidesPerView: 6,
          },
        }}
      >
        {tour.slice(0, 12).map((tour, index) => (
          <SwiperSlide key={index} className="!w-fit !rounded-md">
            <div className="bg-white w-[185px] h-[258px] cursor-pointer shadow-md shadow-gry-70 border border-gry-30 rounded-md px-4 py-4 flex flex-col justify-center items-center">
              <div className="w-[132px] h-[132px] mb-3">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={tour.image}
                  alt="staywow card"
                />
              </div>

              <div className="max-w-xs overflow-hidden text-center">
                <h2 className="text-fs-14 mb-2 w-full">
                  <b className="!box-orient-vertical !line-clamp-2 !overflow-hidden !text-ellipsis">
                    {tour.spanishName}
                  </b>
                </h2>
              </div>

              <div className="flex justify-center gap-1">
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
                  width={9.5}
                  height={12.1}
                  alt="icon-location-b"
                />
                <span className="m-m text-gry-100 text-fs-12 truncate ...">
                  {tour.spanishDestination.length > 21
                    ? `${tour.spanishDestination.substring(0, 21)} ..`
                    : tour.spanishDestination}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
