import moment from "moment";
import React, { useState, useEffect, useContext } from "react";

import Calendar from "../../hooks/Calendar";
import Room from "@/services/Hotels/config/RoomBox";
import LanguageContext from "../../language/LanguageContext";
import SearchHotel from "@/services/Hotels/Search/SearchHotel";
import { NavigationConfig } from "@/config/Navigation/NavigationConfig";
import { ListingHotelMobile } from "@/services/Hotels/components/Listing/ListingHotelMobile";

export default function MobilSearchHotel() {
  const { languageData, language } = useContext(LanguageContext);
  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);
  const [selectedDates, setSelectedDates] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const storedSelectedDates = localStorage.getItem("selectedDates");
    const storedRoomData = localStorage.getItem("roomData");

    if (storedSelectedDates) {
      setSelectedDates(JSON.parse(storedSelectedDates));
    }

    if (storedRoomData) {
      setRoomData(JSON.parse(storedRoomData));
    }
  }, []);

  const handleDateChange = (selectedDates) => {
    setSelectedDates(selectedDates);
    localStorage.setItem("selectedDates", JSON.stringify(selectedDates));
  };

  const sendAutocomplete = () => {
    if (selectedDates && selectedDates.length >= 2) {
      const checkIn = moment(selectedDates[0]).format("YYYY-MM-DD");
      const checkOut = moment(selectedDates[1]).format("YYYY-MM-DD");

      const encodedRoomData = encodeURIComponent(JSON.stringify(roomData));
      const requestBody = {
        codeNameHotel: selectedOption.codeName,
        destination: selectedOption.label,
        codeName: selectedOption.codeName,
        code: selectedOption.key,
        type: selectedOption.type,
        "check-in": checkIn,
        "check-out": checkOut,
        occupancies: encodedRoomData,
      };

      const query = new URLSearchParams(requestBody).toString();

      if (selectedOption.type === "hotel") {
        window.open(
          `/${language}/mx/${selectedOption.destination}-${selectedOption.country}/${selectedOption.destination}-hotels/${selectedOption.codeName}?${query}`,
          "_blank"
        );
      } else {
        window.location.href = `/${language}/mx/${selectedOption.codeName}-${selectedOption.country}/hotels?${query}`;
      }
    }
  };

  const [openFilter, setOpenFilter] = useState(false);
  const routerActual = NavigationConfig();

  return (
    <div className="!p-5 shadow-3xl">
      <p className="m-s-b text-[1.2rem] text-black p-2">
        {languageData.searchMobilHotel.titleMultiDestination}
      </p>

      <div className="flex flex-col gap-y-3">
        <SearchHotel listing={true} onSelectSearch={setSelectedOption} />
        <Calendar listing={true} onDateChange={handleDateChange} />
        <Room listing={true} OnApply={setRoomData} />

        <div className="flex justify-between gap-x-4">
          {routerActual === "hotel" || routerActual === "hotels" ? (
            <button
              className="py-[8.5px] px-8 rounded-[50px] border-2 border-bl-100 text-center block xl:hidden text-bl-100 m-b text-fs-12"
              onClick={() => setOpenFilter(true)}
            >
              {languageData.ListingPhrases.filters}
            </button>
          ) : null}

          <button
            className={`${
              routerActual === "hotel" || routerActual === "hotels"
                ? "w-[60%] lg:w-full"
                : "w-full"
            } rounded-[50px] justify-center flex gap-x-2.5 items-center justify-content-center m-b text-fs-12 text-white py-[8.5px] px-8 lg:px-4 ${
              !selectedOption || !selectedDates || selectedDates.length < 2
                ? "bg-or-50"
                : "bg-or-100 hover:!bg-or-110"
            }`}
            variant="contained"
            color="primary"
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
        </div>
      </div>

      <ListingHotelMobile open={openFilter} closeFilter={setOpenFilter} />
    </div>
  );
}
