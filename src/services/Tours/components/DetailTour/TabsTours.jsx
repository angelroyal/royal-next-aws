"use client";

import {
  InformationCircleIcon,
  MegaphoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { use, useEffect, useState } from "react";

import "../../../../assets/styles/general/keyframes.css";

const tabs = [
  { name: "informacion", icon: InformationCircleIcon },
  { name: "Amenidades", icon: MegaphoneIcon },
];

export default function TabsTours(props) {
  const { hotel } = props;
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  // VALIDATION FOR THE LIMIT OF LETTERS ALLOWED

  const getMessageForTab = (tabName) => {
    switch (tabName) {
      //   INFO HOTEL
      case "informacion":
        return (
          <div className="m-m text-gry-100 text-fs-14">
            At nightfall, the torches are lit and Xplor Fuego emerges. Under the
            stars, you will have the opportunity to fly over the jungle in an
            impressive zip-line circuit. This nocturnal adventure will ignite
            your desire for excitement to travel the 7-line circuit that the
            park has.
            <br />
            <br />
            Also, you can glide down the tallest zip-line in the entire Mexican
            Caribbean whose main tower rises to 147 ft (45 m) high and you will
            descend at a speed of 18 mph (30 km/h). Remember to smile for the
            photo, since there are Xelfie points distributed throughout the
            entire circuit and that will take your best angle so that you can
            take home the memory of the unlimited nighttime adventure of Xplor
            Fuego.
            <br />
            <br />
            Our hosts will take care of giving you the necessary safety
            instructions, adjusting and checking that your equipment is ready to
            start the flight and have maximum fun.
            <br />
            <br />
            At nightfall, the torches are lit and Xplor Fuego emerges. Under the
            stars, you will have the opportunity to fly over the jungle in an
            impressive zip-line circuit. This nocturnal adventure will ignite
            your desire for excitement to travel the 7-line circuit that the
            park has.
            <br />
            <br />
            Also, you can glide down the tallest zip-line in the entire Mexican
            Caribbean whose main tower rises to 147 ft (45 m) high and you will
            descend at a speed of 18 mph (30 km/h). Remember to smile for the
            photo, since there are Xelfie points distributed throughout the
            entire circuit and that will take your best angle so that you can
            take home the memory of the unlimited nighttime adventure of Xplor
            Fuego.
            <br />
            Our hosts will take care of giving you the necessary safety
            instructions, adjusting and checking that your equipment is ready to
            start the flight and have maximum fun.
          </div>
        );
      case "Amenidades":
        return (
          <div>
            Aqui iran las amenidades, es chamba del guille, quiero renunciar
            aaaah, ayudaaa
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
                } m-0 group inline-flex items-center border-b-2 py-2 px-4 text-sm font-medium no-underline m-0 !ml-0 !mr-0 cursor-pointer`}
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

      <div className="mt-5">{getMessageForTab(selectedTab.name)}</div>
    </>
  );
}
