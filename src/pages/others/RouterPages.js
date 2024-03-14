"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

import { navigation } from "../../config/Others/navigation";
import LanguageContext from "../../language/LanguageContext";

export default function NavigationOptions() {
  const router = useRouter();
  const [activeIcon, setIcon] = useState("");
  const { languageData } = useContext(LanguageContext);

  // SELECTED ICON UPDATE ACTIVE ICON
  const handleIconClick = (id) => {
    setIcon(id)
    router.push(`/${id}`);
  };

  return (
    <div className="hidden md:flex md:flex-1 md:gap-x-7	 md:justify-end">
      {navigation.map(({ id, label, imageSrc, activeImageSrc }) => (
        <div
          key={id}
          className="navigation-second"
          rel="noopener noreferrer"
          onClick={() => handleIconClick(id)}
        >
          <Image
            src={activeIcon === id ? activeImageSrc : imageSrc}
            alt={`${languageData.allAlt.altRoyalVacations} ${label}`}
            // width="auto"
            // height="auto"
            className="navigation-icon-img"
          />
          
          <div
            className="navigation-icon-text"
            style={{
              fontFamily:
                activeIcon === id ? "Montserrat Bold" : "Montserrat Bold",
              color: activeIcon === id ? "#EB741E" : "#666666",
            }}
          >
            {languageData.navigation[label]}
          </div>
        </div>
      ))}
    </div>
  );
}
