import Image from "next/image";
import React, { useContext, useEffect } from "react";

import LanguageContext from "../../language/LanguageContext";
import { scrollToTop } from "../../utils/pageConfig/scrollToTop";
import StructureItineraryWeb from "./others/StructureItineraryWeb";
import { AlertNoAvailability, AlertUpdate } from "../Booking/AlertRate";

import { isAnyHotelUnavailable } from "../config/itineraryHelpers";

import { BookingContext } from "../context/BookingContext";

export default function Itinerary(props) {
  const { dataItinerary } = props;
  const { languageData } = useContext(LanguageContext);
  const { handleStepChange } = useContext(BookingContext);

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
        <div className="flex !gap-x-2 w-full items-start justify-start items-start !mb-2">
          {/* <IconRoyal className="icon-royal-itinerary" /> */}
          <Image
            className="w-[27px] h-[25px]"
            src={`${process.env.NEXT_PUBLIC_URL}icons/general/infotipo-staywuw.svg`}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
            width={27}
            height={25}
          />
          <h1 className="text-fs-24 m-b text-black">
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
