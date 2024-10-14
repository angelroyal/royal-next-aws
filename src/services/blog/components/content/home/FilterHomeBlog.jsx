"use client";
import { useState } from "react";

import { UseBlogContext } from "@/services/blog/Context/BlogContext";
import FilterCategorySkeleton from "../../skeleton/FilterCategorySkeleton";

export default function FilterHomeBlog() {
  const { categories, setCategorySelected, isLoader, categorySelected } =
    UseBlogContext();
  const [maxCategory, setMaxCategory] = useState(3);
  const [isOpen, setIsOpen] = useState(false);

  const handleSeeMore = () => {
    setMaxCategory(() =>
      isOpen ? setMaxCategory(3) : setMaxCategory(categories.length)
    );
    setIsOpen(!isOpen);
  };

  const handleCategory = (value) => {
    if (value === categorySelected) {
      setCategorySelected("");
    } else {
      setCategorySelected(value);
    }

    // if (!categorySelected) {
    //   let filterValue = value
    //   .normalize("NFD")
    //   .replace(/[\u0300-\u036f]/g, "")
    //   .replace(/[^a-zA-Z0-9 ]/g, "")
    //   .toLowerCase();

    //   setCategorySelected(value);
    // } else {
    //   setCategorySelected("");
    // }
  };

  return (
    <>
      <div className="border border-[#ebebeb] rounded-lg p-6 flex flex-col gap-4">
        <h3 className="m-s-b text-fs-16">Categoría</h3>
        {!isLoader ? (
          <>
            <div className="flex gap-4 flex-wrap">
              {categories.length > 0 &&
                categories.slice(0, maxCategory).map((category, index) => (
                  <button
                    onClick={() => handleCategory(category.value)}
                    key={index}
                    className={`rounded-full px-4 py-2 text-fs-12 m-m  ${
                      categorySelected === category.value
                        ? "bg-bl-100 text-white"
                        : "text-gry-100 border border-[#ebebeb]"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
            </div>

            {categories.length > 3 && (
              <button
                onClick={handleSeeMore}
                className="flex gap-1 focus:outline-none items-center"
              >
                <div className="text-bl-100 m-b text-fs-12 underline">
                  {isOpen ? "Ver menos" : "Ver más"}
                </div>
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/down-bl.svg`}
                  alt="icon arrow bl"
                  width={7}
                  height={3.5}
                  className={`${isOpen && "rotate-180"}`}
                />
              </button>
            )}
          </>
        ) : (
          <FilterCategorySkeleton />
        )}
      </div>
    </>
  );
}
