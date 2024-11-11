import { useContext, useState } from "react";

import { RemoveTour } from "./RemoveTour";
import { TourImages } from "./TourImages";
import { MobileInfo } from "./MobileInfo";
import { ContainerDescription } from "./ContainerDescription";
import { ModalRemoveTour } from "./ModalRemoveTour";
import { BookingContext } from "@/payment/context/BookingContext";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { useCartAxios } from "@/components/Cart/CartAxios";
import LinearProgress from "@/components/Alerts/Progress/LinearProgress";

export function ItineraryCardTour({ tourInfo }) {
  const [loader, setLoader] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const { removeIsLoader, setRemoveIsLoader } = useContext(BookingContext);
  const { setItinerary, fetchData } = useCartAxios();

  const cancelRemove = () => {
    if (isRemove) {
      setIsRemove(false);
    }
  };

  const searchParams = new URLSearchParams(window.location.search);
  const cartUid = searchParams.get("uid");

  const handleRemoveTour = (cardTourID) => {
    setLoader(true);
    setRemoveIsLoader(true);
    const reservationRemove = async () => {
      axiosWithInterceptor
        .delete(`v1/carts/${cartUid}/activity/${cardTourID}`)
        .then((response) => {
          fetchData(cartUid);
          setIsRemove(false);
          setLoader(false);
          setItinerary(Math.floor(Math.random() * 100) + 1);
          setRemoveIsLoader(false);
        })
        .catch((error) => {
          console.error(error);
          setLoader(false);
          setRemoveIsLoader(false);
        });
    };
    reservationRemove();
  };
  return (
    <>
      <div
        className={`flex lg:justify-between relative max-lg:flex-col ${
          isRemove && "opacity-50"
        }`}
      >
        <RemoveTour setIsRemove={setIsRemove} />
        <div className="flex gap-x-[20px] w-full">
          <TourImages tourInfo={tourInfo} />

          <ContainerDescription tourInfo={tourInfo} />
        </div>

        <MobileInfo tourInfo={tourInfo} />
      </div>

      <ModalRemoveTour
        isRemove={isRemove}
        tourInfo={tourInfo}
        cancelRemove={cancelRemove}
        handleRemoveTour={handleRemoveTour}
      />

      {loader && <LinearProgress />}
    </>
  );
}
