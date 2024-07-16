import { useContext } from "react";

import { TravelerRating } from "./TravelerRating";
import LanguageContext from "@/language/LanguageContext";
import RoomsHotelContext from "@/services/Hotels/context/RoomsHotelContext";
import { TotalStars } from "@/components/General/Stars";

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
                <button className="bg-[#2743A6] text-white text-base px-3 py-2 rounded-lg font-bold mb-2">
                  {locationDetails.rating}
                </button>
                {/* STARTS GENERAL */}
                <div className="ml-2">
                  <TotalStars stars={locationDetails.rating}/>
                </div>
              </>
            )}

            <div className="bg-[#ffffff] text-gray-900 py-2 ml-2 text-sm font-light">
              {reviewsData &&
                `${reviewsData.length} ${languageData.reviewsHotel.opinions}`}
            </div>
          </div>
        </div>

        {!modal && (
          <button className="bg-white text-black text-fs-12 m-m p-2 rounded-full border border-gry-70 flex items-center gap-x-2">
            <img
              className="w-6 h-6"
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
              alt="logo tripavisor"
              loading="lazy"
              width={24}
              height={24}
            />

            <span>{languageData.reviewsHotel.tripadvisorRating}</span>

            <img
              className="w-[17px] h-[18px]"
              src={`${process.env.NEXT_PUBLIC_URL}icons/general/help-grn.svg`}
              alt="question icon"
              width={17}
              height={17}
            />
          </button>
        )}
      </div>

      {/* FILTERS*/}
      <TravelerRating modal={modal} />
    </div>
  );
}
