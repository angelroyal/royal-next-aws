"use client";
import { useState, useEffect, useContext, useRef } from "react";

import RoomMenu from "./RoomMenu";
import { Menu } from "@headlessui/react";
import LanguageContext from "../../../language/LanguageContext";

function Room({ listing = false, OnApply, roomData }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [totalRooms, setTotalRooms] = useState(1);
  const [totalPeople, setTotalPeople] = useState({ adults: 2, children: 0 });

  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    if (roomData && roomData.length) {
      setTotalRooms(roomData.length);
      const totalAdults = roomData.reduce((sum, room) => sum + room.adults, 0);
      const totalChildren = roomData.reduce(
        (sum, room) => sum + room.children.length,
        0
      );
      setTotalPeople({ adults: totalAdults, children: totalChildren });
    }
  }, [roomData]);

  const handleRoomData = (roomData) => {
    OnApply(roomData);
  };

  const roomPlural = (room) => {
    return room === 1 ? "room" : "rooms";
  };

  const adultPlural = (adult) => {
    return adult === 1 ? "textAdult" : "textAdults";
  };

  const childrenPlural = (children) => {
    return children === 1 ? "textChild" : "textChildren";
  };

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Menu
      as="div"
      className={`${listing ? "w-full" : "w-full lg:w-[296px]"} relative inline-block`}
      ref={ref}
    >
      <div>
        <Menu.Button
          onClick={() => setShowDropdown(true)}
          className={`${listing ? "w-full" : "w-full lg:w-[296px]"} border-2 border-gray-200 rounded py-2.5 px-4 relative h-[56px] flex gap-x-2 items-center`}
        >
          <span className="flex items-center gap-2 border-r-2 border-gry-70 pr-3.5">
            <img
              className="h-4 w-4 invert"
              src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon room`}
            />
            <div className="flex flex-col items-start">
              <span className="text-fs-10 m-s-b text-gry-70">
                {languageData.SearchBox.tabHotel.rooms}
              </span>

              <span className="m-s-b text-fs-12 text-gry-100 text-nowrap">
                {totalRooms} {languageData.modalHotel[roomPlural(totalRooms)]}
              </span>
            </div>
          </span>
          <span className="flex items-center gap-2 pl-3.5">
            <img
              className="h-3.5 w-3.5 invert"
              src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon adult`}
            />
            <div className="flex flex-col items-start">
              <span className="text-fs-10 m-s-b text-gry-70">
                {languageData.SearchBox.tabTour.people}
              </span>

              <span className="m-s-b text-fs-12 text-gry-100 text-nowrap">
                {`${totalPeople.adults} ${
                  languageData.itinerary.tourItinerary[
                    adultPlural(totalPeople.adults)
                  ]
                }`}{" "}
                {`${totalPeople.children} ${
                  languageData.itinerary.tourItinerary[
                    childrenPlural(totalPeople.children)
                  ]
                }`}
              </span>
            </div>
          </span>
        </Menu.Button>
      </div>

      {showDropdown && (
        <RoomMenu
          showRoom={handleRoomData}
          showDropdown={showDropdown}
          showDrop={setShowDropdown}
          people={setTotalPeople}
          roomsTotal={setTotalRooms}
          onClose={() => setShowDropdown(false)}
        />
      )}
    </Menu>
  );
}

export default Room;
