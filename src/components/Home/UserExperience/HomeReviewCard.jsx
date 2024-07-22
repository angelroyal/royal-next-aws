import moment from "moment";

import { TotalStars } from "@/components/General/Stars";
import { TruncateLetters } from "@/components/General/TruncateLetters";

export function HomeReviewCard({hotelReviewTop}) {
  return (
    <div className="Main-Container">
      {/* USER REVIEW OF THE HOTEL */}
      <div className="flex flex-col gap-y-2">
        <div className=" flex flex-row justify-between">
          {/* RATINGS */}
          <span className="flex flex-row text-fs-16 m-s-b">
            {Math.round(hotelReviewTop.rating)}/5
            <span className="ml-2">
              <TotalStars
                stars={hotelReviewTop.rating}
                width={"w-[16px]"}
                height={"h-[16px]"}
              />
            </span>
          </span>

          {/* SVG REVIEWS BUTTON*/}
          <div className="flex bg-or-100 rounded-full p-1">
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/arrow-right-w.svg`}
              className="transform -rotate-45"
              alt="arrow-right-w"
            />
          </div>
        </div>

        {/* HOTEL TITLE */}
        <h1 className=" text-fs-16 m-s-b ">{hotelReviewTop.title}</h1>

        {/* HOTEL DESCRIPTION */}
        <div className="h-auto flex flex-col justify-between m-m">
          <p className="text-fs-12 h-[105px] 2xl:block hidden">
            {hotelReviewTop.text.split(" ").length > 80
              ? `${TruncateLetters(hotelReviewTop.text, 80)}...`
              : hotelReviewTop.text}
          </p>
          <p className="text-fs-12 h-[105px] block 2xl:hidden">
            {hotelReviewTop.text.split(" ").length > 70
              ? `${TruncateLetters(hotelReviewTop.text, 60)}...`
              : hotelReviewTop.text}
          </p>
        </div>
      </div>

      <div className="border-solid border-b border-gray-200 my-[27px]" />

      {/* USER CARD */}
      <div className=" flex items-center">
        {/* USER PHOTO  */}
        <div className="relative">
          <img
            src={
              hotelReviewTop.user.avatar?.medium
                ? hotelReviewTop.user.avatar?.medium
                : "https://i.pinimg.com/736x/90/b8/fb/90b8fbf62acc355755149659743bb341.jpg"
            }
            alt="Profile Image"
            width={40}
            height={40}
            className="rounded-full object-cover w-[40px] h-[40px] border-[3px] border-[#34e0a1]"
          />
        </div>

        {/* USER INFORMATION */}
        <div className="flex flex-col gap-y-1 m-m ml-4">
          {hotelReviewTop.user.user_location &&
            hotelReviewTop.user.user_location.name && (
              <span className="text-fs-10 w-full">
                {hotelReviewTop.user.user_location.name}
              </span>
            )}

          <div className="flex flex-row">
            <span className="m-b text-fs-12">
              {hotelReviewTop.user.username}{" "}
              {hotelReviewTop.published_date && (
                <span className="m-m">
                  escribió una opinión ({" "}
                  {moment(hotelReviewTop.published_date).format("DD/MM/YYYY")} )
                </span>
              )}
            </span>
          </div>

          {hotelReviewTop.trip_type && hotelReviewTop.trip_type !== "NONE" && (
            <button className="bg-gry-50 py-1 px-2 rounded-full text-black m-s-b text-fs-12 w-max">
              Viaje de {hotelReviewTop.trip_type}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
