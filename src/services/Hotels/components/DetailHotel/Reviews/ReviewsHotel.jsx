"use client";

import { useContext, useEffect } from "react";
import { GetReviewsTripe } from "../../../Api/requestHotel";
import RoomsHotelContext from "../../../context/RoomsHotelContext";
import { CardReview } from "./CardReview";
import { AllReviews } from "./AllReviews";

export function ReviewsHotel({ locationId }) {
  const { setReviewData, reviewDataFilter } = useContext(RoomsHotelContext);

  useEffect(() => {
    GetReviewsTripe(locationId)
      .then((result) => {
        if (result && result.data) {
          setReviewData(result.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className="bg-white rounded-lg py-6 px-9 mt-6"
      id="review-trip-advisor"
    >
      {/* RATING FILTER */}
      <></>

      {/* CART REVIEW */}
      <div className="flex flex-col gap-y-6">
        {reviewDataFilter &&
          reviewDataFilter.slice(0, 5).map((hotelReview, index) => (
            <div
              key={index}
              className={`${
                reviewDataFilter.slice(0, 5).length - 1 !== index &&
                "border-b-2 border-gray-200"
              }`}
            >
              {/* CART REVIEW */}
              <CardReview hotelReview={hotelReview} />
            </div>
          ))}

        <AllReviews />
      </div>
    </div>
  );
}
