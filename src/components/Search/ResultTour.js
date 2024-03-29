import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useState, useContext, useEffect } from "react";

import CalendarDay from "../../hooks/CalendarDay";
import { useIsMobile } from "../../config/Mobile/isMobile";
import SearchTour from "../../components/Search/SearchTour";
import LanguageContext from "../../language/LanguageContext";
import PersonsActivities from "../../utils/tour/PersonsActivities";

export default function ResultTour() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const [roomData, setRoomData] = useState([]);
  // const [showModal, setShowModal] = useState(false);

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
    // setShowModal(true);

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
      router.push(`/tour/results?${query}`);
      // setShowModal(false);
    }, 1500);
  };

  const isMobile = useIsMobile();

  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center bg-white gap-2.5 rounded-lg p-6">
        <SearchTour onSelectTour={setSelectedOption} />
        <CalendarDay onDateChange={handleDateChange} />
        <PersonsActivities OnApply={setRoomData} />

        <>
          <button
            className={`w-full xl:w-auto rounded-[50px] flex gap-2 items-center justify-content-center m-b text-fs-12 text-white py-[20px] px-4 ${
              !selectedOption || !selectedDate ? "bg-or-50" : "bg-or-100 hover:!bg-or-70"
            }`}
            variant="contained"
            color="primary"
            size="large"
            onClick={sendAutocomplete}
            disabled={!selectedOption || !selectedDate}
            sx={{ mt: 2 }}
          >
            {languageData.SearchBox.tabTour.button}
            <img
            className="h-4 w-4"
            src={`${process.env.NEXT_PUBLIC_URL}icons/search/search-w.svg`}
            alt="search icon royal vacation"
          />
          </button>
        </>
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
