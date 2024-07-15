import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";
import RoomsHotelContext from "@/services/Hotels/context/RoomsHotelContext";

export const Months = () => {
  const { languageData } = useContext(LanguageContext);
  return (
    <>
      <div className="flex flex-col gap-4">
        <h3 className="text-black m-b text-fs-12 lg:text-fs-14">
          {languageData.reviewsHotel.timeOfYear}
        </h3>

        <FilterMont />
      </div>
    </>
  );
};

const monthsSelect = [
  { label: "Mar-May", value: { month1: 3, month2: 5 } },
  { label: "Jun-Ago", value: { month1: 6, month2: 8 } },
  { label: "Sep-Nov", value: { month1: 9, month2: 11 } },
  { label: "Dic-Feb", value: { month1: 12, month2: 2 } },
];

const FilterMont = () => {
  const { setMonths, months } = useContext(RoomsHotelContext);

  const handleMonth = (monthSelected) => {
    setMonths((prevMonth) => {
      const isInclude = prevMonth.includes(monthSelected);

      const filterMonth = isInclude
        ? prevMonth.filter((months) => months !== monthSelected)
        : [...prevMonth, monthSelected];
      return filterMonth;
    });
  };

  return (
    <div className="flex flex-col gap-y-4">
      {monthsSelect.map((month, index) => (
        <div className="flex gap-x-2 items-center" key={index}>
          <input
            type="checkbox"
            value={month.value}
            onChange={() => handleMonth(month.value)}
            checked={months.length > 0 && months.includes(month.value)}
          />
          <span className="text-black text-fs-12 m-m">{month.label}</span>
        </div>
      ))}
    </div>
  );
};
