import { Car } from "@/features/cars/types/car";
import { CARS_SORT_OPTIONS } from "@/shared/constants";

interface GetVisibleCarsParams {
  cars: Car[];
  search?: string;
  energy?: string;
  sort?: string;
}

export function getVisibleCars({
  cars,
  search = "",
  energy = "",
  sort = "",
}: GetVisibleCarsParams): Car[] {
  let filtered = [...cars];

  if (search) {
    filtered = filtered.filter((car) => {
      const brand = car.brand.toLowerCase();
      const model = car.model.toLowerCase();
      return brand.includes(search) || model.includes(search);
    });
  }

  if (energy) {
    filtered = filtered.filter(
      (car) => car.energySource.toLowerCase() === energy
    );
  }

  if (sort === "asc") {
    filtered.sort(
      (a, b) =>
        parseFloat(a.pricing.currentPrice) - parseFloat(b.pricing.currentPrice)
    );
  } else if (sort === CARS_SORT_OPTIONS[1].value) {
    filtered.sort(
      (a, b) =>
        parseFloat(b.pricing.currentPrice) - parseFloat(a.pricing.currentPrice)
    );
  }

  return filtered;
}
