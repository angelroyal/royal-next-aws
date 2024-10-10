"use client";

import Image from "next/image";
import { TruncateLetters } from "@/components/General/TruncateLetters";


export default function CardsHomeBlog(blog) {
  const BlogJG = blog.blog;

  const searchBlog = (BlogJG) => {
    window.open(`/blog/${BlogJG.lang}/${BlogJG.codeName}`, "_blank");
  };

  return (
    <>
      <div className="flex gap-4 flex-wrap max-lg:justify-center hover:cursor-pointer hover:shadow-xl group">
        <div
          onClick={() => searchBlog(BlogJG)}
          className="flex flex-col w-[332px] h-[372px] border border-[#ebebeb] px-4 pt-4 pb-6 rounded-lg shadow-3xl justify-between max-xl:w-[309px]  max-md:w-full"
        >
          <div className="flex flex-col gap-4 ">
            {/* IMG CARD */}
            <div className="h-[150px] overflow-hidden max-md:overflow-hidden rounded-lg">
              <Image
                src={BlogJG.image}
                width={1080}
                height={1080}
                alt="blog card"
                className="rounded-lg w-full h-full object-cover group-hover:ease-in-out group-hover:scale-110 group-hover:transition-transform group-hover:duration-500 duration-500 ease-in-out select-none" 
              />
            </div>
            {/* DATE CARD */}
            <div className="flex flex-col gap-2">
              <span className="text-[#d1d2d5] text-fs-12 m-m">
                {BlogJG.date}
              </span>
              {/* NAME CARD */}
              <span className="text-fs-16 m-b">
                {TruncateLetters(BlogJG.name, 10)}
              </span>
              {/* DESCRIPTION */}
              <span className="text-fs-12 m-m text-gry-100 text-justify">
                {TruncateLetters(BlogJG.description, 21) + " ..."}
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            {BlogJG.type.map((blogT, index) => (
              <div
                key={index}
                className="rounded-full bg-gry-50 text-gry-100 px-2 py-1 w-fit text-fs-10"
              >
                {blogT}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
