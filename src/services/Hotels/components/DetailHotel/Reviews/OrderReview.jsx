import Image from "next/image";
import { useContext } from "react";

import RoomsHotelContext from "@/services/Hotels/context/RoomsHotelContext";
import LanguageContext from "@/language/LanguageContext";

const ordering = {
  selected: "",
  items: [
    {
      value: 1,
      label: "mostRecent",
    },
    {
      value: 2,
      label: "mostNotable",
    },
  ],
};

export function OrderReview() {
  const { orderReview, setOrderReview } = useContext(RoomsHotelContext);
  const { languageData } = useContext(LanguageContext);

  const handleOrderingFilters = (event) => {
    const selectedValue = +event.target.value;

    setOrderReview(selectedValue);
  };

  return (
    <div className="relative flex lg:w-[150px] w-full">
      <label
        htmlFor="location"
        className="m-m text-gry-100 text-fs-10 absolute top-[12px] left-[16px] "
      >
        {languageData.filtersHotel.order}
      </label>

      <select
        className="pt-[1.2rem] py-1.5 pl-4 pr-10 mt-2 block w-full rounded-lg border-[1.5px] border-gry-70 text-black focus:ring-2  sm:leading-6 text-fs-14 appearance-none focus:outline-none bg-white  m-s-b"
        value={orderReview}
        onChange={(event) => handleOrderingFilters(event)}
      >
        {ordering.items.map((item, index) => (
          <option key={index} value={item.value}>
            {languageData.reviewsHotel[item.label]}
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
  );
}
