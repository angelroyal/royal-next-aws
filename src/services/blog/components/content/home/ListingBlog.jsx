"use client";

import { useEffect, useState } from "react";

import CardsHomeBlog from "./CardsHomeBlog";
// import PaginationT from "@/app/config/PaginationT";
import PaginationT from "@/components/General/PaginationT";
import { UseBlogContext } from "@/services/blog/Context/BlogContext";
import CardsHomeBlogSkeleton from "../../skeleton/CardsHomeBlogSkeleton";

export default function ListingBlog() {
  const { blogDataFilter, isLoader } = UseBlogContext();
  // PAGINATION COUNT
  const blogPerPage = 9;
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
    if (blogDataFilter) {
      setAuxBlogData(blogDataFilter);
      setCurrentBlog(blogDataFilter.slice(indexOfFirstBlog, indexOfLastBlog));
    }
  }, [blogDataFilter]);

  const indexOfLastBlog = currentPage * blogPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogPerPage;

  return (
    <>
      <div className="relative">
        <div className="flex gap-4 flex-wrap mt-[47px] max-lg:justify-center mb-6">
          {!isLoader && currentBlog && blogDataFilter.length > 0 ? (
            <>
              {currentBlog.map((blog, index) => (
                <CardsHomeBlog blog={blog} />
              ))}
            </>
          ) : (
            !isLoader && (
              <div className="text-center w-full text-fs-18 m-s-b">
                No se encontró resultados{" "}
              </div>
            )
          )}

          {isLoader && <CardsHomeBlogSkeleton />}
        </div>
        {!isLoader && blogDataFilter.length > 0 && (
          <div className="my-11 max-md:my-11 max-md:flex max-md:justify-center">
            {blogDataFilter && (
              <PaginationT
                count={Math.ceil(blogDataFilter.length / blogPerPage)}
                pageChange={currentPage}
                onChange={setCurrentPage}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
