import React, { useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import RoomsHotelContext from "../../context/RoomsHotelContext";

export default function AddPreCartHotel(props) {
  const { languageData } = useContext(LanguageContext);
  const { room } = props;
  const {
    selectedRooms,
    setSelectedRooms,
    setRoomSelected,
    setOpenAlert,
  } = useContext(RoomsHotelContext);

  const handleAddDetailHotelMaxPrice = (room) => {
    console.log(room);

    const persons = parseInt(room.adultChildren.split(".")[0]);
    const data = {
      code: room.code,
      idRoom: room.idRoom,
      name: room.name,
      eatingPlan: room.eatingPlan,
      persons: room.adultChildren,
      adults: persons,
      children: room.childrenAges,
      price: room.price,
      netPrice: room.netPrice,
      rateKey: room.rateKey,
      facilities: (room.facilities && room.facilities[0]) || null,
      rateIndex: room.rateIndex,
      boardCode: room.boardCode,
      hash: room.hash,
      image: room.image,
      cancellationPolicies: {
        cancellationCode: room.cancellationCode,
        policy: {
          from: room.cancellationPolicies.from,
          percentage: room.cancellationPolicies.percentage,
        },
      },
    };

    if (room?.taxesNotIncluded) {
      setOpenAlert(true);
      setRoomSelected(data);
    } else {
      handleRooms(data);
    }
  };

  const handleRooms = (newRoom) => {
    setSelectedRooms((rooms) => [...rooms, newRoom]);
  };

  return (
    <>
      <button
        className=" cursor-pointer border-0 rounded-full bg-bl-100 text-white text-fs-12 m-s-b py-3.5 px-4 hover:bg-bl-110"
        onClick={() => handleAddDetailHotelMaxPrice(room)}
        disabled={selectedRooms.some(
          (selectedRoom) => selectedRoom.idRoom === room.idRoom
        )}
      >
        {languageData.containerModalHotel.buttonModal}
      </button>
    </>
  );
}
