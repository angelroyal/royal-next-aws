"use client";

import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import React, { useContext, useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

import { creditsCard } from "./Config";
import { Container } from "@/config/Others/Container";
import LanguageContext from "@/language/LanguageContext";
import { AboutFooter, AboutMobile } from "./AboutFooter";
import {
  MexicoHotelsFooter,
  MexicoHotelsFooterMobile,
} from "./MexicoHotelsFooter";

const Hotels = {
  acapulco: {
    code: "1",
    codeName: "acapulco",
    destination: "Acapulco",
    codeNameHotel: "acapulco",
  },
  cancun: {
    code: "18",
    codeName: "cancun",
    destination: "Cancún",
    codeNameHotel: "cancun",
  },
  mazatlan: {
    code: "48",
    codeName: "mazatlan",
    destination: "Mazatlan",
    codeNameHotel: "mazatlan",
  },
  puertoVallarta: {
    code: "67",
    codeName: "puerto-vallarta",
    destination: "Puerto Vallarta",
    codeNameHotel: "puerto-vallarta",
  },
};

export default function FooterT() {
  // FALSE TO CHANGE TO THE WHITE FOOTER
  const footerBlue = true;

  // const [isOpen] = useState(true);
  const year = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(null);
  const { languageData, language } = useContext(LanguageContext);
  const [positionOpen, setPositionOpen] = useState(0);

  const sendHotel = (hotelInfo) => {
    const encodedRoomData = encodeURIComponent(
      JSON.stringify([{ adults: 2, children: [] }])
    );
    const today = moment();

    let initDate = moment(today).add(1, "month");
    let endDate = moment(today).add(1, "month").add(2, "day");
    const checkIn = initDate.format("YYYY-MM-DD");
    const checkOut = endDate.format("YYYY-MM-DD");

    const requestBody = {
      codeNameHotel: hotelInfo.codeName,
      destination: hotelInfo.label,
      codeName: hotelInfo.codeName,
      code: hotelInfo.key,
      type: "destination",
      "check-in": checkIn,
      "check-out": checkOut,
      occupancies: encodedRoomData,
    };
    const query = new URLSearchParams(requestBody).toString();
    // location.reload()
    return `/${language}/mx/${hotelInfo.codeName}/hotels?${query}`;
  };

  const handleAccordionClick = (open) => {
    if (positionOpen === open) {
      //CLICK ON THE OPEN QUESTION, CLOSE IT
      setPositionOpen(null);
    } else {
      setPositionOpen(open);
    }
  };

  return (
    <footer className={`${footerBlue ? "bg-bl-100" : "bg-gry-50"}`}>
      <Container>
        <div
          className={`w-full flex flex-col justify-center items-center pt-[20px] pb-[40px] gap-[36px] max-md:px-[20px]`}
        >
          {/* LOGO */}
          <img
            src={`${process.env.NEXT_PUBLIC_URL}${
              footerBlue
                ? "royal/principal-logo-blank.svg"
                : "royal/principal-logo.svg"
            }`}
            width={200}
            height={57.5}
            className="py-[46.2px]  select-none"
            alt="logo white footer"
          />

          <div className="flex justify-between w-full max-lg:flex-wrap max-sm:flex-col gap-y-[40px]">
            {/* CONTACT */}
            <div className="flex flex-col gap-[8px]">
              <span
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-16 m-s-b `}
              >
                {languageData.footer.contact.titleContact}
              </span>

              {/* TEL */}
              <div className="flex gap-2">
                <a
                  className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5"
                  href="tel:8009530342"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsHovered("CTN")}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}icons/call/call-${
                      footerBlue
                        ? isHovered == "CTN"
                          ? "o.svg"
                          : "w.svg"
                        : isHovered == "CTN"
                        ? ""
                        : "b.svg"
                    }`}
                    alt="icon call footer"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px] select-none"
                  />
                  <span
                    className={`${footerBlue ? "text-white" : "text-black"} ${
                      isHovered === "CTN" && "!text-or-100"
                    } text-fs-12 m-s-b no-underline`}
                  >
                    {languageData.footer.contact.phone}
                  </span>
                </a>
              </div>

              {/* EMAIL */}
              <a
                className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5 w-max gap-2"
                target="_blank"
                href="mailto:info@StayWuw.com"
                onMouseEnter={() => setIsHovered("EML")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/mail/mail-${
                    footerBlue
                      ? isHovered == "EML"
                        ? "o.svg"
                        : "w.svg"
                      : isHovered == "EML"
                      ? ""
                      : "b.svg"
                  }`}
                  alt="icon mail footer"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]  select-none"
                />
                <span
                  className={`${
                    footerBlue ? "text-white" : "text-black"
                  } ${isHovered === "EML" && "!text-or-100" } text-fs-12 m-s-b no-underline`}
                >
                  info@{process.env.NEXT_PUBLIC_NAME_COMPANY}.com
                </span>
              </a>

              {/* LOCATION */}
              <a
                className="flex cursor-pointer no-underline text-fs-12 gap-x-2.5 items-start w-full"
                href="https://www.google.com/maps/place/Royal+Vacations+M%C3%A9xico/@21.1627042,-86.8270667,17z/data=!4m10!1m2!2m1!1sRoyal+Vacations+M%C3%A9xico!3m6!1s0x8f4c2df6381c1c45:0x2a631cb9dd8567ff!8m2!3d21.1652997!4d-86.8250255!15sChdSb3lhbCBWYWNhdGlvbnMgTcOpeGljb5IBDXRyYXZlbF9hZ2VuY3ngAQA!16s%2Fg%2F11rv1nkff4?entry=ttu"
                onMouseEnter={() => setIsHovered("LCT")}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-${
                    footerBlue
                      ? isHovered == "LCT"
                        ? "o.svg"
                        : "w.svg"
                      : isHovered == "LCT"
                      ? "b-o.svg"
                      : "b.svg"
                  }`}
                  alt="icon location footer"
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] select-none"
                />
                <span
                  className={`${footerBlue ? "text-white" : "text-black"} ${
                    isHovered == "LCT" && "!text-or-100"
                  } text-fs-12 m-m w-[222px] no-underline max-md:w-[50%] max-sm:w-full`}
                >
                  {languageData.footer.contact.location}
                </span>
              </a>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-[8px]">
              <span
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-16 m-s-b `}
              >
                {languageData.footer.links}
              </span>

              {/* HOME HOTELS */}
              <Link
                href={`/${language}/hotels`}
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
              >
                {languageData.ourHistory.titleHotelService}
              </Link>

              {/* HOME TOUR */}
              <Link
                href={`/${language}/tours`}
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
              >
                {languageData.itinerary.tourItinerary.titleTour}
              </Link>

              {/* HOME TRANSPORT */}
              <Link
                href={`/${language}/transports`}
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
              >
                {languageData.modalMovingOptions.titleTransfer}
              </Link>
              {/* HOME BLOG */}
              <Link
                href={`/blog`}
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-12 m-m hover:!text-or-100 no-underline w-fit`}
              >
                Blog
              </Link>
            </div>

            {/* ABOUT */}
            <div className="sm:hidden block">
              <AboutMobile
                handleAccordionClick={handleAccordionClick}
                footerBlue={footerBlue}
                positionOpen={positionOpen}
              />
            </div>

            <div className="hidden sm:block">
              <AboutFooter footerBlue={footerBlue} />
            </div>

            {/* MEXICO HOTELS */}
            <div className="sm:hidden block">
              <MexicoHotelsFooterMobile
                handleAccordionClick={handleAccordionClick}
                footerBlue={footerBlue}
                positionOpen={positionOpen}
                sendHotel={sendHotel}
                Hotels={Hotels}
              />
            </div>

            <div className="hidden sm:block">
              <MexicoHotelsFooter
                footerBlue={footerBlue}
                sendHotel={sendHotel}
                Hotels={Hotels}
              />
            </div>
            {/* END MEXICO HOTELS */}

            {/* FOLLOW US */}
            <div className="flex flex-col gap-[8px]">
              <span
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-16 m-s-b `}
              >
                {languageData.footer.followUs}
              </span>

              <div className="flex gap-[16px]">
                {/* WHATSAPP */}
                <a
                  className="flex cursor-pointer no-underline w-fit"
                  href="https://api.whatsapp.com/send?phone=529981342286&text=¡Hola!%20Necesito%20ayuda%20para%20planificar%20mi%20próximo%20viaje%20a%20México.%20¿Podrían%20orientarme%20sobre%20los%20mejores%20destinos%20y%20actividades%20que%20ofrecen?%20¡Espero%20su%20pronta%20respuesta!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}icons/whats/whats-${
                      footerBlue ? "bg-w.svg" : "b.svg"
                    }`}
                    alt="icon whats footer"
                    width={20}
                    height={20}
                    className=" select-none"
                  />
                </a>

                {/* FACEBOOK */}
                <a
                  className="flex cursor-pointer no-underline w-fit"
                  href="https://www.facebook.com/RoyalVacationsMx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}icons/face/face-${
                      footerBlue ? "w.svg" : "b.svg"
                    }`}
                    alt="icon face footer"
                    width={20}
                    height={20}
                    className=" select-none"
                  />
                </a>

                {/* INSTAGRAM */}
                <a
                  className="flex cursor-pointer no-underline w-fit"
                  href="https://www.instagram.com/royalvacationsmx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}icons/insta/insta-${
                      footerBlue ? "w.svg" : "b.svg"
                    }`}
                    alt="icon instagram footer"
                    width={20}
                    height={20}
                    className=" select-none"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-end w-[99%] pt-[36px] border-t border-[#d1d2d5] max-md:gap-[40px] max-md:flex-col max-md:items-start">
            {/* ACCEPT CREDIT CARD */}
            <div className="flex flex-col gap-[8px]">
              <span
                className={`${
                  footerBlue ? "text-white" : "text-black"
                } text-fs-12 m-s-b mx-1`}
              >
                {languageData.footer.acceptCreditCards}
              </span>

              <div className="flex">
                {creditsCard.map((card, index) => (
                  <img
                    key={index}
                    className="mx-1  select-none"
                    src={`${process.env.NEXT_PUBLIC_URL}${card.image}`}
                    alt={card.alt}
                    width="45px"
                    height="100%"
                  />
                ))}
              </div>
            </div>

            {/* COPYRIGHT */}
            <div
              className={`${
                footerBlue ? "text-white" : "text-black"
              } text-fs-12 m-m`}
            >
              {" "}
              {languageData.footer.contact.copyright} {year}{" "}
              {languageData.footer.contact.royalVacations}{" "}
              {languageData.footer.contact.rightsReserved}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
