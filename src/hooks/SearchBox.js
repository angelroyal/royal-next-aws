"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ResultTour from "@/components/Search/ResultTour";
import LanguageContext from "../language/LanguageContext";
import SendHotel from "@/services/Hotels/Search/SendHotel";
import { NavigationConfig } from "@/config/Navigation/NavigationConfig";

export default function SearchBox() {
  const { languageData } = useContext(LanguageContext);
  const [currentActiveIcon, setCurrentActiveIcon] = useState(null);
  const router = useRouter();

  // GET ACTIVITY SERVICE
  const routerActual = NavigationConfig();

  useEffect(() => {
    setCurrentActiveIcon(routerActual);
  }, [routerActual]);

  // CHANGE TAB DINAMIC
  const handleTabChange = (eventKey) => {
    let view = null;
    switch (eventKey) {
      case "hotel":
        view = process.env.NEXT_PUBLIC_HOME;
        break;
      case "tour":
        view = "/tour";
        break;
    }
    if (view != null) {
      router.push(view);
    }
  };

  return (
    <>
      <Tab.Group>
        <Tab.List
          id="tab-search-home"
          className="flex gap-x-2 text-fs-12 m-s-b"
        >
          <Tab
            className="focus:outline-none focus:ring-transparent"
            onClick={() => handleTabChange("hotel")}
            style={{ padding: "0" }}
          >
            <span
              className={`${
                currentActiveIcon === "hotel"
                  ? "bg-bl-100 text-white"
                  : "bg-gry-50 text-gry-100"
              } w-max flex border-0 gap-2 justify-center rounded-t-lg py-2 px-4`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}${
                  currentActiveIcon === "hotel"
                    ? "icons/hotel/hotel-w.svg"
                    : "icons/hotel/hotel-b.svg"
                }`}
                alt="hotel icon Royal vacation"
                width={29}
                height={25}
              />{" "}
              {languageData.SearchBox.tabHotel.lodgement}
            </span>
          </Tab>

          {/* TAB TOUR */}
          <Tab
            className="focus:outline-none focus:ring-transparent"
            onClick={() => handleTabChange("tour")}
            style={{ padding: "0" }}
          >
            <span
              className={`${
                currentActiveIcon === "tour"
                  ? "bg-bl-100 text-white"
                  : "bg-gry-50 text-gry-100"
              } w-max flex border-0 gap-2 justify-center rounded-t-lg py-2 px-4`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}${
                  currentActiveIcon === "tour"
                    ? "icons/tour/tour-w.svg"
                    : "icons/tour/tour-b.svg"
                }`}
                alt="Tour icon Royal vacation"
                width={29}
                height={25}
              />{" "}
              {languageData.modalHotelOptions.titleTour}
            </span>
          </Tab>
        </Tab.List>

        <Tab.Panels>
          {currentActiveIcon === "hotel" && <SendHotel />}

          {currentActiveIcon === "tour" && <ResultTour />}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
