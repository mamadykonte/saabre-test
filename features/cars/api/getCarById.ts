import { Car } from "@/features/cars/types/car";
import { apiFetch } from "@/lib/api/fetcher";
import { APIRoutes } from "./endpoints";

interface GetCarByIdResponse {
  data: Car;
}

export async function getCarById(carId: string): Promise<Car> {
  const response = await apiFetch<GetCarByIdResponse>(
    `${APIRoutes.CarById}${carId}`
  );
  return response.data;
}
