import { ImageNotFound } from "@/config/Others/ImageNotFound";

export function ContainerImageHotel({ hotelInfo }) {
  return (
    <div className="w-[133px] h-[117.7px] max-sm:h-[80px] max-sm:w-[90px]">
      {/* <div className="w-[77px] h-[66px] sm:w-[132px] sm:h-[114px]"> */}
      {hotelInfo.image ? (
        <img
          src={hotelInfo.image}
          alt="hotel"
          width={132}
          height={114}
          className="rounded-lg w-full h-full object-cover"
        />
      ) : (
        <ImageNotFound />
      )}
    </div>
  );
}
