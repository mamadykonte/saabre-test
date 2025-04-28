import Image from "next/image";

import { Car } from "../../types/car";

interface CarCardImageProps {
  car: Car;
}

const CarCardImage = ({ car }: CarCardImageProps) => {
  return (
    <figure className="relative w-full h-56 md:w-52 md:h-32 overflow-hidden rounded-md bg-gray-100">
      <Image
        src={`https://picsum.photos/seed/${car.id}/200/300.webp?random=${car.id}`}
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
  );
};

export default CarCardImage;
