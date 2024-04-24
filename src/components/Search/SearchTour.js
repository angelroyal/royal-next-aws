import _ from "lodash";
import Image from "next/image";
import React, { useState, useEffect, useMemo, useContext } from "react";
import { Grid, TextField, Autocomplete, Typography } from "@mui/material";

import { useIsMobile } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

import "../../assets/styles/general/SearchHotel.css";
import { Combobox } from "@headlessui/react";

const API_ENDPOINT = `v1/activity`;
function SearchTour({ closeDialog, onSelectTour, listing = false }) {
  const storedSearchTour =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("searchTour")
      : null;

  const [searchTour, setDataSearch] = useState(
    storedSearchTour ? JSON.parse(storedSearchTour) : null
  );

  // console.log("searchTour", searchTour);

  const isMobile = useIsMobile();
  const [inputAutocomplete, setInputAutocomplete] = useState("");
  const [optionsSearch, setOptions] = useState([]);

  // const isOptionEqualToValue = (option, value) => option.value === value.value && option.key === value.key;

  // console.log(inputAutocomplete);
  // const searchLocation = inputAutocomplete.trim();
  // const isEmpty = searchLocation === "";

  const AutocompleteFetch = useMemo(
    () =>
      _.debounce(async (inputAutocomplete) => {
        try {
          const response = await axiosWithInterceptor.get(
            `${API_ENDPOINT}/${inputAutocomplete}`
          );
          // console.log(response);
          const groupedResults = response.data.activities.reduce((acc, item) => {
            acc[item.type] = acc[item.type] || [];
            acc[item.type].push(item);
            return acc;
          }, {})
          console.log(groupedResults);
          setOptions(response.data.activities);
        } catch (error) {
          console.error(error);
        }
      }, 400),
    []
  );

  // console.log(optionsSearch);

  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    if (inputAutocomplete.length >= 3) {
      AutocompleteFetch(inputAutocomplete);
    }
  }, [inputAutocomplete, AutocompleteFetch]);

  useEffect(() => {
    if (searchTour) {
      localStorage.setItem("searchTour", JSON.stringify(searchTour));
      onSelectTour(searchTour);
      setInputAutocomplete(searchTour.label);
    } else {
      localStorage.setItem("searchTour", null);
      onSelectTour(null);
      setInputAutocomplete("");
    }
  }, [searchTour, onSelectTour]);

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
          <span style={{ color: "#2743a6 ", fontWeight: 800 }}>
            {items[index]}
          </span>
        </span>
      )
    );
  };

  // FILTER TOUR RESULTS
  const filtersTours =
    inputAutocomplete === ""
      ? optionsSearch && optionsSearch
      : optionsSearch &&
        optionsSearch.filter((destination) => {
          return destination.label
            .toLowerCase()
            .includes(inputAutocomplete.toLowerCase());
        });

  // LETTER FROM INPUT OR AUTOCOMPLETE
  const letterInput = (event) => {
    if (event.target.value !== "") {
      setInputAutocomplete(event.target.value);
    } else {
      onSelectTour(null);
      setDataSearch(null);
    }
  };

  return (
    <Combobox
      as="div"
      value={searchTour}
      onChange={setDataSearch}
      className="max-lg:w-full"
    >
      <div className="relative">
        <Combobox.Button
          className={`focus:outline-none ${
            listing ? "w-full" : "max-lg:w-full"
          } `}
        >
          <img
            className="absolute left-4 bottom-0 top-0 my-auto W-[16px] h-[20px]"
            width="16px"
            height="20px"
            src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-b.svg`}
            alt="tour-b"
          />

          <p className="m-0 top-2.5 left-[2.5rem] absolute text-gry-70 m-m text-fs-10">
            {languageData.SearchBox.tabTour.autoDestination}
          </p>

          <Combobox.Input
            className={`placeholder:m-m placeholder:text-gry-70 m-b font-extrabold h-[56px] border-2 border-gray-200 rounded bg-white pb-2.5 pt-[22px] pr-4 pl-[2.4rem] shadow-sm focus:outline-none text-fs-12 ${
              listing ? "w-full" : "w-full lg:w-[290px]"
            }`}
            onChange={(event) => letterInput(event)}
            displayValue={(tour) => tour && tour.label}
            placeholder={languageData.SearchBox.tabTour.destinationText}
          />

          <Combobox.Options
            className={`px-2 absolute z-[2] mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${
              filtersTours.length === 0 && "cursor-auto"
            }`}
          >
            {filtersTours.length > 0 &&
              filtersTours.map((option, index) => (
                <Combobox.Option
                  key={index}
                  value={option}
                  className="text-gry-100 m-m text-fs-12 cursor-pointer text-start flex gap-x-[5px] items-start my-3.5"
                >
                  {option.type === "destination" ? (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
                      alt="icon location"
                      width={16}
                      height={16}
                      className="icon-location-tour"
                    />
                  ) : (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-b.svg`}
                      width={16}
                      height={16}
                      alt="icon tour"
                    />
                  )}
                  <p className="m-0">
                    {getDestination(inputAutocomplete, option.label)}
                  </p>
                </Combobox.Option>
              ))}

            {optionsSearch.length === 0 && inputAutocomplete.length >= 3 && (
              <p className="m-0 text-start cursor-auto">
                {languageData.SearchBox.tabTour.text}
              </p>
            )}
          </Combobox.Options>
        </Combobox.Button>
      </div>
    </Combobox>
    // <div className={`border-2 border-gray-200 rounded py-2.5 px-4 flex items-center h-[53px] relative ${listing ? 'w-full' : 'w-full lg:w-[290px]'}`}>
    //   <span className="text-fs-10 m-s-b text-gry-70 m-0 absolute top-[6px] left-[43px]">
    //     {languageData.SearchBox.tabTour.autoDestination}
    //   </span>

    //   <Autocomplete
    //     className="text-white m-m text-fs-12 scroll-page-blue absolute top-[11px] !w-[90%]"
    //     sx={{ width: 300 }}
    //     getOptionLabel={(option) => option.label}
    //     filterOptions={(x) => x}
    //     options={optionsSearch}
    //     isOptionEqualToValue={isOptionEqualToValue}
    //     autoComplete
    //     includeInputInList
    //     filterSelectedOptions
    //     value={searchTour}
    //     noOptionsText={
    //       searchTour || isEmpty === true
    //         ? ""
    //         : languageData.SearchBox.tabTour.text
    //     }
    //     onChange={(event, newValueAutocomplete) => {
    //       clickInput(newValueAutocomplete);
    //     }}
    //     onInputChange={(event, newInputValue) => {
    //       setInputAutocomplete(newInputValue);
    //     }}
    //     renderInput={(params) => (
    //       <div className="flex gap-x-2 items-center" id="destination-search">
    //         <Image
    //           src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-b.svg`}
    //           width={16}
    //           height={16}
    //           className="h-4 w-4 invert"
    //           alt="icon-location"
    //         />
    //         <div className="flex flex-col w-full">
    //           <TextField
    //             className="!m-m !text-fs-12 p-0"
    //             {...params}
    //             placeholder={languageData.SearchBox.tabTour.destinationText}
    //           />
    //         </div>
    //       </div>
    //     )}
    //     renderOption={(props, option) => {
    //       return (
    //         <li {...props}>
    //           <Grid container alignItems="center">
    //             <Grid item sx={{ display: "flex", width: 30 }}>
    //               {option.type === "destination" ? (
    //                 <Image
    //                   src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
    //                   alt="icon location"
    //                   width={16}
    //                   height={16}
    //                   className="icon-location-tour"
    //                 />
    //               ) : (
    //                 <Image
    //                   src={`${process.env.NEXT_PUBLIC_URL}icons/tour/tour-b.svg`}
    //                   width={16}
    //                   height={16}
    //                   alt="icon tour"
    //                 />
    //               )}
    //             </Grid>

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
    //                 {/* {option.label} */}
    //               </Typography>
    //             </Grid>
    //           </Grid>
    //         </li>
    //       );
    //     }}
    //   />
    // </div>
  );
}

export default SearchTour;
