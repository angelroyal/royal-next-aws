"use client";

import React, { useContext, useEffect, useState } from "react";

import CartOpen from "../Cart/open/CartOpen";
import { HamburgerMenu } from "./HamburgerMenu";
import { SelectCurrency } from "./SelectCurrency";
import { Container } from "@/config/Others/Container";
import LanguageContext from "@/language/LanguageContext";
import { LanguageSelector } from "@/language/LanguageSelector";
import { NavigationConfig } from "@/config/Navigation/NavigationConfig";

export default function NavigationDesktop() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { languageData, language } = useContext(LanguageContext);
  const [currentActiveIcon, setCurrentActiveIcon] = useState(null);

  // GET ACTIVITY SERVICE
  const routerActual = NavigationConfig();
console.log(routerActual);

  useEffect(() => {
    setCurrentActiveIcon(routerActual);
  }, [routerActual]);

  const changeHome = () => {
    window.open(`/`, "_self");
  };
  const changeBlog = () => {
    window.open(`/blog`, "_self");
  };
  const changeHotels = () => {
    window.open(`/${language}/hotels`, "_self");
  };
  const changeTour = () => {
    window.open(`/${language}/tours`, "_self");
  };
  const changeTransport = () => {
    window.open(`/${language}/transports`, "_self");
  };

  return (
    <div className="relative md:top-[-22px] mt-[38px] md:mt-0 max-sm:mt-[20px]">
      <Container>
        {/* fix tailwind */}
        <header className="relative pt-0 pb-[20px] flex flex-col gap-y-[1rem] max-sm:pb-0">
          <div className="hidden md:flex justify-end items-center">
            {/* BLOG LINK */}
            <div
                  className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
                  onClick={() => {
                    changeBlog();
                  }}
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}icons/general/globe-${
                      currentActiveIcon === "blog"
                        ? "o.svg"
                        : "b.svg"
                    }`}
                    alt="icon blog"
                    className="pr-2 pb-1"
                  />
                  <span
                    className={`${
                      currentActiveIcon === "blog"
                        ? "text-or-100"
                        : ""
                    }`}
                  >
                    {/* {languageData.SearchBox.tabHotel.hotel} */}
                    Blog
                  </span>
                </div>
          <span className="pl-[10px] pr-[10px]">|</span>
            <SelectCurrency />
            <span className="pl-[10px] pr-[10px]">|</span>
            <LanguageSelector />

            {/* <Cart /> */}
            <CartOpen />
          </div>

          <nav
            className="flex w-full items-center justify-between "
            aria-label="Global"
          >
            <div className="flex md:flex-1 justify-between">
              {/* HOME HOTEL LINK */}
              <div
                className="m-1.5 cursor-pointer"
                onClick={() => {
                  // setTypeHome("hotels");
                  changeHome();
                }}
              >
                {/* <Link
                  className="m-1.5"
                  href={`${process.env.NEXT_PUBLIC_HOME}`}
                  passHref
                > */}
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}royal/principal-logo.svg`}
                  alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} logo`}
                  width={200}
                  height={100}
                  className="max-sm:w-[140px] max-sm:h-[40px] select-none"
                />
                {/* </Link> */}
              </div>

              <div className="hidden md:items-center md:flex md:gap-x-7">
                {/* HOME LINK */}
                <div
                  className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
                  onClick={() => {
                    changeHome();
                  }}
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}icons/general/home-${
                      currentActiveIcon === "home"
                        ? "o.svg"
                        : "b.svg"
                    }`}
                    alt="icon hotel"
                    className="pr-2 pb-1"
                  />
                  <span
                    className={`${
                      currentActiveIcon === "home"
                        ? "text-or-100"
                        : ""
                    }`}
                  >
                    {/* {languageData.SearchBox.tabHotel.hotel} */}
                    Home
                  </span>
                </div>

                {/* HOTEL LINK */}
                <div
                  className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
                  onClick={() => {
                    // setTypeHome("hotels");
                    changeHotels();
                  }}
                >
                  {/* <Link
                  href={`/${language}/hotels`}
                  passHref
                  className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline"
                > */}{" "}
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-${
                      currentActiveIcon === "hotels" ||
                      currentActiveIcon === "hotel"
                        ? "o.svg"
                        : "b.svg"
                    }`}
                    alt="icon hotel"
                    className="pr-2"
                  />
                  <span
                    className={`${
                      currentActiveIcon === "hotels" ||
                      currentActiveIcon === "hotel"
                        ? "text-or-100"
                        : ""
                    }`}
                  >
                    {languageData.SearchBox.tabHotel.hotel}
                  </span>
                  {/* </Link> */}
                </div>

                {/* TOUR LINK */}
                <div
                  className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
                  onClick={() => {
                    // setTypeHome("tours");
                    changeTour();
                  }}
                >
                  {/* <Link
                  href={`/${language}/tours`}
                  passHref
                  className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline	"
                > */}
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-${
                      currentActiveIcon === "tours" ||
                      currentActiveIcon === "tour"
                        ? "o.svg"
                        : "b.svg"
                    }`}
                    alt="icon tour"
                    className="pr-2"
                  />
                  <span
                    className={`${
                      currentActiveIcon === "tours" ||
                      currentActiveIcon === "tour"
                        ? "text-or-100"
                        : ""
                    }`}
                  >
                    Tours
                  </span>
                  {/* </Link> */}
                </div>

                {/* TRANSPORT LINK */}
                <div
                  className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline cursor-pointer"
                  onClick={() => {
                    // setTypeHome("tours");
                    changeTransport();
                  }}
                >
                  {/* <Link
                  href={`/${language}/transports`}
                  passHref
                  className="flex items-center text-gry-100 m-b hover:text-or-100 no-underline	"
                > */}
                  <img
                    src={`${
                      process.env.NEXT_PUBLIC_URL
                    }icons/transport/transport-${
                      currentActiveIcon === "transports" ||
                      currentActiveIcon === "transport"
                        ? "o.svg"
                        : "b.svg"
                    }`}
                    alt="icon transport"
                    className="pr-2"
                  />
                  <span
                    className={`${
                      currentActiveIcon === "transports" ||
                      currentActiveIcon === "transport"
                        ? "text-or-100"
                        : ""
                    }`}
                  >
                    {languageData.modalHotelOptions.titleTransfer}
                  </span>
                  {/* </Link> */}
                </div>
              </div>
            </div>

            <div className="flex gap-x-[18px] md:hidden">
              <CartOpen />

              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <div className="flex flex-col gap-y-[3px]">
                  <span className="rounded-lg bg-or-100 w-[16px] h-[3px]" />
                  <span className="rounded-lg bg-or-100 w-[16px] h-[3px]" />
                  <span className="rounded-lg bg-or-100 w-[16px] h-[3px]" />
                </div>
              </button>
            </div>

            <HamburgerMenu
              open={mobileMenuOpen}
              setMobileMenuOpen={() => setMobileMenuOpen(false)}
            />
          </nav>
        </header>
      </Container>
    </div>
  );
}
