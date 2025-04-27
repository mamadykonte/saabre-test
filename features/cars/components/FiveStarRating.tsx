export const StarIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`size-${size} ${
            i < rating
              ? "fill-yellow-300 text-yellow-300"
              : "fill-transparent text-yellow-300"
          }`}
        />
      ))}
    </div>
  );
};

export default FiveStarRating;
