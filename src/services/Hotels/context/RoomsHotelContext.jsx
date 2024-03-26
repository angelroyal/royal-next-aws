"use client";

import React, { createContext, useState } from "react";
import { postRoomsToAPI } from "../Api/requestHotel";

const RoomsHotelContext = createContext();

export const RoomsHotelProvider = ({ children }) => {
  const [roomsData, setRoomsData] = useState(null);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [requestBodyRooms, setRequestBodyRooms] = useState(null);

  const handleFetchPostRooms = async (requestBody) => {
    try {
      const responseData = await postRoomsToAPI(requestBody);
      setRoomsData(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RoomsHotelContext.Provider
      value={{
        selectedRooms,
        setSelectedRooms,
        handleFetchPostRooms,
        roomsData,
        setRoomsData,
        requestBodyRooms,
        setRequestBodyRooms,
      }}
    >
      {children}
    </RoomsHotelContext.Provider>
  );
};

export default RoomsHotelContext;
