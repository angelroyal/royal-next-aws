import moment from "moment";
import Image from "next/image";
import Lottie from "lottie-react";
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import React, { useState, useContext, useEffect } from "react";

import CalendarDay from "../../hooks/CalendarDay";
import { useIsMobile } from "../../config/Mobile/isMobile";
import SearchTour from "../../components/Search/SearchTour";
import LanguageContext from "../../language/LanguageContext";
import PersonsActivities from "../../utils/tour/PersonsActivities";
import {
  /* CalendarTourMobile, */ SearchTourMobile,
} from "../Mobile/Tour/General/SearchTourMobile";

import animationData from "../../assets/animations/animated-page-transitions.json";
import DateRangeIcon from "../../assets/icons/utils/searchBox/calendar-autocomplete.svg";
import RoomOutlinedIcon from "../../assets/icons/utils/searchBox/location-autocomplete.svg";

export default function ResultTour() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const [roomData, setRoomData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  useEffect(() => {
    const personsData = localStorage.getItem("personsData");

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
      setSelectedDate([dateFormatCalendar]);
    }
  }, []);

  const sendAutocomplete = () => {
    const FormatDateStart = selectedDate[0];
    const dateStart = moment(FormatDateStart).format("YYYY-MM-DD");
    setShowModal(true);

    const requestBody = {
      code: selectedOption.key,
      type: selectedOption.type,
      dateStart: dateStart,
      adults: roomData[0].adults,
      children: roomData[0].children,
    };

    // We convert the object to a string and append it to the URL
    const query = new URLSearchParams(requestBody).toString();

    setTimeout(() => {
      router.push(`/tours?${query}`);
      setShowModal(false);
    }, 1500);
  };

  const isMobile = useIsMobile();

  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <Row className="row-home-search">
        <Col className="input-search-t-h position-relative" sm={4}>
          <Image className="icon-location-home" src={RoomOutlinedIcon} />
          <span className="span-location-home-r">
            {languageData.SearchBox.tabTour.autoDestination}
          </span>
          {isMobile ? (
            <SearchTourMobile onSelectTour={setSelectedOption} />
          ) : (
            <SearchTour onSelectTour={setSelectedOption} />
          )}
        </Col>

        <Col className="input-search-t-h position-relative" sm={3}>
          <Image className="icon-date-home" src={DateRangeIcon} />
          <span className="span-date-home-r">
            {languageData.SearchBox.tabTour.date}
          </span>
          {/* {isMobile ? <CalendarTourMobile onDateChange={handleDateChange}/> : <CalendarDay onDateChange={handleDateChange} />} */}
          <CalendarDay onDateChange={handleDateChange} />
        </Col>

        <Col className="input-search-t-h position-relative" sm={3}>
          <PersonsActivities OnApply={setRoomData} />
          <span className="span-people-home-r">
            {languageData.SearchBox.tabTour.people}
          </span>
        </Col>

        <Col
          sm={2}
          className={`${isMobile && "d-flex justify-content-center width100"}`}
        >
          <button
            className={`button-search-page-search ${
              !selectedOption || !selectedDate ? "disabled" : ""
            }`}
            variant="contained"
            color="primary"
            size="large"
            onClick={sendAutocomplete}
            disabled={!selectedOption || !selectedDate}
            sx={{ mt: 2 }}
          >
            {languageData.SearchBox.tabTour.button}
          </button>
        </Col>
      </Row>

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
