import { useContext, useState } from "react";

import { Occupancy } from "./Occupancy";
import { RemoveHotel } from "./RemoveHotel";
import { RoomsDetails } from "./RoomsDetails";
import { ButtonRemoveHotel } from "./ButtonRemoveHotel";
import { useCartAxios } from "@/components/Cart/CartAxios";
import { PrinceAndTaxesHotel } from "./PrinceAndTaxesHotel";
import { HotelIsNotAvailable } from "./HotelIsNotAvailable";
import UnavailableCardHotel from "../others/UnavailableCardHotel";
import { BookingContext } from "@/payment/context/BookingContext";
import { removeHotelItinerary } from "@/payment/Api/fetchDataItinerary";
import LinearProgress from "@/components/Alerts/Progress/LinearProgress";

export function ItineraryCardHotel({ hotelInfo }) {
  const [loader, setLoader] = useState(false);
  const [isRemoveHotel, setIsRemoveHotel] = useState(false);
  const { setRemoveIsLoader } = useContext(BookingContext);
  const { setItinerary, fetchData } = useCartAxios();

  //   CANCEL HOTEL REMOVE
  const handleCancelHotelRemove = () => {
    if (isRemoveHotel === true) setIsRemoveHotel(false);
  };

  const searchParams = new URLSearchParams(window.location.search);
  const cartUid = searchParams.get("uid");
  const cartHotelId = hotelInfo.code;

  //   REMOVE HOTEL
  const removeReservation = (uidHotel) => {
    setLoader(true);
    setRemoveIsLoader(true);
    if (cartHotelId === uidHotel) {
      removeHotelItinerary(cartUid, cartHotelId)
        .then((response) => {
          fetchData(cartUid);
          setIsRemoveHotel(false);
          setItinerary(Math.floor(Math.random() * 100) + 1);
          setRemoveIsLoader(false);
        })
        .catch((error) => {
          console.error(error);
          setLoader(false);
          setRemoveIsLoader(false);
        });
    }
  };

  return (
    <>
      <div
        className={`flex-col flex gap-x-8 relative ${
          hotelInfo.available === false && "opacity-45"
        }`}
      >
        <ButtonRemoveHotel
          hotelInfo={hotelInfo}
          setIsRemoveHotel={setIsRemoveHotel}
        />

        <HotelIsNotAvailable hotelInfo={hotelInfo} />

        {/* MOBILE VERSION */}
        <div
          className={`flex justify-between border-y border-[#ebebeb] items-start py-[0.6rem] my-[1rem] lg:!hidden`}
        >
          <Occupancy hotelInfo={hotelInfo} />

          <PrinceAndTaxesHotel hotelInfo={hotelInfo} />
        </div>

        <RoomsDetails hotelInfo={hotelInfo} />

        {hotelInfo.available === false && (
          <>
            <UnavailableCardHotel destination={hotelInfo} />
            <div className="overlay" />
          </>
        )}
      </div>

      <RemoveHotel
        hotelInfo={hotelInfo}
        isRemoveHotel={isRemoveHotel}
        handleCancelHotelRemove={handleCancelHotelRemove}
        removeReservation={removeReservation}
      />

      {loader && <LinearProgress />}
    </>
  );
}
