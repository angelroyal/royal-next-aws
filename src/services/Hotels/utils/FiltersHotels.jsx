import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState, useContext } from "react";

import PriceHotels from "./PriceHotels";
import { initialFilters } from "./filtersHotelJson";
import LanguageContext from "../../../language/LanguageContext";
import ListingHotelContext from "../context/ListingHotelContext";

export default function FiltersHotels({ listing = false }) {
  const [showMore, setShowMore] = useState({});
  const { languageData } = useContext(LanguageContext);
  const [filters, setFilters] = useState(initialFilters);
  const { setSelectedFilters } = useContext(ListingHotelContext);

  // Update selected filters
  useEffect(() => {
    const newSelectedFilters = {};
    Object.keys(filters).forEach((filterGroup) => {
      newSelectedFilters[filterGroup] = filters[filterGroup].items
        .filter((item) => item.checked)
        .map((item) => item.value);
    });
    setSelectedFilters(newSelectedFilters);
  }, [filters]);

  // Change filters
  const handleCheckbox = (event, filterGroup) => {
    const { name, checked } = event.target;
    const value = parseInt(name.split("_")[1], 10);

    setFilters((prevFilters) => {
      let newItems = prevFilters[filterGroup].items.map((item) => {
        if (item.value === -1 && value !== -1) {
          return { ...item, checked: false };
        } else if (item.value === value) {
          return { ...item, checked };
        } else if (value === -1) {
          return { ...item, checked: item.value === -1 };
        }
        return item;
      });

      const isSelected = newItems.some((item) => item.checked);

      if (!isSelected) {
        newItems = newItems.map((item) => {
          if (item.value === -1) {
            return { ...item, checked: true };
          }
          return item;
        });
      }

      const updatedFilterGroup = {
        ...prevFilters[filterGroup],
        items: newItems,
      };

      return {
        ...prevFilters,
        [filterGroup]: updatedFilterGroup,
      };
    });
  };

  // Show more toggle
  const handleShowMore = (group) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [group]: !prevShowMore[group],
    }));
  };

  return (
    <>
      <div
        className={`${
          listing === false &&
          "bg-white rounded-lg p-[24px] shadow-3xl border border-[#ebebeb] mt-[16px]"
        }`}
      >
        <div className="p-2">
          <div className="text-fs-16 m-b flex w-full items-start">
            {languageData.containerFilterHotel.titleFilter}
          </div>
          <div className="border-t border-[#ebebeb] my-[10px]" />
          <PriceHotels />
        </div>

        <>
          {Object.keys(filters).map((filterGroup, index) => {
            const filterItems = filters[filterGroup];
            const maxItems = showMore[filterGroup]
              ? filterItems.items.length
              : filterItems.length;
            return (
              <div className="border-t border-[#ebebeb]">
                <Disclosure defaultOpen={true}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left text-sm font-medium focus:outline-none">
                        <div className="filter-subtitle text-fs-15 font-bold">
                          {languageData.titlesFilterHotel[
                            filters[filterGroup].title
                          ]
                            ? languageData.titlesFilterHotel[
                                filters[filterGroup].title
                              ]
                            : filters[filterGroup].title}
                        </div>
                        <ChevronUpIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5`}
                        />
                      </Disclosure.Button>

                      <Disclosure.Panel className="pb-2 pt-2 text-sm text-gray-500">
                        {filterItems.items
                          .slice(0, maxItems)
                          .map((filterItem, index) => (
                            <div
                              className="form-control-label flex items-center mb-2"
                              key={`${filterGroup}-${index}${filterItem.value}`}
                            >
                              <input
                                type="checkbox"
                                name={`${filterGroup}_${filterItem.value}`}
                                value={filterItem.value}
                                onChange={(event) =>
                                  handleCheckbox(event, filterGroup)
                                }
                                checked={filterItem.checked}
                                className="mr-2"
                              />
                              <label className="text-sm">
                                {languageData.optionsFilterHotel[
                                  filterItem.label
                                ]
                                  ? languageData.optionsFilterHotel[
                                      filterItem.label
                                    ]
                                  : filterItem.label}
                              </label>
                            </div>
                          ))}
                        {filterItems.items.length > 4 && (
                          <>
                            <Disclosure defaultOpen={false}>
                              {({ open }) => (
                                <>
                                  <Disclosure.Button
                                    className="flex w-full rounded-lg py-2 text-left text-sm font-medium focus:outline-none"
                                    onClick={() => handleShowMore(filterGroup)}
                                  >
                                    <h6>
                                      <u className="text-bl-100 text-fs-14 m-b">
                                        {showMore[filterGroup] ? (
                                          <>
                                            {
                                              languageData.containerFilterTour
                                                .showLess
                                            }{" "}
                                          </>
                                        ) : (
                                          <>
                                            {
                                              languageData.containerFilterTour
                                                .showMore
                                            }{" "}
                                          </>
                                        )}
                                      </u>
                                    </h6>
                                    <ChevronUpIcon
                                      className={`${
                                        open ? "rotate-180 transform" : ""
                                      } h-5 w-5 text-bl-100`}
                                      // onClick={() =>
                                      //   handleShowMore(filterGroup)
                                      // }
                                    />
                                  </Disclosure.Button>
                                </>
                              )}
                            </Disclosure>
                          </>
                        )}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            );
          })}
        </>
      </div>
    </>
  );
}
