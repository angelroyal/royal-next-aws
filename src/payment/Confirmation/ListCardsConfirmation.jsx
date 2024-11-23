import { ContainerCardPayment } from "@/components/Payment/ContainerCardPayment";
import { DatesHeaderCardPayment } from "@/components/Payment/DatesHeaderCardPayment";
import { IconLocationFolder } from "@/components/Payment/IconLocationFolder";
import { ListCardsPayment } from "@/components/Payment/ListCardsPayment";
import { ConfirmationCardHotel } from "./Hotel/ConfirmationCardHotel";
import { ConfirmationCardTour } from "./Tour/ConfirmationCardTour";
import { ConfirmationCardTransport } from "./Transport/ConfirmationCardTransport";

export function ListCardsConfirmations({ confirmations }) {
  // console.log(confirmations);

  return (
    <ListCardsPayment>
      {confirmations.items &&
        confirmations.items.length > 0 &&
        confirmations.items.map((confirmation, index) => (
          <div className="flex items-start gap-x-2" key={index}>
            <IconLocationFolder />

            <div className="flex flex-col gap-y-5 w-full">
              {/* HEADER DATES */}
              <DatesHeaderCardPayment dataCards={confirmation} />

              <ContainerCardPayment>
                {/* HOTEL INFORMATION */}
                {confirmation.type == "hotel" && (
                  <ConfirmationCardHotel hotelInfo={confirmation} />
                )}

                {/* TOUR INFORMATION */}
                {confirmation.type == "activity" && (
                  <ConfirmationCardTour tourInfo={confirmation} />
                )}

                {/* TRANSPORT INFORMATION */}
                {(confirmation.type == "transport" ||
                  confirmation.type == "transportation") && (
                  <ConfirmationCardTransport transportInfo={confirmation} />
                )}
              </ContainerCardPayment>
            </div>
          </div>
        ))}
    </ListCardsPayment>
  );
}
