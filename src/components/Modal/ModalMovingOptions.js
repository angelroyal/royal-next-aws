// import Lottie from "lottie-react";
import { Row, Col } from "react-bootstrap";
import { FormControl } from "@mui/material";
import { useHistory } from "react-router-dom";
import React, { useState, useContext } from "react";

import ResultTourModal from "../Search/ResultTourModal";
import ResultHotelModal from "../Search/ResultHotelModal";
import ResultMovingModal from "../Search/ResultMovingModal";
import LanguageContext from "../../language/LanguageContext";
import CarouselTourAvailability from "../Carousel/CarouselTourAvailability";
import CarouselHotelAvailability from "../Carousel/CarouselHotelAvailability";
import CarouselMovingAvailability from "../Carousel/CarouselMovingAvailability";

import { ReactComponent as Person } from "../../assets/icons/utils/payment/person.svg";
import { ReactComponent as IconDone } from "../../assets/icons/tour/modal/done_active.svg";
import { ReactComponent as Calendar } from "../../assets/icons/utils/searchBox/calendar.svg";
import { ReactComponent as IconLocation } from "../../assets/icons/utils/payment/location-inactive.svg";

export default function ModalMovingOptions(props) {
  const { transportData } = props;

  const { languageData } = useContext(LanguageContext);

  // const [showModal, setShowModal] = useState(false);

  // PARAMS SEARCH URL
  const searchParams = new URLSearchParams(window.location.search);
  const typeTransport = parseInt(searchParams.get("type"));
  const departureDate = searchParams.get("departureDate");
  const comebackDate = searchParams.get("comebackDate");
  const passengersParam = searchParams.get("passengers");
  const hotel = searchParams.get("hotel");
  const airportCode = searchParams.get("airportCode");

  const airportNames = {
    CUN: "Aeropuerto Internacional Cancún",
    CTM: "Aeropuerto Chetumal",
  };
  const fetchedAirportFullName = airportNames[airportCode];

  const [showSearchHotel, setShowSearchHotel] = useState(false);
  const [showSearchMoving, setShowSearchMoving] = useState(false);
  const [showSearchTour, setShowSearchTour] = useState(false);

  const handleHotelShowMore = () => {
    setShowSearchHotel(true);
    setShowSearchMoving(false);
    setShowSearchTour(false);
  };

  const handleMovingShowMore = () => {
    setShowSearchMoving(true);
    setShowSearchHotel(false);
    setShowSearchTour(false);
  };

  const handleTourShowMore = () => {
    setShowSearchTour(true);
    setShowSearchHotel(false);
    setShowSearchMoving(false);
  };

  // REDIRECT PAGE PAYMENT
  const history = useHistory();
  const handleClickItinerary = () => {
    // setShowModal(true);
    const uidCart = localStorage.getItem("uid-cart");
    if (uidCart) {
      const { uid } = JSON.parse(uidCart);
      const cartId = uid;

      setTimeout(() => {
        history.push(`/booking?uid=${cartId}`);
        // setShowModal(false);
      }, 1500);
    }
  };

  return (
    <>
      <div className="styles-modal-options container">
        <div className="container-confirm-cart">
          <div className="divider-success-data">
            <div className="icon-container">
              <i className="fas fa-icon">
                <IconDone />
              </i>
            </div>

            <h1 className="alert-body">
              {languageData.modalMovingOptions.titleAddTransfer} <br />{" "}
              {languageData.modalMovingOptions.titleYouTransfer}
            </h1>

            <div className="v-line-mini"/>
          </div>
          <div className="divider-info-cart">
            <div className="title-info-principal-modal">
              {typeTransport === 1 ? (
                <>{languageData.modalMovingOptions.airportHotel}</>
              ) : typeTransport === 2 ? (
                <>{languageData.modalMovingOptions.hotelAirport}</>
              ) : (
                <div> {languageData.modalMovingOptions.round} </div>
              )}
            </div>

            <div className="text-destination-h">
              <IconLocation className="icon-destination-h" />
              {`${fetchedAirportFullName.slice(0, 18)}${
                fetchedAirportFullName.length > 18 ? "..." : ""
              }`}{" "}
              - {`${hotel.slice(0, 18)}${hotel.length > 18 ? "..." : ""}`}
            </div>

            <div className="text-destination-f">
              <Calendar className="icon-destination-h" />
              {departureDate && !comebackDate && <>{departureDate}</>}
              {comebackDate && !departureDate && <>{comebackDate}</>}
              {departureDate && comebackDate && (
                <>
                  {departureDate} - {comebackDate}
                </>
              )}{" "}
              <span>
                <Person className="icon-destination-h" />
                {passengersParam}
              </span>
            </div>
          </div>
        </div>

        <div className="h-line-modal-second-screen"/>
        <div className="modal-second-hotel-section">
          <h3 className="title-link-more-d">
            {languageData.modalMovingOptions.titleHotel}
          </h3>

          <h2 className="title-section-c">
            {languageData.modalMovingOptions.optionsHotel}
          </h2>
          
          <CarouselHotelAvailability />
          {!showSearchHotel && (
            <div className="container button-styles-carousel">
              <button
                className="carousel-button-transport"
                onClick={handleHotelShowMore}
              >
                {languageData.modalMovingOptions.buttonShowMore}
              </button>
            </div>
          )}
          {showSearchHotel && <ResultHotelModal />}
        </div>

        {/* aaaaaaaaaaaaaaaaa */}
        <div className="h-line-modal-second-screen"/>
        <div className="result-moving-m" id="id-radio-button">
          <h3 className="title-link-more-d">
            {languageData.modalMovingOptions.titleTransfer}
          </h3>

          <h2 className="title-section-c">
            {languageData.modalMovingOptions.addTransfer}
          </h2>

          <CarouselMovingAvailability />
          {!showSearchMoving && (
            <div className="container button-styles-carousel">
              <button
                className="carousel-button-transport"
                onClick={handleMovingShowMore}
              >
                {languageData.modalMovingOptions.buttonShowMore}
              </button>
            </div>
          )}
          {showSearchMoving && (
            <FormControl component="fieldset" id="radio-button-modal">
              <ResultMovingModal />
            </FormControl>
          )}
        </div>

        {/* aaaaaaaaaaaaaaaaaaa */}
        <div className="h-line-modal-second-screen"/>
        <div className="modal-second-tour-section">
          <h3 className="title-link-more-d">
            {languageData.modalMovingOptions.titleTour}
          </h3>
          <h2 className="title-section-c">
            {languageData.modalMovingOptions.optionsActivities}
          </h2>
          <CarouselTourAvailability />
          {!showSearchTour && (
            <div className="container button-styles-carousel">
              <button
                className="carousel-button-transport"
                onClick={handleTourShowMore}
              >
                {languageData.modalMovingOptions.buttonShowMore}
              </button>
            </div>
          )}
          {showSearchTour && <ResultTourModal />}
        </div>

        <br />
        <br />
      </div>
      <div className="container-general-i-price styles-modal-options container">
        <Row className="container-price-height">
          <Col className="position-r-status">
            <div className="section-principal-status-final">
              <h3 className="title-section-c">
                {languageData.modalMovingOptions.stay}
              </h3>
              <div className="container-info-modal-items">
                {/* <div className="info-modal-cart-items">Hotel ¡Listo!</div> */}
                {/* <div className="info-modal-cart-items">Tour ¡Listo!</div> */}
                <div className="info-modal-cart-items">{languageData.modalMovingOptions.textAlready}</div>
              </div>
            </div>
          </Col>
          <Col className="position-r-price">
            <div className="container-money-final">
              <div className="text-money-price">
                {languageData.modalMovingOptions.priceTotal}
              </div>
              <div className="text-price-total">
                $
                {Math.floor(transportData.totalPrice)
                  .toLocaleString("es-MX", { currency: "MXN" })
                  .replace(".00", "")}
                .
                <sup> {(transportData.totalPrice % 1).toFixed(2).slice(2)}</sup>
              </div>
              <div className="taxes-price-total">
                {languageData.modalMovingOptions.taxes}
              </div>
            </div>
          </Col>
          <Col className="styles-button-modal-options">
            <br />
            <div className="modal-button-final">
              <button
                className="modal-button-next"
                onClick={handleClickItinerary}
              >
                {languageData.modalMovingOptions.buttonNext}
              </button>
            </div>
          </Col>
        </Row>
      </div>

      {/* {showModal && (
        <div className="modal-backdrop modal-loading">
          <div className="modal-box">
            <Lottie
              className="transition-royal"
              animationData={animationData}
            />
          </div>
        </div>
      )} */}
    </>
  );
}
