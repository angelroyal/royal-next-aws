import React from "react";

export default function FormPaymentSkeleton() {
  return (
    <div className="flex gap-6 mt-10">
      <div className="flex flex-col gap-3  w-[70%] max-lg:w-full">
        {/* TITLE AND LOGO */}
        <div className="flex gap-4">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-5 w-5" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[80%] h-5" />
        </div>

        {/*SUBTITLE  */}
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-4 w-[60%]" />

        {/* FORM */}
        <div className="bg-gry-30 py-12 px-8 rounded-xl">
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

        <div className="w-full justify-end flex">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] rounded-full h-[45px] w-[120px]" />
        </div>
      </div>
      {/* DETAILS PAYMENT */}
      <div className="bg-gry-30 rounded w-[30%] h-[550px] max-lg:hidden"></div>
    </div>
  );
}
