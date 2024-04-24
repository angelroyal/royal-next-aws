import React, { useState, useEffect, useContext } from "react";

import PriceTransport from "./PriceTransport";
import { filterDataTransport } from "../../config/filterDataTransport";
import ListingTransportContext from "../../context/ListingTransportContext";

export default function FilterTransport() {
  const [filters, setFilters] = useState(filterDataTransport);
  const { setSelectedFilters } = useContext(ListingTransportContext);

  const updateSelectedFilters = () => {
    const newSelectedFilters = {};
    filters.forEach((category) => {
      newSelectedFilters[category.name.toLowerCase()] = category.options
        .filter((option) => option.checked)
        .map((option) => option.value);
    });
    setSelectedFilters(newSelectedFilters);
  };

  useEffect(() => {
    updateSelectedFilters();
  }, [filters]);

  const handleCheckboxChange = (categoryIndex, optionIndex) => {
    const newFilters = filters.map((category, idx) => {
      if (idx === categoryIndex) {
        const isCurrentlyChecked = category.options[optionIndex].checked;
        const isAllOption = category.options[optionIndex].value === -1;
        return {
          ...category,
          options: category.options.map((option, i) => {
            if (isAllOption) {
              return i === optionIndex
                ? { ...option, checked: !isCurrentlyChecked }
                : { ...option, checked: false };
            } else {
              return i === optionIndex
                ? { ...option, checked: !option.checked }
                : option.value === -1
                ? { ...option, checked: false }
                : option;
            }
          }),
        };
      }
      return category;
    });
    setFilters(newFilters);
  };

  return (
    <>
      <PriceTransport />
      <div className="p-4">
        {filters.map((category, categoryIndex) => (
          <div key={category.name} className="mb-4">
            <h3 className="font-bold">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.options.map((option, optionIndex) => (
                <label
                  key={option.label}
                  className="inline-flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={() =>
                      handleCheckboxChange(categoryIndex, optionIndex)
                    }
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
