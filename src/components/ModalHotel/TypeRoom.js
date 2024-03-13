import React, { useContext, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

import {
  MessageShowRooms,
  TitlesRoom,
} from "./elementsTypeRoom/StaticElementsRooms";
import {
  TitleRoomFacility,
  MinPriceRoom,
  MaxPriceRoom,
  IndividualPriceRoom,
} from "./elementsTypeRoom/DynamicElementsRooms";
import LanguageContext from "../../language/LanguageContext";

export default function TypeRoom(props) {
  const { hotelModal, isRoomSelected } = props;
  const [itemsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const {languageData} = useContext(LanguageContext)

  const [selectRooms, setSelectRooms] = useState(true);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    if (isRoomSelected === true) {
      setSelectRooms(false);
    } else {
      setSelectRooms(true);
    }
  }, [isRoomSelected]);

  const lastIndex = page * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentRooms = hotelModal.rooms.slice(firstIndex, lastIndex);

  return (
    <>
      {currentRooms.length === 0 ? (
        <MessageShowRooms />
      ) : (
        <div className="position-relative">
          {selectRooms && (
            <div className="tooltip-select-f-r">
              {languageData.modalHotel.selectRoom}
            </div>
          )}
          {currentRooms.map((room, index) => (
            // CONTAINER TYPES ROOMS
            <div className="position-relative" key={`room_${index}`}>
              {/* TITLES TYPE-ROOM, CAPACITY, PRICE */}
              <TitlesRoom />

              <div key={index} className="room-container-hotel">
                <TitleRoomFacility
                  facilities={room.facilities}
                  nameRoom={room.name}
                />

                <div className="room-second-container">
                  {room.rates.min && room.rates.max ? (
                    <>
                      {/* DESING TWO ROOMS */}
                      {/* First choice of the room */}
                      <MinPriceRoom room={room} />

                      {/* Second choice of the room */}
                      {room.rates.max && <MaxPriceRoom room={room} />}
                    </>
                  ) : (
                    <IndividualPriceRoom room={room} />
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="pagination pagination-cards-hotel">
            <Pagination
              //  count={Math.ceil(hotelModal.rooms.length / itemsPerPage)}
              count={
                Math.ceil(hotelModal.rooms.length / itemsPerPage) <= 6
                  ? Math.ceil(hotelModal.rooms.length / itemsPerPage)
                  : 6
              }
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              color="primary"
            />
          </div>
        </div>
      )}
    </>
  );
}
