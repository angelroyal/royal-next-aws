"use client";

import {
  InformationCircleIcon,
  MegaphoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const iconInfo = `https://sandboxmexico.com/assets/icons/alert/alert-100.svg`;

const tabs = [
  { name: "informacion", href: "#", icon: InformationCircleIcon },
  { name: "Amenidades", href: "#", icon: MegaphoneIcon },
  { name: "Horarios", href: "#", icon: ClockIcon },
];

export default function TabInfoHotel() {
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
    return words.slice(0, 120).join(" ");
  };

  const hotelInfo = {
    description:
      "Situado entre las avenidas López Portillo y Chichen Itza en un famoso complejo turístico y urbano de Cancún, este espléndido hotel es el lugar perfecto para unas vacaciones en familia, una escapada de fin de semana o un viaje de negocios. El Aeropuerto Internacional de Cancún está a 20 km y los visitantes se encontrarán muy cerca de muchas empresas locales, oficinas corporativas, lugares de ocio y monumentos locales. Este precioso hotel cuenta con espaciosas habitaciones elegantemente decoradas en las que descansar por completo durante la noche. Los huéspedes despertarán con un delicioso desayuno americano o continental y podrán cenar delicias culinarias mexicanas en el tradicional restaurante del hotel. Durante el día, los clientes podrán jugar al billar, hacer uso de la piscina al aire libre, tomar el sol en las tumbonas o disfrutar de un exótico cóctel en el bar del hotel. Hay aparcamiento disponible para aquellos que lleguen en coche.",
  };

  const getMessageForTab = (tabName) => {
    switch (tabName) {
      //   INFO HOTEL
      case "informacion":
        return (
          <>
            {" "}
            <div className="text-fs-14 m-m text-justify">
              {showFullDescription ? (
                <div className="flex flex-col ">
                  {hotelInfo.description}
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
                </div>
              ) : (
                <div className="flex flex-col">
                  {getDescriptionPreview(hotelInfo.description)}...
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
                </div>
              )}
            </div>
          </>
        );

      case "Amenidades":
        return "Aquí están las amenidades.";

      // TIME CHECK IN Y CHECK OUT
      case "Horarios":
        return (
          <div className="block">
            <div className="mb-2 m-b text-fs-20">Conoce más de este hotel:</div>
            <ul className="list-disc m-m text-fs-14 text-gry-100 ms-9">
              <li>Check-in: 15:00 pm</li>
              <li>Check-out: 15:00 pm</li>
              {/* {GalleryModalHotel.hotel.breakfast && ( */}
              <li> Desayuno: 7:00 am a 11:00 am</li>
              {/* )} */}
            </ul>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>

        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          value={selectedTab.name}
          onChange={(e) =>
            handleTabClick(tabs.find((tab) => tab.name === e.target.value))
          }
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.name}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => handleTabClick(tab)}
                className={`${
                  selectedTab.name === tab.name
                    ? "border-or-70 text-or-100"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium`}
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
