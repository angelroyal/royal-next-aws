import moment from "moment";
import Lottie from "lottie-react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";

import SearchMoving from "../Search/SearchMoving";
import SearchAirport from "../Moving/SearchAirport";
import CalendarRound from "../../hooks/CalendarRound";
import LanguageContext from "../../language/LanguageContext";
import PersonsMoving from "../../utils/transport/PersonsMoving";

import animationData from "../../assets/animations/animated-page-transitions.json";
import { ReactComponent as CalendarIcon } from "../../assets/icons/utils/searchBox/calendar.svg";
import { ReactComponent as RoomOutlinedIcon } from "../../assets/icons/utils/searchBox/location-autocomplete.svg";

export default function MobilRound() {
  const history = useHistory();
  const [comebackDate, setComebackDate] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState({});
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [roomData, setRoomData] = useState([{ adults: 2, children: 0 }]);
  const [showModal, setShowModal] = useState(false);
  const { languageData } = useContext(LanguageContext);

  // OBTAIN REQUEST LOCAL STORAGE
  useEffect(() => {
    const personsData = localStorage.getItem("tourData");

    if (personsData) {
      setRoomData(JSON.parse(personsData));
    } else {
      setRoomData([{ adults: 2, children: 0 }]);
    }

    const dateActivity = localStorage.getItem("selectedRound");

    if (dateActivity) {
      const dateArray = JSON.parse(dateActivity);

      const firstDate = dateArray[0];
      const dateFormatCalendar = moment(firstDate, moment.ISO_8601).format(
        "YYYY-MM-DD"
      );
      setDepartureDate(dateFormatCalendar);

      const ComeDate = dateArray[1];
      const dateFormatCalendarCome = moment(ComeDate, moment.ISO_8601).format(
        "YYYY-MM-DD"
      );
      setComebackDate(dateFormatCalendarCome);
    }
  }, []);

  //REDIRECT PAGE TRANSPORTATION
  const sendAutocomplete = () => {
    setShowModal(true);

    // FORMAT DATE
    const FormatDepartureDate = departureDate;
    const departure = moment(FormatDepartureDate).format("YYYY-MM-DD");
    const FormatComebackDate = comebackDate;
    const comeback = moment(FormatComebackDate).format("YYYY-MM-DD");
    const passengers = roomData[0].adults + roomData[0].children;

    // REQUEST BODY URL PAGE TOUR
    const requestBody = {
      hotelCode: selectedHotel.key,
      hotel: selectedHotel.label,
      passengers: passengers,
      departureDate: departure,
      comebackDate: comeback,
      airportCode: selectedOption.id,
      type: "3",
    };

    const query = new URLSearchParams(requestBody).toString();

    setTimeout(() => {
      history.push(`/moving?${query}`);
      setShowModal(false);
    }, 1500);
  };

  const handleDatesChange = (selectedDates) => {
    setDepartureDate(selectedDates[0]);
    setComebackDate(selectedDates[1]);
  };

  return (
    <>
      <div className="mobile-s-airport">
        <RoomOutlinedIcon className="icon-location-result" />
        <span className="span-location-home">
          {languageData.SearchBox.tabTransportation.autoText}
        </span>
        <SearchAirport onSelectAirport={setSelectedOption} />
      </div>

      <div className="mobile-s-moving">
        <RoomOutlinedIcon className="icon-location-result" />
        <span className="span-location-home">
          {languageData.SearchBox.tabTransportation.autoTextFinal}
        </span>
        <SearchMoving onSelectSearch={setSelectedHotel} />
      </div>

      <Row>
        <Col sm={6} className="colum-mobile-s-calendar">
          {/* CALENDAR FIRST ROUNDED */}
          <div className="mobile-s-calendarDay">
            <CalendarIcon className="icon-location-result" />
            <span className="span-date-r">
              {languageData.SearchBox.tabTransportation.date}
            </span>
            <CalendarRound onDatesChange={handleDatesChange} />
          </div>
        </Col>

        <Col sm={6} className="colum-mobile-s-people">
          <div className="mobile-s-Persons">
            <span className="people-mobile-text-p">
              {languageData.SearchBox.tabTransportation.peopleText}
            </span>
            <PersonsMoving OnApply={setRoomData} />
          </div>
        </Col>
      </Row>

      <div className="margin-search-tab button-room-page">
        <button
          className={`button-search-page-search ${
            !selectedOption || !selectedHotel || !departureDate || !comebackDate
              ? "disabled"
              : ""
          }`}
          variant="contained"
          color="primary"
          size="large"
          onClick={sendAutocomplete}
          disabled={
            !selectedOption || !selectedHotel || !departureDate || !comebackDate
          }
          sx={{ mt: 2 }}
        >
          {languageData.SearchBox.tabTransportation.button}
        </button>
      </div>

      {showModal && (
        <div className="modal-backdrop modal-loading">
          <div className="modal-box">
            <Lottie
              className="transition-royal"
              animationData={animationData}
            />
          </div>
        </div>
      )}
    </>
  );
}
