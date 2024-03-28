"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../../assets/styles/general/Swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

export function HotelInformationSkeleton() {
  return (
    <>
      <div className="bg-white rounded-lg flex flex-col lg:items-center lg:flex-row py-9 px-4 lg:p-8 lg:gap-x-9">
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full lg:w-[52%] h-[400px] lg:h-[560px] select-none rounded-md" />

        <div className="w-full lg:min-h-[30rem] lg:w-[40%] xl:w-[45%] pt-9 lg:py-4 lg:px-2">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[35px] w-4/5" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[20px] w-[8rem] mt-[12px]" />
          <div className="mt-3 animate-[skeletonLoading_1s_linear_infinite_alternate] h-[16px] w-3/5" />

          <div className="mt-5 animate-[skeletonLoading_1s_linear_infinite_alternate] h-[17rem] w-full rounded-md" />
        </div>
      </div>

      <div className="mt-2 bg-white rounded-lg py-9 px-4 lg:p-8 lg:gap-x-9">
        <div className="flex flex-col gap-y-4 pr-4 lg:pr-9 w-full ">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-2/5 h-[24px]" />

          <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-2 gap-y-2">
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full lg:w-[296px] h-[54px] rounded-md" />
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full lg:w-[296px] h-[54px] rounded-md" />
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full lg:w-[296px] h-[52px] rounded-full" />
          </div>
        </div>

        {/* CARDS ROOMS SKELETON */}
      </div>
    </>
  );
}

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
