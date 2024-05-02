"use client";
import React, { useEffect, useState } from "react";
import { AutoCompleteTrans } from "./AutoCompleteTrans";
import { SearchDestinationA } from "./SearchDestinationA";
import { ButtonSearch } from "./ButtonSearch";
import { SearchDestinationB } from "./SearchDestinationB";

const TravelTypes = [
  { value: "simple", label: "Sencillo" },
  { value: "round", label: "Redondo" },
];

export default function SearchTransport({ isListing = false }) {


  const [selectedAutoComplete, setSelectedAutoComplete] = useState(null);
  const [selectDestinationA, setSelectDestinationA] = useState(null);
  const [selectDestinationB, setSelectDestinationB] = useState(null);
  const [travelType, setTravelType] = useState("simple");

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
      setTravelType(searchTransport.type);
    }
  }, []);

  useEffect(() => {
    const getSearchTransport = JSON.parse(
      localStorage.getItem("searchTransport")
    );
    if (getSearchTransport) {
      getSearchTransport.type = travelType;
      localStorage.setItem(
        "searchTransport",
        JSON.stringify(getSearchTransport)
      );
    }
  }, [travelType]);

  return (
    <div
      className={`flex flex-col p-6 shadow-3xl bg-white gap-y-[12.5px] rounded-lg ${
        isListing ? "w-full" : "max-lg:w-[391px]"
      }`}
    >
      {/* SELECT TRAVEL TYPE */}
      <div className={`flex w-full gap-4`}>
        {TravelTypes.map((travel, index) => (
          <button
            key={index}
            onClick={() => setTravelType(travel.value)}
            className="border-none flex gap-x-2 items-center"
          >
            <button
              className={`cursor-pointer w-[16px] h-[16px] rounded-full border relative ${
                travelType === travel.value
                  ? "!border-bl-100"
                  : "!border-gry-50"
              } ${
                travelType === travel.value &&
                "before:content-[' '] before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:bg-bl-100 before:inset-x-0	before:inset-y-0	before:mx-auto before:my-auto"
              }`}
            />
            <h3 className="text-fs-12 m-m text-black m-0">{travel.label}</h3>
          </button>
        ))}
      </div>

      <div
        className={`flex items-center gap-2.5 ${
          isListing ? "w-ful flex-col" : "flex-col lg:flex-row"
        }`}
      >
        <AutoCompleteTrans
          isListing={isListing}
          selectedAutoComplete={selectedAutoComplete}
          setSelectedAutoComplete={setSelectedAutoComplete}
          setSelectDestinationA={setSelectDestinationA}
          setSelectDestinationB={setSelectDestinationB}
        />

        <SearchDestinationA
          isListing={isListing}
          selectedAutoComplete={selectedAutoComplete}
          setSelectDestinationA={setSelectDestinationA}
          selectDestinationA={selectDestinationA}
          destinationALocal={destinationALocal}
          setSelectDestinationB={setSelectDestinationB}
        />

        <SearchDestinationB
          isListing={isListing}
          selectDestinationA={selectDestinationA}
          selectDestinationB={selectDestinationB}
          setSelectDestinationB={setSelectDestinationB}
          destinationBLocal={destinationBLocal}
        />

        <ButtonSearch
          isListing={isListing}
          selectedAutoComplete={selectedAutoComplete}
          selectDestinationA={selectDestinationA}
          selectDestinationB={selectDestinationB}
          travelType={travelType}
        />
      </div>
    </div>
  );
}
