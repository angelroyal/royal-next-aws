"use client";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import { autoCompleteSearch } from "../../Api/requestTransport";
import LanguageContext from "@/language/LanguageContext";

export function SearchDestinationA({
  selectedTransportation,
  setSelectedTransportation,
}) {
  const { language, languageData } = useContext(LanguageContext);
  const [query, setQuery] = useState("");

  const [resultAutocomplete, setResultAutocomplete] = useState(null);

  // console.log(selectedTransportation);

  const handleLetter = (event) => {
    // console.log(event.target.value);
    if (event.target.value.length >= 3) {
      setQuery(event.target.value);
    } else {
      setResultAutocomplete(null);
      setSelectedTransportation(null);
      setQuery("");
    }
  };

  useEffect(() => {
    const autocompleteResult = async (query) => {
      if (query !== "") {
        let response = await autoCompleteSearch(query, language);
        console.log(response);
        setResultAutocomplete(response);
      }
    };
    autocompleteResult(query);
  }, [query]);

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
  return (
    <Combobox
      as="div"
      value={selectedTransportation}
      onChange={setSelectedTransportation}
      className="max-lg:w-full"
    >
      <div className="relative">
        {/* INPUT STYLE */}
        <Combobox.Button className="focus:outline-none max-lg:w-full">
          <img
            className="absolute left-4 bottom-0 top-0 my-auto W-[16px] h-[20px]"
            width="16px"
            height="20px"
            src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
            alt="location-b"
          />

          <p className="m-0 top-2.5 left-[2.5rem] absolute text-gry-70 m-m text-fs-10">{languageData.SearchBox.tabHotel.autocomplete}</p>
          
          <Combobox.Input
            className={`placeholder:m-m placeholder:text-gry-70 m-b font-extrabold w-full lg:w-[290px] h-[56px] border-2 border-gray-200 rounded bg-white pb-2.5 pt-[22px] pr-4 pl-[2.4rem] shadow-sm focus:outline-none text-fs-12`}
            onChange={(event) => handleLetter(event)}
            displayValue={(person) => person?.label}
            placeholder={languageData.SearchBox.tabHotel.textDestination}
          />
          {/* <div className="relative">
          </div> */}
          {resultAutocomplete && (
            <Combobox.Options className="px-2 absolute z-[1] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {resultAutocomplete.length > 0 &&
                resultAutocomplete.map((transport, index) => (
                  <Combobox.Option
                    key={index}
                    value={transport}
                    className="text-gry-100 m-m text-fs-12 cursor-pointer text-start"
                  >
                    <p className="my-3.5">
                      {getDestination(query, transport.label)}
                    </p>
                  </Combobox.Option>
                ))}

              {resultAutocomplete.length === 0 && (
                <p className="m-0 text-start">
                  {languageData.SearchBox.tabHotel.textResults}
                </p>
              )}
            </Combobox.Options>
          )}
        </Combobox.Button>
      </div>
    </Combobox>
  );
}
