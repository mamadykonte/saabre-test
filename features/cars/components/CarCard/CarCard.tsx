import Link from "next/link";
import Image from "next/image";

import { Car } from "@/features/cars/types/car";
import { getCarSpecsCard } from "../../lib";

import { Card, CardContent } from "@/components/ui/card";

import CarDetailList from "../CarDetailList";
import CarCardHeader from "./CarCardHeader";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const specs = getCarSpecsCard(car);
  return (
    <Link href={`/cars/${car.id}`} passHref>
      <Card
        className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-10 cursor-pointer hover:shadow-lg transition-shadow"
        role="link"
      >
        <figure className="relative w-full h-56 md:w-52 md:h-32 overflow-hidden rounded-md bg-gray-100">
          <Image
            src="/default-car.jpg"
            alt={`Voiture ${car.brand} ${car.model}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 208px"
          />
          <figcaption className="sr-only">
            {car.brand} {car.model}
          </figcaption>
        </figure>

        <CardContent className="p-0 w-full flex flex-col md:flex-row flex-1 gap-3">
          <CarCardHeader car={car} />
          <section className="text-base text-gray-700 flex-1">
            <CarDetailList specs={specs} />
          </section>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CarCard;
