import React, { useState, useEffect, useContext } from "react";

import PriceTransport from "./PriceTransport";
import { filterDataTransport } from "../../config/filterDataTransport";
import ListingTransportContext from "../../context/ListingTransportContext";

export default function FilterTransport() {
  const [filters, setFilters] = useState(filterDataTransport);
  const { setSelectedFilters } = useContext(ListingTransportContext);

  useEffect(() => {
    const newSelectedFilters = {};
    filters.forEach((filterGroup) => {
      newSelectedFilters[filterGroup.name.toLowerCase()] = filterGroup.options
        .filter((option) => option.checked)
        .map((option) => option.value);
    });
    setSelectedFilters(newSelectedFilters);
  }, [filters, setSelectedFilters]);

  const handleCheckboxChange = (categoryIndex, optionIndex) => {
    setFilters((prevFilters) => {
      return prevFilters.map((category, idx) => {
        if (idx === categoryIndex) {
          const optionsUpdated = category.options.map((option, i) => {
            if (optionIndex === i) {
              return { ...option, checked: !option.checked };
            } else if (category.options[optionIndex].value === -1) {
              return { ...option, checked: false };
            } else {
              return option.value === -1
                ? { ...option, checked: false }
                : option;
            }
          });

          // Ensure at least 'Todos' is checked if no other option is selected
          const noOptionSelected = !optionsUpdated.some(
            (option) => option.checked && option.value !== -1
          );
          if (noOptionSelected) {
            optionsUpdated.forEach((option, i) => {
              if (option.value === -1) {
                optionsUpdated[i] = { ...option, checked: true };
              }
            });
          }

          return { ...category, options: optionsUpdated };
        }
        return category;
      });
    });
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
