import { useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import RoomsHotelContext from "@/services/Hotels/context/RoomsHotelContext";

export function TravelerRatingStart() {
  const { starRating, setStartQualification, startQualification } =
    useContext(RoomsHotelContext);
  const { languageData } = useContext(LanguageContext);

  const [maxQualification, setMaxQualification] = useState(0);

  useEffect(() => {
    if (
      starRating &&
      starRating.every((starts) => starts.value !== undefined)
    ) {
      setMaxQualification(Math.max(...starRating.map((start) => start.value)));
    }
  }, [starRating]);

  const handleStartFilter = (name) => {
    let startFilter = null;
    switch (name) {
      case "excellent":
        startFilter = 5;
        break;
      case "god":
        startFilter = 4;
        break;
      case "regular":
        startFilter = 3;
        break;
      case "bad":
        startFilter = 2;
        break;
      case "terrible":
        startFilter = 1;
        break;
    }

    setStartQualification((prevFilter) => {
      if (startFilter) {
        const isSelected = prevFilter.includes(startFilter);
        const categories = isSelected
          ? prevFilter.filter((cat) => cat !== startFilter)
          : [...prevFilter, startFilter];
        return categories;
      }
    });
  };

  return (
    <div className="lg:w-[325px] flex flex-col gap-y-4">
      <h3 className="text-black text-fs-14 m-b">
        {languageData.reviewsHotel.travelerRating}
      </h3>

      <>
        {starRating &&
          starRating.map((start, key) => {
            let percentage = 0;

            if (starRating[key].value > 0 && maxQualification > 0) {
              percentage = (starRating[key].value / maxQualification) * 100;
            }

            return (
              <div key={key} className="flex gap-x-2 items-center">
                <input
                  type="checkbox"
                  name={key}
                  onChange={() => handleStartFilter(start.name)}
                  checked={
                    startQualification.length > 0 &&
                    startQualification.includes(start.key)
                  }
                  className="mr-2"
                />

                <span className="text-black m-m text-fs-12 w-[60px]">
                  {languageData.reviewsHotel.startFilter[start.name]}
                </span>

                <div
                  className={`flex-1 bg-gray-200 rounded h-3 overflow-hidden mx-2
                    `}
                >
                  <div
                    className="bg-yellow-400 h-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <span className="text-black m-m text-fs-12">{start.value}</span>
              </div>
            );
          })}
      </>
    </div>
  );
}
