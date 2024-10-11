import React from "react";

export default function NewsHomeBlogSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="border-b border-[#ebebeb] flex flex-col gap-2 pb-4"
        >
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[25%] h-[10px]" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[15px]" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[55px]" />
          <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[50px] h-[20px] rounded-full" />
        </div>
      ))}
    </div>
  );
}
