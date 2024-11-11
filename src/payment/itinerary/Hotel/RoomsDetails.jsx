import { useContext, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { Accordion } from "./Accordion";

export function RoomsDetails({ hotelInfo }) {
  const { languageData } = useContext(LanguageContext);
  // OPEN ACCORDION FUNCTION
  const [accordionOpen, setAccordionOpen] = useState(null);

  const handleAccordion = (index) => {
    if (index === accordionOpen) {
      setAccordionOpen(null);
    } else {
      setAccordionOpen(index);
    }
  };
  return (
    <div className={` w-full mt-6 max-sm:mt-0 `}>
      <p className="text-or-100 text-fs-10 m-s-b !mb-4">
        {/* TEXT ROOMS YOU RESERVED /LP 15-02-24 */}
        {languageData.itinerary.roomsYouReserved}
      </p>

      <div className="rounded-lg bg-gry-30 w-full h-auto !pt-4 !px-4">
        {hotelInfo.rooms &&
          hotelInfo.rooms.map((roomInfo, index) => (
            <div
              key={index}
              className={`bg-gry-30 pb-[11px] mb-[19px] ${
                hotelInfo.rooms.length - 1 !== index && "border-b border-gry-50"
              }`}
              onClick={() => handleAccordion(index)}
            >
              <Accordion
                index={index}
                accordionOpen={accordionOpen}
                roomInfo={roomInfo}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
