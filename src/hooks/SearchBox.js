import { Tab, Tabs } from "react-bootstrap";
// import { FormControl } from "@mui/material";
import React, { useContext, useState } from "react";
// import { useLocation } from "react-router-dom";

// import SendHotel from "../components/Search/SendHotel";
import ResultTour from "@/components/Search/ResultTour";
import LanguageContext from "../language/LanguageContext";
import SendHotel from "@/services/Hotels/Search/SendHotel";
import Image from "next/image";
// import { GetIconActivation } from "../utils/navigation/GetIconActivation";

// const ResultTour = lazy(() => import("../components/Search/ResultTour"));
// const ResultMoving = lazy(() => import("../components/Search/ResultMoving"));
// const SendHotel = lazy(() => import("../components/Search/SendHotel"));

export default function SearchBox() {
  const { languageData } = useContext(LanguageContext);
  const [currentActiveIcon, setCurrentActiveIcon] = useState("hotel");
  // const location = useLocation();

  // GetIconActivation(location.pathname, setCurrentActiveIcon);
  console.log(currentActiveIcon);
  // CHANGE TAB DINAMIC
  const handleTabChange = (eventKey) => {
    setCurrentActiveIcon(eventKey);
  };
  const test  = process.env.NEXT_PUBLIC_URL
  console.log(test);
  // const isDev = process.env.REACT_APP_DEV === "true";

  return (
    <>
      <Tabs
        activeKey={currentActiveIcon}
        onSelect={handleTabChange}
        id="tab-search-home"
        // style={{padding:"0"}}
        className="flex gap-x-2 text-fs-12 m-s-b"
      >
        {/* TAB HOTEL */}
        <Tab
          eventKey="hotel"
          style={{ padding: "0" }}
          title={
            <span
              className={`${
                currentActiveIcon === "hotel"
                  ? "bg-bl-100 text-white"
                  : "bg-white text-gry-100"
              } w-max flex border-0 gap-2 justify-center rounded-t-lg py-2 px-4`}
            >
              <Image
                // src={`${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-b.svg`}
                src={`${process.env.NEXT_PUBLIC_URL}${currentActiveIcon === "hotel" ? 'icons/hotel/hotel-w.svg' : 'icons/hotel/hotel-b.svg'}`}
                alt="hotel icon Royal vacation"
                width={29}
                height={25}
              />{" "}
              {languageData.SearchBox.tabHotel.lodgement}
            </span>
          }
        >
          <SendHotel />
        </Tab>

        {/* TAB TOUR */}
        <Tab
          eventKey="tour"
          title={
            <span
              className={`${
                currentActiveIcon === "tour"
                  ? "bg-bl-100 text-white"
                  : "bg-white text-gry-100"
              } w-max flex border-0 gap-2 justify-center rounded-t-lg py-2 px-4`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}${
                  currentActiveIcon === "tour"
                    ? "icons/tour/tour-w.svg"
                    : "icons/tour/tour-b.svg"
                }`}
                alt="hotel icon Royal vacation"
                width={29}
                height={25}
              />{" "}
              {languageData.SearchBox.tabHotel.lodgement}
            </span>
          }
        >
          <ResultTour />
        </Tab>

        {/* TAB TRANSPORTATION */}
        {/* {isDev && (
          <Tab
            eventKey="transportation"
            title={languageData.SearchBox.tabTransportation.titleTransportation}
            className="search-content-home"
          >
            <h3 className="titleSearch container p-2">
              {languageData.SearchBox.tabTransportation.titleTextMoving}
            </h3>

            <FormControl component="fieldset" id="radio-button-home">
              <Suspense fallback={<div></div>}>
                <ResultMoving />
              </Suspense>
            </FormControl>
          </Tab>
        )} */}
      </Tabs>
    </>
  );
}
