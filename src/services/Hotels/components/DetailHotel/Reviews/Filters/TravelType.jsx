import { useContext, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import RoomsHotelContext from "@/services/Hotels/context/RoomsHotelContext";

export const TravelType = () => {
  const { languageData } = useContext(LanguageContext);
  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="text-black m-b text-fs-12 lg:text-fs-14">
          {languageData.itinerary.movingItinerary.textTrip}
        </h3>

        <FilterType />
      </div>
    </>
  );
};

const travelsType = [
  { value: "Family", label: "family" },
  { value: "Couples", label: "couples" },
  { value: "Solo", label: "solo" },
  { value: "Business", label: "business" },
  { value: "Friends getaway", label: "friends" },
  { value: "NONE", label: "none" },
];

const FilterType = () => {
  const { setTravelType, travelType } = useContext(RoomsHotelContext);
  const { languageData } = useContext(LanguageContext);
  const [maxNumber, setMaxNumber] = useState(4);
  const [seeMore, setSeeMore] = useState(false);

  const handleTravel = (event) => {
    const { value } = event.target;

    setTravelType((prevTravel) => {
      const isSelected = prevTravel.includes(value);

      const filterTravel = isSelected
        ? prevTravel.filter((travel) => travel !== value)
        : [...prevTravel, value];

      return filterTravel;
    });
  };

  const handelSeeMore = () => {
    if (seeMore) {
      setMaxNumber(4);
    } else {
      setMaxNumber(travelsType.length);
    }
    setSeeMore(!seeMore);
  };

  return (
    <div>
      <div className="hidden md:flex md:flex-col md:gap-y-4">
        {travelsType.map((travel, index) => (
          <div className="flex gap-x-2 items-center" key={index}>
            <input
              type="checkbox"
              value={travel.value}
              onChange={() => handleTravel(event)}
              checked={
                travelType.length > 0 && travelType.includes(travel.value)
              }
            />
            <span className="text-black text-fs-12 m-m">
              {languageData.reviewsHotel.filterTravelType[travel.label]}
            </span>
          </div>
        ))}
      </div>

      <div className="md:hidden flex flex-col gap-y-4">
        {travelsType.slice(0, maxNumber).map((travel, index) => (
          <div className="flex gap-x-2 items-center" key={index}>
            <input
              type="checkbox"
              value={travel.value}
              onChange={() => handleTravel(event)}
              checked={
                travelType.length > 0 && travelType.includes(travel.value)
              }
            />
            <span className="text-black text-fs-12 m-m">{travel.label}</span>
          </div>
        ))}

        <a
          className="block m-s-b text-fs-12 text-bl-100 underline"
          onClick={handelSeeMore}
        >
          {seeMore
            ? languageData.modalHotel.showLess
            : languageData.modalHotel.showMore}
        </a>
      </div>
    </div>
  );
};
