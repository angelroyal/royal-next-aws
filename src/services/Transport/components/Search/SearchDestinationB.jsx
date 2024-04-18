"use client";
import LanguageContext from "@/language/LanguageContext";
import { Combobox } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import { getTransportation } from "../../Api/requestTransport";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

export function SearchDestinationB({
  selectedTransportation,
  setSelectDestination,
  selectDestination,
}) {
  console.log(selectedTransportation);
  const { language, languageData } = useContext(LanguageContext);

  const [destinations, setDestinations] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const selectTransport = async (destinationId, language) => {
      const response = await getTransportation(destinationId, language);
      setDestinations(response);
    };

    if (selectedTransportation) {
      selectTransport(selectedTransportation.id, language);
    }else{
      setDestinations(null);
      setSelectDestination(null)
    }
  }, [selectedTransportation]);

  // console.log(destinations);

  const handleLetter = (event) => {
    setQuery(event.target.value);
  };

  //Devuelve los Palabras en color Naranja en el Search
  const getDestination = (inputValue, label) => {
    const wordEscapade = inputValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(wordEscapade, "gi");
    label = label.replace(",", " ");
    const parts = label.split(regex);
    const items = label.match(regex);
    if (!items) {
      return parts;
    }
    return parts.map((parts, index) =>
      index === parts.length - 1 ? (
        parts
      ) : (
        <span key={index}>
          {parts}
          <span style={{ color: "#EB741E" }}>{items[index]}</span>
        </span>
      )
    );
  };

  return destinations && destinations.zones.length > 0 ? (
    <Combobox
      as="div"
      value={selectDestination}
      onChange={setSelectDestination}
    >
      <div className="relative">
        <Combobox.Input
          // disabled={true}
          className={`placeholder:m-m placeholder:text-gry-70 w-full h-[56px] rounded border border-gry-100 bg-white py-2.5 px-4 text-gray-900 shadow-sm focus:outline-none text-fs-12 m-s-b`}
          onChange={(event) => handleLetter(event)}
          displayValue={(person) => person?.label}
          placeholder={languageData.SearchBox.tabHotel.textDestination}
        />

        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        <Combobox.Options className="absolute z-[1] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {destinations.zones.map((destination, index) => (
            <Combobox.Option
              key={index}
              value={destination}
              className="text-black m-s-b text-fs-12 cursor-pointer"
            >
              <p className="my-3.5">
                {getDestination(query, destination.label)}
              </p>
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </div>
    </Combobox>
  ) : (
    <input
      type="text"
      disabled
      className="disabled:cursor-not-allowed placeholder:m-m placeholder:text-gry-70 w-full h-[56px] rounded border border-gry-100 bg-white py-2.5 px-4 text-gray-900 shadow-sm focus:outline-none text-fs-12 m-s-b"
      placeholder={languageData.SearchBox.tabHotel.textDestination}
    />
  );
}
