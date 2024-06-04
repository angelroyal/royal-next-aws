import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

import { useIsMobile } from "../../config/Mobile/isMobile";
import { Rating } from "@mui/material";
import SkeletonPay from "./SkeletonPay";

export default function SkeletonConfirmPay() {

  const isMobile = useIsMobile();

  return (
    <>
      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full md:h-[413px] rounded-b-lg" />
      <SkeletonPay confirmation={true}/>
    </>
  );
}
