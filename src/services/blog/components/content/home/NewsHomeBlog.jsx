"use client";

import { useState, useEffect } from "react";

import { BlogJsonG } from "../../BlogGeneric/General/BlogJson";
import { TruncateLetters } from "@/components/General/TruncateLetters";

export default function NewsHomeBlog() {
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    const getRandomBlogs = (blogs, count) => {
      const shuffled = [...blogs].sort(() => 0.5 - Math.random()); // Copia y baraja sin alterar el original
      return shuffled.slice(0, count); // Selecciona los primeros 'count' elementos aleatorios
    };

    setRandomBlogs(getRandomBlogs(BlogJsonG, 3)); // Aquí seleccionamos 3 aleatorios
  }, []);

  const searchBlog = (blog) => {
    window.open(`/blog/${blog.lang}/${blog.codeName}`, "_blank");
  };
  return (
    <div className="border border-[#ebebeb] rounded-lg mt-6 p-6">
      <h3 className="m-s-b text-fs-16 mb-4">Noticias destacadas</h3>

      {randomBlogs.map((blog, index) => (
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
      ))}
    </div>
  );
}
