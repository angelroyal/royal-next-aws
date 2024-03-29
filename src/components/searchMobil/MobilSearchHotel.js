import moment from "moment";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import DateRangeIcon from "@mui/icons-material/DateRange";
import React, { useState, useEffect, useContext } from "react";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

import Room from "../../hooks/RoomBox";
import Calendar from "../../hooks/Calendar";
import SearchHotel from "../Search/SearchHotel";
import LanguageContext from "../../language/LanguageContext";
import animationData from "../../assets/animations/animated-page-transitions.json";

export default function MobilSearchHotel() {
  const router = useRouter();
  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);
  const [selectedDates, setSelectedDates] = useState(null);
  const [validFirstDay, setValidFirstDay] = useState(null);
  const [validSecondDay, setValidSecondDay] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // console.log(selectedDates);

  useEffect(() => {
    const storedSelectedDates = localStorage.getItem("selectedDates");
    const storedValidFirstDay = localStorage.getItem("validFirstDay");
    const storedValidSecondDay = localStorage.getItem("validSecondDay");

    if (storedSelectedDates) {
      setSelectedDates(JSON.parse(storedSelectedDates));
    }

    if (selectedDates) {
      //test
    }

    if (storedValidFirstDay) {
      setValidFirstDay(storedValidFirstDay);
    }

    if (storedValidSecondDay) {
      setValidSecondDay(storedValidSecondDay);
    }

    const storedRoomData = localStorage.getItem("roomData");
    if (storedRoomData) {
      const parsedRoomData = JSON.parse(storedRoomData);
      setRoomData(parsedRoomData);
    }
  }, []);

  const handleDateChange = (selectedDates) => {
    setSelectedDates(selectedDates);
    localStorage.setItem("selectedDates", JSON.stringify(selectedDates));

    if (selectedDates && selectedDates.length >= 2) {
      const FormatCheckIn = selectedDates[0];
      const CheckIn = moment(FormatCheckIn).format("YYYY-MM-DD");
      setValidFirstDay(CheckIn);
      localStorage.setItem("validFirstDay", CheckIn);

      const FormatCheckOut = selectedDates[1];
      const CheckOut = moment(FormatCheckOut).format("YYYY-MM-DD");
      setValidSecondDay(CheckOut);
      localStorage.setItem("validSecondDay", CheckOut);
    }
  };

  const sendAutocomplete = () => {
    setShowModal(true);

    const encodedRoomData = encodeURIComponent(JSON.stringify(roomData));

    // console.log(selectedOption);

    const requestBody = {
      destination: selectedOption.label,
      code: selectedOption.key,
      type: selectedOption.type,
      "check-in": validFirstDay,
      "check-out": validSecondDay,
      occupancies: encodedRoomData,
    };

    const query = new URLSearchParams(requestBody).toString();
    router.push(`/resultHotel?${query}`);

    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };

  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <p className="titleSearch-mobile container p-2">
        {languageData.searchMobilHotel.titleMultidestination}
      </p>

      <div className="margin-search-tab">
        <RoomOutlinedIcon className="icon-location-result" />
        <span className=" mbsc-ios mbsc-ltr mbsc-label mbsc-label-stacked mbsc-label-outline-stacked">
          {languageData.searchMobilHotel.autocompleteDestination}
        </span>
        <SearchHotel onSelectSearch={setSelectedOption} />
      </div>

      <div className="margin-search-tab">
        <DateRangeIcon className="Icon-date" />
        <span className=" mbsc-ios mbsc-ltr mbsc-label mbsc-label-stacked mbsc-label-outline-stacked">
          {languageData.searchMobilHotel.date}
        </span>
        <Calendar onDateChange={handleDateChange} />
      </div>

      <div className="margin-search-tab">
        <span className=" mbsc-ios mbsc-ltr mbsc-label mbsc-label-stacked mbsc-label-outline-stacked">
          {languageData.searchMobilHotel.room}
        </span>
        <Room OnApply={setRoomData} />
      </div>

      <div className=" button-room-page">
        <button
          className={`button-search-page-search ${
            !selectedOption || !validFirstDay || !validSecondDay
              ? "disabled"
              : ""
          }`}
          variant="contained"
          color="primary"
          size="large"
          onClick={sendAutocomplete}
          disabled={!selectedOption || !validFirstDay || !validSecondDay}
          sx={{ mt: 2 }}
        >
          {languageData.SearchBox.tabHotel.buttonSearch}
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
