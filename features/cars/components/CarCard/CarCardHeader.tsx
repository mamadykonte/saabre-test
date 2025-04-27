import { Car } from "@/features/cars/types/car";
import { formatPrice } from "@/shared/formatters";
import { isCommercialized } from "../../lib";

import { Badge } from "@/components/ui/badge";
import Rating from "../Rating";

interface CarCardHeaderProps {
  car: Car;
}

const CarCardHeader = ({ car }: CarCardHeaderProps) => {
  return (
    <section className="flex flex-col flex-1 gap-4 md:gap-3">
      <h2 className="font-inter text-2xl">
        {car.brand} - {car.model}
      </h2>
      <p className="font-semibold text-xl md:text-sm">
        {formatPrice(car.pricing.currentPrice)}
      </p>
      {isCommercialized(car.commercializationDates) && (
        <Badge variant="secondary" aria-label="Statut de commercialisation">
          Commercialisé
        </Badge>
      )}
      {car.reviews?.length > 0 && <Rating car={car} />}
    </section>
  );
};

export default CarCardHeader;
