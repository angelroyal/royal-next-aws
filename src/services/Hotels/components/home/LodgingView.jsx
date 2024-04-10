import Image from "next/image";
import Rating from "@mui/material/Rating";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import LanguageContext from "@/language/LanguageContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../../assets/styles/general/Swiper.css";
import { LodgingBestPrice } from "../Skeleton/HotelInformationSkeleton";

export function LodgingsView({ tour }) {
  const { languageData } = useContext(LanguageContext);

  return tour ? (
    <>
      {/* TWO SWIPER */}
      <div className="lg:hidden block relative">
        <Swiper
          slidesPerView={4}
          spaceBetween={12}
          navigation
          id="swiper-shuffle-hotel"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper !pb-10 !static"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            390: {
              slidesPerView: 1.4,
            },
            500: {
              slidesPerView: 1.8,
            },
            620: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {Object.values(tour)
            .slice(0, 8)
            .map((tour, index) => (
              <SwiperSlide key={index} className="!rounded-lg">
                <div className="h-full cursor-pointer shadow-md shadow-gry-30 rounded-xl">
                  <div className="w-full h-[216px]">
                    <img
                      className="w-full h-full rounded-t-lg object-cover select-none"
                      src={tour.image}
                      alt="card"
                    />
                  </div>

                  <div className="bottom-0 w-full h-1/4 rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col">
                    <div className="m-b text-fs-14 pt-1 text-start truncate">
                      {tour.name}{" "}
                    </div>

                    <Rating
                      className="my-1"
                      name="read-only"
                      value={tour.category}
                      readOnly
                      size="small"
                    />

                    <div className="flex gap-1 mb-[11px]">
                      <Image
                        className="w-auto h-auto"
                        src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
                        alt="location icon"
                        width={11}
                        height={14}
                      />
                      <span className="text-bl-100 m-s-b text-fs-12">
                        {tour.destination}
                      </span>
                    </div>

                    <div className="flex justify-between border-t border-[#ebebeb] pt-[11px] items-center">
                      <div className="flex flex-col">
                        <span className="m-m text-gry-100 text-fs-12 text-start">
                          {languageData.cartTour.from}
                        </span>
                        <span className="m-b text-or-100 text-fs-12">
                          MXN <span className="m-b text-fs-16">${tour.price}</span>
                        </span>
                      </div>

                      <button className="m-s-b text-bl-100 text-fs-12 min-h-8 rounded-3xl border-2 border-bl-100 px-4 py-2 hover:bg-bl-100 hover:text-white text-nowrap">
                        {languageData.cartTour.seeDetails}
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/*END TWO SWIPER */}

      <div className=" lg:flex flex-wrap justify-center md:justify-start gap-x-[16px] gap-y-[24px] hidden">
        {Object.values(tour).slice(0, 10).map((tour, index) => (
          <div key={index} className="!rounded-lg">
            {/*  */}
            <div className="h-full min-w-[266px] max-w-[280px] cursor-pointer shadow-md shadow-gry-30 rounded-xl">
              <div className="w-full h-[216px]">
                <img
                  className="w-full h-full rounded-t-lg object-cover select-none"
                  src={tour.image}
                  alt="card"
                />
              </div>
              
              {/* bottom-0 w-full h-1/4 rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col */}
              <div className="w-full rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col">
                <div className="m-s-b pt-1 text-fs-14 text-start truncate">
                  {tour.name}{""}
                </div>

                <Rating
                  className="my-1"
                  name="read-only"
                  value={tour.category}
                  readOnly
                  size="small"
                />

                <div className="flex gap-1 mb-[11px]">
                  <Image
                    className="w-auto h-auto"
                    src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
                    alt="location icon"
                    width={11}
                    height={14}
                  />
                  <span className="text-bl-100 m-s-b text-fs-12">
                    {tour.destination}
                  </span>
                </div>

                <div className="flex justify-between border-t border-[#ebebeb] pt-[11px] items-center">
                  <div className="flex flex-col">
                    <span className="m-m text-gry-100 text-fs-12 text-start">
                      {languageData.cartTour.from}
                    </span>
                    <span className="m-b text-or-100 text-fs-12">
                      MXN <span className="m-b text-fs-16">${tour.price}</span>
                    </span>
                  </div>

                  <button className="m-s-b text-bl-100 text-fs-12 min-h-8 rounded-3xl border-2 border-bl-100 px-4 py-2 hover:bg-bl-100 hover:text-white text-nowrap">
                    {languageData.cartTour.seeDetails}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    <LodgingBestPrice />
  );
}
