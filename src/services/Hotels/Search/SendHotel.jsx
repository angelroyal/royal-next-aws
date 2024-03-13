import moment from "moment";
import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";

import Room from "../config/RoomBox";
import Calendar from "@/hooks/Calendar";
import SearchHotel from "./SearchHotel";
import { useIsMobile } from "@/config/Mobile/isMobile";
import LanguageContext from "../../../language/LanguageContext";

export default function SendHotel() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [validFirstDay, setValidFirstDay] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);
  const [validSecondDay, setValidSecondDay] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
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

    router.push(`/resultHotel?${query}`);
  };
  const { languageData } = useContext(LanguageContext);

  return (
    <div className="flex flex-col lg:flex-row items-center bg-white gap-2.5 rounded-lg p-6">
      <div className="border-2 border-gray-200 rounded py-2.5 px-4 flex items-center h-[53px] relative w-full lg:w-[290px] ">
        <SearchHotel onSelectSearch={setSelectedOption} />
      </div>

      <div className="border-2 border-gray-200 rounded py-2.5 px-4 flex items-center w-full lg:w-[290px]">
        <Calendar onDateChange={handleDateChange} />
      </div>

      <div className="border-2 border-gray-200 rounded py-2.5 px-4 relative w-full lg:w-[296px]">
        <Room OnApply={setRoomData} />
      </div>

      <>
        <button
          className={`w-full xl:w-auto rounded-[50px] flex gap-2 items-center justify-content-center m-b text-fs-12 text-white py-[20px] px-4 ${
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
