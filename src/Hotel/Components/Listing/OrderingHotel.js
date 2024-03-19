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
        // MODIFY TAILWIND LP
        <div className="border w-fit rounded-lg flex flex-col py-[8px] px-[16px] w-[164px] h-[48px]">
          <div className="m-m text-gry-100 text-fs-10">{languageData.filtersHotel.order}</div>
          <FormControl sx={{ minWidth: 115 }} size="small" className="!p-0">
            <Select
            className="!text-fs-12 !m-0 !w-[115px] !p-0"
              // labelId="ordering-filters"
              id="ordering-filters-select"
              value={orderHotel}
              onChange={handleOrderingFilters}
            >
              {ordering.items.map((item, index) => (
                <MenuItem key={`selector_item_${index}`} value={item.value} className="!p-0">
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
