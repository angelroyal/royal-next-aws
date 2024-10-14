"use client";

import { useState, useEffect, useContext } from "react";

import LanguageContext from "@/language/LanguageContext";
import { BlogJsonG } from "../../BlogGeneric/General/BlogJson";
import { UseBlogContext } from "@/services/blog/Context/BlogContext";
import NewsHomeBlogSkeleton from "../../skeleton/NewsHomeBlogSkeleton";
import { TruncateLetters } from "@/components/General/TruncateLetters";

export default function NewsHomeBlog() {

  const { languageData } = useContext(LanguageContext);
  const [randomBlogs, setRandomBlogs] = useState([]);
  const { isLoader } = UseBlogContext();
  useEffect(() => {
    const getRandomBlogs = (blogs, count) => {
      const shuffled = [...blogs].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count); 
    };

    setRandomBlogs(getRandomBlogs(BlogJsonG, 3)); 
  }, []);

  const searchBlog = (blog) => {
    window.open(`/blog/${blog.lang}/${blog.codeName}`, "_blank");
  };
  return (
    <div className="border border-[#ebebeb] rounded-lg mt-6 p-6">
      <h3 className="m-s-b text-fs-16 mb-4">{languageData.listingBlog.featuredNews}</h3>
      {!isLoader ? (
        randomBlogs.map((blog, index) => (
          <div
            // onClick={() => searchBlog(blog)}
            onClick={() => searchBlog(blog)}
            key={index}
            className="flex flex-col gap-1 border-b border-[#ebebeb] mt-[15.5px] cursor-pointer"
          >
            <span className="text-[#d1d2d5] text-fs-12 m-m">{blog.date}</span>

            <span className="text-fs-14 m-b text-bl-100">{blog.name}</span>

            <span className="text-fs-12 m-m text-gry-100">
              {TruncateLetters(blog.description, 21) + " ..."}
            </span>
            <div className="flex gap-2">
              {blog.type.map((type, index) => (
                <div
                  key={index}
                  className="rounded-full bg-gry-50 text-gry-100 px-2 py-1 w-fit text-fs-10 mb-[15.5px]"
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <NewsHomeBlogSkeleton />
      )}
    </div>
  );
}
