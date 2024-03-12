import moment from "moment";
// import { useHistory } from "react-router-dom";/*  */
import { useState, useEffect, useContext } from "react";

// import {
//   DialogConfigSearchHotel,
//   DialogConfigRoomHotel,
//   DialogCalendarConfig,
// } from "../Mobile/Hotel/General/DialogConfig";
// import { useIsMobile } from "../../config/Mobile/isMobile";
// import AnimationFly from "../../utils/others/AnimationFly";
// import LanguageContext from "../../language/LanguageContext";
// import AnimationFlyMobile from "../../utils/others/AnimationFlyMobile";

// import { ReactComponent as DateRangeIcon } from "../../assets/icons/utils/searchBox/calendar-autocomplete.svg";
// import { ReactComponent as RoomOutlinedIcon } from "../../assets/icons/utils/searchBox/location-autocomplete.svg";
import Room from "../config/RoomBox";
import SearchHotel from "./SearchHotel";
import { useIsMobile } from "../../../configs/isMobile";
import Calendar from "../../../components/Calendar/Calendar";
import LanguageContext from "../../../language/LanguageContext";

// const Room = lazy(() => import("../../hooks/RoomBox"));
// const SearchHotel = lazy(() => import("./SearchHotel"));
// const Calendar = lazy(() => import("../../hooks/Calendar"));

export default function SendHotel() {
  const isMobile = useIsMobile();
  const [validFirstDay, setValidFirstDay] = useState(null);
  const [validSecondDay, setValidSecondDay] = useState(null);
  // const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);
  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);

  useEffect(() => {
    const storedSelectedDates = localStorage.getItem("selectedDates");
    const storedValidFirstDay = localStorage.getItem("validFirstDay");
    const storedValidSecondDay = localStorage.getItem("validSecondDay");
    const dataSearch = localStorage.getItem("dataSearch");

    if (dataSearch) {
      const parsedDataSearch = JSON.parse(dataSearch);
      setSelectedOption(parsedDataSearch);
    }

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
  }, [validFirstDay, validSecondDay]);

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

  // SEND LINK SECOND LISTING
  const sendAutocomplete = () => {
    // setShowModal(true);
    const encodedRoomData = encodeURIComponent(JSON.stringify(roomData));
    const requestBody = {
      destination: selectedOption.label,
      code: selectedOption.key,
      type: selectedOption.type,
      "check-in": validFirstDay,
      "check-out": validSecondDay,
      occupancies: encodedRoomData,
    };
    const query = new URLSearchParams(requestBody).toString();
    console.log(query);

    setTimeout(() => {
      // history.push(`/resultHotel?${query}`);
      // setShowModal(false);
    }, 1500);
  };
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex items-center bg-white gap-2.5 rounded-lg p-6">
      <div>
        {isMobile ? (
          // <DialogConfigSearchHotel destinationSelected={setSelectedOption} />
          <div>Hola</div>
        ) : (
          <>
            {/* <div className="">
              
              <img className="grayscale" src="https://sandboxmexico.com/assets/icons/location/location-b.svg" alt="icon location Royal vacation" />
              <SearchHotel onSelectSearch={setSelectedOption} />
            </div> */}
            <div className="border-2 border-gray-200 rounded py-2.5 px-4 flex items-center h-[53px] relative">
              <SearchHotel onSelectSearch={setSelectedOption} />
            </div>
          </>
        )}
      </div>

      <div className="border-2 border-gray-200 rounded py-2.5 px-4 flex items-center">
        {isMobile ? (
          // <DialogCalendarConfig
          //   validFirstDay={validFirstDay}
          //   validSecondDay={validSecondDay}
          //   onDateChange={handleDateChange}
          // />
          <div>holaa</div>
        ) : (
          <>
            <Calendar onDateChange={handleDateChange} />
          </>
        )}
      </div>
      <div className="border-2 border-gray-200 rounded py-2.5 px-4 relative">
        {isMobile ? (
          // <DialogConfigRoomHotel OnApply={setRoomData} />
          <div>Hola</div>
        ) : (
          // <Suspense fallback={null}>
          <Room OnApply={setRoomData} />
          // </Suspense>
        )}
      </div>

      <>
        <button
          className={`flex gap-2 items-center justify-content-center m-b text-fs-12 text-white pt-5 pr-4 pb-5 pl-4 ${
            !selectedOption || !validFirstDay || !validSecondDay
              ? "bg-or-50"
              : "bg-or-100"
          }`}
          // eslint-disable-next-line react/no-unknown-property
          variant="contained"
          size="large"
          onClick={sendAutocomplete}
          disabled={!selectedOption || !validFirstDay || !validSecondDay}
          // eslint-disable-next-line react/no-unknown-property
          sx={{ mt: 2 }}
          style={{ borderRadius: "50px" }}
        >
          {languageData.SearchBox.tabHotel.buttonSearch}
          <img
            className="h-4 w-4"
            src="https://sandboxmexico.com/assets/icons/search/search-w.svg"
            alt="search icon royal vacation"
          />
        </button>
      </>
    </div>
  );
}
