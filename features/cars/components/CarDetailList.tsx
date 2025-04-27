import { Fragment } from "react";

import { CarSpecs, CarSpecsCard } from "@/features/cars/lib/getCarSpecs";

type CarDetailListProps = {
  specs: CarSpecs | CarSpecsCard;
};

const CarDetailList = ({ specs }: CarDetailListProps) => {
  return (
    <dl className="grid grid-cols-2 gap-y-4">
      {specs.map((detail) => (
        <Fragment key={detail.label}>
          <dt className="pb-3 text-gray-500 border-b border-gray-300">
            {detail.label}
          </dt>
          <dd className="pb-3 text-right border-b border-gray-300">
            {detail.value}
          </dd>
        </Fragment>
      ))}
    </dl>
  );
};

export default CarDetailList;
