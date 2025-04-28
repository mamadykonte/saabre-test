import { Metadata } from "next";

import { carRepository } from "@/features/cars/repositories/carRepository";
import { getVisibleCars } from "@/features/cars/lib/getVisibleCars";

import { CarCard } from "@/features/cars/components/CarCard";
import { PaginationWithLinks } from "@/components/common/PaginationWithLinks";
import SearchBar from "@/components/common/SearchBar";
import SortAndFilter from "@/components/common/SortAndFilter";

import {
  CARS_PAGE_SIZE_OPTIONS,
  CARS_PER_PAGE,
  CARS_SEARCH_PARAMS,
} from "@/shared/constants";

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
  const rawSearchParams = await searchParams;
  const {
    [CARS_SEARCH_PARAMS.page]: rawPage,
    [CARS_SEARCH_PARAMS.pageSize]: rawPageSize,
    [CARS_SEARCH_PARAMS.search]: rawSearch,
    [CARS_SEARCH_PARAMS.energy]: rawEnergy,
    [CARS_SEARCH_PARAMS.sort]: rawSort,
  } = rawSearchParams;

  const page = Math.max(1, parseInt(rawPage ?? "1", 10) || 1);
  const pageSize =
    parseInt(rawPageSize ?? `${CARS_PER_PAGE}`, 10) || CARS_PER_PAGE;
  const search = rawSearch?.trim().toLowerCase() || "";
  const energy = rawEnergy?.trim().toLowerCase() || "";
  const sort = rawSort || "";

  const { cars, totalPages } = await carRepository.fetchAll(page, pageSize);

  const visibleCars = getVisibleCars({ cars, search, energy, sort });

  const effectiveTotalCount =
    search || energy || sort ? visibleCars.length : totalPages;

  return (
    <div className="custom-container max-w-5xl flex flex-col gap-6">
      <header>
        <h1 className="text-3xl font-bold mb-4">Liste des voitures</h1>
        <div className="flex flex-col md:flex-row gap-6">
          <SearchBar />
          <SortAndFilter />
        </div>
      </header>

      <main className="grid gap-6">
        <section className="flex flex-col gap-6 w-full">
          {visibleCars.length === 0 ? (
            <p className="text-center text-gray-500">Aucune voiture trouvée.</p>
          ) : (
            visibleCars.map((car) => <CarCard key={car.id} car={car} />)
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
    </div>
  );
};

export default Home;
