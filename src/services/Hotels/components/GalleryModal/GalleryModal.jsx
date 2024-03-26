import { HotelInfo } from "./HoltelInfo";
import TabInfoHotel from "./TabInfoHotel";
import { GalleryImages } from "./GalleryImages";

export function GalleryModal(props) {
  const { hotel } = props;

  return (
    <div className="flex flex-col gap-y-14">
      <div className="bg-white rounded-lg flex flex-col lg:flex-row p-2.5 lg:p-8">

        <div className="w-full lg:w-7/12 lg:pe-4 lg:pr-[2rem]">
          <GalleryImages images={hotel.images} />
        </div>

        <div className="w-full lg:w-5/12 pt-9 lg:py-4 lg:px-2">
          <HotelInfo hotel={hotel} />
          <TabInfoHotel hotel={hotel}/>
        </div>
   
      </div>
    </div>
  );
}
