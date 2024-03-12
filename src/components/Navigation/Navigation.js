"use client";

import "../../assets/styles/web/Navbar.css";
import React, { useContext } from "react";

// import LanguageContext from "../../language/LanguageContext";

import Line from "../../assets/images/others/group 75.jpg";
import LanguageContext from "@/language/LanguageContext";
import NavigationDesktop from "./NavigationDesktop";
import Image from "next/image";

export default function Navigation() {
  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <div className="line-principal-home position-relative">
        <Image
          src={Line}
          alt={languageData.allAlt.altBannerNavigation}
          height="9px"
          width="100%"
          loading="lazy"
        />
      </div>

      <div data-aos="fade-down" className="navbar-color">
        <NavigationDesktop />
      </div>
    </>
  );
}
