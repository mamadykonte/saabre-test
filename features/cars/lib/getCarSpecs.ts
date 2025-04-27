import { Car } from "@/features/cars/types/car";

import { formatDimensions } from "./formatDimensions";
import { formatDate } from "@/shared/formatters";

interface CarSpec {
  label: string;
  value: string;
}

export const getCarSpecsCard = (car: Car): CarSpec[] => {
  return [
    { label: "Vitesse max", value: `${car.maxSpeed} km/h` },
    { label: "Source d’énergie", value: car.energySource },
    { label: "Dimensions", value: formatDimensions(car.dimensions) },
  ];
};

export const getCarSpecs = (car: Car): CarSpec[] => {
  return [
    { label: "Vitesse max", value: `${car.maxSpeed} km/h` },
    { label: "Source d’énergie", value: car.energySource },
    { label: "Dimensions", value: formatDimensions(car.dimensions) },
    {
      label: "Date de début de commercialisation",
      value: formatDate(car.commercializationDates.start),
    },
    {
      label: "Date de fin de commercialisation",
      value: car.commercializationDates.end
        ? formatDate(car.commercializationDates.end)
        : "Date non spécifiée",
    },
    {
      label: "Capacité de la batterie",
      value: car.electricDetails
        ? `${car.electricDetails.batteryCapacity} kWh`
        : "Non spécifié",
    },
    {
      label: "Autonomie",
      value: car.electricDetails
        ? `${car.electricDetails.maxRange} km`
        : "Non spécifié",
    },
    {
      label: "Couple max",
      value: car.electricDetails
        ? `${car.electricDetails.maxTorque} Nm`
        : "Non spécifié",
    },
  ];
};

export type CarSpecs = ReturnType<typeof getCarSpecs>;
export type CarSpecsCard = ReturnType<typeof getCarSpecsCard>;
