"use client"

import { UseBlogContext } from "@/services/blog/Context/BlogContext";


export default function SearchHomeBlog() {
  const { inputSearch, setInputSearch } = UseBlogContext();

  return (
    <>
      <form className="w-full mb-[24px]">
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
            onChange={(e)=>setInputSearch(e.target.value)}
            type="search"
            id="default-search"
            className="w-full py-2 px-4 ps-10 text-gry-100 border border-[#ebebeb] rounded-full bg-white  placeholder:text-fs-12 placeholder:italic focus:outline-none"
            placeholder="Buscar"
            required
          />
        </div>
      </form>
    </>
  );
}
