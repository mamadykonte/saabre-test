import { Car } from "@/features/cars/types/car";
import { apiFetch } from "@/lib/api/fetcher";
import { APIRoutes } from "./endpoints";

interface GetAllCarsResponse {
  data: Car[];
  meta: {
    total: number;
  };
}

export async function getAllCars(
  page: number,
  perPage: number
): Promise<{ cars: Car[]; totalPages: number }> {
  const offset = (page - 1) * perPage;

  const response = await apiFetch<GetAllCarsResponse>(
    `${APIRoutes.Cars}?limit=${perPage}&offset=${offset}`
  );

  return { cars: response.data, totalPages: response.meta.total };
}
