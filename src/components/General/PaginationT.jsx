"use client";

import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function PaginationT({ count, pageChange, onChange }) {
  // { count, page, onChange }

  const pages = count;

  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButtons];

    let dotsInitial = "...";
    let dotsRight = " ...";
    let dotsLeft = "... ";

    if (pageChange >= 1 && pageChange <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    }

    if (pages === 1) {
      tempNumberOfPages = [1];
    } else if (pages === 2) {
      tempNumberOfPages = [1, 2];
    } else if (pages === 3) {
      tempNumberOfPages = [1, 2, 3];
    } else if (pages === 4) {
      tempNumberOfPages = [1, 2, 3, 4];
    } else if (pages === 5) {
      tempNumberOfPages = [1, 2, 3, 4, 5];
    } else if (pages === 6) {
      tempNumberOfPages = [1, 2, 3, 4, 5, 6];
    } else if (pageChange > 4 && pageChange < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(pageChange - 2, pageChange);
      const sliced2 = numberOfPages.slice(pageChange, pageChange + 1);
      tempNumberOfPages = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfPages.length,
      ];
    } else if (pageChange > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      tempNumberOfPages = [1, dotsLeft, ...sliced];
    } else if (pageChange === dotsInitial) {
      onChange(arrOfCurrButtons[arrOfCurrButtons.length - 3] + 1);
    } else if (pageChange === dotsRight) {
      onChange(arrOfCurrButtons[3] + 2);
    } else if (pageChange === dotsLeft) {
      onChange(arrOfCurrButtons[3] - 2);
    }

    setArrOfCurrButtons(tempNumberOfPages);
  }, [pageChange]);
 

  return (
    <div className="flex items-center justify-between bg-white w-fit">
      <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md gap-[8px] "
            aria-label="Pagination"
          >
            {/* PAGINATION PREV */}
            <a
              href="#"
              className={`${
                pageChange === 1 ? "!bg-gry-30 !text-gry-70" : ""
              } relative bg-gry-50 inline-flex items-center rounded-full h-[28px] w-[28px] px-1 py-1 text-gry-100 focus:outline-offset-0`}
              onClick={() => onChange((prev) => (prev === 1 ? prev : prev - 1))}
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>

            {arrOfCurrButtons.map((page, index) => {
              return (
                // PAGINATION NUMBERS
                <a
                  key={index}
                  href="#"
                  onClick={() => onChange(page)}
                  aria-current="page"
                  className={`${
                    pageChange === page ? "!bg-or-100 !text-white" : ""
                  } relative z-10 inline-flex rounded-full items-center bg-gry-50 h-[28px] w-[28px] justify-center text-sm font-semibold text-gry-100 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
                >
                  {page}
                </a>
              );
            })}

            {/* PAGINATION NEXT */}
            <a
              href="#"
              className={`${
                pageChange === pages ? "!bg-gry-30 !text-gry-70" : ""
              } relative bg-gry-50 inline-flex items-center rounded-full h-[28px] w-[28px] px-1 py-1 text-gry-100 focus:outline-offset-0`}
              onClick={() =>
                onChange((prev) =>
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