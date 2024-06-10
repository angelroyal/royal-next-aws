import React from "react";

export default function CardGalleryTransportSkeleton() {
  return (
    <>
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[115px]" />
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[60%] h-[17px] my-[10px]" />
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[50%] h-[10px] my-[10px]" />

      <div className="flex gap-2 w-full">
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[15px] h-[15px] my-[10px]" />
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[25%] h-[15px] my-[10px]" />
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[15px] h-[15px] my-[10px]" />
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[25%] h-[15px] my-[10px]" />
      </div>

      <div className="flex gap-2 w-full">
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[15px] h-[15px]" />
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[35%] h-[15px]" />
      </div>

      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[30%] h-[10px] my-[10px]" />

      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] rounded-full w-[28%] h-[25px] my-[10px]" />
    </>
  );
}
