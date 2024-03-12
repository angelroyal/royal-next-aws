import { TotalStars } from "../../../../components/general/Stars";
import { GalleryModalHotel } from "../../utils/GalleryModalHotel";
import { AmenitiesIcons } from "./Amenities";
import { GalleryImages } from "./GalleryImages";
import { HotelInfo } from "./HoltelInfo";
import { SearchModalHotel } from "./SearchModalHotel";

export function GalleryModal() {
  console.log(GalleryModalHotel);

  return (
    <div className="flex flex-col gap-y-14">
      <div className="flex gap-px flex-col">
        <h1 className="m-b text-fs-24">{GalleryModalHotel.hotel.name}</h1>
        
        <div className="inline-flex gap-3 mt-1">
          <TotalStars stars={GalleryModalHotel.hotel.stars} />
          <span className="m-m text-fs-13">{`${GalleryModalHotel.hotel.destination} ${GalleryModalHotel.hotel.address}`}</span>
        </div>
      </div>

      <div className="bg-[#F4F4F4] rounded-lg flex mt-5 p-4">
        
        <div className="w-8/12 pe-4">
          <GalleryImages images={GalleryModalHotel.hotel.images}/>
        </div>

        <div className="w-4/12 flex flex-col gap-7 border rounded-br-8 border-gry-100 py-4 px-2">
          
          <HotelInfo hotelInfo={GalleryModalHotel.hotel} />
          
          <div className="block">
            <div className="mb-2 m-b text-fs-20">Este hotel ofrece:</div>
            <AmenitiesIcons
              text={true}
              amenities={GalleryModalHotel.hotel.facilities}
            />
          </div>

          <div className="block">
            <div className="mb-2 m-b text-fs-20">Conoce más de este hotel:</div>
          
            <ul className="list-disc m-m text-fs-14 text-gry-100 ms-9">
              <li>Check-in: 15:00 pm</li>
              <li>Check-out: 15:00 pm</li>
              {GalleryModalHotel.hotel.breakfast && (
                <li> Desayuno: 7:00 am a 11:00 am</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <SearchModalHotel/>

    </div>
  );
}
