import Image from "next/image";

export function TransportImage({ transportInfo }) {
  return (
    <Image
      className="rounded-[8px] w-[133px] h-[117.7px] max-sm:h-[80px] max-sm:w-[90px] object-cover object-right"
      src={transportInfo.image}
      alt="card transport"
      width={133}
      height={118}
    />
  );
}
