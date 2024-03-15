import { useState, useEffect, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";

// import RoomMenu from "../hooks/RoomMenu";
import RoomMenu from "./RoomMenu";
import LanguageContext from "../../../language/LanguageContext";

// import { ReactComponent as BedSharpIcon } from "../assets/icons/utils/searchBox/room-autocomplete.svg";
// import { ReactComponent as Person2OutlinedIcon } from "../assets/icons/utils/searchBox/person-autocomplete.svg";

function Room({ OnApply }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [totalRooms, setTotalRooms] = useState(1);
  const [totalPeople, setTotalPeople] = useState({ adults: 2, children: 0 });

  const { languageData } = useContext(LanguageContext);
  useEffect(() => {
    const roomData = JSON.parse(localStorage.getItem("roomData"));

    if (roomData) {
      setTotalRooms(roomData.length);
    }
  }, []);

  console.log(totalPeople);

  const handleRoomData = (roomData) => {
    OnApply(roomData);
  };

  const roomPlural = (room) => {
    if (room == 1) {
      return "room";
    } else {
      return "rooms";
    }
  };

  const adultPlural = (adult) => {
    if (adult == 1) {
      return "textAdult";
    } else {
      return "textAdults";
    }
  };

  const childrenPlural = (children) => {
    if (children == 1) {
      return "textChild";
    } else {
      return "textChildren";
    }
  };

  return (
    <>
      <Dropdown style={{minWidth:"293px"}} show={showDropdown} onClose={() => setShowDropdown(false)}>
        <Dropdown.Toggle
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex border-0 bg-transparent p-0"
          style={{display:"flex"}}
        >
          <span className="flex items-center gap-2 border-r-2 border-gry-70 pr-3.5">
            <img
              className="h-4 w-4 invert"
              src="https://sandboxmexico.com/assets/icons/room/room-b.svg"
              alt="room icon Royal Vacations"
            />
            <div className="flex flex-col items-start">
              <span className="text-fs-10 m-s-b text-gry-70">
                {languageData.SearchBox.tabHotel.rooms}
              </span>

              <span className="m-s-b text-fs-12 text-gry-100">
                {totalRooms} {languageData.modalHotel[roomPlural(totalRooms)]}
              </span>
            </div>
          </span>{" "}
          <span className="flex items-center gap-2 pl-3.5">
            {/* <Person2OutlinedIcon className="icon-person-search" /> */}
            <img
              className="h-3.5 w-3.5 invert"
              src="https://sandboxmexico.com/assets/icons/adult/adult-b.svg"
              alt="person icon Royal Vacations"
            />
            <div className="flex flex-col items-start">
              <span className="text-fs-10 m-s-b text-gry-70">
                {languageData.SearchBox.tabTour.people}
              </span>

              <span className="m-s-b text-fs-12 text-gry-100">
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
        </Dropdown.Toggle>

        {showDropdown === true && (
          <Dropdown.Menu className="border-0 w-11/12 z-30 p-0">
            {/* <div className="equilateral-triangle-bottom"></div> */}
            <RoomMenu
              showRoom={handleRoomData}
              showDrop={setShowDropdown}
              people={setTotalPeople}
              roomsTotal={setTotalRooms}
            />
          </Dropdown.Menu>
        )}
      </Dropdown>
    </>
  );
}

export default Room;
