import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/web/App.css";

// import { Tab, Tabs } from "react-bootstrap";
import { Tab } from "@headlessui/react";
import React, { useState, useEffect, useContext } from "react";

import MobilSearchTour from "./MobilSearchTour";
import MobilSearchHotel from "./MobilSearchHotel";
import LanguageContext from "@/language/LanguageContext";
import { NavigationConfig } from "@/config/Navigation/NavigationConfig";
import { MobilSearchSkeleton } from "@/services/Hotels/components/Skeleton/HotelListingSkeleton";
// import MobilSearchMoving from "./MobilSearchMoving";
export default function SearchBoxMobile() {
  const [activeTab, setActiveTab] = useState(null);
  const { languageData } = useContext(LanguageContext);

  // GET ACTIVITY SERVICE
  const routerActual = NavigationConfig();

  useEffect(() => {
    setActiveTab(routerActual);
  }, [routerActual]);

  // useEffect(() => {
  //   const path = window.location.pathname;

  //   if (path.includes("/tours")) {
  //     setActiveTab("tour");
  //   } else if (path.includes("/hotels")) {
  //     setActiveTab("hotel");
  //   } else if (path.includes("/moving")) {
  //     setActiveTab("moving");
  //   }
  // }, []);

  // const isDev = process.env.REACT_APP_DEV === "true";

  return (
    <Tab.Group>
      <Tab.List className="flex gap-x-2 text-fs-12 m-s-b">
        <Tab
          className="focus:outline-none focus:ring-transparent"
          onClick={() => setActiveTab("hotel")}
          style={{ padding: "0" }}
        >
          <span
            className={`${activeTab === "hotel"
              ? "bg-bl-100 text-white"
              : "bg-gry-50 text-gry-100"
              } w-max flex border-0 gap-2 justify-center rounded-t-lg py-3.5 px-4`}
          >
            {languageData.SearchBox.tabHotel.lodgement}
          </span>
        </Tab>

        <Tab
          className="focus:outline-none focus:ring-transparent"
          onClick={() => setActiveTab("tour")}
          style={{ padding: "0" }}
        >
          <span
            className={`${activeTab === "tour"
              ? "bg-bl-100 text-white"
              : "bg-gry-50 text-gry-100"
              } w-max flex border-0 gap-2 justify-center rounded-t-lg py-3.5 px-4`}
          >
            Actividades
          </span>
        </Tab>
      </Tab.List>
      
      {activeTab === null ? <MobilSearchSkeleton /> :

        <Tab.Panels>
          {/* <Tab.Panel> */}
          {activeTab === "hotel" && <MobilSearchHotel />}
          {/* </Tab.Panel> */}

          {/* <Tab.Panel> */}
          {activeTab === "tour" && <MobilSearchTour />}

          {/* </Tab.Panel> */}
        </Tab.Panels>
      }

    </Tab.Group>
  );
}
