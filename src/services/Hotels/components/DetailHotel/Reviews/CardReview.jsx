import moment from "moment";
import { useContext, useState } from "react";

import { TotalStars } from "@/components/General/Stars";
import LanguageContext from "@/language/LanguageContext";
import { TruncateLetters } from "@/components/General/TruncateLetters";

export function CardReview({ hotelReview, isModal = false }) {
  const [showMore, setShowMore] = useState(true);
  const { languageData } = useContext(LanguageContext);

  const tripeType = (tripType) => {
    // console.log(tripType);
    let travelText;
    switch (tripType) {
      case "Family":
        travelText = languageData.reviewsHotel.travelType.family;
        break;
      case "Couples":
        travelText = languageData.reviewsHotel.travelType.couple;
        break;
      //   case "Friends getaway":
      //     travelText = languageData.reviewsHotel.travelType.alone;
      //     break;
      //   case "Friends getaway":
      //     travelText = languageData.reviewsHotel.travelType.business;
      //     break;
      case "Friends getaway":
        travelText = languageData.reviewsHotel.travelType.friends;
        break;
    }

    return travelText;
  };

  return (
    <div
      className={`flex items-start pb-5 lg:gap-x-4 ${
        isModal
          ? "flex-col gap-y-5 items-start"
          : "max-lg:flex-col max-lg:gap-y-5 max-lg:items-start"
      }`}
    >
      {/* LEFT CARD */}
      <div className={`flex items-start gap-x-2 h-max w-full lg:w-[35%]`}>
        {/* USER IMAGE */}
        <img
          src={
            hotelReview.user.avatar?.medium
              ? hotelReview.user.avatar?.medium
              : "https://i.pinimg.com/736x/90/b8/fb/90b8fbf62acc355755149659743bb341.jpg"
          }
          alt="Profile Image"
          width={40}
          height={40}
          className="rounded-full object-cover w-[40px] h-[40px] border-[2px] border-[#34e0a1]"
        />

        {/* USER PERSONAL INFO */}
        <div className="flex flex-col gap-y-1 m-m">
          {hotelReview.user.user_location &&
            hotelReview.user.user_location.name && (
              <span className="text-gry-100 text-fs-10 w-full">
                {hotelReview.user.user_location.name}
              </span>
            )}

          <span className="text-black m-b text-fs-12 w-full">
            {hotelReview.user.username}
          </span>

          {hotelReview.published_date && (
            <span className="text-gry-70 text-xs w-full sm:text-left text-center ">
              {languageData.reviewsHotel.opinions} ({" "}
              {moment(hotelReview.published_date).format("DD/MM/YYYY")} )
            </span>
          )}

          {hotelReview.trip_type !== "NONE" && (
            <div className="bg-gry-50 py-1 px-2 text-xs rounded-full text-black m-s-b text-fs-12 w-max">
              {tripeType(hotelReview.trip_type)}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="flex flex-col gap-y-2 w-full ">
        <div className="flex gap-x-2">
          <p className="pe-2 text-black m-0 text-fs-16 m-s-b">
            {Math.round(hotelReview.rating)}/5
          </p>

          <TotalStars stars={hotelReview.rating} />
        </div>

        {/* REVIEW TITLE */}
        <span class="m-s-b text-black text-fs-16">
          <h2>{hotelReview.title}</h2>
        </span>

        {/* REVIEW MESSAGE  */}
        <div class="text-gry-100 flex flex-col gap-y-5 text-justify text-fs-12 m-m">
          <p>
            {isModal
              ? showMore
                ? `${TruncateLetters(hotelReview.text, 30)}...`
                : hotelReview.text
              : hotelReview.text}
          </p>

          {isModal && (
            <a
              className="text-bl-100 text-fs-12 m-b cursor-pointer underline decoration-solid decoration-bl-100"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore
                ? languageData.reviewsHotel.readMore
                : languageData.reviewsHotel.readLess}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
