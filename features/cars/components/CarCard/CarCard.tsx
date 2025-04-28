import Link from "next/link";

import { Car } from "@/features/cars/types/car";
import { getCarSpecsCard } from "../../lib";

import { Card, CardContent } from "@/components/ui/card";

import CarDetailList from "../CarDetailList";
import CarCardHeader from "./CarCardHeader";
import CarCardImage from "./CarCardImage";

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
        <CarCardImage car={car} />
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
