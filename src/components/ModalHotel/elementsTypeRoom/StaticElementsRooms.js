import Image from "next/image";
import React, { useContext } from "react";

import { useIsMobile } from "../../../config/Mobile/isMobile";
import LanguageContext from "../../../language/LanguageContext";

import IconRoyal from "../../../assets/icons/utils/payment/icon-royal-vacations.svg";

export function MessageShowRooms() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="container-itinerary-no-data">
      <Image src={IconRoyal} alt="IconRoyal" className="margin-top" />
      <h2 className="itinerary-no-show">{languageData.cart.roomEmpty}</h2>
      <p className="itinerary-no-text padding-bottom">
        {languageData.cart.textRoomEmpty}
      </p>
    </div>
  );
}

export function TitlesRoom() {
  const { languageData } = useContext(LanguageContext);
  const isMobile = useIsMobile();
  return (
    <div className="modal-type-room">
      <div className="modal-type-rh">
        {languageData.containerModalHotel.typeRoom}
      </div>

      <div className="modal-type-data">
        {languageData.containerModalHotel.capacityRoom}
      </div>

      <div className={isMobile ? "modal-type-select" : "modal-type-data"}>
        {languageData.containerModalHotel.priceNight}
      </div>
      
      {!isMobile && (
          <div className="modal-type-select">
            {languageData.containerModalHotel.selectSection}
          </div>
      )}
    </div>
  );
}
