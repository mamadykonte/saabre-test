export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#E3D027"
      stroke="#E3D027"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.0028 18.8547L6.7536 21.6431C6.47934 21.8069 6.10602 21.7802 5.82033 21.5784C5.53844 21.3765 5.3975 21.026 5.42035 20.6832L6.45267 14.7597L2.22093 10.5619C1.97485 10.3219 1.88762 9.96001 1.9958 9.6286C2.1036 9.301 2.38816 9.06102 2.73061 9.01149L8.56683 8.14679L11.18 2.76502C11.3362 2.44995 11.6524 2.25 12.0028 2.25C12.3533 2.25 12.6732 2.44999 12.8256 2.76502L15.4388 8.14679L21.2784 9.01149C21.6213 9.06102 21.9032 9.301 22.0136 9.6286C22.1203 9.96001 22.0327 10.3219 21.7889 10.5619L17.5529 14.7597L18.5548 20.6832C18.6119 21.026 18.471 21.3765 18.1853 21.5784C17.9034 21.7802 17.4958 21.8069 17.2215 21.6431L12.0028 18.8547Z" />
    </svg>
  );
};

const FiveStarRating = ({
  rating,
  size = 6,
}: {
  rating: number;
  size?: number;
}) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon
          key={i}
          className={`size-${size} ${
            i < Math.round(rating) ? "" : "fill-transparent"
          }`}
        />
      ))}
    </div>
  );
};

export default FiveStarRating;
