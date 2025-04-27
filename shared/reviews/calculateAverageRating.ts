import { Review } from "@/features/cars/types/car";

export const calculateAverageRating = (reviews: Review[]) => {
  if (reviews.length === 0) return 0;

  const total = reviews.reduce(
    (acc, review) => acc + parseInt(review.rating),
    0
  );
  return total / reviews.length;
};
