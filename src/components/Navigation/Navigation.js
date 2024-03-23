import React from "react";
import Image from "next/image";

import Line from "../../assets/images/others/group 75.jpg";
import NavigationDesktop from "./NavigationDesktop";
import HeaderBlue from "./HeaderBlue";

export default function Navigation() {
  return (
    <div className="flex flex-col sticky top-0 z-[9]">
      <Image
        src={Line}
        alt="Royal orange"
        height={8}
        width={1920}
        priority={true}
      />
      <div className="md:h-[124px] md:pb-2 bg-white border-b border-gry-70">
        <HeaderBlue />

        <NavigationDesktop />
      </div>
    </div>
  );
}
