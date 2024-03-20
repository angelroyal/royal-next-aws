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
          className="flex gap-[6px] justify-center content-start items-center cursor-pointer"
          rel="noopener noreferrer"
          onClick={() => handleIconClick(id)}
        >
          <Image
            src={activeIcon === id ? activeImageSrc : imageSrc}
            alt={`${languageData.allAlt.altRoyalVacations} ${label}`}
            // width="auto"
            // height="auto"
            className="w-[1.7rem] h-auto"
          />
          
          <div
            className={`text-fs-12 m-b ${activeIcon === id ? 'text-or-100': 'text-gry-100'}`}
          >
            {languageData.navigation[label]}
          </div>
        </div>
      ))}
    </div>
  );
}
