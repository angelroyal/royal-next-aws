import _ from "lodash";
import "flatpickr/dist/l10n/es.js";
import "flatpickr/dist/flatpickr.min.css";
import React, { useState, useEffect, useMemo, useContext } from "react";
import { Grid, TextField, Autocomplete, Typography } from "@mui/material";

import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
import { ReactComponent as IconRoom } from "../../assets/icons/utils/searchBox/room.svg";

const API_ENDPOINT = `v1/transportations/hotel/search`;

function SearchMoving({ onSelectSearch }) {
  const [searchHotelMoving, setsearchHotelMoving] = useState(
    JSON.parse(localStorage.getItem("searchHotelMoving")) || null
  );

  const [inputAutocomplete, setInputAutocomplete] = useState("");
  const [optionsSearch, setOptions] = useState([]);
  const isOptionEqualToValue = (option, value) =>
    option.value === value.value && option.key === value.key;

  const AutocompleteFetch = useMemo(
    () =>
      _.debounce(async (inputAutocomplete) => {
        try {
          const response = await axiosWithInterceptor.get(API_ENDPOINT, {
            params: {
              searchTerm: inputAutocomplete,
            },
          });
          setOptions(response.data.results);
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
    localStorage.setItem(
      "searchHotelMoving",
      JSON.stringify(searchHotelMoving)
    );
    onSelectSearch(searchHotelMoving);
  }, [searchHotelMoving, onSelectSearch]);

  return (
    <Autocomplete
      className="search-autocomplete custom-autocomplete"
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.label}
      filterOptions={(x) => x}
      options={optionsSearch}
      isOptionEqualToValue={isOptionEqualToValue}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={searchHotelMoving}
      noOptionsText={languageData.SearchBox.tabTour.text}
      onChange={(event, newValueAutocomplete) => {
        setsearchHotelMoving(newValueAutocomplete);
      }}
      onInputChange={(event, newInputValue) => {
        setInputAutocomplete(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          className="textField-box-result"
          {...params}
          placeholder={
            languageData.SearchBox.tabTransportation.autoCompleteName
          }
        />
      )}
      renderOption={(props, option) => {
        return (
          <li {...props}>
            <Grid container alignItems="center">
              <Grid item sx={{ display: "flex", width: 30 }}>
                <IconRoom />
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
                  {option.label}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
}

export default SearchMoving;