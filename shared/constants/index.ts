export const DEFAULT_PAGE = 1;
export const CARS_PER_PAGE = 3;
export const CARS_PAGE_SIZE_OPTIONS = [CARS_PER_PAGE, 5, 10, 25, 50, 100];

export const CARS_SORT_OPTIONS = [
  { value: "asc", label: "Prix croissant" },
  { value: "desc", label: "Prix décroissant" },
];
export const CARS_ENERGY_OPTIONS = [
  { value: "all", label: "Toutes" },
  { value: "Electric", label: "Electric" },
  { value: "Hybrid", label: "Hybrid" },
  { value: "Plug-in Hybrid", label: "Plug-in Hybrid" },
];

export const CARS_SEARCH_PARAMS = {
  page: "page",
  pageSize: "pageSize",
  search: "search",
  energy: "energy",
  sort: "sort",
};
