import React from "react";

// import { useIsMobile } from "../../config/Mobile/isMobile";
// import { useIsMobile } from "@/config/Mobile/isMobile";
import ListingHotelW from "../Components/Listing/ListingHotelW";
// import ListingHotelM from "../Components/Listing/ListingHotelM";
import { ListingHotelProvider } from "../Context/ListingHotelContext";

import { calculateNights } from "../Utils/calculateNights";
import { calculateTotalPeople } from "../Utils/peopleCalculator";

export default function Hotels() {
  // const isMobile = useIsMobile();
  // const searchParams = new URLSearchParams(window.location.search);
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;

  // SUM PEOPLE
  const ocp = searchParams
    ? JSON.parse(decodeURIComponent(searchParams.get("occupancies")))
    : null;

  const totalPeople = calculateTotalPeople(ocp);

  // CALCULATE NIGHTS
const checkIn = searchParams ? searchParams.get("check-in") : null;
const checkOut = searchParams ? searchParams.get("check-out") : null;

  const numNights = calculateNights(checkIn, checkOut);

  return (
    <ListingHotelProvider>
      {/* {isMobile ? ( */}
      {/* <ListingHotelM totalPeople={totalPeople} numNights={numNights} /> */}
      {/* ) : ( */}
      <ListingHotelW totalPeople={totalPeople} numNights={numNights} />
      {/* )} */}
    </ListingHotelProvider>
  );
}
