"use client";

import Image from "next/image";
import { ImageContext } from "@/context/ImageContext";
import { useContext, useEffect, useState } from "react";

export default function BannerFooterTour() {
  const { getImg } = useContext(ImageContext);
  // DISPLAY LAP , TAB and MOB
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width > 1024) {
        setDeviceType("laptop");
      } else if (width > 640 && width <= 1024) {
        setDeviceType("tablet");
      } else if (width <= 640) {
        setDeviceType("mobile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="my-[120px] w-full max-sm:my-[30px] rounded-lg">
      {getImg ? (
        <>
          <Image
            // src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/banner-tour.webp`}
            src={getImg.tour.bannerLocation[deviceType]}
            width={1272}
            height={469}
            alt="banner-footer-tour"
            // className="w-[99%] h-auto select-none max-md:hidden"
            className="w-[99%] h-auto select-none rounded-lg"
          />

          {/* <Image
            src={`${process.env.NEXT_PUBLIC_URL}banners/tours/Feb2024/banner-tour-mobile.jpg`}
            width={608}
            height={608}
            alt="banner-footer-tour-mobile"
            className="w-[608px] h-auto select-none md:hidden"
          /> */}
        </>
      ) : (
        <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full rounded-lg" />
      )}
    </div>
  );
}
