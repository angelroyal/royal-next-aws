import React, { useEffect, useState, useContext } from "react";
import { isNumber } from "lodash";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { TextField } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ReactComponent as ArrowIcon } from "../assets/icons/tour/listing/down-arrow.svg";
import { ReactComponent as ArrowUpIcon } from "../assets/icons/tour/listing/up-arrow.svg";
import LanguageContext from "../language/LanguageContext";
import axiosWithInterceptor from "../config/Others/axiosWithInterceptor";
import { getFiltersNew } from "../utils/hotel/UpdateFilters";
import { saveListingData } from "../utils/hotel/SaveListingData";
import { HotelContext } from "../config/context/HotelContext";

export default function Filters(props) {
  const [filters, setFilters] = useState([]);
  const { listingData } = props;
  const {
    setListingDataFilters,
    setUltimateFilters,
    setListHotel,
    setShowSkeleton,
    setNoAvailability,
  } = useContext(HotelContext);
  const getFilters = () => {
    if (listingData !== null) {
      const arrayUnitedFilters = [].concat(...listingData.hotels);
      const uniqueChains = [];
      const uniqueChainDescriptions = [];
      arrayUnitedFilters.forEach((hotel) => {
        if (!uniqueChains.includes(hotel.chain)) {
          uniqueChains.push(hotel.chain);
          uniqueChainDescriptions.push(hotel.chainDescription);
        }
      });
      const items = [
        {
          label: "Hotels",
          value: -1,
          checked: true,
        },
        ...uniqueChains.map((chain, index) => ({
          label: uniqueChainDescriptions[index]
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" "),
          value: chain,
          checked: false,
        })),
      ];
      const newFilter = {
        "chain-hotel": {
          title: "Hotels",
          length: 4,
          items,
        },
      };
      return newFilter;
    }
  };
  useEffect(() => {
    if (listingData !== null) {
      const newFilters = {
        ...getFiltersNew(),
        ...getFilters(),
      };
      setFilters(newFilters);
    }
  }, [listingData]);

  const [pricing, setPricing] = useState({
    min: "",
    max: "",
  });

  const [showMore, setShowMore] = useState({});

  const getGroupHotelForCheckBox = (array2, methodPrice = false) => {
    const arrayUnitedGroupCheckbox = [].concat(...listingData.hotels);
    const filteredResults = arrayUnitedGroupCheckbox.filter((item) => {
      return array2.every((filter) => {
        const itemValue = item[filter.key];
        if (Array.isArray(itemValue)) {
          // SI QUIERES REGRESAR A COMO ESTABA ANTES
          // return itemValue.every((value) => filter.values.includes(value));
          return filter.values.some((value) => itemValue.includes(value));
        } else {
          return filter.values.includes(itemValue);
        }
      });
    });

    listingData.availableTotal = filteredResults.length;
    let groups = [];
    for (let i = 0; i < filteredResults.length; i += 10) {
      groups.push(filteredResults.slice(i, i + 10));
    }
    if (methodPrice) {
      groups = filteredResults;
    }
    return groups;
  };

  const getHotelsByRequest = async (listingHotels) => {
    if (listingHotels) {
      if (listingHotels.length > 0) {
        const keys = listingHotels[0].map((object) => object.key);
        const codes = keys.join(",");
        try {
          axiosWithInterceptor
            .get("v1/hotels/" + codes)
            .then((response) => {
              const data = {
                mapHotels: listingHotels,
                hotels: response.data.hotels,
              };
              setListingDataFilters(saveListingData(data));
              setUltimateFilters(Math.floor(Math.random() * 100) + 1);
            })
            .catch((error) => {
              console.error(error);
            });
        } catch (error) {
          setListingDataFilters([]);
          setListHotel(null);
          setShowSkeleton(false);
          setNoAvailability(true);
        }
      } else {
        setListingDataFilters([]);
        setListHotel(null);
        setShowSkeleton(false);
        setNoAvailability(true);
      }
    } else {
      setListingDataFilters([]);
      setListHotel(null);
      setShowSkeleton(false);
      setNoAvailability(true);
    }
  };
  const getElementCheckedTrue = (updatedFilters) => {
    const elementsWithCheckedTrue = [];
    for (const property in updatedFilters) {
      if (updatedFilters.hasOwnProperty(property)) {
        const items = updatedFilters[property].items;
        // Filter the elements with checked equal to true and add the "group" property
        const FilteredItems = items.filter((item) => item.checked === true);
        FilteredItems.forEach((item) => {
          item.group = property; // Add the "group" property with the property name
        });
        // Add the filtered elements to the main array
        elementsWithCheckedTrue.push(...FilteredItems);
      }
    }
    const array2 = [];
    // We create an object to map the groups to the desired keys
    const groupKeyMap = {
      stars: "stars",
      "hotel-type": "types",
      "eating-plan": "eatingPlans",
      "chain-hotel": "chain",
    };
    // We iterate over the array checked True
    elementsWithCheckedTrue.forEach((item) => {
      const group = item.group;
      const value = item.value;
      if (value !== -1) {
        // We check if the group exists in array2
        const existingGroup = array2.find(
          (entry) => entry.key === groupKeyMap[group]
        );
        if (existingGroup) {
          // If the group already exists, we simply add the value to its array of values
          existingGroup.values.push(value);
        } else {
          // If the group does not exist, we create a new object in array2
          const newGroup = {
            key: groupKeyMap[group],
            values: [value],
          };
          array2.push(newGroup);
        }
      }
    });
    return array2;
  };
  const handleCheckbox = (event) => {
    const {
      target: { checked, value, name },
    } = event;
    const [group] = name.split("_");
    let updatedFilters = { ...filters };
    let newValue = !isNaN(parseInt(value)) ? parseInt(value) : value;
    for (let i = 0; i < updatedFilters[group].items.length; i++) {
      if (updatedFilters[group].items[i].value === newValue) {
        updatedFilters[group].items[i].checked = checked;
      }
      if (newValue === -1) {
        if (updatedFilters[group].items[i].value !== -1) {
          updatedFilters[group].items[i].checked = false;
        }
      }
    }
    if (newValue !== -1) {
      updatedFilters[group].items[0].checked = false;
    }
    const defaultOneTrue = updatedFilters[group].items.some(
      (object) => object.checked === true
    );
    if (!defaultOneTrue) {
      updatedFilters[group].items[0].checked = true;
    }
    setFilters(updatedFilters);
    let array2 = getElementCheckedTrue(filters);
    if (pricing.min || pricing.max) {
      let listingHotels = getGroupMaxOrMin(pricing.min, pricing.max);
      // console.log(listingHotels);
      getHotelsByRequest(listingHotels);
    } else {
      let listingHotels = getGroupHotelForCheckBox(array2);
      // console.log(listingHotels);
      getHotelsByRequest(listingHotels);
    }
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPricing((prevLocalPricing) => ({
      ...prevLocalPricing,
      [name]: value,
    }));
  };
  const getGroupMaxOrMin = (min, max) => {
    let array2 = getElementCheckedTrue(filters);
    const arrayUnited = getGroupHotelForCheckBox(array2, true);
    // Filter hotels that meet the range
    const hotelsFilter = arrayUnited.filter((hotel) => {
      const minRate = parseFloat(hotel.minRate);
      // Filter by min and max, if both were set as parameters
      if (min !== "" && max !== "") {
        return minRate >= min && minRate <= max;
      }
      // Filters only by min, if only min was passed as a parameter
      if (min !== "" && max === "") {
        return minRate >= min;
      }
      // Filters only on max, if only max was passed as a parameter
      if (max !== "" && min === "") {
        return minRate <= max;
      }
      // If no min or max were passed as parameters, no filtering
      return true;
    });
    if (hotelsFilter.length > 0) {
      listingData.availableTotal = hotelsFilter.length;
      hotelsFilter.sort((a, b) => {
        const minRateA = parseFloat(a.minRate);
        const minRateB = parseFloat(b.minRate);
        return minRateA - minRateB;
      });
      const groups = [];
      for (let i = 0; i < hotelsFilter.length; i += 10) {
        groups.push(hotelsFilter.slice(i, i + 10));
      }
      return groups;
    }
  };
  const handlePricingFilters = () => {
    if (isNumber(pricing.min) && pricing.min === 0) {
      console.error(`the price don't 0`);
      return;
    }
    if (isNumber(pricing.max) && pricing.max === 0) {
      console.error(`the price no more 0`);
      return;
    }
    if (
      isNumber(pricing.max) &&
      isNumber(pricing.min) &&
      pricing.max <= pricing.min
    ) {
      alert(`the price no more 0`);
      return;
    }

    let listingHotels = getGroupMaxOrMin(pricing.min, pricing.max);
    getHotelsByRequest(listingHotels);
  };
  const handleShowMore = (group) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [group]: !prevShowMore[group],
    }));
  };
  const { languageData } = useContext(LanguageContext);
  return (
    <>
      <div className="container-all-filters">
        <div className="p-2">
          <div className="filter-title d-flex width100 align-items-start">
            {languageData.containerFilterHotel.titleFilter}
          </div>
          <div className="h-line" />
        </div>

        <div>
          <div className="filter-subtitle">
            {languageData.containerFilterHotel.price}
          </div>

          <div className="styles-prices-max-min">
            <div className="minimum-price-text">
              {languageData.containerFilterHotel.priceMin}
            </div>

            <div className="maximum-price-text">
              {languageData.containerFilterHotel.priceMax}
            </div>
          </div>

          <div className="price-display" id="price-filter-hotel">
            <TextField
              placeholder={
                languageData.containerFilterHotel.boxAutocompleteMinimum
              }
              type="number"
              name="min"
              defaultValue={pricing.min}
              // onBlur={handleMinPrice}
              variant="outlined"
              size="small"
              onChange={handlePriceChange}
              className="textField-price"
              inputProps={{
                min: 0,
              }}
            />

            <TextField
              placeholder={
                languageData.containerFilterHotel.boxAutocompleteMaximum
              }
              type="number"
              className="textField-price"
              name="max"
              defaultValue={pricing.max}
              // onBlur={handleMaxPrice}
              variant="outlined"
              size="small"
              onChange={handlePriceChange}
              inputProps={{
                min: 0,
              }}
            />
          </div>

          <div className="container-button-apply-price">
            <button
              className="button-filter-apply"
              type="submit"
              variant="contained"
              onClick={handlePricingFilters}
            >
              {languageData.containerFilterHotel.button}
            </button>
          </div>
        </div>

        <div>
          {Object.keys(filters).map((filterGroup, index) => {
            const filterItems = filters[filterGroup];
            const maxItems = showMore[filterGroup]
              ? filterItems.items.length
              : filterItems.length;
            return (
              <div key={`${filterGroup}-${index}`}>
                <div className="h-line" />
                <Accordion
                  defaultExpanded
                  disableGutters
                  className="accordion-filter"
                >
                  <AccordionSummary
                    className="accordion-summary-filters"
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}a-content`}
                    id={`panel${index + 1}a-header`}
                  >
                    <div
                      className="filter-subtitle"
                      variant="p"
                      sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
                    >
                      {languageData.titlesFilterHotel[
                        filters[filterGroup].title
                      ]
                        ? languageData.titlesFilterHotel[
                            filters[filterGroup].title
                          ]
                        : filters[filterGroup].title}
                    </div>
                  </AccordionSummary>
                  
                  <AccordionDetails>
                    <FormGroup>
                      {filterItems.items
                        .slice(0, maxItems)
                        .map((filterItem, index) => {
                          return (
                            <FormControlLabel
                              key={`${filterGroup}-${index}${filterItem.value}`}
                              label={
                                languageData.optionsFilterHotel[
                                  filterItem.label
                                ]
                                  ? languageData.optionsFilterHotel[
                                      filterItem.label
                                    ]
                                  : filterItem.label
                              }
                              sx={{ marginBottom: 0 }}
                              control={
                                <Checkbox
                                  name={`${filterGroup}_${filterItem.value}`}
                                  value={filterItem.value}
                                  onChange={handleCheckbox}
                                  checked={filterItem.checked}
                                />
                              }
                            />
                          );
                        })}
                      {filterItems.items.length > 4 && (
                        <div>
                          <button
                            className="button-shoMore"
                            variant="text"
                            color="primary"
                            onClick={() => handleShowMore(filterGroup)}
                          >
                            {showMore[filterGroup] ? (
                              <>
                                {languageData.showOptions.showLess}{" "}
                                <ArrowUpIcon />
                              </>
                            ) : (
                              <>
                                {languageData.showOptions.showMore}{" "}
                                <ArrowIcon />
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
