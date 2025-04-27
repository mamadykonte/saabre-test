import { Car } from "@/features/cars/types/car";
import { getAllCars } from "@/features/cars/api/getAllCars";
import { getCarById } from "@/features/cars/api/getCarById";

export const carRepository = {
  async fetchAll(page: number, perPage: number ) {
    return getAllCars(page, perPage);
  },

  async fetchById(carId: string): Promise<Car> {
    return getCarById(carId);
  },
};
