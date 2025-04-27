import { Car } from "@/features/cars/types/car";

import { calculateAverageRating } from "@/shared/reviews/calculateAverageRating";
import { formatWithOneDecimal } from "@/shared/formatters";

import FiveStarRating from "./FiveStarRating";

interface RatingProps {
  car: Car;
}

const Rating = ({ car }: RatingProps) => {
  const hasReviews = car.reviews.length > 0;
  const averageRating = calculateAverageRating(car.reviews);

  return (
    <div className="flex items-center gap-2.5">
      {hasReviews && (
        <>
          <FiveStarRating rating={Math.round(averageRating)} />
          <p className="font-semibold text-xs text-gray-500">
            {formatWithOneDecimal(averageRating)} - {car.reviews.length} avis
          </p>
        </>
      )}
    </div>
  );
};

export default Rating;
