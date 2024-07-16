// import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export function TotalStars({ stars, width = null, height = null }) {
  const ClassNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className="flex items-center">
      {[0, 1, 2, 3, 4].map((rating) => (
        <span key={rating} className="flex-shrink-0">
          {stars >= rating + 1 ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}icons/stars/full-star.svg`}
              alt="full start"
              width={12}
              height={12}
              className={`${width ? width : "w-5"} ${height ? height : "h-5"}`}
            />
          ) : stars > rating ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}icons/stars/mid-star.svg`}
              alt="full start"
              width={12}
              height={12}
              className={`${width ? width : "w-5"} ${height ? height : "h-5"}`}
            />
          ) : (
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}icons/stars/empty-start.svg`}
              alt="full start"
              width={12}
              height={12}
              className={`${width ? width : "w-5"} ${height ? height : "h-5"}`}
            />
          )}
        </span>
        // <StarIcon
        //   key={rating}
        //   className={ClassNames(
        //     stars > rating ? "text-yellow-400 w-3.5	" : "text-gray-200 w-3.5",
        //     `${width ? width : "w-5"} ${height ? height : "h-5"}  flex-shrink-0`
        //   )}
        //   aria-hidden="true"
        // />
      ))}
    </div>
  );
}

export function HalfStarIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2l2.09 6.26h6.59l-5.34 3.87 2.09 6.26-5.34-3.87-5.34 3.87 2.09-6.26L3.32 8.26h6.59L12 2z" />
      <path
        d="M12 2v13.47l5.34 3.87-2.09-6.26L21.32 8.26h-6.59L12 2z"
        className="text-gray-200"
      />
    </svg>
  );
}
