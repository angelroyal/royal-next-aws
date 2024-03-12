import { Tab, Tabs } from "react-bootstrap";
// import { FormControl } from "@mui/material";
import React, { useContext, useState } from "react";
// import { useLocation } from "react-router-dom";

import SendHotel from "../components/Search/SendHotel";
import ResultTour from "@/components/Search/ResultTour";
import LanguageContext from "../language/LanguageContext";
// import { GetIconActivation } from "../utils/navigation/GetIconActivation";

// const ResultTour = lazy(() => import("../components/Search/ResultTour"));
// const ResultMoving = lazy(() => import("../components/Search/ResultMoving"));
// const SendHotel = lazy(() => import("../components/Search/SendHotel"));

export default function SearchBox() {
  const { languageData } = useContext(LanguageContext);
  const [currentActiveIcon, setCurrentActiveIcon] = useState("");
  // const location = useLocation();

  // GetIconActivation(location.pathname, setCurrentActiveIcon);

  // CHANGE TAB DINAMIC
  const handleTabChange = (eventKey) => {
    setCurrentActiveIcon(eventKey);
  };

  // const isDev = process.env.REACT_APP_DEV === "true";

  return (
    <>
      <Tabs
        activeKey={currentActiveIcon}
        onSelect={handleTabChange}
        id="tab-search-home"
      >
        {/* TAB HOTEL */}
        <Tab
          eventKey=""
          title={languageData.SearchBox.tabHotel.hotel}
          className="search-content-home"
        >
          <div className="titleSearch container p-2">
            {languageData.SearchBox.tabHotel.titleText}
          </div>

          {/* <ResultHotel /> */}
            <SendHotel />
        </Tab>

        {/* TAB TOUR */}
        <Tab
          eventKey="tour"
          title={languageData.SearchBox.tabTour.tour}
          className="search-content-home"
        >
          <h3 className="titleSearch container p-2">
            {languageData.SearchBox.tabTour.titleTextTour}
          </h3>
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
