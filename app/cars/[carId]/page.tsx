import { Metadata } from "next";
import { notFound } from "next/navigation";

import { carRepository } from "@/features/cars/repositories/carRepository";

import {
  BackLink,
  CarDetailHeader,
  CarDetailSpecs,
  CarImageWithPricing,
} from "@/features/cars/components/CarDetail";
import CarReviews from "@/features/cars/components/CarDetail/CarReviewsList";
import { Card } from "@/components/ui/card";

interface Props {
  params: Promise<{ carId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { carId } = await params;
  const car = await carRepository.fetchById(carId);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return {
    title: `${car.brand} ${car.model} - Fiche voiture`,
    description: `Découvrez la ${car.brand} ${car.model} : vitesse max ${car.maxSpeed} km/h, énergie ${car.energySource}.`,
    openGraph: {
      title: `${car.brand} ${car.model} - Fiche voiture`,
      description: `Découvrez les détails techniques de la ${car.brand} ${car.model}.`,
      url: `${siteUrl}/cars/${carId}`,
      siteName: "Saabre",
      locale: "fr_FR",
      type: "article",
      images: [
        {
          url: `${siteUrl}/default-car.jpg`,
          width: 1200,
          height: 630,
          alt: `${car.brand} ${car.model}`,
        },
      ],
    },
  };
}

export default async function CarDetailPage({ params }: Props) {
  const { carId } = await params;

  if (!carId) return notFound();
  const car = await carRepository.fetchById(carId);
  if (car.id === null) return notFound();

  return (
    <main className="custom-container max-w-5xl mx-auto">
      <BackLink />
      <div className="flex flex-col gap-12">
        <Card className="p-8">
          <CarDetailHeader car={car} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CarImageWithPricing car={car} />
            <CarDetailSpecs car={car} />
          </div>
        </Card>

        <CarReviews reviews={car.reviews} />
      </div>
    </main>
  );
}
