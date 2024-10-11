import Image from "next/image";
import { useContext, useEffect } from "react";

import LanguageContext from "@/language/LanguageContext";
import { PaymentContext } from "@/payment/context/PaymentContext";

export default function FormClientHB({ dataItinerary }) {
  const { languageData } = useContext(LanguageContext);
  const { roomHolders, setRoomHolders } = useContext(PaymentContext);
  const HotelOrangeIcon = `${process.env.NEXT_PUBLIC_URL}icons/hotel/hotel-o.svg`;

  const hbItineraries = dataItinerary;

  if (hbItineraries.length === 0) {
    return null;
  }

  useEffect(() => {
    if (Object.keys(roomHolders).length === 0) {
      const initialRoomHolders = hbItineraries.reduce((acc, itinerary) => {
        acc[itinerary.code] = itinerary.rooms.flatMap((room, roomIndex) =>
          Array.from({ length: room.quantity }).map((_, qtyIndex) => ({
            roomId: `${room.code}.${qtyIndex}`,
            paxesName: room.occupancies[qtyIndex]?.adults
              ? [
                  ...Array(room.occupancies[qtyIndex].adults).fill({
                    firstName: "",
                    lastName: "",
                    age: "",
                    type: "adult",
                  }),
                  ...(room.occupancies[qtyIndex].childrenAges?.length
                    ? room.occupancies[qtyIndex].childrenAges.map((age) => ({
                        firstName: "",
                        lastName: "",
                        age,
                        type: "child",
                      }))
                    : []),
                ]
              : [],
          }))
        );
        return acc;
      }, {});

      setRoomHolders(initialRoomHolders);
    }
  }, []);

  const handleChange = (code, roomId, index, field, value) => {
    const updatedRoomHolders = {
      ...roomHolders,
      [code]: roomHolders[code].map((holder) =>
        holder.roomId === roomId
          ? {
              ...holder,
              paxesName: holder.paxesName.map((pax, paxIndex) =>
                paxIndex === index ? { ...pax, [field]: value } : pax
              ),
            }
          : holder
      ),
    };
    setRoomHolders(updatedRoomHolders);
  };

  const generateAgeOptions = (type) => {
    const options = [];
    const minAge = type === "child" ? 1 : 13;
    const maxAge = type === "child" ? 12 : 100;
  
    for (let age = minAge; age <= maxAge; age++) {
      options.push(
        <option key={age} value={age}>
          {age}
        </option>
      );
    }
  
    return options;
  };
  
  return (
    <div className="w-full bg-white rounded-[19px] px-[1.8rem] pt-[2rem] pb-[3rem] mt-[2.5rem]">
      <h2 className="text-fs-18 text-black m-b italic">
        * {languageData.formHb.title} *
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
              <div key={`${itinerary.code}-${roomIndex}-${qtyIndex}`}>
                <h3 className="text-fs-12 max-md:text-fs-18 mt-[1.5rem] m-b">
                  Habitacion:{" "}
                  <span className="text-fs-10 max-md:text-fs-18 mt-[1.5rem] m-b text-gry-100 italic">
                    {room.name} #{qtyIndex + 1}
                  </span>
                </h3>

                {roomHolders[itinerary.code]
                  ?.find(
                    (holder) => holder.roomId === `${room.code}.${qtyIndex}`
                  )
                  ?.paxesName.map((pax, paxIndex) => (
                    <div
                      key={paxIndex}
                      className="flex justify-evenly items-end mb-[1.1rem] gap-[2rem] max-lg:flex-col max-lg:gap-[1rem]"
                    >
                      <div className="w-full flex-col">
                        <div className="mt-[16px] m-b text-fs-12 text-gry-100">
                          {pax.type === "adult"
                            ? `${languageData.formHb.adult} `
                            : `${languageData.formHb.child}`}
                        </div>

                        <label className="mt-[16px] m-b text-fs-12 text-gry-100">
                          {languageData.formHb.firstname}:
                        </label>
                        <span className="text-red-100">*</span>

                        <input
                          required
                          placeholder={languageData.formHb.firstnamePlaceholder}
                          className="rounded-lg m-b w-full px-[2.25rem] pb-[.375rem] pt-[.7rem] text-fs-14 appearance-none border border-[#ebebeb] placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b focus:outline-none"
                          type="text"
                          value={pax.firstName}
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(
                              /[^a-zA-Z\s]/g,
                              ""
                            );
                          }}
                          onChange={(e) =>
                            handleChange(
                              itinerary.code,
                              `${room.code}.${qtyIndex}`,
                              paxIndex,
                              "firstName",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="w-full flex-col">
                        <label className="mt-[16px] m-b text-fs-12 text-gry-100">
                          {languageData.formHb.lastname}:
                        </label>
                        <span className="text-red-100">*</span>

                        <input
                          required
                          placeholder={languageData.formHb.lastnamePlaceholder}
                          className="rounded-lg m-b w-full px-[2.25rem] pb-[.375rem] pt-[.7rem] text-fs-14 appearance-none border border-[#ebebeb] placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b focus:outline-none"
                          type="text"
                          value={pax.lastName}
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(
                              /[^a-zA-Z\s]/g,
                              ""
                            );
                          }}
                          onChange={(e) =>
                            handleChange(
                              itinerary.code,
                              `${room.code}.${qtyIndex}`,
                              paxIndex,
                              "lastName",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="w-full flex-col">
                        <label className="mt-[16px] m-b text-fs-12 text-gry-100">
                          {languageData.formHb.age}:
                        </label>
                        <span className="text-red-100">*</span>

                        <div className="relative">
                          <select
                            required
                            value={pax.age}
                            onChange={(e) =>
                              handleChange(
                                itinerary.code,
                                `${room.code}.${qtyIndex}`,
                                paxIndex,
                                "age",
                                e.target.value
                              )
                            }
                            className="rounded-lg m-b w-full px-[2.25rem] pb-[.375rem] pt-[.7rem] text-fs-14 appearance-none border border-[#ebebeb] placeholder:text-[#d1d2d5] placeholder:italic placeholder:text-fs-12 placeholder:m-s-b focus:outline-none"
                          >
                            <option value="" disabled selected>
                              {languageData.formHb.agePlaceholder}
                            </option>
                            {generateAgeOptions(pax.type)} años
                          </select>
                          <span className="absolute top-[50%] right-4 transform -translate-y-[50%] pointer-events-none">
                            ▼
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))
          )}
        </div>
      ))}
    </div>
  );
}
