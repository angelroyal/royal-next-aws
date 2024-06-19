import * as React from "react";
import SkeletonPay from "./SkeletonPay";

export default function SkeletonConfirmPay({step}) {
  return (
    <div className="pb-8 ">
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full md:h-[413px] h-[335px] rounded-b-lg" />
      <SkeletonPay confirmation={true} step={step} />

      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[62px] mt-[1.6rem] hidden lg:block rounded-bl-[2.4rem] !rounded-br-lg"/>
    </div>
  );
}
