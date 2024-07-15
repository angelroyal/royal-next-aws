"use client";

import React, { createContext, useEffect, useState } from "react";

import { postRoomsToAPI } from "../Api/requestHotel";
import {
  filterByOrderReviews,
  filterBySelectedReviews,
} from "../utils/FiltersReviews";

const RoomsHotelContext = createContext();

export const RoomsHotelProvider = ({ children }) => {
  const [roomsData, setRoomsData] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [requestBodyRooms, setRequestBodyRooms] = useState(null);
  const [keyHotel, setKeyHotel] = useState(null);
  const [isFailedReservation, setIsFailedReservation] = useState(false);
  const [hotelInfo, setHotelInfo] = useState({
    codeName: null,
    name: null,
    date: null,
  });
  const [roomSelected, setRoomSelected] = useState(null);

  // REVIEWS TRIPADVISOR
  const [reviewsData, setReviewData] = useState(null);
  const [reviewDataFilter, setReviewDataFilter] = useState(null);
  const [orderReview, setOrderReview] = useState(2);
  const [startQualification, setStartQualification] = useState([]);
  const [months, setMonths] = useState([]);
  const [travelType, setTravelType] = useState([]);
  const [language, setLanguage] = useState("all");
  const [starRating, setStartRating] = useState([
    { name: "excellent", value: 0, key: 5 },
    { name: "god", value: 0, key: 4 },
    { name: "regular", value: 0, key: 3 },
    { name: "bad", value: 0, key: 2 },
    { name: "terrible", value: 0, key: 1 },
  ]);

  const handleFetchPostRooms = async (requestBody) => {
    setRoomsData(null);
    try {
      const responseData = await postRoomsToAPI(requestBody);
      setRoomsData(responseData);
      setKeyHotel(responseData.key);
    } catch (error) {
      console.error(error);
    }
  };

  // REVIEWS FUNCTIONS FILTERS
  useEffect(() => {
    if (reviewsData) {
      let filter = [...reviewsData];

      filter = filterByOrderReviews(reviewsData, orderReview);

      filter = filterBySelectedReviews(
        filter,
        startQualification,
        months,
        travelType,
        language
      );

      setReviewDataFilter(filter);
    }
  }, [
    reviewsData,
    startQualification,
    months,
    travelType,
    language,
    orderReview,
  ]);

  const ratingStartFilter = (reviews) => {
    const updateStarting = [
      { name: "excellent", value: 0, key: 5 },
      { name: "god", value: 0, key: 4 },
      { name: "regular", value: 0, key: 3 },
      { name: "bad", value: 0, key: 2 },
      { name: "terrible", value: 0, key: 1 },
    ];

    reviews.forEach((starts) => {
      switch (starts.rating) {
        case 5:
          updateStarting[0].value += 1;
          break;
        case 4:
          updateStarting[1].value += 1;
          break;
        case 3:
          updateStarting[2].value += 1;
          break;
        case 2:
          updateStarting[3].value += 1;
          break;
        default:
          updateStarting[4].value += 1;
          break;
      }
    });
    setStartRating(updateStarting);
  };

  return (
    <RoomsHotelContext.Provider
      value={{
        selectedRooms,
        setSelectedRooms,
        handleFetchPostRooms,
        roomsData,
        setRoomsData,
        requestBodyRooms,
        setRequestBodyRooms,
        keyHotel,
        setKeyHotel,
        isFailedReservation,
        setIsFailedReservation,
        hotelInfo,
        setHotelInfo,
        roomSelected,
        setRoomSelected,
        reviewsData,
        setReviewData,
        reviewDataFilter,
        setReviewDataFilter,
        orderReview,
        setOrderReview,
        startQualification,
        setStartQualification,
        months,
        setMonths,
        travelType,
        setTravelType,
        language,
        setLanguage,
        starRating,
        setStartRating,
        ratingStartFilter,
      }}
    >
      {children}
    </RoomsHotelContext.Provider>
  );
};

export default RoomsHotelContext;
