import _ from "lodash";
import { useState, useEffect, useMemo, useContext } from "react";
import {
  Grid,
  TextField,
  Autocomplete,
  Typography,
  ListSubheader,
} from "@mui/material";

import { useIsMobile } from "@/config/Mobile/isMobile";
import LanguageContext from "../../../language/LanguageContext";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

import "../../../assets/styles/general/SearchHotel.css";
import { Combobox, Transition } from "@headlessui/react";
const API_ENDPOINT = `v1/destinations/search`;

function SearchHotel(props) {
  const { closeDialog, onSelectSearch, listing = false } = props;
  const isMobile = useIsMobile();
  const { languageData } = useContext(LanguageContext);

  const storedDataSearch =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("dataSearch")
      : null;

  const [dataSearch, setDataSearch] = useState(
    storedDataSearch ? JSON.parse(storedDataSearch) : null
  );

  const [inputAutocomplete, setInputAutocomplete] = useState("");
  const [optionsSearch, setOptions] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const searchLocation = inputAutocomplete.trim();
  const isEmpty = searchLocation === "";
  const AutocompleteFetch = useMemo(
    () =>
      _.debounce(async (inputAutocomplete) => {
        try {
          const response = await axiosWithInterceptor.get(API_ENDPOINT, {
            params: {
              searchTerm: inputAutocomplete,
            },
          });
          // const newOptions = response.data.results.map((item) => {
          //   let category;
          //   if (item.type === "destination") {
          //     category = "Destinos";
          //   } else if (item.type === "hotel") {
          //     category = "Hoteles";
          //   }
          //   return { ...item, category };
          // });
          const groupedResults = response.data.results.reduce((acc, item) => {
            acc[item.type] = acc[item.type] || [];
            acc[item.type].push(item);
            return acc;
          }, {});

          setOptions(groupedResults);
          setIsOpen(Object.keys(groupedResults).length > 0);
        } catch (error) {
          console.error(error);
        }
      }, 400),
    []
  );

  useEffect(() => {
    if (inputAutocomplete.length < 3 || !isOpen) {
      setOptions({});
      setIsOpen(false);
      return;
    }
    if (!dataSearch) {
      AutocompleteFetch(inputAutocomplete);
    }
  }, [inputAutocomplete, isOpen, dataSearch]);

  useEffect(() => {
    localStorage.setItem("dataSearch", JSON.stringify(dataSearch));
    onSelectSearch(dataSearch);
  }, [dataSearch, onSelectSearch]);

  //Devuelve los Palabras en color Naranja en el Search
  const highlightMatch = (text) => {
    const searchTerm =
      typeof inputAutocomplete === "string" ? inputAutocomplete : "";

    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="text-or-100 font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const clickInput = (newValueAutocomplete) => {
    setDataSearch(newValueAutocomplete);
    if (newValueAutocomplete !== null) {
      setTimeout(() => {
        if (isMobile) closeDialog();
      }, 100);
    }
  };

  const handleSelect = (item) => {
    setDataSearch(item);
    setInputAutocomplete(item.label);
    localStorage.setItem("dataSearch", JSON.stringify(item));
    setIsOpen(false);
  };

  const handleChange = (event) => {
    setInputAutocomplete(event.target.value);
    setDataSearch(null);
    setIsOpen(true);
  };

  return (
    <div
      className={`${
        listing == false && "lg:w-[290px]"
      } flex items-center h-[53px] relative w-full`}
    >
      <div className="relative w-full">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
          alt="Location Icon"
          className="w-5 h-5 mr-2 absolute top-[18px] left-[7px]"
        />
        <label
          htmlFor="search-input"
          className="m-b absolute top-[11px] left-[32px] text-fs-10 text-gry-70 "
        >
          {languageData.SearchBox.tabHotel.autocomplete}
        </label>

        <Combobox value={dataSearch} onChange={handleSelect}>
          <Combobox.Input
            className="placeholder:m-m placeholder:text-gry-70 m-b font-extrabold w-full h-[56px] border-2 border-gray-200 rounded bg-white pb-2.5 pt-[22px] pr-4 pl-[32px] shadow-sm focus:outline-none text-fs-12"
            onChange={handleChange}
            displayValue={(item) => (item ? item.label : "")}
            placeholder={!inputAutocomplete ? "Buscar hotel o destino" : ""}
          />

          <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Combobox.Options className="scroll-page-blue p-0 absolute z-[2] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-gray-300 ring-opacity-5 focus:outline-none sm:text-sm">
              {Object.entries(optionsSearch).map(([type, items]) => (
                <div key={type}>
                  <div className="px-3 py-2 text-lg font-semibold text-gray-700">
                    {type === "hotel" ? (
                      <div className="flex items-center">
                        <img
                          src={`${process.env.NEXT_PUBLIC_URL}/icons/hotel/hotel-b.svg`}
                          alt="Hotel Icon"
                          className="w-5 h-5 mr-2"
                        />
                        <span>Hoteles</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <img
                          src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
                          alt="Location Icon"
                          className="w-5 h-5 mr-2"
                        />
                        <span>Destinos</span>
                      </div>
                    )}
                  </div>
                  {items.map((item) => (
                    <Combobox.Option key={item.key} value={item}>
                      {({ active }) => (
                        <div
                          className={`p-2 ${
                            active ? "bg-gry-30" : "text-gray-900"
                          }`}
                          onClick={() => handleSelect(item)}
                        >
                          {highlightMatch(item.label)}
                        </div>
                      )}
                    </Combobox.Option>
                  ))}
                </div>
              ))}
            </Combobox.Options>
          </Transition>
        </Combobox>
      </div>
    </div>
    // <div
    //   className={`${
    //     listing == false && "lg:w-[290px]"
    //   } border-2 border-gray-200 rounded py-2.5 px-4 flex items-center h-[53px] relative w-full`}
    // >
    //   <p className="text-fs-10 m-s-b text-gry-70 m-0 absolute top-[6px] left-[43px]">
    //     {languageData.SearchBox.tabHotel.autocomplete}
    //   </p>
    //   <Autocomplete
    //     // open={true}
    //     className="text-white m-m text-fs-12 scroll-page-blue absolute top-[11px] !w-[90%]"
    //     sx={{ width: 300 }}
    //     getOptionLabel={(option) => option.label}
    //     groupBy={(option) => option.category} // Agrupa por categoríaF
    //     options={optionsSearch}
    //     isOptionEqualToValue={(option, value) => option.key === value.key}
    //     autoComplete
    //     includeInputInList
    //     filterSelectedOptions
    //     value={dataSearch}
    //     noOptionsText={
    //       dataSearch || isEmpty === true
    //         ? ""
    //         : languageData.SearchBox.tabHotel.textResults
    //     }
    //     onChange={(event, newValueAutocomplete) => {
    //       clickInput(newValueAutocomplete);
    //     }}
    //     onInputChange={(event, newInputValue) => {
    //       setInputAutocomplete(newInputValue);
    //     }}
    //     renderInput={(params) => (
    //       <div className="flex gap-x-2 items-center" id="destination-search">
    //         {listing == false && (
    //           <img
    //             src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
    //             className="h-4 w-4 invert"
    //             alt="location icon"
    //           ></img>
    //         )}
    //         <div className="flex flex-col w-full">
    //           <TextField
    //             className="!m-m !text-fs-12 truncate"
    //             {...params}
    //             placeholder={languageData.SearchBox.tabHotel.textDestination}
    //           />
    //         </div>
    //       </div>
    //     )}
    //     renderOption={(props, option) => {
    //       return (
    //         <li key={option.key} {...props} id="list-destination-home-hotel">
    //           <Grid container alignItems="center">
    //             <Grid
    //               item
    //               sx={{ width: "calc(100% - 44px)", wordWrap: "break-word" }}
    //             >
    //               <Typography
    //                 className="option-response"
    //                 variant="body1"
    //                 id="OptionAutocomplete"
    //               >
    //                 {getDestination(inputAutocomplete, option.label)}
    //               </Typography>
    //             </Grid>
    //           </Grid>
    //         </li>
    //       );
    //     }}
    //     renderGroup={(params) => {
    //       return (
    //         <li key={params.group}>
    //           <ListSubheader
    //             style={{
    //               display: "flex",
    //               background: "#EFEFEF",
    //             }}
    //           >
    //             <Typography variant="subtitle1">{params.group}</Typography>
    //           </ListSubheader>
    //           {params.children}
    //         </li>
    //       );
    //     }}
    //   />
    // </div>
  );
}

export default SearchHotel;
