import { Metadata } from "next";

import { Car } from "@/features/cars/types/car";
import { CARS_PAGE_SIZE_OPTIONS, CARS_PER_PAGE } from "@/shared/constants";
import { carRepository } from "@/features/cars/repositories/carRepository";

import { CarCard } from "@/features/cars/components/CarCard";
import { PaginationWithLinks } from "@/components/common/PaginationWithLinks";

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
  const { page, pageSize } = await searchParams;
  const currentPage = parseInt(page ?? "1") || 1;
  const postsPerPage =
    parseInt(pageSize ?? `${CARS_PER_PAGE}`) || CARS_PER_PAGE;

  const { cars, totalPages } = await carRepository.fetchAll(
    currentPage,
    postsPerPage
  );

  return (
    <main className="custom-container grid gap-6">
      <section
        aria-label="Liste des voitures"
        className="flex flex-col gap-6 w-full max-w-5xl mx-auto"
      >
        {cars.map((car: Car) => (
          <CarCard key={car.id} car={car} />
        ))}
        <PaginationWithLinks
          page={currentPage}
          pageSize={postsPerPage}
          totalCount={totalPages}
          pageSizeSelectOptions={{
            pageSizeOptions: CARS_PAGE_SIZE_OPTIONS,
          }}
        />
      </section>
    </main>
  );
};

export default Home;
