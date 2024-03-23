"use client";

import {
  InformationCircleIcon,
  MegaphoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const tabs = [
  { name: "informacion", icon: InformationCircleIcon },
  { name: "Amenidades", icon: MegaphoneIcon },
  { name: "Horarios", icon: ClockIcon },
];

export default function TabInfoHotel(props) {
  const { hotel } = props;
  console.log(hotel);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  //   DESCRPTION TEXT
  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescriptionPreview = (description) => {
    const words = description.split(" ");
    return words.slice(0, 150).join(" ");
  };

  const getMessageForTab = (tabName) => {
    switch (tabName) {
      //   INFO HOTEL
      case "informacion":
        return (
          <>
            <div className="text-fs-14 m-m text-justify">
              {showFullDescription ? (
                <>
                  <p>{hotel.description}</p>

                  <span>
                    <button
                      className="flex gap-1 items-center m-b text-fs-15 text-bl-100"
                      onClick={handleToggleDescription}
                    >
                      Ver menos
                      <img
                        src="https://sandboxmexico.com/assets/icons/arrows/up-bl.svg"
                        alt="show less"
                      />
                    </button>
                  </span>
                </>
              ) : (
                <>
                  <p>{getDescriptionPreview(hotel.description)}...</p>

                  <span>
                    <button
                      className=" flex items-center gap-1 m-b text-fs-15 text-bl-100"
                      onClick={handleToggleDescription}
                    >
                      Ver más
                      <img
                        src="https://sandboxmexico.com/assets/icons/arrows/down-bl.svg"
                        alt="show more"
                      />
                    </button>
                  </span>
                </>
              )}
            </div>
          </>
        );

      case "Amenidades":
        return (
          <ul className="list-disc m-m text-fs-14 text-gry-100 ms-9">
            {hotel.facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        );

      // TIME CHECK IN Y CHECK OUT
      case "Horarios":
        return (
          <div className="block">
            <div className="mb-2 m-b text-fs-20">Conoce más de este hotel:</div>
            <ul className="list-disc m-m text-fs-14 text-gry-100 ms-9">
              <li>Check-in: 15:00 pm</li>
              <li>Check-out: 15:00 pm</li>
              {hotel.breakfast && <li> Desayuno: 7:00 am a 11:00 am</li>}
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
        <div className="border-b border-gray-200">
          <nav
            className="-mb-px flex gap-x-3.5 space-x-8 overflow-y-auto"
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
                } m-0 group inline-flex items-center border-b-2 py-2 px-4 text-sm font-medium no-underline my-2 cursor-pointer`}
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
                <span>{tab.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-4">{getMessageForTab(selectedTab.name)}</div>
    </>
  );
}
