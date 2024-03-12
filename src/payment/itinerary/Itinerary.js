import React, { useContext, useEffect } from "react";

// import ModalShare from "../../utils/booking/ModalShare";
// import { /*useIsMobile,*/ useIsMobileNew } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";
// import { useIsMobileNew } from "../../config/Mobile/isMobile";
import { scrollToTop } from "../../utils/pageConfig/scrollToTop";
import StructureItineraryWeb from "./others/StructureItineraryWeb";
import { StepperContext } from "../../config/context/steeperContext";
import { AlertNoAvailability, AlertUpdate } from "../Booking/AlertRate";
// import StructureItineraryMobile from "./others/StructureItineraryMobile";

import { isAnyHotelUnavailable } from "../../config/Booking/itineraryHelpers";

import IconRoyal from "../../assets/icons/utils/payment/icon-royal-vacations.svg";
import Image from "next/image";

export default function Itinerary(props) {
  const { dataItinerary } = props;
  const { languageData } = useContext(LanguageContext);
  const { handleStepChange } = useContext(StepperContext);

  const isButtonDisabled = isAnyHotelUnavailable(dataItinerary);

  useEffect(() => {
    if (dataItinerary && dataItinerary.status === 3) {
      handleStepChange(3);
    }
  }, [dataItinerary && dataItinerary.status, handleStepChange]);

  useEffect(() => {
    scrollToTop();
  }, []);

  // MOBILE
  // const isMobile = useIsMobileNew();

  return (
    <div className="m-scroll-i">
      <div className="display-title-button-share">
        <div className="m-fit d-flex">
          {/* <IconRoyal className="icon-royal-itinerary" /> */}
          <Image
          className="icon-royal-itinerary"
          src={IconRoyal}
          />
          <h1 className="itinerary-title-page">
            {languageData.itinerary.titleItinerary}
          </h1>
        </div>

        {/* {!isMobile && <ModalShare className="modal-style-share" />} */}
      </div>

      <h2 className="itinerary-subtitle-page">
        {languageData.itinerary.subtitleItinerary}
      </h2>

      <StructureItineraryWeb dataItinerary={dataItinerary} />

      <AlertUpdate priceChanged={dataItinerary.priceChanged} />

      {isButtonDisabled && (
        <AlertNoAvailability isNoAvailability={isButtonDisabled} />
      )}
    </div>
  );
}
