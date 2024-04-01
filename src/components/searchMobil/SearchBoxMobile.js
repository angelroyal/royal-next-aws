import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/web/App.css";

import { Tab, Tabs } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import MobilSearchTour from "./MobilSearchTour";
import MobilSearchHotel from "./MobilSearchHotel";
// import MobilSearchMoving from "./MobilSearchMoving";

export default function SearchBoxMobile() {
  const [activeTab, setActiveTab] = useState("hotel");

  useEffect(() => {
    const path = window.location.pathname;

    if (path.includes("/tours")) {
      setActiveTab("tour");
    } else if (path.includes("/hotels")) {
      setActiveTab("hotel");
    } else if (path.includes("/moving")) {
      setActiveTab("moving");
    }
  }, []);

  // const isDev = process.env.REACT_APP_DEV === "true";

  return (
    <Tabs
      activeKey={activeTab}
      id="tab-search-result-mobile"
      onSelect={(key) => setActiveTab(key)}
    >
      <Tab eventKey="hotel" title="Hotel" className="search-content-page">
        <MobilSearchHotel />
      </Tab>

      <Tab eventKey="tour" title="Tour" className="search-content-page">
        <MobilSearchTour />
      </Tab>

      {/* {isDev && (
        <Tab
          eventKey="moving"
          title="Traslados"
          className="search-content-page"
        >
          <MobilSearchMoving />
        </Tab>
      )} */}
    </Tabs>
  );
}
