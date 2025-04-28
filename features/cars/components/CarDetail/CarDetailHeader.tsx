import { Car } from "../../types/car";
import { isCommercialized } from "../../lib";

import { Badge } from "@/components/ui/badge";
import Rating from "../Rating";

interface CarDetailHeaderProps {
  car: Car;
}

const CarDetailHeader = ({ car }: CarDetailHeaderProps) => {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">
        {car.brand} {car.model}
      </h1>
      <div className="flex flex-wrap items-center gap-4">
        {isCommercialized(car.commercializationDates) && (
          <Badge variant="outline" className="capitalize">
            Commercialisé
          </Badge>
        )}
        <Rating car={car} />
      </div>
    </section>
  );
};
export default CarDetailHeader;
