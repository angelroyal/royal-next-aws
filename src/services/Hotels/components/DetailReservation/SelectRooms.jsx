"use client";

import { useContext, useEffect, useState } from "react";

import RoomsHotelContext from "../../context/RoomsHotelContext";
import { Container } from "@/config/Others/Container";
// import LanguageContext from "@/language/LanguageContext";

export default function SelectRooms(props) {
  const { selectedRooms } = useContext(RoomsHotelContext);
  const [isComplete, setIsComplete] = useState(false);
  useEffect(() => {
    if (selectedRooms == 8) {
      setIsComplete(true);
    }
  }, []);
  // console.log(selectedRooms);

  return (
    <div
      className={`xl:max-h-[78%] bg-white w-full px-4 py-7`}
    >
        <Container>
          <div className="w-full flex flex-col gap-y-4 lg:mb-[5rem]">
            <h3 className="flex items-center text-gry-100 m-s-b text-fs-14 gap-x-1">
              Habitaciones elegidas{" "}

              <p className={`${isComplete === true && 'text-grn-100'} m-0`}>({selectedRooms.length}/8)</p>{" "}
              {isComplete === true && (
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}icons/done/done-g.svg`}
                  alt="done green"
                  height={9}
                  width={12}
                />
              )}
            </h3>

            <div
              className={`grid grid-cols-1 overflow-y-auto gap-y-2 scroll-page-blue lg:gap-x-2 md:justify-items-center lg:grid-cols-2 xl:grid-cols-3 max-h-[26rem] md:max-h-[30rem] lg:max-h-[25rem]`}
            >
              {/* MAP ROOMS PRE CART HOTEL */}
              {selectedRooms.map((reservation, index) => (
                <div className="p-2 flex gap-x-4 md:w-max" key={index}>
                  <img
                    className="rounded-lg"
                    // src={reservation.image}
                    src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-d-to-en.webp`}
                    alt={reservation.name}
                    width={80}
                    height={80}
                  />

                  <div className="flex items-center justify-between w-full md:w-[246px]">
                    <div className="flex flex-col gap-x-1">
                      <span>
                        <p className="m-0 text-fs-8 m-m text-gry-100">
                          {reservation.eatingPlan}
                        </p>
                        <h3 className="text-fs-12 text-black m-s-b">
                          {reservation.name}
                        </h3>
                      </span>

                      <h3 className="m-s-b text-fs-12 text-or-100 ">
                        MXN {reservation.price}
                      </h3>

                      {/* ADULTS HOTEL */}
                      <span className="flex text-fs-10 text-black gap-x-2 items-center">
                        <img
                          src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                          alt="occupancy"
                          width={12}
                          height={12}
                        />{" "}
                        {reservation.adults}
                      </span>
                    </div>
                    <img
                      src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-r.svg`}
                      width={10}
                      height={12}
                      alt="delete red"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
    </div>
  );
}
