import { Car } from "@/features/cars/types/car";
import { getAllCars } from "@/features/cars/api/getAllCars";
import { getCarById } from "@/features/cars/api/getCarById";

export const carRepository = {
  async fetchAll(): Promise<Car[]> {
    const { totalPages } = await getAllCars(1, 1);
    const { cars } = await getAllCars(1, totalPages);
    return cars;
  },

  async fetchPaginated(page: number, perPage: number) {
    return getAllCars(page, perPage);
  },

  async fetchById(carId: string): Promise<Car> {
    return getCarById(carId);
  },
};
