"use client";

import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { createContext, useContext, useEffect, useState } from "react";

import { BlogJsonG } from "../components/BlogGeneric/General/BlogJson";
import { FilterBlogInput, FilterCategoryBlog } from "../configs/FiltersBlog";

const BlogContext = createContext();

export const UseBlogContext = () => useContext(BlogContext);

const BlogProviderContext = ({ children }) => {
  const [blogData, setBlogData] = useState([]);
  const [blogDataFilter, setBlogDataFilter] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState("");
  const [isLoader, setIsLoader] = useState(true);

  const getAllBlogs = async () => {
    try {
      const response = BlogJsonG;
      setIsLoader(false);
      setBlogData(response);
      // const response = await axiosWithInterceptor.get()
    } catch (error) {
      console.log(error);
      setIsLoader(false);
      throw error;
    }
  };

  const setValueTypes = ()=>{

  }

 

  useEffect(() => {
    getAllBlogs();
  }, []);

  useEffect(() => {
    if (blogData) {
      let filter = [...blogData];
      if (inputSearch && inputSearch.length > 0) {
        filter = FilterBlogInput(inputSearch, filter);
      }

      if (categorySelected) {
        filter = FilterCategoryBlog(categorySelected, filter);
      }
      setBlogDataFilter(filter);
    }
  }, [blogData, inputSearch, categorySelected]);

  return (
    <BlogContext.Provider
      value={{
        blogData,
        isLoader,
        categories,
        getAllBlogs,
        setIsLoader,
        inputSearch,
        setCategories,
        setInputSearch,
        blogDataFilter,
        categorySelected,
        setCategorySelected,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProviderContext };
