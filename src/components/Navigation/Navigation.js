import React from "react";

import NavigationDesktop from "./NavigationDesktop";
import HeaderBlue from "./HeaderBlue";

export default function Navigation({hotelDetails=false}) {
  return (
    <div className={`${hotelDetails ? 'static' : 'static' } flex flex-col top-0 z-[9]`}>
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/home/line-navigation.jpeg`}
        alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} line orange`}
        height={8}
        priority={true}
        className="size-full"
      />
      <div className="md:h-[124px] md:pb-2 bg-white border-b border-gry-70">
        <HeaderBlue />

        <NavigationDesktop />
      </div>
    </div>
  );
}
