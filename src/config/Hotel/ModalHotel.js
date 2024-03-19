import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

import LanguageContext from "../../language/LanguageContext";
import IconDoneActive from "../../assets/icons/utils/navigation/done_active.svg";

export function MissingRooms(props) {
  const { roomsBySelected, addRoom } = props;
  const { languageData, language } = useContext(LanguageContext);

  const [isComplete, setIsComplete] = useState(false);
  const [missingRooms, setMissingRooms] = useState(null);
  useEffect(() => {
    if (addRoom.length === roomsBySelected) {
      setIsComplete(true);
      setMissingRooms(null);
    } else {
      setIsComplete(false);
      setMissingRooms(roomsBySelected - addRoom.length);
    }
  }, [addRoom, roomsBySelected]);

  return isComplete ? (
    <div className="d-flex align-items-center justify-content-center gap-1">
      <Image src={IconDoneActive} alt="IconDoneActive" />
      <span>{languageData.modalHotel.missingRooms.completeRooms}</span>
    </div>
  ) : (
    <div className="d-flex flex-wrap">
      <span
        className={`${
          language === "es"
            ? "text-modal-tool-tip"
            : "active-text-modal-tool-tip"
        } me-1`}
      >
        {language === "es"
          ? `${languageData.modalHotel.missingRooms.text1}`
          : `${missingRooms} ${languageData.modalHotel.missingRooms.text1}`}
      </span>
      <span
        className={`${
          language === "es"
            ? "active-text-modal-tool-tip"
            : "text-modal-tool-tip"
        } me-1`}
      >
        {language === "es"
          ? `${missingRooms} ${languageData.modalHotel.missingRooms.text2}`
          : `${languageData.modalHotel.missingRooms.text2} `}
      </span>
      <span className="text-modal-tool-tip">
        {languageData.modalHotel.missingRooms.text3}
      </span>
    </div>
  );
}
