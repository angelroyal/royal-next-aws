"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ResultTour from "@/components/Search/ResultTour";
import LanguageContext from "../language/LanguageContext";
import SendHotel from "@/services/Hotels/Search/SendHotel";
import { NavigationConfig } from "@/config/Navigation/NavigationConfig";
import { SearchHomeSkeleton } from "@/components/Skeleton/SearchHome";
import SearchTransport from "@/services/Transport/components/Search/SearchTransport";

export default function SearchBox() {
  const { languageData, language } = useContext(LanguageContext);
  const [currentActiveIcon, setCurrentActiveIcon] = useState(null);
  const router = useRouter();

  // GET ACTIVITY SERVICE
  const routerActual = NavigationConfig();

  useEffect(() => {
    setCurrentActiveIcon(routerActual);
  }, [routerActual]);

  console.log(currentActiveIcon);
  // CHANGE TAB DINAMIC
  const handleTabChange = (eventKey) => {
    let view = null;
    switch (eventKey) {
      case "hotels":
        view = process.env.NEXT_PUBLIC_HOME;
        break;
      case "tour":
        view = `/${language}/tour`;
        break;
      case "transport":
        view = `/${language}/transport`;
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
            onClick={() => handleTabChange("hotels")}
            style={{ padding: "0" }}
          >
            <span
              className={`${
                currentActiveIcon === "hotels"
                  ? "bg-bl-100 text-white"
                  : "bg-gry-50 text-gry-100"
              } w-max flex border-0 gap-2 justify-center rounded-t-lg py-2 px-4`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}${
                  currentActiveIcon === "hotels"
                    ? "icons/hotel/hotel-w.svg"
                    : "icons/hotel/hotel-b.svg"
                }`}
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon hotel`}
                width={29}
                height={25}
              />{" "}
              {languageData.SearchBox.tabHotel.hotel}
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
                  ? //  currentActiveIcon === "tours"
                    "bg-bl-100 text-white"
                  : "bg-gry-50 text-gry-100"
              } w-max flex border-0 gap-2 justify-center rounded-t-lg py-2 px-4`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}${
                  currentActiveIcon === "tour" || currentActiveIcon === "tours"
                    ? "icons/tour/tour-w.svg"
                    : "icons/tour/tour-b.svg"
                }`}
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon tour`}
                width={29}
                height={25}
              />{" "}
              {languageData.modalHotelOptions.titleTour}
            </span>
          </Tab>

          {/* TAB TRANSPORT */}
          <Tab
            className="focus:outline-none focus:ring-transparent"
            onClick={() => handleTabChange("transport")}
            style={{ padding: "0" }}
          >
            <span
              className={`${
                currentActiveIcon === "transport"
                  ? //  currentActiveIcon === "tours"
                    "bg-bl-100 text-white"
                  : "bg-gry-50 text-gry-100"
              } w-max flex border-0 gap-2 justify-center rounded-t-lg py-2 px-4`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}${
                  currentActiveIcon === "transport" ||
                  currentActiveIcon === "transports"
                    ? "icons/transport/transport-w.svg"
                    : "icons/transport/transport-b.svg"
                }`}
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon tour`}
                width={29}
                height={25}
              />{" "}
              {languageData.modalHotelOptions.titleTour}
            </span>
          </Tab>
        </Tab.List>

        <Tab.Panels>
          {currentActiveIcon ? (
            <>
              {currentActiveIcon === "hotels" && <SendHotel />}

              {currentActiveIcon === "tour" || currentActiveIcon === "tours" ? (
                <ResultTour />
              ) : (
                ""
              )}
              {currentActiveIcon === "transport"  && <SearchTransport />}
            </>
          ) : (
            <SearchHomeSkeleton />
          )}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
