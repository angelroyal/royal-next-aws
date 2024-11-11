import { ItineraryCardHotel } from "./Hotel/ItineraryCardHotel";
import { ListCardsPayment } from "@/components/Payment/ListCardsPayment";
import { IconLocationFolder } from "@/components/Payment/IconLocationFolder";
import { ContainerCardPayment } from "@/components/Payment/ContainerCardPayment";
import { DatesHeaderCardPayment } from "@/components/Payment/DatesHeaderCardPayment";
import { ItineraryCardTour } from "./Tour/ItineraryCardTour";
import { ItineraryCardTransport } from "./Transport/ItineraryCardTransport";

export function ListCardsItinerary({ dataItinerary }) {
  return (
    <ListCardsPayment>
      {dataItinerary.items &&
        dataItinerary.items.length > 0 &&
        dataItinerary.items.map((itinerary, index) => (
          <div className="flex items-start gap-x-2" key={index}>
            <IconLocationFolder />

            <div className="flex flex-col gap-y-5 w-full">
              {/* HEADER DATES */}
              <DatesHeaderCardPayment dataCards={itinerary} />

              <ContainerCardPayment>
                {/* HOTEL INFORMATION */}
                {itinerary.type == "hotel" && (
                  <ItineraryCardHotel hotelInfo={itinerary} />
                )}

                {/* TOUR INFORMATION */}
                {itinerary.type == "activity" && (
                  <ItineraryCardTour tourInfo={itinerary} />
                )}

                {/* TRANSPORT INFORMATION */}
                {(itinerary.type == "transport" ||
                  itinerary.type == "transportation") && (
                  <ItineraryCardTransport transportInfo={itinerary} />
                )}
              </ContainerCardPayment>
            </div>
          </div>
        ))}
    </ListCardsPayment>
  );
}
