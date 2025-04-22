"use client";
import React, { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";

export default function FooterMyReservation() {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="w-full flex justify-between items-end mb-10 h-[45vh] max-lg:mb-5">
      {/*YOU NEED HELP? */}
      <div className="flex flex-col ml-16 gap-3 justify-center items-center max-lg:ml-10 max-md:gap-1">
        <div className="text-fs-20 text-gry-70 m-b max-lg:text-fs-16">
          {languageData.myReservation.doYouNeedHelp}
        </div>
        <a
          className="flex cursor-pointer no-underline"
          href={`tel:${languageData.navigation.hrefNumber}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-or-70 rounded-full text-white px-5 py-3 hover:bg-or-100 max-lg:text-fs-10">
            {" "}
            {languageData.myReservation.callUsAt}{" "}
            <span className="m-b">{languageData.navigation.number}</span>
          </button>
        </a>
      </div>

      {/* FOLLOW US */}
      <div className="flex flex-col gap-2 max-md:pb-4">
        <div className="text-fs-20 text-gry-70 m-m mr-16 max-lg:mr-10 max-lg:text-fs-16">
          {languageData.myReservation.followUsOn}
        </div>
        <div className="flex gap-3 items-center">
          <a
            className="flex cursor-pointer no-underline w-fit"
            href="https://api.whatsapp.com/send?phone=529981342286&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_URL}/icons/whats/whats-bl.svg`}
              alt="logo whats"
              width={20}
              height={20}
              className=""
            />
          </a>
          <a
            className="flex cursor-pointer no-underline w-fit"
            href="https://www.facebook.com/RoyalVacationsMx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_URL}/icons/face/face-bl.svg`}
              alt="logo face"
              width={16}
              height={16}
              className="w-[16px] h-[16px]"
            />
          </a>
          <a
            className="flex cursor-pointer no-underline w-fit"
            href="https://www.instagram.com/royalvacationsmx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_URL}/icons/insta/insta-bl.svg`}
              alt="logo insta"
              className="w-[20px] h-[20px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
