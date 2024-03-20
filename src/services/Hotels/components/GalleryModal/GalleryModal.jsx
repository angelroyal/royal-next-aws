import { TotalStars } from "../../../../components/general/Stars";
import { GalleryModalHotel } from "../../utils/GalleryModalHotel";
import { AmenitiesIcons } from "./Amenities";
import { GalleryImages } from "./GalleryImages";
import { HotelInfo } from "./HoltelInfo";
import { SearchModalHotel } from "./SearchModalHotel";

export function GalleryModal() {

  return (
    <div className="flex flex-col gap-y-14">
      <div className="bg-white rounded-lg flex mt-3 p-8">
        <div className="w-7/12 pe-4">
          <GalleryImages images={GalleryModalHotel.hotel.images} />
        </div>

        <div className="w-5/ py-4 px-2">
          <HotelInfo hotelInfo={GalleryModalHotel.hotel} GalleryModalHotel={GalleryModalHotel} />

          {/* <div className="block">
            <div className="mb-2 m-b text-fs-20">Este hotel ofrece:</div>
            <AmenitiesIcons
              text={true}
              amenities={GalleryModalHotel.hotel.facilities}
            />
          </div> */}

          {/* <div className="block">
            <div className="mb-2 m-b text-fs-20">Conoce más de este hotel:</div>

            <ul className="list-disc m-m text-fs-14 text-gry-100 ms-9">
              <li>Check-in: 15:00 pm</li>
              <li>Check-out: 15:00 pm</li>
              {GalleryModalHotel.hotel.breakfast && (
                <li> Desayuno: 7:00 am a 11:00 am</li>
              )}
            </ul>
          </div> */}
        </div>
      </div>

      <SearchModalHotel />
    </div>
  );
}
