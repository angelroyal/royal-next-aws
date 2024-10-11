"use client";

import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { createContext, useContext, useEffect, useState } from "react";

import { BlogJsonG } from "../components/BlogGeneric/General/BlogJson";
import { FilterBlogInput } from "../configs/FiltersBlog";

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
      setBlogData(response);
      setIsLoader(false);
      // const response = await axiosWithInterceptor.get()
    } catch (error) {
      console.log(error);
      setIsLoader(false);
      throw error;
    }
  };

  const getCategories = (blogs) => {
    let categoriesFilter = [];
    blogs.map((blog) => {
      if (blog.type) {
        blog.type.map((valueType) => {
          valueType = valueType
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .toLowerCase();
          if (!categoriesFilter.includes(valueType)) {
            categoriesFilter = [...categoriesFilter, valueType];
          }
        });
      }
    });
    setCategories(categoriesFilter);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  useEffect(() => {
    if (blogData) {
      getCategories(blogData);
      let filter = [...blogData];
      if (inputSearch && inputSearch.length > 0) {
        console.log(inputSearch);
        filter = FilterBlogInput(inputSearch, filter);
      }

      if (categorySelected) {
        console.log(categorySelected);
      }

      console.log(filter);

      setBlogDataFilter(filter);
    }
  }, [blogData, inputSearch, categorySelected]);

  return (
    <BlogContext.Provider
      value={{
        categories,
        inputSearch,
        setInputSearch,
        blogDataFilter,
        setCategorySelected,
        isLoader,
        setIsLoader,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogProviderContext };
