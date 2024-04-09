"use client";

import {
  InformationCircleIcon,
  MegaphoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

import "../../../../assets/styles/general/keyframes.css";

const tabs = [
  { name: "informacion", icon: InformationCircleIcon },
  { name: "Amenidades", icon: MegaphoneIcon },
];

export default function TabsTours(props) {
  const { tourData } = props;
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
          <div
            className="m-m"
            dangerouslySetInnerHTML={{ __html: tourData.infoVoucher }}
          />
        );
      case "Amenidades":
        return (
          <ul className="list-disc pl-5">
            {tourData.included.map((value, index) => (
              <li className="m-m mt-2 text-fs-14 text-black" key={index}>
                {value}
              </li>
            ))}
          </ul>
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
