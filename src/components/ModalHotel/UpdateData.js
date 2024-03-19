import Image from "next/image";
import React, { useContext } from "react";

import RoomBox from "../../hooks/RoomBox";
import Calendar from "../../hooks/Calendar";
import LanguageContext from "../../language/LanguageContext";

import DateRangeIcon from "../../assets/icons/utils/searchBox/calendar-autocomplete.svg";

export default function UpdateData() {
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="modal-update-container">
      <div className="modal-update-calendar">
        <Image src={DateRangeIcon} alt="DateRangeIcon" className="modal-date-icon" />
        <Calendar />
      </div>

      <div className="modal-update-room">
        <RoomBox />
      </div>
      
      <div className="modal-update-button">
        <button>{languageData.modalHotel.buttonUpdate}</button>
      </div>
    </div>
  );
}
