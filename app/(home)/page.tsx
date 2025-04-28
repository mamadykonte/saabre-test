import { Metadata } from "next";

import { Car } from "@/features/cars/types/car";
import { CARS_PAGE_SIZE_OPTIONS, CARS_PER_PAGE } from "@/shared/constants";
import { carRepository } from "@/features/cars/repositories/carRepository";

import { CarCard } from "@/features/cars/components/CarCard";
import { PaginationWithLinks } from "@/components/common/PaginationWithLinks";
import SearchBar from "@/components/common/SearchBar";

export const metadata: Metadata = {
  title: "Liste des voitures - Saabre",
  description:
    "Découvrez toutes nos voitures disponibles. Comparez les prix, les caractéristiques techniques et trouvez votre prochaine voiture.",
  openGraph: {
    title: "Liste des voitures - Saabre",
    description:
      "Explorez notre collection de voitures modernes et performantes.",
    url: "https://tonsite.com",
    siteName: "Saabre",
    locale: "fr_FR",
    type: "website",
  },
};

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const Home = async ({ searchParams }: HomeProps) => {
  const {
    page: rawPage,
    pageSize: rawPageSize,
    search: rawSearch,
  } = await searchParams;

  const page = parseInt(rawPage ?? "1", 10) || 1;
  const pageSize =
    parseInt(rawPageSize ?? `${CARS_PER_PAGE}`, 10) || CARS_PER_PAGE;
  const search = rawSearch?.toLowerCase().trim() || "";

  const { cars, totalPages } = await carRepository.fetchAll(page, pageSize);

  const visibleCars = search
    ? cars.filter((car: Car) => {
        const brand = car.brand.toLowerCase();
        const model = car.model.toLowerCase();
        return brand.includes(search) || model.includes(search);
      })
    : cars;

  const effectiveTotalCount = search ? visibleCars.length : totalPages;

  return (
    <main className="custom-container grid gap-6">
      <section className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
        <SearchBar />

        {visibleCars.length === 0 ? (
          <p className="text-center text-gray-500">Aucune voiture trouvée.</p>
        ) : (
          <>
            {visibleCars.map((car: Car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </>
        )}

        <PaginationWithLinks
          page={page}
          pageSize={pageSize}
          totalCount={effectiveTotalCount}
          pageSizeSelectOptions={{
            pageSizeOptions: CARS_PAGE_SIZE_OPTIONS,
          }}
        />
      </section>
    </main>
  );
};

export default Home;
