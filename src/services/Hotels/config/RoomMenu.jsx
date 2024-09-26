import Image from "next/image";
import { useContext, useState, useEffect, useRef } from "react";

import { Menu, Transition } from "@headlessui/react";
import LanguageContext from "../../../language/LanguageContext";

export default function RoomMenu({ showRoom, showDropdown, onClose }) {
  const [rooms, setRooms] = useState([{ adults: 2, children: [] }]);
  const [ageError, setAgeError] = useState(false);
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    const roomData = JSON.parse(localStorage.getItem("roomData"));
    if (roomData) {
      setRooms(roomData);
    }
  }, []);

  const saveRoomData = (roomData) => {
    localStorage.setItem("roomData", JSON.stringify(roomData));
    setRooms(roomData);
  };

  const handleNumAdultChange = (value, index) => {
    const newRooms = [...rooms];
    newRooms[index].adults = value;
    saveRoomData(newRooms);
  };

  const handleAgeChange = (value, childIndex, roomIndex) => {
    if (value === "0" || (value >= 1 && value <= 12)) {
      setAgeError(false);
      const newRooms = [...rooms];
      newRooms[roomIndex].children[childIndex] = parseInt(value);
      saveRoomData(newRooms);
    } else if (value === "") {
      setAgeError(true);
      const newRooms = [...rooms];
      newRooms[roomIndex].children[childIndex] = "";
      saveRoomData(newRooms);
    } else {
      setAgeError(false);
    }
  };

  const addRoom = () => {
    if (rooms.length < 10) {
      const newRooms = [...rooms, { adults: 1, children: [] }];
      saveRoomData(newRooms);

      setTimeout(() => {
        const roomsContainer = document.getElementById("roomsContainer");
        roomsContainer.scrollTop = roomsContainer.scrollHeight;
      }, 100);
    }
  };

  const removeRoom = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms.splice(index, 1);
    
    saveRoomData(updatedRooms);
  };
  
  
  const addChild = (roomIndex) => {
    const newRooms = [...rooms];
    if (newRooms[roomIndex].children.length < 4) {
      newRooms[roomIndex].children.push(1);
      saveRoomData(newRooms);
    }
  };

  const removeChild = (roomIndex) => {
    const newRooms = [...rooms];
    if (newRooms[roomIndex].children.length > 0) {
      newRooms[roomIndex].children.pop();
      saveRoomData(newRooms);
    }
  };

  const printRoomData = () => {
    showRoom(rooms);
    const totalAdults = rooms.reduce((acc, room) => acc + room.adults, 0);
    const totalChildren = rooms.reduce(
      (acc, room) => acc + room.children.length,
      0
    );
    const sumPeople = totalAdults + totalChildren;
  
    localStorage.setItem("totalPeople", JSON.stringify(sumPeople));
    localStorage.setItem("roomData", JSON.stringify(rooms));
  
    onClose(false);
  };
  

  const endOfRoomsRef = useRef(null);

  useEffect(() => {
    setAgeError(false);
    rooms.forEach((room) => {
      if (room.children.some((age) => age === "")) {
        setAgeError(true);
      }
    });
  }, [rooms]);

  return (
    <Transition
      show={showDropdown}
      as="div"
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-[3] mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item id="roomsContainer">
          <div className="overflow-y-scroll max-h-80 flex flex-col justify-between bg-white border-2 rounded-lg">
            <div className="pt-4 pl-3 pr-3">
              {rooms.map((room, index) => (
                <div
                  key={index}
                  className="pb-2 mb-3 flex flex-col border-b border-gray-50"
                >
                  <div className="flex justify-between mb-4">
                    <div className="text-gray-500">
                      {languageData.SearchBox.tabHotel.roomBox.roomNum}{" "}
                      {index + 1}
                    </div>
                    {index >= 1 && (
                      <p
                        onClick={(event) => {
                          event.stopPropagation(); // Evitar que el evento cierre el menú
                          removeRoom(index);
                        }}
                        className="text-red-100 text-sm cursor-pointer"
                      >
                        {languageData.SearchBox.tabHotel.roomBox.buttonDelete}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between items-center mb-2">
                    <div className="text-gray-700">
                      {languageData.SearchBox.tabHotel.roomBox.adult}
                    </div>
                    <div className="flex">
                      <button
                        disabled={room.adults === 1}
                        onClick={() =>
                          handleNumAdultChange(room.adults - 1, index)
                        }
                      >
                        <Image
                          src={
                            room.adults === 1
                              ? `${process.env.NEXT_PUBLIC_URL}/icons/remove/remove-70.svg`
                              : `${process.env.NEXT_PUBLIC_URL}/icons/remove/remove-bl.svg`
                          }
                          alt="remove icon"
                          width={14}
                          height={14}
                        />
                      </button>
                      <p className="mx-4">{room.adults}</p>
                      <button
                        disabled={room.adults === 8}
                        onClick={() =>
                          handleNumAdultChange(room.adults + 1, index)
                        }
                      >
                        <Image
                          src={
                            room.adults === 8
                              ? `${process.env.NEXT_PUBLIC_URL}/icons/add/add-70.svg`
                              : `${process.env.NEXT_PUBLIC_URL}/icons/add/add-bl.svg`
                          }
                          alt="add icon"
                          width={14}
                          height={14}
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-gray-700">
                      {languageData.SearchBox.tabHotel.roomBox.children}
                    </div>
                    <div className="flex">
                      <button
                        disabled={room.children.length === 0}
                        onClick={() => removeChild(index)}
                      >
                        <Image
                          src={
                            room.children.length === 0
                              ? `${process.env.NEXT_PUBLIC_URL}/icons/remove/remove-70.svg`
                              : `${process.env.NEXT_PUBLIC_URL}/icons/remove/remove-bl.svg`
                          }
                          alt="remove icon"
                          width={14}
                          height={14}
                        />
                      </button>
                      <p className="mx-4">{room.children.length}</p>
                      <button
                        disabled={room.children.length === 4}
                        onClick={() => addChild(index)}
                      >
                        <Image
                          src={
                            room.children.length === 4
                              ? `${process.env.NEXT_PUBLIC_URL}/icons/add/add-70.svg`
                              : `${process.env.NEXT_PUBLIC_URL}/icons/add/add-bl.svg`
                          }
                          alt="add icon"
                          width={14}
                          height={14}
                        />
                      </button>
                    </div>
                  </div>

                  {room.children.map((age, childIndex) => (
                    <div
                      key={childIndex}
                      className="flex justify-between items-center mt-4"
                    >
                      <div className="text-gray-400">
                        {languageData.SearchBox.tabHotel.roomBox.ageChildren}{" "}
                        {childIndex + 1}
                      </div>
                      <input
                        type="number"
                        className="w-14 border border-gray-100 rounded-md text-center"
                        value={age}
                        onChange={(event) =>
                          handleAgeChange(event.target.value, childIndex, index)
                        }
                        required
                      />
                      {ageError && (
                        <p className="text-red-600 text-sm absolute bottom-[-17px] right-0">
                          0-12 {languageData.itinerary.tourItinerary.years}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
              <div ref={endOfRoomsRef}></div>
            </div>

            <div className="sticky bottom-0 left-0 bg-white p-2">
              <button
                disabled={rooms.length === 10}
                onClick={addRoom}
                className="text-blue-500"
              >
                {languageData.SearchBox.tabHotel.roomBox.addRoom}
              </button>

              <button
                className={`rounded-full py-1.5 px-4 text-white ${
                  ageError ? "bg-orange-500" : "bg-orange-600"
                }`}
                onClick={printRoomData}
                disabled={ageError}
              >
                {languageData.SearchBox.tabHotel.roomBox.buttonApply}
              </button>
            </div>
          </div>
        </Menu.Item>
      </Menu.Items>
    </Transition>
  );
}
