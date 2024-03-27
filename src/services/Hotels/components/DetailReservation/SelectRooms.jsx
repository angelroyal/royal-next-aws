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
      className={`max-h-[80%] xl:max-h-[87%] bottom-0 absolute top-[4px] bg-white w-full z-[1] px-4 py-7`}
    >
      <div className="relative h-full w-full">
        <Container>
          <div className="w-full flex flex-col gap-y-4 mb-[15rem] md:mb-[11rem]">
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
              className={`grid grid-cols-1 overflow-y-auto gap-y-2 scroll-page-blue lg:gap-x-2 md:justify-items-center lg:grid-cols-2 xl:grid-cols-3 max-h-[25rem]`}
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

        {/* <div className="md:border-t md:border-gry-70 pt-[27px] mt-[27px] absolute bottom-0 left-0 w-full">
          <Container>
            <div className="flex flex-col gap-y-6 md:flex-row md:w-full md:justify-between md:items-center">
              <div className="flex flex-col gap-y-2 items-start">
                <h3 className="text-fs-16 m-b text-black">
                  {languageData.detailHotel.detail}
                </h3>
                <p className="m-0 text-fs-8 text-gry-100">
                  5 noches, 4 personas
                </p>
                <p className="m-0 text-fs-12 m-b flex items-center">
                  MXN{" "}
                  <p className="text-fs-20 m-0">
                    $00.<sup>00</sup>
                  </p>
                </p>
                <span className="text-grn-100 text-fs-8 m-s-b rounded w-max bg-grn-50 py-1 px-2 h-max">
                  {languageData.cart.taxes}
                </span>
              </div>

              
            </div>
          </Container>
        </div> */}
      </div>
    </div>
  );
}
