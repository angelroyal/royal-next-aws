"use client";

import React, { createContext, useState } from "react";
import { postRoomsToAPI } from "../Api/requestHotel";

const RoomsHotelContext = createContext();

export const RoomsHotelProvider = ({ children }) => {
  const [roomsData, setRoomsData] = useState(null);
  const [roomsSelected, setRoomsSelected] = useState(null);

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
        roomsSelected,
        setRoomsSelected,
        handleFetchPostRooms,
        roomsData,
        setRoomsData,
      }}
    >
      {children}
    </RoomsHotelContext.Provider>
  );
};

export default RoomsHotelContext;
