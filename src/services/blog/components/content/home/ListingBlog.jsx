"use client";

import { useEffect, useState } from "react";

import CardsHomeBlog from "./CardsHomeBlog";
// import PaginationT from "@/app/config/PaginationT";
import { BlogJsonG } from "../../BlogGeneric/General/BlogJson";
import PaginationT from "@/components/General/PaginationT";

export default function ListingBlog() {
  // PAGINATION COUNT
  const blogPerPage = 9;
  const blogJson=BlogJsonG;
  // PAGINATION PAGE CHANGE
  const [auxBlogData, setAuxBlogData] = useState(null);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
// CHANGE PAGE
  useEffect(() => {
    if (!isNaN(currentPage)) {
      setCurrentBlog(
        auxBlogData && auxBlogData.slice(indexOfFirstBlog, indexOfLastBlog)
      );
    }
  }, [currentPage]);

//   SAMPLES OTHER PAGES
  useEffect(() => {
    if (BlogJsonG) {
      setAuxBlogData(BlogJsonG);
      setCurrentBlog(BlogJsonG.slice(indexOfFirstBlog, indexOfLastBlog));
    }
  }, [BlogJsonG]);


  const indexOfLastBlog = currentPage * blogPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogPerPage;

  return (
    <>
    <div className="relative">
      <div className="flex gap-4 flex-wrap mt-[47px] max-lg:justify-center mb-6">
        {currentBlog && (
          <>
            {currentBlog.map((blog, index) => (
              <CardsHomeBlog blog={blog} />
            ))}
          </>
        )}
        
      </div>
      <div className="my-11 max-md:my-11 max-md:flex max-md:justify-center">
        {BlogJsonG && (
            <PaginationT
              count={Math.ceil(BlogJsonG.length / blogPerPage)}
              pageChange={currentPage}
              onChange={setCurrentPage}
            />
          )}
      </div>
      </div>
    </>
  );
}