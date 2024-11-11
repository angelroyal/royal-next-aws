import React from "react";

export default function FormPaymentSkeleton() {
  return (
    <div className="flex gap-6 pt-7 mx-[70px] max-2xl:mx-0">
      <div className="flex flex-col gap-3  w-[90%] max-lg:w-full">
        {/* TITLE AND LOGO */}
        <div className="flex gap-4 mt-9">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-6 w-5" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[60%] h-5" />
        </div>

        {/*SUBTITLE  */}
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-4 w-[30%]" />

        {/* FORM */}
        <div className="bg-gry-50 py-14 px-8 rounded-xl">
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            <div className="flex flex-col gap-1">
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[12px] w-[55px]" />
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[35px] rounded" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[12px] w-[55px]" />
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[35px] rounded" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[12px] w-[55px]" />
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[35px] rounded" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[12px] w-[55px]" />
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-[35px] rounded" />
            </div>
          </div>
        </div>

        <div className="w-full justify-end flex mt-2">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] rounded-full h-[50px] w-[140px]" />
        </div>
      </div>
      {/* DETAILS PAYMENT */}
      <div className="hidden lg:flex lg:w-[35%] xl:pl-[49px] pl-[9px] bg-gry-50 z-[1]">
        <div className="flex w-full h-full lg:h-max pt-[28px] pb-[20px] px-6 lg:pt-[4.6rem] lg:pl-[24px] lg:pb-[24px] flex-col gap-y-[40px] sticky top-0 will-change-transform">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[80%] h-6" />
          <div className="flex flex-col gap-3">
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-12 h-3 mt-5" />
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[70%] h-3" />
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[20%] h-2" />
            <div className="flex justify-between">
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[70%] h-3 mb-3" />
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-12 h-3 " />
            </div>
            <hr className="border-gry-70" />
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-20 h-3 mt-5" />
            <div className="flex justify-between">
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-12 h-3 " />
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-12 h-3 " />
            </div>
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[60%] h-3" />
            <hr className="border-gry-70" />
          </div>

          <div className="flex justify-between items-center">
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-14 h-3" />
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-20 h-6" />
          </div>

          <div className="flex gap-1 items-center justify-center">
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-8 w-12 rounded" />
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-8 w-12 rounded" />
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-8 w-12 rounded" />
            <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-8 w-12 rounded" />
          </div>

          <div className="flex justify-center">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-4 w-[40%]" />
          </div>
        </div>
      </div>
    </div>
  );
}
