import moment from "moment";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";

import ResultHotelModal from "../Search/ResultHotelModal";
import LanguageContext from "../../language/LanguageContext";
import { SelectedRoomsContext } from "../../pages/Modal/ModalHotel";
import CarouselHotelAvailability from "../Carousel/CarouselHotelAvailability";
import { useIsMobile } from "../../config/Mobile/isMobile";

import LineDialog from "../../assets/images/others/line-dialogs.png";
import Room from "../../assets/icons/hotel/modal/room-white.svg";
import Person from "../../assets/icons/hotel/modal/adult-white.svg";
import Calendar from "../../assets/icons/hotel/modal/calendar-white.svg";
import IconSuccess from "../../assets/icons/utils/others/done_active.svg";
import IconRoyalWhite from "../../assets/icons/hotel/modal/icon-royal-vacations-white.svg";

export default function ModalHotelOptions(props) {
  const isMobile = useIsMobile()
  const { hotelModal, dataBody, room } = props;
  const codeZone = hotelModal.destinationCode;
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  const { languageData } = useContext(LanguageContext);

  // CONTEXT DATA RESERVATION HOTEL
  const [selectedRooms] = useContext(SelectedRoomsContext);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAdults, setTotalAdults] = useState(0);
  const [totalChildren, setTotalChildren] = useState(0);

  // DATA PRICE SELECTED ROOMS
  useEffect(() => {
    let sum = 0;
    selectedRooms.forEach((room) => {
      sum += parseFloat(room.price);
    });
    setTotalPrice(sum);
  }, [selectedRooms]);

  // SUM ADULTS ROOMS
  useEffect(() => {
    let sum = 0;
    selectedRooms.forEach((room) => {
      sum += parseFloat(room.adults);
    });
    setTotalAdults(sum);
  }, [selectedRooms]);

  useEffect(() => {
    let sum = 0;
    if (selectedRooms && selectedRooms.length > 0) {
      selectedRooms.forEach((room) => {
        if (room && room.children && room.children.length > 0) {
          sum += room.children.length;
        }
      });
    }
    setTotalChildren(sum);
  }, [selectedRooms]);

  const [showSearchHotel, setShowSearchHotel] = useState(false);
  const [showSearchMoving, setShowSearchMoving] = useState(false);
  const [showSearchTour, setShowSearchTour] = useState(false);

  // What is that state used for?
  if (showSearchMoving && showSearchTour) {
  }

  const handleHotelVerMasClick = () => {
    setShowSearchHotel(true);
    setShowSearchMoving(false);
    setShowSearchTour(false);
  };

  // const handleMovingVerMasClick = () => {
  //   setShowSearchMoving(true);
  //   setShowSearchHotel(false);
  //   setShowSearchTour(false);
  // };

  // const handleTourVerMasClick = () => {
  //   setShowSearchTour(true);
  //   setShowSearchHotel(false);
  //   setShowSearchMoving(false);
  // };

  const handleMovingVerMasClick = () => {
    setShowSearchMoving(true);
    setShowSearchHotel(false);
    setShowSearchTour(false);
    handleTourVerMasClick();
  };

  const handleTourVerMasClick = () => {
    setShowSearchTour(true);
    setShowSearchHotel(false);
    setShowSearchMoving(false);
    handleMovingVerMasClick();
  };

  useEffect(() => {
    const container = document.querySelector(".container-all-information");
    container.scrollTo(0, 0);
  }, []);

  const dateFormatCheckIn = moment(dataBody["check-in"]).format("DD/MM/YY");
  const dateFormatCheckOut = moment(dataBody["check-out"]).format("DD/MM/YY"); // Utiliza dataBody["check-out"] aquí

  const checkIn = moment(dateFormatCheckIn, "DD/MM/YY");
  const checkOut = moment(dateFormatCheckOut, "DD/MM/YY");

  // REDIRECT PAGE PAYMENT
  // const history = useHistory();
  const handleClickItinerary = () => {
    const uidCart = localStorage.getItem("uid-cart");
    if (uidCart) {
      const { uid } = JSON.parse(uidCart);
      const cartId = uid;
      // history.push(`/booking?uid=${cartId}`);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondDiv(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-all-information modal-hotel">
      {isMobile && <img className="line-dialog-header" src={LineDialog} alt="line-dialog"/>}

      <div className="styles-modal-options container">
        <Row className="container-confirm-cart">
          <Col sm={5} className="divider-success-data">
            <i className="fas fa-icon">
              <Image src={IconRoyalWhite} alt="IconRoyalWhite" className="icon-royal-modal-options" />
            </i>

            <h1 className="alert-body">
              {languageData.modalHotelOptions.titleWeHave} <br />{" "}
              <span className="text-alert-body-down">
                {languageData.modalHotelOptions.titleHotelAlready}
              </span>
            </h1>
            <div className="v-line-mini" />
          </Col>

          <Col sm={7} className="divider-info-cart">
            <div className="title-info-principal-modal">{hotelModal.name}</div>

            {room.slice(0, 5).map((nameRoom, index) => (
              <div key={index} className="text-destination-h">
                <Image src={Room} alt="Room" className="icon-destination-h" />
                {nameRoom.name}
              </div>
            ))}

            <div className="text-destination-f">
              <Image src={Calendar} alt="Calendar" className="icon-destination-h" />
              {moment(checkIn).format("DD/MM/YY")} -{" "}
              {moment(checkOut).format("DD/MM/YY")}{" "}
              <div>
                <Image src={Person} alt="Person" className="icon-destination-h" />
                {totalAdults}{" "}
                {totalAdults > 1
                  ? languageData.itinerary.hotelItinerary.textAdults
                  : languageData.itinerary.hotelItinerary.textAdult}{" "}
                {totalChildren !== 0 ? (
                  <>
                    {totalChildren}{" "}
                    {totalChildren > 1
                      ? languageData.itinerary.hotelItinerary.textChildren
                      : languageData.itinerary.hotelItinerary.textChild}
                  </>
                ) : null}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {showSecondDiv && (
        <>
          <div className="styles-modal-options container">
            {/* <div className="h-line-modal-second-screen"></div> */}
            {/* <div className="result-moving-m">
              <h3 className="title-link-more-d">
                {languageData.modalHotelOptions.titleTransfer}
              </h3>
              <h2 className="title-section-c">
                {languageData.modalHotelOptions.addTransfer}
              </h2>
              <CarouselMovingAvailability />
              {!showSearchMoving && (
                <div className="container button-styles-carousel">
                  <button
                    className="carousel-button-transport"
                    onClick={handleMovingVerMasClick}
                  >
                    {languageData.modalHotelOptions.buttonShowMore}
                  </button>
                </div>
              )}
              {showSearchMoving && (
                <FormControl component="fieldset" id="radio-button-modal">
                  <ResultMovingModal />
                </FormControl>
              )}
            </div>  */}

            {/* <div className="h-line-modal-second-screen"></div> */}
            {/* <div className="modal-second-tour-section">
              <h3 className="title-link-more-d">
                {languageData.modalHotelOptions.titleTour}
              </h3>
              <h2 className="title-section-c">
                {languageData.modalHotelOptions.optionsActivities}
              </h2>
              <CarouselTourAvailability />
              {!showSearchTour && (
                <div className="container button-styles-carousel">
                  <button
                    className="carousel-button-transport"
                    onClick={handleTourVerMasClick}
                  >
                    {languageData.modalHotelOptions.buttonShowMore}
                  </button>
                </div>
              )}
              {showSearchTour && <ResultTourModal />}
            </div> */}

            <div className="h-line-modal-second-screen"></div>
            <div className="modal-second-hotel-section">
              <h3 className="title-link-more-d">
                {languageData.modalHotelOptions.titleHotel}
              </h3>
              <h2 className="title-section-c">
                {languageData.modalHotelOptions.optionsHotel}
              </h2>
              <CarouselHotelAvailability codeUpdateZone={codeZone} />
              {!showSearchHotel && (
                <div className="container button-styles-carousel">
                  <button
                    className="carousel-button-transport"
                    onClick={handleHotelVerMasClick}
                  >
                    {languageData.modalHotelOptions.buttonShowMore}
                  </button>
                </div>
              )}
              {showSearchHotel && (
                <ResultHotelModal closeModal={setShowSearchHotel} />
              )}
            </div>

            <br />
            <br />
          </div>
          <Row className="container-general-i-price styles-footer-modal">
            <Col sm={7} className="position-r-status">
              <div className="section-principal-status-final">
                <h3 className="title-section-hotel">
                  {languageData.modalHotelOptions.stay} {hotelModal.destination}
                </h3>

                <div className="container-info-modal-items">
                  <div className="info-modal-cart-items">
                    <Image src={IconSuccess} alt="IconSuccess" style={{ height: "12px" }} />
                    {languageData.modalHotelOptions.textAlready}
                  </div>
                </div>
              </div>
            </Col>

            <Col sm={5} className="styles-button-modal-options">
              <div className="container-money-final">
                <div className="text-money-price">
                  {languageData.modalHotelOptions.priceTotal}
                </div>

                <div className="text-price-total">
                  <span className="size-letter-price">MXN</span> $
                  {Math.floor(totalPrice)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                  .<sup>{(totalPrice % 1).toFixed(2).slice(2)}</sup>
                </div>

                <div className="taxes-price-total">
                  {languageData.modalHotelOptions.taxes}
                </div>
              </div>

              <div className="modal-button-final">
                <button
                  className="modal-button-next"
                  onClick={handleClickItinerary}
                >
                  {languageData.modalHotelOptions.buttonNext}
                </button>
              </div>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
}
