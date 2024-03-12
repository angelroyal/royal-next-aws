"use client";

// import { useHistory } from "react-router-dom";
import React, { useContext, useState } from "react";
// import { useLocation } from "react-router-dom";

import { navigation } from "../../config/Others/navigation";
import LanguageContext from "../../language/LanguageContext";
import Image from "next/image";
// import { GetIconActivation } from "../../utils/navigation/GetIconActivation";
// import { useLocation } from "react-router-dom";

export default function NavigationOptions() {
  const { languageData } = useContext(LanguageContext);
  const [activeIcon, setIcon] = useState("");
  // const location = useLocation();

  // GetIconActivation(location.pathname, setIcon);
  // SELECTED ICON UPDATE ACTIVE ICON
  const handleIconClick = (id) => {
    // history.push(`/${id}`);
  };

  return (
    <div className="navigation-icons nav-height">
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
            width="auto"
            height="auto"
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
