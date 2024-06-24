import Image from "next/image";
import React, { useState, useContext } from "react";

import { ShareContainer } from "./ShareContainer";
import LanguageContext from "../../language/LanguageContext";


export default function ModalShare({ itinerary = false }) {
  const { languageData } = useContext(LanguageContext);

  const [smShow, setSmShow] = useState(false);
  const [iconActive, setIconActive] = useState(false);

  // const [activeIcon, setActiveIcon] = useState(null);
  // const [buttonText, setButtonText] = useState(languageData.shareLink.copyLink);

  // const storageLanguage = localStorage.getItem("language");

  // const setMessage = () => {
  //   switch (storageLanguage) {
  //     case "es":
  //       return "Hola, te comparto mi itinerario. ";
  //     case "en":
  //       return "Hello, I share my itinerary with you. ";
  //     default:
  //       return "Hola, te comparto mi itinerario. ";
  //   }
  // };

  const handleOpenModal = () => {
    setSmShow(true);
    setIconActive(true);
  };

  const handleCloseModal = () => {
    setSmShow(false);
    setIconActive(false);
  };

  const handleIconClick = () => {
    if (!smShow) {
      handleOpenModal();
    } else {
      handleCloseModal();
    }
  };

  return (
    <>
      <div className={`flex cursor-pointer items-center gap-x-[8px]`}>
        <div
          className={`${iconActive ? "active" : ""} w-[16px] h-[18px]`}
          onClick={handleIconClick}
        >
          {itinerary ? (
            <Image src={`${process.env.NEXT_PUBLIC_URL}icons/share/share-o.svg`} alt="share orange" width={24} height={24}/>
          ) : iconActive ? (
            <Image src={`${process.env.NEXT_PUBLIC_URL}icons/share/share-b-o.svg`} alt="share active" width={24} height={24}/>
          ) : (
            <Image src={`${process.env.NEXT_PUBLIC_URL}icons/share/share-b.svg`} alt="share icon" width={24} height={24}/>
          )}
        </div>

        <div
          className={`text-fs-12 text-nowrap m-s-b ${
            itinerary === true ? "text-or-100" : "text-black"
          }`}
          onClick={handleOpenModal}
        >
          {languageData.shareLink.titleShare}
        </div>
      </div>
      <ShareContainer smShow={smShow} handleCloseModal={handleCloseModal} />
    </>
  );
}
