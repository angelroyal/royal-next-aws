import "../../assets/styles/web/Navbar.css";
import React from "react";

// import LanguageContext from "../../language/LanguageContext";

import Line from "../../assets/images/others/group 75.jpg";
import LanguageContext from "@/language/LanguageContext";
import NavigationDesktop from "./NavigationDesktop";
import Image from "next/image";
import HeaderBlue from "./HeaderBlue";

export default function Navigation() {
  return (
    <div className="flex flex-col sticky top-0 z-[9]">
      <Image
        src={Line}
        alt="Royal orange"
        height="9px"
        width="100%"
        priority={true}
      />
      <div className="md:h-[124px] md:pb-2 bg-white border-b border-gry-70">
        <HeaderBlue />

        <NavigationDesktop />
      </div>
    </div>
  );
}
