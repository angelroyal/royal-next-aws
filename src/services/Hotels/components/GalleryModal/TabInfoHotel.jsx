"use client";

import {
  InformationCircleIcon,
  MegaphoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import React, { useContext, useEffect, useState } from "react";

import { Tooltip } from "../ToolTip/Tooltip";
import LanguageContext from "@/language/LanguageContext";
import { AmenitiesIcons } from "@/components/General/Amenities";

const tabs = [
  { name: "information", icon: InformationCircleIcon },
  { name: "amenities", icon: MegaphoneIcon },
  { name: "schedules", icon: ClockIcon },
];

export default function TabInfoHotel(props) {
  const { hotel } = props;
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isLimitLetters, setIsLimitLetters] = useState(false);
  const [hotelDescription, setHotelDescription] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [shortHotelDescription, setShortHotelDescription] = useState(null);
  const [allAmenities, setAllAmenities] = useState([]);

  useEffect(() => {
    if (hotel && hotel.facilities) {
      setAllAmenities(
        Object.values(
          hotel.facilities.reduce((acc, item) => {
            acc[item.name] = item;
            return acc;
          }, {})
        )
      );
    }
  }, [hotel]);

  const { languageData, language } = useContext(LanguageContext);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  //   DESCRPTION TEXT
  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  // VALIDATION FOR THE LIMIT OF LETTERS ALLOWED
  useEffect(() => {
    const getDescriptionPreview = () => {
      const words = hotel.description.split(" ");
      const totalArray = words.length;
      setHotelDescription(hotel.description);
      if (totalArray && totalArray > 155) {
        setIsLimitLetters(true);
        setShortHotelDescription(`${words.slice(0, 140).join(" ")}`);
      }
    };
    getDescriptionPreview();
  }, [hotel]);

  // GET DATE FROM LOCALSTORAGE
  const [selectedDates, setSelectedDates] = useState(null);

  useEffect(() => {
    const storedDates = localStorage.getItem("selectedDates");
    if (storedDates) {
      try {
        const parsedDates = JSON.parse(storedDates);
        const formattedDates = parsedDates.map((dateStr) =>
          new Intl.DateTimeFormat(language === "es" ? "es-ES" : "en-US", {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric",
          }).format(new Date(dateStr))
        );
        setSelectedDates(formattedDates);
      } catch (error) {
        console.error("Error al procesar selectedDates:", error);
      }
    }

    const guests = localStorage.getItem("roomData");
    if (guests) {
      try {
        setRoomData(JSON.parse(guests));
      } catch (error) {
        console.error("Error al parsear room:", error);
      }
    }
  }, [language]);

  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    const storedDates = localStorage.getItem("roomData");
    if (storedDates) {
      try {
        setRoomData(JSON.parse(storedDates));
      } catch (error) {
        console.error("Error al parsear room:", error);
      }
    }
  }, []);

  const totalChildren = roomData?.reduce(
    (sum, room) => sum + room.children.length,
    0
  );
  const totalAdults = roomData?.reduce((sum, room) => sum + room.adults, 0);

  const getMessageForTab = (tabName) => {
    switch (tabName) {
      //   INFO HOTEL
      case "information":
        return (
          <>
            <div className="text-fs-14 m-m text-justify">
              {hotelDescription !== null ? (
                showFullDescription ? (
                  <>
                    <p className="text-gry-100">
                      {hotelDescription && hotelDescription}
                    </p>

                    <span>
                      <button
                        className="flex gap-1 items-center m-b text-fs-15 text-bl-100"
                        onClick={handleToggleDescription}
                      >
                        {languageData.modalHotel.showLess}
                        <img
                          src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/up-bl.svg`}
                          alt="show less"
                          width={14}
                          height={14}
                        />
                      </button>
                    </span>
                  </>
                ) : (
                  <>
                    <p className="text-gry-100">
                      {hotelDescription && isLimitLetters === true
                        ? shortHotelDescription
                        : hotelDescription}
                      {isLimitLetters === true && "..."}
                    </p>
                    {isLimitLetters === true && (
                      <span>
                        <button
                          className=" flex items-center gap-1 m-b text-fs-15 text-bl-100"
                          onClick={handleToggleDescription}
                        >
                          {languageData.modalHotel.showMore}
                          <img
                            src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/down-bl.svg`}
                            alt="show more"
                            width={14}
                            height={14}
                          />
                        </button>
                      </span>
                    )}
                  </>
                )
              ) : (
                <div className="relative w-[8px] h-[8px] rounded-[5px] bg-bl-100 text-bl-100 animate-[dot-flashing_1s_infinite_linear_alternate] before:content-[' '] before:block before:absolute before:top-0 before:left-[15px] before:w-[8px] before:h-[8px] before:rounded-[5px] before:bg-bl-100 before:text-bl-100 before:animate-[dot-flashing_1s_infinite_alternate] before:delay-0 after:content-[' '] after:block after:absolute after:top-0 after:left-[30px] after:w-[8px] after:h-[8px] after:rounded-[5px] after:bg-bl-100 after:text-bl-100 after:animate-[dot-flashing_1s_infinite_alternate] after:delay-1000	dot-flashing"></div>
              )}
            </div>
          </>
        );

      case "amenities":
        return (
          <div className="m-m gap-4 grid grid-cols-3 text-fs-14 text-gry-100 ">
            {/* {amenities.map((facility, index) => ( */}
            {allAmenities.length > 0 &&
              allAmenities.map((facility, index) => (
                <Tooltip
                  key={index}
                  bgColor={facility?.extraCost && "bg-gry-50"}
                  text={
                    facility?.extraCost && (
                      <React.Fragment>
                        <p className="text-grn-100 m-s-b text-fs-11 text-nowrap cursor-default">
                          {languageData.detailHotel.extraCosts}
                        </p>
                      </React.Fragment>
                    )
                  }
                >
                  <div className="flex items-center gap-x-2 mb-2">
                    {facility.extraCost && "$"} {AmenitiesIcons(facility)}{" "}
                    <p className="m-0 cursor-default">{facility.name}</p>
                  </div>
                </Tooltip>
              ))}
          </div>
        );

      // TIME CHECK IN Y CHECK OUT
      case "schedules":
        return (
          <div className="block">
            <div className="mb-2 m-b text-fs-20">
              {languageData.modalHotelOptions.findOutSchedules}
            </div>
            <ul className="list-disc m-m text-fs-14 text-gry-100 ms-3">
              {/* CHECK IN */}
              <li className="flex gap-1 items-center">
                <img
                  className="h-[14px] w-4 invert"
                  src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
                  alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
                />
                <span className="m-b">
                  {languageData.modalHotel.checkInText}
                </span>{" "}
                {selectedDates[0]} {languageData.modalHotel.checkIn}
              </li>
              {/* CHECK OUT */}
              <li className="flex gap-1 items-center">
                <img
                  className="h-[14px] w-4 invert"
                  src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
                  alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
                />
                <span className="m-b">
                  {languageData.modalHotel.checkOutText}
                </span>{" "}
                {selectedDates[1]} {languageData.modalHotel.checkOut}
              </li>
              {/* GUESTS */}
              <li className="flex gap-1 items-center">
                <img
                  className="h-[14px] w-4 invert"
                  src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                  alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon guests`}
                />
                <span className="m-b">{languageData.modalHotel.guests}</span>{" "}
                {totalAdults} {languageData.modalHotel.people}
                {roomData[0].children.length > 0 && (
                  <div>
                    {languageData.modalHotel.and} {totalChildren} {languageData.modalHotel.kid}
                  </div>
                )}
              </li>
            </ul>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <>
      <div className="block">
        <div className="mb-5 mt-6">
          <nav
            className=" flex gap-x-4 space-x-8 overflow-y-auto my-2"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <a
                key={tab.name}
                // href={tab.href}
                onClick={() => handleTabClick(tab)}
                className={`${
                  selectedTab.name === tab.name
                    ? "border-or-70 text-or-100"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } m-0 group inline-flex items-center border-b-2 py-2 px-4 text-sm font-medium no-underline !ml-0 !mr-0 cursor-pointer`}
                aria-current={
                  selectedTab.name === tab.name ? "page" : undefined
                }
              >
                <tab.icon
                  className={`${
                    selectedTab.name === tab.name
                      ? "text-or-100"
                      : "text-gray-400 group-hover:text-gray-500"
                  } -ml-0.5 mr-2 h-5 w-5`}
                  aria-hidden="true"
                />
                <span>{languageData.modalTour[tab.name]}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-5">{getMessageForTab(selectedTab.name)}</div>
    </>
  );
}
