import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import RoomMenu from "../hooks/RoomMenu";

import { ReactComponent as BedSharpIcon } from "../assets/icons/utils/searchBox/room-autocomplete.svg";
import { ReactComponent as Person2OutlinedIcon } from "../assets/icons/utils/searchBox/person-autocomplete.svg";

function Room({ OnApply }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [totalRooms, setTotalRooms] = useState(1);
  const [totalPeople, setTotalPeople] = useState(
    localStorage.getItem("totalPeople") || 2
  );

  useEffect(() => {
    const roomData = JSON.parse(localStorage.getItem("roomData"));

    if (roomData) {
      setTotalRooms(roomData.length);
    }
  }, []);

  const handleRoomData = (roomData) => {
    OnApply(roomData);
  };

  return (
    <>
      <Dropdown show={showDropdown} onClose={() => setShowDropdown(false)}>
        <Dropdown.Toggle
          onClick={() => setShowDropdown(!showDropdown)}
          className="dropdown-room"
        >
          <span style={{ padding: "0 10px" }}>
            <BedSharpIcon className="icon-room-search" />
            <span className="room-capacity">{totalRooms}</span>
          </span>{" "}
          <span style={{ padding: "0 10px" }}>|</span>
          <span className="person-search" style={{ padding: "0 10px" }}>
            <Person2OutlinedIcon className="icon-person-search" />
            <span className="room-capacity">{totalPeople}</span>
          </span>
        </Dropdown.Toggle>
        
        <Dropdown.Menu className="dropdown-container">
          <div className="equilateral-triangle-bottom"></div>
          <RoomMenu
            showRoom={handleRoomData}
            showDrop={setShowDropdown}
            people={setTotalPeople}
            roomsTotal={setTotalRooms}
          />
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Room;
