import moment from "moment";
import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";

import Room from "../config/RoomBox";
import Calendar from "@/hooks/Calendar";
import AutocompleteHotel from "./AutocompleteHotel";
import LanguageContext from "../../../language/LanguageContext";

export default function SendHotel() {
  const router = useRouter();
  const { language, languageData } = useContext(LanguageContext);
  const [selectedDates, setSelectedDates] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);

  useEffect(() => {
    const storedSelectedDates = localStorage.getItem("selectedDates");
    const dataSearch = localStorage.getItem("dataSearch");

    if (storedSelectedDates) {
      setSelectedDates(JSON.parse(storedSelectedDates));
    }
    if (dataSearch) {
      setSelectedOption(JSON.parse(dataSearch));
    }
  }, []);

  const handleDateChange = (selectedDates) => {
    setSelectedDates(selectedDates);
    localStorage.setItem("selectedDates", JSON.stringify(selectedDates));
  };

  const handleSelectItem = (item) => {
    setSelectedOption(item);
  };

  // SEND LINK SECOND LISTING
  const sendAutocomplete = () => {
    const dataSearch = selectedOption;
    const encodedRoomData = encodeURIComponent(JSON.stringify(roomData));

    if (selectedDates && selectedDates.length >= 2) {
      const checkIn = moment(selectedDates[0]).format("YYYY-MM-DD");
      const checkOut = moment(selectedDates[1]).format("YYYY-MM-DD");

      const requestBody = {
        codeNameHotel: dataSearch.codeName,
        destination: dataSearch.label,
        codeName: dataSearch.codeName,
        code: dataSearch.key,
        type: dataSearch.type,
        "check-in": checkIn,
        "check-out": checkOut,
        occupancies: encodedRoomData,
      };

      const query = new URLSearchParams(requestBody).toString();

      if (dataSearch.type === "hotel") {
        window.open(
          `/${language}/mx/${dataSearch.destination}-${dataSearch.country}/${dataSearch.destination}-hotels/${dataSearch.codeName}?${query}`,
          "_blank"
        );
      } else {
        router.push(
          `/${language}/mx/${dataSearch.codeName}-${dataSearch.country}/hotels?${query}`
        );
      }
    }
  };

  const [isHotelResults, setIsHotelResults] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      setIsHotelResults(currentPath.endsWith("/hotel/results"));
    }
  }, []);

  return (
    <div
      className={`flex ${
        isHotelResults ? "flex-col" : "flex-col lg:flex-row"
      } shadow-3xl items-center bg-white gap-2.5 rounded-lg p-6 max-lg:w-[391px]`}
    >
      <AutocompleteHotel onSelectItem={handleSelectItem} />
      <Calendar onDateChange={handleDateChange} />
      <Room OnApply={setRoomData} />

      <>
        <button
          className={`w-full lg:w-auto rounded-[50px] justify-center flex gap-2 items-center m-b text-fs-12 text-white py-[20px] px-4 ${
            !selectedOption || !selectedDates || selectedDates.length < 2
              ? "bg-or-50"
              : "bg-or-100 hover:!bg-or-110"
          }`}
          variant="contained"
          size="large"
          onClick={sendAutocomplete}
          disabled={
            !selectedOption || !selectedDates || selectedDates.length < 2
          }
          sx={{ mt: 2 }}
        >
          {languageData.SearchBox.tabHotel.buttonSearch}
          <img
            className="h-4 w-4"
            src={`${process.env.NEXT_PUBLIC_URL}icons/search/search-w.svg`}
            alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon search`}
          />
        </button>
      </>
    </div>
  );
}
