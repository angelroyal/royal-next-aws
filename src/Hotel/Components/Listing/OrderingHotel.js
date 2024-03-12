import React, { useContext } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

import { ordering } from "../../../config/Hotel/filters";
import LanguageContext from "../../../language/LanguageContext";
import ListingHotelContext from "../../Context/ListingHotelContext";

export default function OrderingHotel() {
  const { languageData } = useContext(LanguageContext);
  const { orderHotel, setOrderHotel, setCurrentPage } = useContext(ListingHotelContext);

  const handleOrderingFilters = (event) => {
    setOrderHotel(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      {ordering.items.length > 0 && (
        <div className="ordering-filter-box">
          <div className="order-title">{languageData.filtersHotel.order}</div>
          <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
            <Select
              labelId="ordering-filters"
              id="ordering-filters-select"
              value={orderHotel}
              onChange={handleOrderingFilters}
            >
              {ordering.items.map((item, index) => (
                <MenuItem key={`selector_item_${index}`} value={item.value}>
                  {languageData.orderByHotel[item.label]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}
    </>
  );
}
