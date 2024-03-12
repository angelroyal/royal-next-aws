import React, { useState, useContext } from "react";

import { DialogItineraryMobile } from "./DialogItineraryMobile";
import LanguageContext from "../../../language/LanguageContext";
import { StepperContext } from "../../../config/context/steeperContext";
// import CardHotelItineraryMobile from "../CardsItineraryWeb/CardHotelItineraryMobile";
import { isAnyHotelUnavailable } from "../../../config/Booking/itineraryHelpers";

import OpenDialogLine from "../../../assets/images/others/line-open-dialog.png";
import { ReactComponent as IconCreditCard } from "../../../assets/images/others/credit-card.svg";
import { ReactComponent as IconShowLess } from "../../../assets/icons/hotel/modal/show_less.svg";
import CardHotelItinerary from "../CardsItineraryWeb/CardHotelItinerary";

export default function StructureItineraryMobile(props) {
  const { dataItinerary, itemSummary } = props;
  const [openDialog, setOpenDialog] = useState(false);
  const { languageData } = useContext(LanguageContext);
  const { handleStepChange } = useContext(StepperContext);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleClick = () => {
    handleStepChange(2);
  };

  const isButtonDisabled = isAnyHotelUnavailable(dataItinerary);

  return (
    <>
      {dataItinerary.items.map((item, index) => {
        if (item.type === "transport") {
          return <div key={index}> Hola perrix</div>;
        } else if (item.type === "activity") {
          return <div key={index}> Hola perrix</div>;
        } else if (item.type === "hotel") {
          return <CardHotelItinerary itemHotel={item} key={index} />;
        }
        return null;
      })}

      <div className="box-inferior booking-container" onClick={handleClickOpen}>
        <div className="button-open-booking">
          <img src={OpenDialogLine} alt="OpenDialogLine" style={{ width: "100%" }}/>
          <IconShowLess className="icon-show-less" />
        </div>
        <div className="d-flex ps-2 pe-2">
          <div className="m-i-pay">
            <div className="m-d-pay">
              {languageData.itinerary.paymentDetails}
            </div>
            <div className="m-h-pay">Hotel</div>

            {/* MAP NAME HOTELS */}
            {itemSummary.hotels.slice(0, 5).map((hotel, index) => (
              <ul className="list-details-payment p-0" key={index}>
                {/* NAME HOTEL HOTEL */}
                <li className="m-hs-pay">{hotel.name}</li>
              </ul>
            ))}
          </div>

          {/* Dialog  */}
          <div className="m-i-pay-currency ">
            <IconCreditCard className="m-credit-c" />
            <div className="m-i-margin-r">
              <div className="m-i-total-c">Total:</div>

              <div className="m-i-price-c">
                <span>MXN</span>
                <span>
                  $
                  {Math.floor(itemSummary.totalCurrentPrice)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                  .
                </span>
                <sup>
                  {(itemSummary.totalCurrentPrice % 1).toFixed(2).slice(2)}
                </sup>{" "}
                {itemSummary.totalPreviousPrice && (
                  <div className="update-price-before">
                    $
                    {Math.floor(itemSummary.totalPreviousPrice)
                      .toLocaleString("es-MX", { currency: "MXN" })
                      .replace(".00", "")}
                    .
                    <sup>
                      {(itemSummary.totalPreviousPrice % 1).toFixed(2).slice(2)}
                    </sup>
                  </div>
                )}
              </div>

              <button
                className={`m-i-btn-price ${
                  isButtonDisabled ? "disabled-button-itinerary" : ""
                }`}
                onClick={handleClick}
                disabled={isButtonDisabled}
              >
                {languageData.itinerary.buttonPayment}
              </button>
            </div>
          </div>
        </div>
      </div>

      <DialogItineraryMobile
        open={openDialog}
        onClose={handleClose}
        itemSummary={itemSummary}
        dataItinerary={dataItinerary}
      />
    </>
  );
}
