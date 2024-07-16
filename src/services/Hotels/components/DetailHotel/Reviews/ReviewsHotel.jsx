"use client";

import { useContext, useEffect } from "react";

import { Ratings } from "./Ratings";
import { CardReview } from "./CardReview";
import { AllReviews } from "./AllReviews";
import { GetLocationDetails, GetReviewsTripe } from "../../../Api/requestHotel";
import RoomsHotelContext from "../../../context/RoomsHotelContext";

export function ReviewsHotel({ locationId }) {
  const { setReviewData, reviewDataFilter, ratingStartFilter, setLocationDetails } =
    useContext(RoomsHotelContext);

  useEffect(() => {
    // GET DETAILS HOTEL
    GetLocationDetails(locationId)
      .then((response) => {
        console.log(response);
        setLocationDetails(response.data)
      })
      .catch((error) => {
        console.log(error);
      });

      // GET REVIEWS HOTEL
    GetReviewsTripe(locationId)
      .then((result) => {
        if (result && result.data) {
          setReviewData(result.data.data);
          ratingStartFilter(result.data.data);
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
      <Ratings />

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
