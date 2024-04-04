"use client";

import Image from "next/image";
import React, { useState } from "react";

import { useCartAxios } from "../CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { calculateNights } from "@/services/Hotels/utils/calculateNights";

export default function CartHotelT(props) {
  const [iconDelete, setIconDelete] = useState(null);

  const { setItinerary, removeHotelById } = useCartAxios();
  const { hotelGetCart, cartId } = props;
  const [showDelete, setShowDelete] = useState({});
  // const { languageData } = useContext(LanguageContext);

  const handleDeleteClick = (hotel) => {
    const hotelId = hotel.id;

    axiosWithInterceptor
      .delete(`v1/carts/${cartId}/hotel/${hotelId}`)
      .then((response) => {
        removeHotelById(hotelId);
        setShowDelete({ ...showDelete });
        setItinerary(Math.floor(Math.random() * 100) + 1);
      })
      .catch((error) => {
        alert("Ups ocurrio un error en eliminar el carro");
      });
  };

  const toggleDelete = (hotelId) => {
    const updatedShowDelete = { ...showDelete };
    updatedShowDelete[hotelId] = !updatedShowDelete[hotelId];
    setShowDelete(updatedShowDelete);
  };

  const handleCardClick = (hotelId) => {
    const updatedShowDelete = { ...showDelete };
    updatedShowDelete[hotelId] = !updatedShowDelete[hotelId];
    setShowDelete(updatedShowDelete);
  };

  // console.log(hotelGetCart);

  return (
    <div className="relative">
      {/* CARD CART HOTEL */}
      {hotelGetCart &&
        hotelGetCart.hotels.map((hotel, index) => (
          <div
            key={index}
            className="flex rounded-lg hover:bg-[#efefef] mb-3 mr-[16px] max-sm:w-[98%]"
          >
            <div className="p-2 gap-4 flex justify-between w-full max-sm:w-[86%]">
              {/* IMAGE CART */}
              <img
                src="https://cdn.worldota.net/t/x500/content/53/d7/53d7b42e4a23bb1c3779fc15b5ae8b08fb17bfa1.jpeg"
                alt="img-cart-hotel"
                className="w-[100px] h-[100px] rounded-lg object-cover"
              />

              {/* INFO CART */}
              <div className="w-full leading-4 flex flex-col justify-center max-sm:w-[61%]">
                <span className="m-m text-gry-100 text-fs-12 truncate w-[187px] ">
                  Cancun
                </span>

                <span className="m-s-b text-fs-14 truncate w-[187px] max-sm:w-full">
                  {hotel.name}
                </span>

                <div className="flex gap-2 mb-[3px]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
                    width={12}
                    height={12}
                    alt="icon-calendar"
                  />

                  <span className=" m-m text-gry-100 text-fs-12">
                    {hotel.checkIn} | 2:00pm
                  </span>
                </div>

                <span className="m-s-b text-fs-14 text-or-100 mb-[3px]">
                  MXN $
                  {Math.floor(hotel.price)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                  .<sup>{(hotel.price % 1).toFixed(2).slice(2)} </sup>
                </span>

                <div className="flex gap-3">
                  <div className="flex gap-2">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/night/night-b.svg`}
                      width={12}
                      height={12}
                      alt="icon-night"
                    />
                    <span className=" m-m text-fs-12 text-gry-100">
                      {calculateNights(hotel.checkIn, hotel.checkOut)}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                      width={12}
                      height={12}
                      alt="icon-room"
                    />
                    <span className="m-m text-fs-12 text-gry-100">
                      {hotel.rooms}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                      width={12}
                      height={12}
                      alt="icon-dult"
                    />
                    <span className=" m-m text-fs-12 text-gry-100">
                      {hotel.adults + hotel.children}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ICON DELETE */}
            <div
              onMouseOver={() => setIconDelete(index)}
              onMouseOut={() => setIconDelete(null)}
              className={`${
                iconDelete === index
                  ? "transition duration-500 ease-in-out "
                  : ""
              } w-[48px] flex justify-center items-center rounded-r-lg cursor-pointer`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-r.svg`}
                width={16}
                height={16}
                alt="icon-delete-r"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDelete(hotel.id);
                }}
              />
            </div>
            {showDelete[hotel.id] && (
              <div
                className="transition duration-500 ease-in-out bg-red-100 flex w-[48px] justify-center items-center rounded-r-lg cursor-pointer absolute right-[14px] h-[116px] max-sm:right-[6px]"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteClick(hotel);
                }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-w.svg`}
                  width={16}
                  height={16}
                  alt="icon-delete-w"
                />
              </div>
            )}
          </div>
        ))}
      {/* END CART HOTEL */}
    </div>
  );
}
