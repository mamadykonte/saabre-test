import { Car } from "../../types/car";
import { getCarSpecs } from "../../lib";

import CarDetailList from "../CarDetailList";

interface CarDetailSpecsProps {
  car: Car;
}

const CarDetailSpecs = ({ car }: CarDetailSpecsProps) => {
  const specs = getCarSpecs(car);
  return (
    <section className="text-base text-gray-700 flex-1">
      <h2 className="text-xl font-semibold mb-4">Spécifications techniques</h2>
      <CarDetailList specs={specs} />
    </section>
  );
};
export default CarDetailSpecs;
