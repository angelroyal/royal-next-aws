import React, { useContext } from "react";

import { StepperContext } from "../../context/steeperContext";
import CardHotelItinerary from "../CardsItineraryWeb/CardHotelItinerary";
import CardMovingItinerary from "../CardsItineraryWeb/CardMovingItinerary";
import CardTourConfirmation from "@/payment/Confirmation/CardTourConfirmation";
import CardHotelConfirmation from "@/payment/Confirmation/CardHotelConfirmation";
import CardTourItinerary from "../../../payment/itinerary/CardsItineraryWeb/CardTourItinerary";

export default function StructureItineraryWeb(props) {
  const { dataItinerary } = props;
  const { step } = useContext(StepperContext);

  return (
    <>
      {" "}
      {dataItinerary.items.map((item, index) => {
        if (item.type === "transport") {
          return <CardMovingItinerary />;
        } else if (item.type === "activity") {
          return (
            <div key={index}>
              {step === 1 ? (
                <CardTourItinerary key={index} itemActivity={item} />
              ) : (
                <CardTourConfirmation key={index} itemActivity={item} />
              )}
            </div>
          );
        } else if (item.type === "hotel") {
          return (
            <div key={index}>
              {step === 1 ? (
                <>
                  <CardHotelItinerary itemHotel={item} />
                  {/* <CardMovingItinerary /> */}
                </>
              ) : (
                <CardHotelConfirmation itemHotel={item} />
              )}
            </div>
          );
        }
        return null;
      })}
    </>
  );
}
