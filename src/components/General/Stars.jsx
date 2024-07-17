import Image from "next/image";

export function TotalStars({ stars, width = null, height = null }) {
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
      ))}
    </div>
  );
}

