import React, { useContext, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import LanguageContext from "../../../language/LanguageContext";
import { TopActivities } from "../../../utils/tour/TopActivities";
import { useTourContext } from "../../../tour/Context/ListingTourContext";

import { ReactComponent as IconSuccess } from "../../../assets/icons/utils/others/done_active.svg";
import { ReactComponent as IconRoyalWhite } from "../../../assets/icons/hotel/modal/icon-royal-vacations-white.svg";

export default function ModalActivitiesOptions(props) {
  const { tourInfo, tourPrice } = useTourContext();
  const { languageData } = useContext(LanguageContext);

  const history = useHistory();
  
  const handleClickItinerary = () => {
    const cardId = localStorage.getItem("uid-cart");
    if (cardId) {
      const { uid } = JSON.parse(cardId);
      const cartId = uid;
      history.push(`/booking?uid=${cartId}`);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <Row className="container-confirm-cart">
          <Col sm={5} className="divider-success-data">
            <i className="fas fa-icon">
              <IconRoyalWhite className="icon-royal-modal-options" />
            </i>

            <h1 className="alert-body">
              {languageData.modalTourOptions.titleWeHave} <br />{" "}
              <span className="text-alert-body-down">
                {languageData.modalTourOptions.titleTourAlready}
              </span>
            </h1>
            <div className="v-line-mini" />
          </Col>

          <Col sm={7} className="divider-info-cart">
            <div className="title-info-principal-modal">{tourInfo.name}</div>

            <div className="text-destination-h">
              {/* <Room className="icon-destination-h" /> */}
              <span>
                {languageData.itinerary.tourItinerary.textDuration}
              </span>{" "}
              {tourInfo.duration}
            </div>
          </Col>
        </Row>
      </div>

      <TopActivities />

      <div className="modal-tour-information-reservation">
        <div className="d-flex flex-column ">
          <h1 className="title-section-hotel">{tourInfo.address}</h1>

          <span className="info-modal-cart-items">
            <IconSuccess style={{ height: "12px" }} />{" "}
            {languageData.modalTourOptions.textAlready}
          </span>
        </div>

        <div className="d-flex flex-column">
          <span className="text-money-price">
            {languageData.modalHotelOptions.priceTotal}
          </span>

          <span className="text-price-total">
            <span className="size-letter-price">MXN</span> $
            <span className="reservation-tour-price-modal">
              {Math.floor(tourPrice)
                .toLocaleString("es-MX", { currency: "MXN" })
                .replace(".00", "")}{" "}
              .<sup>{(tourPrice % 1).toFixed(2).slice(2)} </sup>{" "}
            </span>
          </span>

          <span className="taxes-price-total">
            {languageData.modalHotelOptions.taxes}
          </span>

          <div className="modal-button-final">
            <button
              className="modal-button-next"
              onClick={handleClickItinerary}
            >
              {languageData.modalHotelOptions.buttonNext}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
