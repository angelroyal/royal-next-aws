import { RoomsInformation } from "./RoomsInformation";
import { ContainerImageHotel } from "./ContainerImageHotel";
import { HotelInformation, HotelInformationMobile } from "./HotelInformation";

export function ConfirmationCardHotel({ hotelInfo }) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-x-4 sm:gap-x-7 items-center w-full">
        <ContainerImageHotel hotelInfo={hotelInfo} />

        <HotelInformation hotelInfo={hotelInfo} />
      </div>

      <HotelInformationMobile hotelInfo={hotelInfo} />

      <RoomsInformation hotelInfo={hotelInfo} />
    </div>
  );
}
