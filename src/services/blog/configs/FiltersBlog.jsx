import { filter } from "lodash";

export function FilterBlogInput(input, blogs) {
  const normalizedInputValue = input;

  let filterData = blogs.filter(
    (blogInfo) =>
      (blogInfo.name &&
        blogInfo.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-zA-Z0-9 ]/g, "")
          .toLowerCase()
          .includes(normalizedInputValue)) ||
      (blogInfo.date && blogInfo.date.includes(normalizedInputValue)) ||
      (blogInfo.description &&
        blogInfo.description
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-zA-Z0-9 ]/g, "")
          .toLowerCase()
          .includes(normalizedInputValue))
  );

  return filterData;
}
