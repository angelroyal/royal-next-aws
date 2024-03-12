import React, { lazy, Suspense, useContext } from /*useContext*/ "react";
import { StepperContext } from "../../../config/context/steeperContext";
// import CardHotelConfirmation from "../../Confirmation/CardHotelConfirmation";

const CardTourConfirmation = lazy(() =>
  import("../../Confirmation/CardTourConfirmation")
);

const CardTourItinerary = lazy(() =>
  import("../../../payment/itinerary/CardsItineraryWeb/CardTourItinerary")
);

const CardHotelItinerary = lazy(() =>
  import("../CardsItineraryWeb/CardHotelItinerary")
);

const CardHotelConfirmation = lazy(() =>
  import("../../Confirmation/CardHotelConfirmation")
);


const CardMovingItinerary = lazy(() =>
  import("../CardsItineraryWeb/CardMovingItinerary")
);
// const DetailsPayment = lazy(() => import("../others/DetailsPayment"));

export default function StructureItineraryWeb(props) {
  const { dataItinerary } = props;
  // console.log(dataItinerary);

  const { step } = useContext(StepperContext);

  return (
    <>
      {" "}
      {dataItinerary.items.map((item, index) => {
        if (item.type === "transport") {
          return (
            <Suspense fallback={<div></div>} key={index}>

              <CardMovingItinerary key={index} itemMoving={item} />
            </Suspense>
          );
        } else if (item.type === "activity") {
          return (
            <Suspense fallback={<div></div>} key={index}>
              {
                step === 1 ? <CardTourItinerary key={index} itemActivity={item}/> : 
                <CardTourConfirmation key={index} itemActivity={item} />
              }
              
            </Suspense>
          );
        } else if (item.type === "hotel") {
          return (
            <Suspense fallback={<div></div>} key={index}>
              {
                step === 1 ? <CardHotelItinerary itemHotel={item} /> : <CardHotelConfirmation itemHotel={item}/>
                // <CardHotelItinerary itemHotel={item} />
              }
              
            </Suspense>
          );
        }
        return null;
      })}
    </>
  );
}
