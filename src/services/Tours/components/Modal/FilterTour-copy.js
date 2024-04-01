import React, { useState, useContext } from "react";
import { TextField } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { filters } from "../../../config/Tour/filtersTours";
import LanguageContext from "../../../language/LanguageContext";

import { ReactComponent as ArrowIcon } from "../../../assets/icons/tour/listing/down-arrow.svg"
import { ReactComponent as ArrowUpIcon } from "../../../assets/icons/tour/listing/up-arrow.svg";

// export default function FilterTour({ updateURL }) {
export default function FilterTour() {
  // PRICE MAX & MIN
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPrice = (event) => {
    setMaxPrice(event.target.value);
  };

  const handlePricingFilters = () => {
    // updateURL(minPrice, maxPrice);
  };

  // OTHER ACCORDION JSON REQUEST

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckbox = (event) => {
    const {
      target: { checked, name },
    } = event;
    const [group, label] = name.split("_");

    setSelectedFilters((prevState) => {
      if (checked) {
        return [...prevState, { group, label }];
      } else {
        return prevState.filter(
          (filter) => filter.group !== group || filter.label !== label
        );
      }
    });

    // update url params ( query.SerchParams)
    if (checked) {
      const params = new URLSearchParams(window.location.search);
      params.append(group, label);
      window.history.replaceState({}, "", `?${params.toString()}`);
    }

    // updateURL(selectedFilters);
  };

  const [showMore, setShowMore] = useState({});
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
          <div className="filter-title">
            {languageData.containerFilterTour.titleFilter}
          </div>
          <div className="h-line" />
        </div>

        <div>
          <div className="filter-subtitle">
            {languageData.containerFilterTour.price}
          </div>

          <div className="styles-prices-max-min">
            <div className="minimum-price-text">
              {languageData.containerFilterHotel.priceMin}
            </div>
            <div className="maximum-price-text">
              {languageData.containerFilterHotel.priceMax}
            </div>
          </div>

          <div className="price-display">
            <TextField
              placeholder={languageData.containerFilterTour.boxAutocomplete1}
              type="number"
              value={minPrice}
              onChange={handleMinPrice}
              variant="outlined"
              size="small"
              className="textField-price"
            />

            <TextField
              placeholder={languageData.containerFilterTour.boxAutocomplete2}
              type="number"
              value={maxPrice}
              onChange={handleMaxPrice}
              variant="outlined"
              size="small"
            />
          </div>

          <button
            className="button-filter-apply"
            type="submit"
            variant="contained"
            onClick={handlePricingFilters}
          >
            {languageData.containerFilterTour.button}
          </button>
        </div>
        <>
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
                      {
                        languageData.titlesFilterTour[
                          filters[filterGroup].title
                        ]
                      }
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
                                languageData.optionsFilterTour[filterItem.label]
                                  ? languageData.optionsFilterTour[
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
                                {languageData.containerFilterTour.showLess}{" "}
                                <ArrowUpIcon />
                              </>
                            ) : (
                              <>
                                {languageData.containerFilterTour.showMore}{" "}
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
        </>
      </div>
    </>
  );
}
