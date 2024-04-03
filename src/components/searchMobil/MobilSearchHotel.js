import moment from "moment";
import Lottie from "lottie-react";
import { useRouter } from "next/navigation";
import DateRangeIcon from "@mui/icons-material/DateRange";
import React, { useState, useEffect, useContext } from "react";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

// import Room from "../../hooks/RoomBox";
import Room from "@/services/Hotels/config/RoomBox";
import Calendar from "../../hooks/Calendar";
// import SearchHotel from "../Search/SearchHotel";
import LanguageContext from "../../language/LanguageContext";
import animationData from "../../assets/animations/animated-page-transitions.json";
import SearchHotel from "@/services/Hotels/Search/SearchHotel";
import { ListingHotelMobile } from "@/services/Hotels/components/Listing/ListingHotelMobile";

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
    if(selectedOption.type === "hotel"){
      window.open(`/hotel/${selectedOption.codeName}?${query}`, '_blank')
    }else{
      router.push(`/hotel/results?${query}`);
    }

    setTimeout(() => {
      setShowModal(false);
    }, 1500);
  };

  const { languageData } = useContext(LanguageContext);
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="!p-5 shadow-3xl">
      <p className="m-s-b text-[1.2rem] text-gry-100 p-2">
        {languageData.searchMobilHotel.titleMultiDestination}
      </p>

      <div className="flex flex-col gap-y-3">
        <SearchHotel listing={true} onSelectSearch={setSelectedOption} />
        <Calendar listing={true} onDateChange={handleDateChange} />
        <Room listing={true} OnApply={setRoomData} />

        <div className="flex justify-between gap-x-4">
          <button
            className="py-[8.5px] px-8 rounded-[50px] border-2 border-bl-100 text-center block xl:hidden text-bl-100 m-b text-fs-12"
            onClick={() => setOpenFilter(true)}
          >
            Filtros
          </button>

          <button
            className={` w-[60%] lg:w-full rounded-[50px] justify-center flex gap-x-2.5 items-center justify-content-center m-b text-fs-12 text-white py-[8.5px] px-8 lg:px-4 ${
              !selectedOption || !validFirstDay || !validSecondDay
                ? "bg-or-50"
                : "bg-or-100 hoveLor:!bg-or-70"
            }`}
            variant="contained"
            color="primary"
            size="large"
            onClick={sendAutocomplete}
            disabled={!selectedOption || !validFirstDay || !validSecondDay}
            sx={{ mt: 2 }}
          >
            {languageData.SearchBox.tabHotel.buttonSearch}
            <img
              className="h-4 w-4"
              src={`${process.env.NEXT_PUBLIC_URL}icons/search/search-w.svg`}
              alt="search icon royal vacation"
            />
          </button>
        </div>
      </div>

      <ListingHotelMobile open={openFilter} closeFilter={setOpenFilter} />

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
    </div>
  );
}
