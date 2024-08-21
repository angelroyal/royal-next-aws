import Image from "next/image";
import { useState, useContext } from "react";

import { PaymentContext } from "@/payment/context/PaymentContext";

export default function FormClientHB({ dataItinerary }) {
  console.log(dataItinerary);
  const HotelOrangeIcon = `${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-o.svg`;

  const { setRoomsRH } = useContext(PaymentContext);

  const hbItineraries = dataItinerary.filter(
    (itinerary) => itinerary.provider === "hb"
  );

  if (hbItineraries.length === 0) {
    return <div>No valid provider found</div>;
  }

  const initialResponsibles = hbItineraries.flatMap((itinerary) =>
    itinerary.rooms.flatMap((room, roomIndex) =>
      Array.from({ length: room.quantity }).map((_, qtyIndex) => ({
        roomId: `${itinerary.name}-${roomIndex}`,
        firstName: "",
        lastName: "",
      }))
    )
  );

  const [responsibles, setResponsibles] = useState(initialResponsibles);

  const handleChange = (roomId, field, value) => {
    const updatedResponsibles = responsibles.map((responsible) =>
      responsible.roomId === roomId
        ? { ...responsible, [field]: value }
        : responsible
    );
    setResponsibles(updatedResponsibles);

    setRoomsRH((prevRooms) => {
      const filteredRooms =
        prevRooms?.filter((room) => room.roomId !== roomId) || [];
      const newRoom = updatedResponsibles.find(
        (responsible) => responsible.roomId === roomId
      );
      return [...filteredRooms, newRoom];
    });
  };

  return (
    <div className="w-full bg-white rounded-[19px] px-[1.8rem] pt-[2rem] pb-[3rem] mt-[2.5rem]">
      <h2 className="text-fs-18 text-black m-b italic">
        * Complete los Detalles de los Responsables de Habitación * 
      </h2>

      {hbItineraries.map((itinerary, itineraryIndex) => (
        <div key={itineraryIndex}>
          <div className="flex items-center space-x-2 mt-[2rem] mb-[.8rem]">
            <Image
              src={HotelOrangeIcon}
              alt="HotelOrangeIcon"
              width={10}
              height={10}
              className="w-[1.7rem] h-auto"
            />
            <div className="m-b text-fs-18">{itinerary.name}</div>
          </div>

          {itinerary.rooms.map((room, roomIndex) =>
            Array.from({ length: room.quantity }).map((_, qtyIndex) => (
              <div key={`${itinerary.name}-${roomIndex}-${qtyIndex}`}>
                <h3 className="text-fs-10 max-md:text-fs-18 mt-[1.5rem] m-b text-gry-100 italic">
                  - {room.name} #{qtyIndex + 1}
                </h3>

                <div className="flex justify-evenly items-end mb-[1.1rem] gap-[2rem] max-lg:flex-col max-lg:gap-[1rem]">
                  <div className="w-full flex-col">
                    <label className="mt-[16px] m-b text-fs-12 text-gry-100">
                      First Name:
                    </label>
                    <span className="text-red-100">*</span>

                    <input
                      required
                      placeholder="First name"
                      className="rounded-lg m-b w-full px-[2.25rem] pb-[.375rem] pt-[.7rem] text-fs-14 appearance-none border border-[#ebebeb] placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b focus:outline-none"
                      type="text"
                      value={
                        responsibles.find(
                          (responsible) =>
                            responsible.roomId ===
                            `${itinerary.name}-${roomIndex}-${qtyIndex}`
                        )?.firstName || ""
                      }
                      onChange={(e) =>
                        handleChange(
                          `${itinerary.name}-${roomIndex}-${qtyIndex}`,
                          "firstName",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="w-full flex-col">
                    <label className="mt-[16px] m-b text-fs-12 text-gry-100">
                      Last Name:
                    </label>
                    <span className="text-red-100">*</span>

                    <input
                      required
                      placeholder="First name"
                      className="rounded-lg m-b w-full px-[2.25rem] pb-[.375rem] pt-[.7rem] text-fs-14 appearance-none border border-[#ebebeb] placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b focus:outline-none"
                      type="text"
                      value={
                        responsibles.find(
                          (responsible) =>
                            responsible.roomId ===
                            `${itinerary.name}-${roomIndex}-${qtyIndex}`
                        )?.lastName || ""
                      }
                      onChange={(e) =>
                        handleChange(
                          `${itinerary.name}-${roomIndex}-${qtyIndex}`,
                          "lastName",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}
