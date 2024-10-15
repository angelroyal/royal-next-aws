"use client";

import { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";
import { UseBlogContext } from "@/services/blog/Context/BlogContext";

export default function SearchHomeBlog() {
  const { languageData } = useContext(LanguageContext);
  const { inputSearch, setInputSearch } = UseBlogContext();

  const handleChange = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página
    console.log("Formulario enviado:", text);
  };

  return (
    <>
      <form className="w-full mb-[24px]" onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute cursor-pointer inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/search/search-b.svg`}
              alt="icon search"
              className="cursor-pointer"
              width={15}
              height={15}
            />
          </div>

          <input
            value={inputSearch}
            onChange={handleChange}
            type="text"
            id="default-search"
            className="w-full py-2 px-4 ps-10 text-gry-100 border border-[#ebebeb] rounded-full bg-white  placeholder:text-fs-12 placeholder:italic focus:outline-none"
            placeholder={languageData.searchMobilHotel.button}
            required
          />
        </div>
      </form>
    </>
  );
}
