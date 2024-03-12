import moment from "moment";
import Lottie from "lottie-react";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";

import CalendarDay from "../../hooks/CalendarDay";
import SearchMoving from "../Search/SearchMoving";
import SearchAirport from "../Moving/SearchAirport";
import LanguageContext from "../../language/LanguageContext";
import PersonsMoving from "../../utils/transport/PersonsMoving";

import animationData from "../../assets/animations/animated-page-transitions.json";
import { ReactComponent as CalendarIcon } from "../../assets/icons/utils/searchBox/calendar.svg";
import { ReactComponent as RoomOutlinedIcon } from "../../assets/icons/utils/searchBox/location-autocomplete.svg";

export default function MobilAirportHotel() {
  const history = useHistory();
  const { languageData } = useContext(LanguageContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});
  const [selectedHotel, setSelectedHotel] = useState(null);

  const [selectedDay, setSelectedDay] = useState(null);

  const handleFirstDay = (selectedDay) => {
    setSelectedDay(selectedDay);
    localStorage.setItem("selectedDay", JSON.stringify(selectedDay));
  };

  const [roomData, setRoomData] = useState([{ adults: 2, children: 0 }]);

  // OBTAIN REQUEST LOCAL STORAGE
  useEffect(() => {
    const personsData = localStorage.getItem("tourData");

    if (personsData) {
      setRoomData(JSON.parse(personsData));
    } else {
      setRoomData([{ adults: 2, children: 0 }]);
    }

    const dateActivity = localStorage.getItem("calendarDay");

    if (dateActivity) {
      const dateArray = JSON.parse(dateActivity);
      const firstDate = dateArray[0];
      const dateFormatCalendar = moment(firstDate, moment.ISO_8601).format(
        "YYYY-MM-DD"
      );
      setSelectedDay([dateFormatCalendar]);
    }
  }, []);

  //REDIRECT PAGE TRANSPORTATION
  const sendAutocomplete = () => {
    setShowModal(true);
    // FORMAT DATE
    const FormatDateStart = selectedDay[0];
    const departureDate = moment(FormatDateStart).format("YYYY-MM-DD");

    const passengers = roomData[0].adults + roomData[0].children;

    // REQUEST BODY URL PAGE TOUR
    const requestBody = {
      hotelCode: selectedHotel.key,
      hotel: selectedHotel.label,
      passengers: passengers,
      departureDate: departureDate,
      airportCode: selectedOption.id,
      type: "1",
    };

    // We convert the object to a string and append it to the URL
    const query = new URLSearchParams(requestBody).toString();

    setTimeout(() => {
      history.push(`/moving?${query}`);
      setShowModal(false);
    }, 1500);
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
          <div className="mobile-s-calendarDay">
            <CalendarIcon className="icon-location-result" />
            <span className="date-transportation-search">
              {languageData.SearchBox.tabTransportation.date}
            </span>
            <CalendarDay onDateChange={handleFirstDay} />
          </div>
        </Col>

        <Col sm={6} className="colum-mobile-s-people">
          <div className="mobile-s-Persons">
            <span className="people-mobile-text-p">
              {languageData.SearchBox.tabTransportation.peopleText}
            </span>
            <PersonsMoving
              classNama="persons-moving-h-a"
              OnApply={setRoomData}
            />
          </div>
        </Col>
      </Row>

      <div className="margin-search-tab button-room-page">
        <button
          className={`button-search-page-search ${
            !selectedOption || !selectedHotel || !selectedDay ? "disabled" : ""
          }`}
          variant="contained"
          color="primary"
          size="large"
          onClick={sendAutocomplete}
          disabled={!selectedOption || !selectedHotel || !selectedDay}
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
