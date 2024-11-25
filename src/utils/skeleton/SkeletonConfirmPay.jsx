import * as React from "react";
import SkeletonPay from "./SkeletonPay";

export default function SkeletonConfirmPay({step}) {
  return (
    <div className="pb-8 ">
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[468px] max-2xl:h-[400px] max-xl:h-[350px] max-lg:h-[330px] max-md:h-[370px] rounded-b-lg" />
      <SkeletonPay confirmation={true} step={step} />

      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-[62px] mt-[1.6rem] hidden lg:block rounded-bl-[2.4rem] !rounded-br-lg"/>
    </div>
  );
}
