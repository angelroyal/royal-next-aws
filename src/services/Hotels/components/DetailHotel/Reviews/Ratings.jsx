import { useContext } from "react";

import { TravelerRating } from "./TravelerRating";
import LanguageContext from "@/language/LanguageContext";
import { TotalStars } from "@/components/General/Stars";
import RoomsHotelContext from "@/services/Hotels/context/RoomsHotelContext";
import { TripAdvisorButton } from "./TripAdvisorButton";

export function Ratings({ modal = false }) {
  const { languageData } = useContext(LanguageContext);
  const { reviewsData, locationDetails } = useContext(RoomsHotelContext);

  return (
    <div className="mb-10 flex flex-col gap-y-6">
      <div className="flex justify-between items-start max-lg:flex-col max-lg:gap-y-2.5">
        <div className={`flex flex-col ${!modal ? "gap-y-6" : "gap-y-12"} `}>
          <h2 className="text-gray-700 text-xl font-semibold mb-2 md:mb-0">
            {modal
              ? languageData.reviewsHotel.guestReviews
              : languageData.reviewsHotel.opinions}
          </h2>

          {/* GENERAL QUALIFICATION */}
          <div className="flex items-center">
            {locationDetails && (
              <>
                <div className="bg-[#2743A6] text-white text-base px-3 py-2 rounded-lg font-bold mb-2">
                  {locationDetails.rating}
                </div>

                {/* STARTS GENERAL */}
                <div className="ml-2">
                  <TotalStars stars={locationDetails.rating} />
                </div>
              </>
            )}

            <div className="bg-[#ffffff] text-gray-900 py-2 ml-2 text-sm font-light">
              {reviewsData &&
                `${reviewsData.length} ${languageData.reviewsHotel.opinions}`}
            </div>
          </div>
        </div>

        {/* TRIPADVISOR BUTTON */}
        <TripAdvisorButton modal={modal} />
      </div>

      {/* FILTERS*/}
      <TravelerRating modal={modal} />
    </div>
  );
}
