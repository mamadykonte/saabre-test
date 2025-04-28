import { Review } from "../../types/car";

import CarReviewInfo from "./CarReviewInfo";

interface CarReviewsListProps {
  reviews: Review[];
}

const CarReviewsList = ({ reviews }: CarReviewsListProps) => {
  return (
    <section className="w-full flex flex-col gap-4 bg-white rounded-2xl shadow-sm border p-8 ">
      <h3 className="text-lg font-semibold">Avis clients ({reviews.length})</h3>

      {reviews.map((review, index) => (
        <CarReviewInfo key={index} review={review} />
      ))}
    </section>
  );
};

export default CarReviewsList;
