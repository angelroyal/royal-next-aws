import React, { useContext } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

// import LanguageContext from "../../../language/LanguageContext";
// import { orderingTour } from "../../Config/orderingTour";
import LanguageContext from "@/language/LanguageContext";
import { useTourContext } from "../../context/ListingTourContext";
import { orderingTour } from "../../Config/orderingTour";

export default function OrderingTour() {
  const { languageData } = useContext(LanguageContext);
  const { orderTour, setOrderTour, updatePage } = useTourContext();

  const handleOrderingFilters = (event) => {
    // console.log("hollaaa");
    setOrderTour(event.target.value);
    updatePage(1);
  };

  return (
    <>
      {orderingTour.items.length > 0 && (
        <div className="ordering-filter-box-tour">
          <div className="d-flex flex-column cont-ordering-filter-tour">
            <div className="order-title-tour">
              {languageData.filtersHotel.order}
            </div>
            <FormControl
              sx={{ m: 1, minWidth: 150 }}
              size="small"
              id="ordering-tour-test"
            >
              <Select
                labelId="ordering-filters"
                id="ordering-filters-select-tour"
                value={orderTour}
                onChange={handleOrderingFilters}
              >
                {orderingTour.items.map((item, index) => (
                  <MenuItem key={`selector_item_${index}`} value={item.value}>
                    {languageData.orderByTour[item.label]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      )}
    </>
  );
}
