"use client";

import "swiper/css";
import "swiper/css/pagination";

import React, { useContext } from "react";

import ListingTransportContext from "../../context/ListingTransportContext";

export default function CardTransport() {
  const { dataTransportF } = useContext(ListingTransportContext);

  console.log(dataTransportF);

  return (
    <>
      {dataTransportF &&
        dataTransportF.map((transport, index) => (
          <div key={index} className="max-sm:px-4">
            <div className="flex border border-gry-50 rounded-lg mb-[10px] bg-white w-full gap-2 my-[20px] max-lg:flex-col lg:h-[230px] max-sm:max-h-[35rem]">
              <div className="w-[30%] relative max-lg:w-full max-lg:h-[225px]">
                <img
                  className="w-full h-full object-contain"
                  src={transport.image}
                  alt="card"
                />
              </div>

              {/* CONTAINER 60 */}
              <div className="w-[70%] p-[20px] max-lg:w-full">
                <h2 className="text-fs-16 m-b mb-0 truncate">
                  {transport.label}
                </h2>

                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-7/12">
                    {/* TRANSPORT ROUND OR PRIVATE */}
                    <div className="pt-2 pb-4">
                      <span className="text-gry-70 m-b text-fs-12">
                        Tipo de viaje:
                      </span>
                      <span className="text-fs-14 m-b">
                        {transport.round === false ? "redondo" : "sencillo"}
                      </span>
                    </div>

                    <div class="grid gap-3 grid-cols-2">
                      {/* PEOPLES */}
                      <div className="text-fs-14 flex">
                        <img
                          className="mr-[5px]"
                          src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                          width={18}
                          height={18}
                          alt="card adult"
                        />{" "}
                        {transport.places} personas
                      </div>

                      {/* SERVICE TRANSPORT */}
                      <div className="text-fs-14 flex">
                        <img
                          className="mr-[5px]"
                          src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`}
                          width={18}
                          height={18}
                          alt="card transport"
                        />{" "}
                        {transport.type === "private"
                          ? "Servicio privado"
                          : "Servicio compartido"}
                      </div>

                      {/* BAGGAGE */}
                      <div className="text-fs-14 flex">
                        <img
                          className="mr-[5px]"
                          src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`}
                          width={16}
                          height={16}
                          alt="card baggage"
                        />{" "}
                        4 maletas
                      </div>
                    </div>
                  </div>

                  {/* PRICE */}
                  <div className="w-full flex-col lg:w-5/12 text-right ">
                    <div className="pt-1">
                      <span className="m-m text-fs-12 text-gry-70">MXN</span>{" "}
                      <span className="m-b text-fs-20 ">
                        {" "}
                        {Math.floor(transport.price)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .<sup>{(transport.price % 1).toFixed(2).slice(2)}</sup>
                      </span>
                    </div>

                    <button>Agregar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
