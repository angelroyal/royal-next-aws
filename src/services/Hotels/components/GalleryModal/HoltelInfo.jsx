import { TotalStars } from "@/components/General/Stars";

export function HotelInfo({ GalleryModalHotel }) {
  // console.log(GalleryModalHotel);

  return (
    <>
      <div className="bg-[#fef0d2] w-[115px] rounded-full py-[4px] px-[8px] d-flex flex justify-between mb-2">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}/icons/sales/fire_department.svg`}
          alt="fire"
          width={12}
          height={12}
        />
        <span className="text-fs-12">Muy solicitado</span>
      </div>
      <h1 className="m-b text-fs-24">{GalleryModalHotel.hotel.name}</h1>

      <TotalStars stars={GalleryModalHotel.hotel.stars} />

      <div className="mt-3 flex">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
          alt="location"
          width={14}
          height={18}
        />

        <div className="m-m text-fs-13 ml-1 text-gry-70">
          {`${GalleryModalHotel.hotel.address}, ${GalleryModalHotel.hotel.destination}`}
        </div>
      </div>
    </>
  );
}
