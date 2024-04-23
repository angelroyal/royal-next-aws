"use client";

import React, { createContext, useState } from "react";

const ListingTransportContext = createContext();

export const ListingTransportProvider = ({ children }) => {
  const [dataTransport, setDataTransport] = useState(null);

  return (
    <ListingTransportContext.Provider
      value={{
        dataTransport,
        setDataTransport,
      }}
    >
      {children}
    </ListingTransportContext.Provider>
  );
};

export default ListingTransportContext;
