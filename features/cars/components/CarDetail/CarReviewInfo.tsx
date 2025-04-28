import { Review } from "../../types/car";
import { formatElapsedTime } from "@/shared/formatters/formatElapsedTime";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import FiveStarRating from "../FiveStarRating";

interface CarReviewInfoProps {
  review: Review;
}
const CarReviewInfo = ({ review }: CarReviewInfoProps) => {
  return (
    <Card>
      <CardContent className="p-6 py-2 md:px-8 ">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="size-8 md:size-12">
                <AvatarImage
                  src={review.reviewer.avatar}
                  alt={`${review.reviewer.firstName} ${review.reviewer.lastName}`}
                />
                <AvatarFallback>
                  {review.reviewer.firstName[0]}
                  {review.reviewer.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">
                  {review.reviewer.firstName} {review.reviewer.lastName}
                </h4>
                <div className="flex items-center gap-1 mt-1">
                  <FiveStarRating rating={parseFloat(review.rating)} size={4} />

                  <Badge variant="secondary" className="ml-2 text-xs">
                    {parseFloat(review.rating).toFixed(1)}
                  </Badge>
                </div>
              </div>
            </div>
            <time className="text-sm text-gray-500">
              {formatElapsedTime(review.reviewDate)}
            </time>
          </div>
          <p className="text-gray-600">{review.text}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarReviewInfo;
