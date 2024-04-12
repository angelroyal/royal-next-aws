"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../../assets/styles/general/Swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@mui/material";
import Image from "next/image";

export function RoomsSelectedSkeleton() {
  return (
    <>
      <div className="mt-6 mb-9 animate-[skeletonLoading_1s_linear_infinite_alternate] w-[171px] h-[54px]" />

      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[137px] mx-auto lg:mx-0 h-[21px] mb-4"></div>
      <Swiper
        className="mySwiper w-full"
        slidesPerView={4}
        spaceBetween={16}
        breakpoints={{
          300: {
            slidesPerView: 1.1,
          },
          500: {
            slidesPerView: 1.4,
          },
          768: {
            slidesPerView: 2,
          },
          1010: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {[...Array(4)].map((_, index) => (
          <SwiperSlide key={index} className="bg-transparent shadow-sm">
            <div className="p-4 rounded-lg border border-gry-30 bg-white">
              <div className="flex flex-col gap-y-4">
                <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[181px] rounded-lg" />

                <div className="flex flex-col gap-y-1">
                  <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[5rem] h-[18px] " />
                  <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[18px] w-[80%]" />
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[5.5rem] h-[18px] " />
                  <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[18px] w-[36%]" />
                </div>

                <div className="flex flex-col gap-y-2">
                  <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[16px] w-[50%]" />
                  <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[15px] w-[56%]" />
                </div>
              </div>
              <span className="border border-gry-70 w-full mt-4 mb-4 flex" />

              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[27px] w-[130px]" />
                  <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[23px] w-[103px]" />
                </div>

                <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] border-0 rounded-full w-[78px] h-[46px]" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export function LodgingBestPrice() {
  return (
    <>
      <div className="lg:hidden block relative">
        <Swiper
          slidesPerView={4}
          spaceBetween={12}
          navigation
          id="swiper-shuffle-hotel"
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
          {[...Array(10)].map((tour, index) => (
            <SwiperSlide key={index} className="!rounded-lg">
              <div className="h-full cursor-pointer shadow-md shadow-gry-30 rounded-xl">
                <div className="w-full h-[216px] rounded-t-lg animate-[skeletonLoading_1s_linear_infinite_alternate]"></div>

                <div className="bottom-0 w-full h-1/4 rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col">
                  <div className="h-[12px] w-[3rem] animate-[skeletonLoading_1s_linear_infinite_alternate]" />

                  <Rating
                    className="my-1"
                    name="read-only"
                    // value={5}
                    readOnly
                    size="small"
                  />

                  <div className="flex gap-1 mb-[11px] items-center">
                    <Image
                      className="backdrop-grayscale w-[14px] h-[18px]"
                      src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
                      alt="location icon"
                      width={11}
                      height={14}
                    />
                    <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[4rem] h-[12px]" />
                  </div>

                  <div className="flex justify-between border-t border-[#ebebeb] pt-[11px] items-center">
                    <div className="flex gap-y-2 flex-col">
                      <span className="w-[1rem] h-[8px] animate-[skeletonLoading_1s_linear_infinite_alternate]" />
                      <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[2rem] h-[12px]" />
                    </div>

                    <button className="m-s-b text-bl-100 text-fs-12 min-h-8 rounded-3xl px-4 py-2 animate-[skeletonLoading_1s_linear_infinite_alternate] w-[107px]" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/*END TWO SWIPER */}

      <div className=" lg:flex flex-wrap justify-center md:justify-between gap-x-[12] gap-y-[12px] hidden">
        {[...Array(10)].map((tour, index) => (
          <div key={index} className="!rounded-lg">
            {/*  */}
            <div className="h-full min-w-[266px] max-w-[280px] cursor-pointer shadow-md shadow-gry-30 rounded-xl">
              <div className="w-full h-[216px] rounded-t-lg animate-[skeletonLoading_1s_linear_infinite_alternate]"></div>

              <div className="bottom-0 w-full h-1/4 rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col">
                <div className="h-[12px] w-[3rem] animate-[skeletonLoading_1s_linear_infinite_alternate]" />

                <Rating
                  className="my-1"
                  name="read-only"
                  // value={5}
                  readOnly
                  size="small"
                />

                <div className="flex gap-1 mb-[11px] items-center">
                  <Image
                    className="backdrop-grayscale w-[14px] h-[18px]"
                    src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
                    alt="location icon"
                    width={11}
                    height={14}
                  />
                  <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[4rem] h-[12px]" />
                </div>

                <div className="flex justify-between border-t border-[#ebebeb] pt-[11px] items-center">
                  <div className="flex flex-col gap-y-2">
                    <span className="w-[1rem] h-[8px] animate-[skeletonLoading_1s_linear_infinite_alternate]" />
                    <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[2rem] h-[12px]" />
                  </div>

                  <button className="m-s-b text-bl-100 text-fs-12 min-h-8 rounded-3xl px-4 py-2 animate-[skeletonLoading_1s_linear_infinite_alternate] w-[107px]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
