import { CommercializationDates } from "../types/car";

export const isCommercialized = (dates: CommercializationDates): boolean => {
  const now = new Date();
  const startDate = new Date(dates.start);
  const endDate = dates.end ? new Date(dates.end) : null;

  return now >= startDate && (!endDate || now <= endDate);
};
