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
    if (event.target.value.length > 2) {
      setQuery(event.target.value);
    }else{
      // console.log("entra en else");
      setSelectedTransportation(null);
      setQuery("");
    }
  };

  useEffect(() => {
    const autocompleteResult = async (query) => {
      if (query !== "") {
        let response = await autoCompleteSearch(query, language);
        // console.log(response);
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
    >
      <div className="relative">
        {/* INPUT STYLE */}
        <Combobox.Input
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

        {resultAutocomplete && (
          <Combobox.Options className="absolute z-[1] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {resultAutocomplete.length > 0 &&
              resultAutocomplete.map((transport, index) => (
                <Combobox.Option
                  key={index}
                  value={transport}
                  className="text-black m-s-b text-fs-12 cursor-pointer"
                >
                  <p className="my-3.5">
                    {getDestination(query, transport.label)}
                  </p>
                </Combobox.Option>
              ))}

            {resultAutocomplete.length === 0 &&
              languageData.SearchBox.tabHotel.textResults}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
