import React from "react";

export default function FilterCategorySkeleton() {
  return (
    <>
    <div className="flex gap-3">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[60px] h-[40px] rounded-full"
        />
      ))}

    </div>
    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-[70px] h-[15px]"/>
    </>
  );
}
