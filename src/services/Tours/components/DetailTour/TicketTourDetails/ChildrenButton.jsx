"use client";

import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";

export function ChildrenButton({ children, setChildren }) {
  const { languageData } = useContext(LanguageContext);

  const addChildren = () =>{
    setChildren(children + 1)
  }

  const removeChildren = () =>{
    if(children > 0){
      setChildren(children - 1)
    }
  }

  console.log(children);

  return (
    <div className="flex flex-col items-end w-full">
      <div className="flex w-full justify-between items-center">
        <span className="m-s-b text-fs-12 text-white">
          {languageData.modalSearchHotel.roomModal.children}
        </span>

        <div className="flex h-[32px] justify-between items-center lg:w-[64%] xl:w-[56%] w-[56%] rounded bg-white ">
          <button
            disabled={children === 0}
            className={`${
              children === 0 ? "disable cursor-not-allowed" : "cursor-pointer hover:bg-gry-30 rounded-l"
            } w-[32px] h-full flex items-center justify-center`}
            onClick={removeChildren}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/remove/remove-100.svg`}
              alt="Remove adults"
              width="9.3px"
              height="1.3px"
            />
          </button>

          <span className="text-fs-12 m-s-b w-max text-black">
            {children}
          </span>

          <button className={`flex justify-center items-center h-full cursor-pointer w-[32px] hover:bg-gry-30 rounded-r`} onClick={addChildren}>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/add/add-or.svg`}
              width="9.3px"
              height="9.3px"
              alt="Add adults"
            />
          </button>
        </div>
      </div>

      <span className="w-max text-white m-s-b text-fs-10 h-[20px]">
        +3{languageData.itinerary.tourItinerary.years}
      </span>
    </div>
  );
}
