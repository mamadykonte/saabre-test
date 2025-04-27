import { Car } from "@/features/cars/types/car";
import { apiFetch } from "@/lib/api/fetcher";

interface GetCarByIdResponse {
  data: Car;
}

export async function getCarById(carId: string): Promise<Car> {
  const response = await apiFetch<GetCarByIdResponse>(`/cars/${carId}`);
  return response.data;
}
