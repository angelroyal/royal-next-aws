import _ from "lodash";
import Image from "next/image";
import React, { useState, useEffect, useMemo, useContext } from "react";
import { Grid, TextField, Autocomplete, Typography } from "@mui/material";

import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
import { useIsMobile } from "../../config/Mobile/isMobile";

import IconTour from "../../assets/icons/utils/navigation/tour.svg";
import IconLocation from "../../assets/icons/utils/searchBox/location-autocomplete.svg";

const API_ENDPOINT = `v1/activity`;
// const API_ENDPOINT = `v1/tour-destinations/search`;

function SearchTour({ closeDialog, onSelectTour }) {
  // const [searchTour, setDataSearch] = useState(
  //   JSON.parse(localStorage.getItem("searchTour")) || null
  // );

  const storedSearchTour =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("searchTour")
      : null;
  const [searchTour, setDataSearch] = useState(
    storedSearchTour ? JSON.parse(storedSearchTour) : null
  );

  const isMobile = useIsMobile();
  const [inputAutocomplete, setInputAutocomplete] = useState("");
  const [optionsSearch, setOptions] = useState([]);
  const isOptionEqualToValue = (option, value) =>
    option.value === value.value && option.key === value.key;

  const searchLocation = inputAutocomplete.trim();
  const isEmpty = searchLocation === "";

  const AutocompleteFetch = useMemo(
    () =>
      _.debounce(async (inputAutocomplete) => {
        // console.log(inputAutocomplete);
        try {
          const response = await axiosWithInterceptor.get(
            `${API_ENDPOINT}/${inputAutocomplete}`
          );
          // console.log(response);
          setOptions(response.data.activities);
        } catch (error) {
          console.error(error);
        }
      }, 400),
    []
  );

  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    if (inputAutocomplete.length >= 3) {
      AutocompleteFetch(inputAutocomplete);
    }
  }, [inputAutocomplete, AutocompleteFetch]);

  useEffect(() => {
    localStorage.setItem("searchTour", JSON.stringify(searchTour));
    onSelectTour(searchTour);
  }, [searchTour, onSelectTour]);

  const clickInput = (newValueAutocomplete) => {
    setDataSearch(newValueAutocomplete);
    if (newValueAutocomplete !== null) {
      setTimeout(() => {
        if (isMobile) closeDialog();
      }, 100);
    }
  };

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

  return (
    <Autocomplete
      // open
      // id="autocomplete-tour"
      className="search-autocomplete custom-autocomplete"
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.label}
      filterOptions={(x) => x}
      options={optionsSearch}
      isOptionEqualToValue={isOptionEqualToValue}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={searchTour}
      noOptionsText={
        searchTour || isEmpty === true
          ? ""
          : languageData.SearchBox.tabTour.text
      }
      onChange={(event, newValueAutocomplete) => {
        clickInput(newValueAutocomplete);
      }}
      onInputChange={(event, newInputValue) => {
        setInputAutocomplete(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          className="textField-box-result"
          {...params}
          placeholder={languageData.SearchBox.tabTour.destinationText}
        />
      )}
      renderOption={(props, option) => {
        return (
          <li {...props}>
            <Grid container alignItems="center">
              <Grid item sx={{ display: "flex", width: 30 }}>
                {option.type === "destination" ? (
                  <Image
                    src={IconLocation}
                    alt="icon location"
                    sx={{ color: "text.secondary" }}
                    className="icon-location-tour"
                  />
                ) : (
                  <Image
                    src={IconTour}
                    alt="icon tour"
                    sx={{ color: "text.secondary" }}
                  />
                )}
              </Grid>

              <Grid
                item
                sx={{ width: "calc(100% - 44px)", wordWrap: "break-word" }}
              >
                <Typography
                  className="option-response"
                  variant="body1"
                  id="OptionAutocomplete"
                >
                  {getDestination(inputAutocomplete, option.label)}
                  {/* {option.label} */}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
}

export default SearchTour;
