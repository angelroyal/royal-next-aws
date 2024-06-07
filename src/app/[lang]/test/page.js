import SkeletonActivitiesTourPT from "@/utils/skeleton/SkeletonActivitiesTourPT";
import React from "react";
// import ImageGet from "@/components/ImageGet";
export default function page() {
  return (
    <div className="bg-gry-100 flex flex-col gap-[30px]">
      <SkeletonActivitiesTourPT/>
      {/* <ImageGet imageUrl={'https://staywuw.com/api2/assets/images/hotels/1/001918a_hb_a_001.webp'} /> */}
    </div>
  );
}
