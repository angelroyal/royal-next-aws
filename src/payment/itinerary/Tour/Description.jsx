import Image from "next/image";

export function Description({ tourInfo }) {
  return (
    <div className="flex flex-col gap-y-[4px]">
      {tourInfo.address && (
        <div className="flex gap-[6px] m-s-b text-gry-100 text-fs-10">
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
            alt="LocationIcon"
            width={11}
            height={14}
            className="w-[11px] h-[14px]"
          />

          <span className="truncate">{tourInfo.address}</span>
        </div>
      )}

      <div className="flex gap-[6px] text-fs-10 text-gry-100 m-s-b text-nowrap items-center">
        <Image
          src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
          alt="icon-adult"
          width={14}
          height={15}
          className="w-[14px] h-[15px]"
        />

        <span className="truncate">
          {tourInfo.tourists &&
            tourInfo.tourists.categories.map(
              (tourist, index) =>
                `${tourist.quantity} ${tourist.category}${
                  index !== tourInfo.tourists.length - 1 ? "," : ""
                } `
            )}
        </span>
      </div>
    </div>
  );
}
