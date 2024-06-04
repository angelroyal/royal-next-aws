import * as React from "react";
import SkeletonPay from "./SkeletonPay";

export default function SkeletonConfirmPay() {
  return (
    <>
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full md:h-[413px] h-[335px] rounded-b-lg" />
      <SkeletonPay confirmation={true} />
    </>
  );
}
