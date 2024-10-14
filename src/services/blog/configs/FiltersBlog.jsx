export function FilterBlogInput(input, blogs) {
  const normalizedInputValue = input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .toLowerCase();

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

const normalizeText = (text) => {
  return text
    .normalize("NFD") // Descompone los caracteres con acentos
    .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
    .toLowerCase();
};

export function FilterCategoryBlog(category, blogs) {
  let filterData = blogs.filter((blog) =>
    blog.type.some((type) => normalizeText(type) === category)
  );
  return filterData;
}
