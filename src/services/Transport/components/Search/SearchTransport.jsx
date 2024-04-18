"use client";
import React, { useState } from "react";
import { SearchDestinationA } from "./SearchDestinationA";
import { SearchDestinationB } from "./SearchDestinationB";

// RFC
export default function SearchTransport() {
  const [selectedTransportation, setSelectedTransportation] = useState(null);
  const [selectDestination, setSelectDestination] = useState(null);
  return (
    <div className="flex flex-col lg:flex-row shadow-3xl items-center bg-white gap-2.5 rounded-lg p-6">
      <SearchDestinationA
        selectedTransportation={selectedTransportation}
        setSelectedTransportation={setSelectedTransportation}
      />
      <SearchDestinationB selectedTransportation={selectedTransportation} setSelectDestination={setSelectDestination} selectDestination={selectDestination}/>
    </div>
  );
}
