"use client";
import React, { useEffect, useState } from "react";
import { AutoCompleteTrans } from "./AutoCompleteTrans";
import { SearchDestinationA } from "./SearchDestinationA";
import { ButtonSearch } from "./ButtonSearch";
import { SearchDestinationB } from "./SearchDestinationB";

// RFC
export default function SearchTransport() {
  const [selectedTransportation, setSelectedTransportation] = useState(null);
  const [selectDestination, setSelectDestination] = useState(null);
  const [selectRelated, setSelectRelated] = useState(null);
  const [searchTransport, setSearchTransport] = useState(
    JSON.parse(localStorage.getItem("searchTransport")) || null
  );

  useEffect(() => {
    if (searchTransport) {
      setSelectedTransportation(searchTransport.autoComplete);
      setSelectDestination(searchTransport.destinationA);
      setSelectRelated(searchTransport.destinationB);
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row shadow-3xl items-center bg-white gap-2.5 rounded-lg p-6 max-lg:w-[393px]">
      <AutoCompleteTrans
        selectedTransportation={selectedTransportation}
        setSelectedTransportation={setSelectedTransportation}
      />

      <SearchDestinationA
        selectedTransportation={selectedTransportation}
        setSelectDestination={setSelectDestination}
        selectDestination={selectDestination}
      />

      <SearchDestinationB
        selectDestination={selectDestination}
        selectRelated={selectRelated}
        setSelectRelated={setSelectRelated}
      />

      <ButtonSearch
        selectedTransportation={selectedTransportation}
        selectDestination={selectDestination}
        selectRelated={selectRelated}
      />
    </div>
  );
}
