import { useContext, useState } from "react";

import { MobileInfo } from "./MobileInfo";
import { TransportImage } from "./TransportImage";
import { RemoveTransport } from "./RemoveTransport";
import { useCartAxios } from "@/components/Cart/CartAxios";
import { ContainerInformation } from "./ContainerInformation";
import { BookingContext } from "@/payment/context/BookingContext";
import { ContainerRemoveTransport } from "./ContainerRemoveTransport";
import LinearProgress from "@/components/Alerts/Progress/LinearProgress";
import { removeTransportItinerary } from "@/payment/Api/fetchDataItinerary";

export function ItineraryCardTransport({ transportInfo }) {
  const [loader, setLoader] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const { setRemoveIsLoader } = useContext(BookingContext);
  const { setItinerary, removeTransportById } = useCartAxios();

  const cancelRemove = () => {
    if (isRemove === true) setIsRemove(false);
  };

  const removeReservation = (transportInfo) => {
    setRemoveIsLoader(true);
    const searchParams = new URLSearchParams(window.location.search);
    const cartUid = searchParams.get("uid");
    const transportId = transportInfo.id;
    setLoader(true);

    removeTransportItinerary(cartUid, transportId)
      .then((result) => {
        removeTransportById(transportInfo);
        setItinerary(Math.floor(Math.random() * 100) + 1);
        setLoader(false);
        setRemoveIsLoader(false);
      })
      .catch((error) => {
        setRemoveIsLoader(false);
        throw error;
      });
  };

  return (
    <>
      <div
        className={`flex lg:justify-between relative max-lg:flex-col ${
          isRemove && "opacity-50"
        }`}
      >
        <RemoveTransport setIsRemove={setIsRemove} />
        <div className="flex gap-x-[20px] w-full">
          <TransportImage transportInfo={transportInfo} />

          <ContainerInformation transportInfo={transportInfo} />
        </div>

        <MobileInfo transportInfo={transportInfo} />
      </div>

      <ContainerRemoveTransport
        isRemove={isRemove}
        removeReservation={removeReservation}
        cancelRemove={cancelRemove}
      />

      {loader && <LinearProgress />}
    </>
  );
}
