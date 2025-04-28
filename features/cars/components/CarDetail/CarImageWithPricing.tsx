import Image from "next/image";

import { Car } from "../../types/car";
import { formatDate, formatPrice } from "@/shared/formatters";

interface CarImageWithPricingProps {
  car: Car;
}

const CarImageWithPricing = ({ car }: CarImageWithPricingProps) => {
  const priceChange =
    Number(car.pricing.currentPrice) - Number(car.pricing.basePrice);
  const priceChangePercent =
    (priceChange / Number(car.pricing.basePrice)) * 100;
  const isPriceIncreased = priceChange > 0;

  return (
    <section>
      <figure className="aspect-8/7 overflow-hidden rounded-lg">
        <Image
          src="/default-car.jpg"
          alt={`Voiture ${car.brand} ${car.model}`}
          className="w-full h-full object-cover"
          priority
          width={300}
          height={200}
        />
        <figcaption className="sr-only">
          {car.brand} {car.model}
        </figcaption>
      </figure>
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">
            {formatPrice(car.pricing.currentPrice)}
          </p>
          <div className="text-right">
            <p className="text-sm text-gray-500">
              Prix de base: {formatPrice(car.pricing.basePrice)}
            </p>
            <p
              className={`text-sm font-medium ${
                isPriceIncreased ? "text-red-700" : "text-green-700"
              }`}
            >
              {isPriceIncreased ? "+" : ""}
              {priceChange.toLocaleString()} € ({isPriceIncreased ? "+" : ""}
              {priceChangePercent.toFixed(1)}%)
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-500 text-right">
          Dernière mise à jour : {formatDate(car.lastUpdated)}
        </p>
      </div>
    </section>
  );
};
export default CarImageWithPricing;
