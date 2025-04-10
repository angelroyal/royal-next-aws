import React from "react";

export default function PendingPaymentSkeleton() {
  return (
    <div className="flex flex-col gap-5">
      {/* <div>
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[12rem]" />
        <div className="bg-gry-30 w-full h-[10rem] rounded-b-lg flex flex-col gap-3 justify-center items-center p-3">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[60%] h-[28px]" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[12px]" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[30%] h-[12px]" />
        </div>
      </div> */}

      <div className="mt-[3.2rem] bg-gry-30 w-full h-[16rem] flex rounded-lg py-[32px] px-[24px] shadow-[1px_0px_20px_1px_rgba(189,183,183,0.75)] gap-x-[32px] max-lg:flex-col max-lg:h-auto ">
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] h-full rounded-lg w-full max-lg:h-[9rem]" />
        <div className="bg-gry-50 w-full py-4 px-4">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[50%] h-[20px]" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[18%] h-[12px] mt-5" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[50%] h-[12px] mt-3" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[22%] h-[12px] mt-3" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[51%] h-[12px] mt-3" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[18%] h-[12px] mt-3" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[40%] h-[12px] mt-3" />
        </div>
        <div className="bg-gry-50 w-full py-4 px-4">
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[70%] h-[20px]" />
          <div className="mt-5 flex w-full max-lg:flex-col max-lg:gap-1">
            <div className="w-1/2 max-lg:w-full">
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[18%] h-[12px] " />
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[51%] h-[12px] mt-3" />
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[18%] h-[12px] mt-3" />
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[40%] h-[12px] mt-3" />
            </div>
            <div className="w-1/2 max-lg:w-full">
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[18%] h-[12px] " />
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[51%] h-[12px] mt-3" />
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[18%] h-[12px] mt-3" />
              <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[40%] h-[12px] mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
