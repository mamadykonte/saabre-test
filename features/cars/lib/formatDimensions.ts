import { Dimensions } from "../types/car";

export const formatDimensions = (dimensions: Dimensions): string => {
  const toMeters = (value: number) =>
    (value / 1000).toFixed(1).replace(".", ",");
  return `${toMeters(dimensions.length)}mx${toMeters(
    dimensions.width
  )}mx${toMeters(dimensions.height)}m`;
};
