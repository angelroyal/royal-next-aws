
import "../../assets/styles/web/Navbar.css";
import React from "react";

// import LanguageContext from "../../language/LanguageContext";

import Line from "../../assets/images/others/group 75.jpg";
import LanguageContext from "@/language/LanguageContext";
import NavigationDesktop from "./NavigationDesktop";
import Image from "next/image";

export default function Navigation() {

  return (
    <div className="flex flex-col sticky top-0 z-[1000]">
      <Image
        src={Line}
        alt="Royal orange"
        height="9px"
        width="100%"
        loading="lazy"
      />

        <NavigationDesktop />
    </div>
  );
}
