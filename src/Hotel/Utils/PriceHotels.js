import TextField from "@mui/material/TextField";
import React, { useState, useContext } from "react";

import LanguageContext from "../../language/LanguageContext";
import ListingHotelContext from "../Context/ListingHotelContext";

export default function PriceHotels() {
  const { setPricing } = useContext(ListingHotelContext);

  const [tempPricing, setTempPricing] = useState({ min: "", max: "" });
  const { languageData } = useContext(LanguageContext);

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setTempPricing((prevPricing) => ({ ...prevPricing, [name]: value }));
  };

  const handlePricingFilters = (event) => {
    event.preventDefault();
    setPricing(tempPricing);
  };

  return (
    <>
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
            value={tempPricing.min}
            onChange={handlePriceChange}
            variant="outlined"
            size="small"
            className="textField-price"
            inputProps={{ min: 0 }}
          />

          <TextField
            placeholder={
              languageData.containerFilterHotel.boxAutocompleteMaximum
            }
            type="number"
            name="max"
            value={tempPricing.max}
            onChange={handlePriceChange}
            variant="outlined"
            size="small"
            className="textField-price"
            inputProps={{ min: 0 }}
          />
        </div>

        <div className="container-button-apply-price">
          <button
            className="button-filter-apply"
            type="submit"
            onClick={handlePricingFilters}
          >
            {languageData.containerFilterHotel.button}
          </button>
        </div>
      </div>
    </>
  );
}
