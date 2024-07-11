"use client";

import { useContext, useEffect } from "react";
import { GetReviewsTripe } from "../../Api/requestHotel";
import RoomsHotelContext from "../../context/RoomsHotelContext";

export function ReviewsHotel({ locationId }) {
  const { setReviewData } = useContext(RoomsHotelContext);

  useEffect(() => {
    GetReviewsTripe(locationId)
      .then((result) => {
        console.log(result);
        // if(result){
        //     setReviewData(result.data);
        // };
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
}
