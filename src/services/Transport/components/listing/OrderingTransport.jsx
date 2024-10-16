import Image from "next/image";
import React, { useContext } from "react";

import LanguageContext from "../../../../language/LanguageContext";
import { orderingTransport } from "../../config/filterDataTransport";
import ListingTransportContext from "../../context/ListingTransportContext";

export default function OrderingTransport() {
  const { languageData } = useContext(LanguageContext);
  const { orderHotel, setOrderHotel, dataTransportF } = useContext(
    ListingTransportContext
  );

  const handleOrderingFilters = (event) => {
    const selectedValue = +event.target.value;

    setOrderHotel(selectedValue);
  };

  return (
    <>
      <div className="flex justify-between items-center my-[32px]">
        <span className="m-s-b text-fs-20">
          {languageData.listingTour.weFound} {dataTransportF.length}{" "}
          {languageData.CardHomeTransport.vehicles}
        </span>

        {orderingTransport.items.length > 0 && (
          <div className="relative">
            <label
              htmlFor="location"
              className="m-m text-gry-100 text-fs-10 absolute top-[12px] left-[18px] "
            >
              {languageData.filtersHotel.order}
            </label>
            <select
              className="bg-white pt-[1.2rem] mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300  appearance-none focus:outline-none sm:text-sm sm:leading-6 text-fs-14"
              value={orderHotel}
              onChange={(event) => handleOrderingFilters(event)}
            >
              {orderingTransport.items.map((item, index) => (
                <option key={index} value={item.value}>
                  {languageData.orderByHotel[item.label]}
                </option>
              ))}
            </select>

            <Image
            src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/down-100.svg`}
            width={12}
            height={12}
            alt="icon-arrow down"
            className="h-3 w-3 absolute right-[20px] top-[26px]"
          />
          </div>
        )}
      </div>
    </>
  );
}
