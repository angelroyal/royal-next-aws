"use client";
import React, { useEffect, useState } from "react";
import { AutoCompleteTrans } from "./AutoCompleteTrans";
import { SearchDestinationA } from "./SearchDestinationA";
import { ButtonSearch } from "./ButtonSearch";
import { SearchDestinationB } from "./SearchDestinationB";

// RFC
export default function SearchTransport() {
  const [selectedAutoComplete, setSelectedAutoComplete] = useState(null);
  const [selectDestinationA, setSelectDestinationA] = useState(null);
  const [selectDestinationB, setSelectDestinationB] = useState(null);

  const [destinationALocal, setDestinationALocal] = useState(null);
  const [destinationBLocal, setDestinationBLocal] = useState(null);
  const [searchTransport, setSearchTransport] = useState(
    JSON.parse(localStorage.getItem("searchTransport")) || null
  );

  useEffect(() => {
    if (searchTransport) {
      setSelectedAutoComplete(searchTransport.autoComplete);
      setDestinationALocal(searchTransport.destinationA);
      setDestinationBLocal(searchTransport.destinationB);
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row shadow-3xl items-center bg-white gap-2.5 rounded-lg p-6 max-lg:w-[393px]">
      <AutoCompleteTrans
        selectedAutoComplete={selectedAutoComplete}
        setSelectedAutoComplete={setSelectedAutoComplete}
        setSelectDestinationA={setSelectDestinationA}
        setSelectDestinationB={setSelectDestinationB}
      />

      <SearchDestinationA
        selectedAutoComplete={selectedAutoComplete}
        setSelectDestinationA={setSelectDestinationA}
        selectDestinationA={selectDestinationA}
        destinationALocal={destinationALocal}
        setSelectDestinationB={setSelectDestinationB}
      />

      <SearchDestinationB
        selectDestinationA={selectDestinationA}
        selectDestinationB={selectDestinationB}
        setSelectDestinationB={setSelectDestinationB}
        destinationBLocal={destinationBLocal}
      />

      <ButtonSearch
        selectedAutoComplete={selectedAutoComplete}
        selectDestinationA={selectDestinationA}
        selectDestinationB={selectDestinationB}
      />
    </div>
  );
}
