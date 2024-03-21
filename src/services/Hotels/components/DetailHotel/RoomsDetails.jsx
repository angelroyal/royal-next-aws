"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../../assets/styles/general/Swiper.css";

export default function RoomsDetails() {
  //   console.log("Entra");
  return (
    <>
      <h2 className="text-fs-14 text-black m-b mb-4 ml-auto mr-auto lg:mx-0 w-max">
        Master Suite Vista Interna
      </h2>
      <div className="relative pr-9">
        <Swiper
          id="room-details"
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={16}
          navigation
          modules={[Navigation]}
          breakpoints={{
            300:{
                slidesPerView: 1.1,
            },
            500:{
                slidesPerView: 1.4,
            },
            768:{
                slidesPerView: 2,
            },
            1010: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3.8,
            },
          }}
        >
          {[...Array(8)].map((vale, index) => (
            <SwiperSlide key={index} className="bg-transparent shadow-sm">
              <div className="p-4 rounded-lg border border-gry-30 bg-white">
                <div className="flex flex-col gap-y-4">
                  <div className="relative w-full h-[181px]">
                    <img
                      src="https://cdn.worldota.net/t/x500/content/53/d7/53d7b42e4a23bb1c3779fc15b5ae8b08fb17bfa1.jpeg"
                      className="w-full h-full object-cover rounded-lg"
                      width={40}
                      height={40}
                      alt="room"
                    />
                    <div className="absolute w-full bottom-0 left-0 bg-black rounded-b-lg flex justify-center items-center">
                      <span className="m-b text-white text-fs-12 p-2">
                        Desayuno incluido
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1">
                    <p className="m-s-b text-fs-10 text-black text-start m-0">
                      Capacidad
                    </p>

                    <div className="flex flex-wrap gap-y-2 gap-x-2 ">
                      <div className="flex gap-x-[4px]">
                        <img
                          src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                          className="w-[14px] h-[14px]"
                          alt="adult"
                        />
                        <span className="m-s-b text-fs-10 text-gry-100">
                          2 adultos, 2 niños
                        </span>
                      </div>
                      <div className="flex gap-x-[4px]">
                        <img
                          src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                          className="w-[14px] h-[14px]"
                          alt="room"
                        />
                        <span className="m-s-b text-fs-10 text-gry-100">
                          1 cama king size
                        </span>
                      </div>
                      <div className="flex gap-x-[4px]">
                        <img
                          src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                          className="w-[14px] h-[14px]"
                          alt="room"
                        />
                        <span className="m-s-b text-fs-10 text-gry-100">
                          1 cama matrimonial
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <p className="m-s-b text-fs-10 text-black text-start m-0">
                      Amenidades
                    </p>

                    <div className="flex flex-wrap gap-x-[8px]">
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`}
                        alt="amenities"
                        className="h-[15px] w-auto"
                      />
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL}icons/air/air-b.svg`}
                        alt="amenities"
                        className="h-[15px] w-auto"
                      />
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL}icons/water/water-b.svg`}
                        alt="amenities"
                        className="h-[15px] w-auto"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <span className="flex text-fs-10 gap-x-1 items-center">
                      <img
                        src={`${process.env.NEXT_PUBLIC_URL}icons/error/error-r.svg`}
                        alt="amenities"
                        className="h-[12px] w-auto"
                      />{" "}
                      <p className="m-m m-0 text-fs-10 text-black">
                        No rembolsable
                      </p>
                    </span>

                    <p className="m-0 text-start text-bl-100 m-m text-fs-8">
                      Políticas de cancelación
                    </p>
                  </div>
                </div>

                <span className="border border-gry-100 w-full mt-4 mb-4 flex" />

                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-y-1">
                    <span className="m-b text-fs-16 text-black">
                      MXN <span>$10,000</span>
                    </span>

                    <div className="rounded-1 bg-grn-50 text-grn-100 m-m text-fs-8 py-1 px-2">
                      Impuestos incluidos
                    </div>
                  </div>

                  <button className="border-0 rounded-full bg-bl-100 text-white text-fs-12 m-s-b py-3.5 px-4">
                    Agregar
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
