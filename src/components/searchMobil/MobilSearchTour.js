import moment from "moment";
import Image from "next/image";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import React, { useState, useContext, useEffect } from "react";

import CalendarDay from "../../hooks/CalendarDay";
import SearchTour from "../../components/Search/SearchTour";
import LanguageContext from "../../language/LanguageContext";
import PersonsActivities from "../../utils/tour/PersonsActivities";

import animationData from "../../assets/animations/animated-page-transitions.json";
import DateRangeIcon from "../../assets/icons/utils/searchBox/calendar-autocomplete.svg";
import RoomOutlinedIcon from "../../assets/icons/utils/searchBox/location-autocomplete.svg";

export default function MobilSearchTour() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [roomData, setRoomData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const storedSelectedDate = localStorage.getItem("selectedDate");

    if (storedSelectedDate) {
      setSelectedDate(JSON.parse(storedSelectedDate));
    }
  }, []);

  const handleDateChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    localStorage.setItem("selectedDate", JSON.stringify(selectedDate));
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

  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <h3 className="titleSearch">
        {languageData.SearchBox.tabTour.titleTextTour}
      </h3>

      <div className="margin-search-tab">
        <Image className="icon-location-result" src={RoomOutlinedIcon} alt="RoomOutlinedIcon" />
        <span className="span-location-home">
          {languageData.SearchBox.tabTour.autoDestination}
        </span>
        <SearchTour onSelectTour={setSelectedOption} />
      </div>

      <div className="margin-search-tab">
        <Image className="Icon-date" src={DateRangeIcon} alt="DateRangeIcon" />
        <span className="span-date-home">
          {languageData.SearchBox.tabTour.date}
        </span>
        <CalendarDay onDateChange={handleDateChange} />
      </div>

      <div className="margin-search-tab">
        <span className="span-people-tour">
          {languageData.SearchBox.tabTour.people}
        </span>
        <PersonsActivities OnApply={setRoomData} />
      </div>

      <div className="margin-search-tab button-room-page">
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
