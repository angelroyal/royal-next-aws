import { filters } from "../../services/Hotels/config/filters"

export const getFiltersNew = () => {
  let filterValues = {};

  for (const key in filters) {
    if (filters.hasOwnProperty(key)) {
      const filter = filters[key];
      filterValues[key] = {};

      filterValues[key].title = filter.title;
      filterValues[key].items = [];

      for (const item of filter.items) {
        filterValues[key].items.push({ ...item });
      }

      filterValues[key].length = filter.length;
    }
  }

  return filterValues;
}
