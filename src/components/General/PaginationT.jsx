"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
// const data = [
//     "1", "2", "3", "4", "5", "6"];

export default function PaginationT({ count }) {
  // { count, page, onChange }
  // console.log(count);
  // console.log(page);
  // console.log(onChange);

  // const numbers = Array.from({ length: count }, (_, index) => index + 1);

  // const increment = () => {
  //   if (change < count) {
  //     setChange(change + 1);
  //   }
  // };

  // const decrement = () => {
  //   if (change > 1) {
  //     setChange(change - 1);
  //   }
  // };
  // test pagination
  const pages = 5;

  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  const [changeBtn, setChangeBtn] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsLeft = "... "
    let dotsRight = ' ...'
    let dotsInitial = "..."

    if (changeBtn >= 1 && changeBtn <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    } else if (changeBtn === 4) {
      const sliced = numberOfPages.slice(0, 4);
      tempNumberOfPages = [...sliced, dotsInitial, numberOfPages.length];
    }
    else if (changeBtn === 4) {
      const sliced = numberOfPages.slice(0, 3);
      tempNumberOfPages = [...sliced];
    }
    else if(changeBtn > 4 && changeBtn < numberOfPages.length - 2){
      const sliced1 = numberOfPages.slice(changeBtn - 2, changeBtn)
      const sliced2 = numberOfPages.slice(changeBtn, changeBtn + 1)
      tempNumberOfPages = ([1, dotsLeft , ...sliced1, ...sliced2 , dotsRight , numberOfPages.length])
    }
    else if(changeBtn > numberOfPages.length - 3){
      const sliced = numberOfPages.slice(numberOfPages.length - 4)
      tempNumberOfPages = ([1, dotsLeft , ...sliced])
    }

    else if (changeBtn === dotsInitial){
      setChangeBtn(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1)
    }
    else if (changeBtn === dotsRight){
      setChangeBtn(arrOfCurrButtons[3] + 2)
    }
    else if (changeBtn === dotsLeft){
      setChangeBtn(arrOfCurrButtons[3] - 2)
    }


    setArrOfCurrButtons(tempNumberOfPages);
  }, [changeBtn]);
  // end test pagination

  return (
    <div className="flex items-center justify-between bg-white w-fit">
      <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md gap-[8px] "
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative bg-gry-50 inline-flex items-center rounded-full h-[28px] w-[28px] px-1 py-1 text-gry-100 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 "
              onClick={() =>
                setChangeBtn((prev) => (prev === 1 ? prev : prev - 1))
              }
              // onClick={decrement}
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {arrOfCurrButtons.map((page ,index) => {
              return (
                <a
                  key={index}
                  href="#"
                  onClick={() => setChangeBtn(page)}
                  aria-current="page"
                  className={`${
                    changeBtn === page ? "!bg-or-100 !text-white" : ""
                  } relative z-10 inline-flex rounded-full items-center bg-gry-50 h-[28px] w-[28px] justify-center text-sm font-semibold text-gry-100 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
                >
                  {page}
                </a>
              );
            })}

            <a
              href="#"
              className="relative inline-flex items-center bg-gry-50 rounded-full h-[28px] w-[28px] px-1 py-1 text-gry-100 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              // onClick={increment}
              onClick={() =>
                setChangeBtn((prev) =>
                  prev === numberOfPages.length ? prev : prev + 1
                )
              }
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
