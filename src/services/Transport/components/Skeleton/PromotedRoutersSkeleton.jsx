import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function PromotedRoutesSkeleton() {
  return (
    <>
      <dvi
        data-aos="fade-up"
        className="grid gap-4 grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-lg:hidden justify-between"
      >
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-[16px] border-2 border-[#EBEBEB] rounded-lg bg-white w-[280px]"
          >
            <CardSkeletonPromotedRouter />
          </div>
        ))}
      </dvi>

      <div className="lg:hidden block relative">
        <Swiper
          slidesPerView={5}
          spaceBetween={24}
          className=""
          id="swiper-shuffle-hotel"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            350: {
              slidesPerView: 1.5,
            },
            580: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1250: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 4.5,
            },
          }}
        >
          {[...Array(8)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-2 p-[16px] border-2 border-[#EBEBEB] rounded-lg bg-white">
                <CardSkeletonPromotedRouter />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export function CardSkeletonPromotedRouter() {
  return (
    <>
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[185px] rounded-lg" />

      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-1">
          <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[40%] h-[18px]" />
          <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[35%] h-[24px]" />
          <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[47%] h-[18px]" />
        </div>

        <div className="flex flex-col gap-1">
          <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[40%] h-[18px]" />
          <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[100%] h-[18px]" />
          <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[20%] h-[18px]" />
        </div>

        <div className="flex flex-col gap-1">
          <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[36%] h-[18px]" />

          <div className="flex items-center gap-x-2 mb-[15.5px]">
            <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] rounded-full w-[60px] h-[26px]" />
            <span className="animate-[skeletonLoading_1s_linear_infinite_alternate] rounded-full w-[83px] h-[26px]" />
          </div>
        </div>
      </div>

      <div className="flex gap-2 border-t-2 border-[#EBEBEB] pt-[16px] items-center justify-between h-[54px]">
        <div className="h-full animate-[skeletonLoading_1s_linear_infinite_alternate] w-[113px]" />
        <div className="h-[42px] rounded-full w-[113px] animate-[skeletonLoading_1s_linear_infinite_alternate]" />
      </div>
    </>
  );
}
