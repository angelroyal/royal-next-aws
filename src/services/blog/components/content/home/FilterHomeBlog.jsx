"use client";
import { useEffect, useState } from "react";

import { UseBlogContext } from "@/services/blog/Context/BlogContext";

export default function FilterHomeBlog() {
  const { categories, setCategorySelected } = UseBlogContext();
  const [maxCategory, setMaxCategory] = useState(3);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSeeMore = () => {
    setMaxCategory(() =>
      isOpen ? setMaxCategory(3) : setMaxCategory(categories.length)
    );
    setIsOpen(!isOpen);
  };


  const handleCategory =(value)=>{
    setCategorySelected(value);
  }

  return (
    <>
      <div className="border border-[#ebebeb] rounded-lg p-6 flex flex-col gap-4">
        <h3 className="m-s-b text-fs-16">Categoría</h3>

        <div className="flex gap-4 flex-wrap">
          {categories.slice(0, maxCategory).map((category, index) => (
            <button
              onClick={()=>handleCategory(category)}
              key={index}
              className="rounded-full px-4 py-2 border border-[#ebebeb] text-fs-12 m-m text-gry-100 focus:bg-bl-100 focus:text-white"
            >
              {category}
            </button>
          ))}
        </div>

        {categories.length > 3 && (
          <button
            onClick={handleSeeMore}
            className="flex gap-1 focus:outline-none items-center"
          >
            <div className="text-bl-100 m-b text-fs-12 underline">{isOpen ? 'Ver menos': 'Ver más'}</div>
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/down-bl.svg`}
              alt="icon arrow bl"
              width={7}
              height={3.5}
              className={`${isOpen && 'rotate-180'}`}
            />
          </button>
        )}
      </div>
    </>
  );
}
