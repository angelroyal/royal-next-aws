"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function CartHotelT() {
  const [iconClose, setIconClose] = useState(null);

  return (
    <div className="p-4">
      {/* TITLE AND BTN CLOSE */}
      <div className="flex justify-between border-b border-[#ebebeb] mb-4 pb-4">
        <h4 className="m-b text-fs-14 text-[#1a202c]">Revisa tu itinerario</h4>
        <Image
          src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-100.svg`}
          width={8}
          height={8}
          alt="icon-close"
        />
      </div>
      <div className="overflow-y-scroll max-h-[390px]">
        {/* CARD CART HOTEL */}
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex rounded-lg hover:bg-[#efefef] mb-3">
            <div className="p-2 gap-4 flex justify-between w-full ">
              {/* IMAGE CART */}
              <img
                src="https://cdn.worldota.net/t/x500/content/53/d7/53d7b42e4a23bb1c3779fc15b5ae8b08fb17bfa1.jpeg"
                alt="img-cart-hotel"
                className="w-[100px] h-[100px] rounded-lg"
              />

              {/* INFO CART */}
              <div className="w-full">
                <span className="text-gry-100 text-fs-10 m-m">Cancun</span>

                <h4 className="m-m text-fs-12">Hotel Xcaret</h4>

                <div className="flex gap-2">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
                    width={12}
                    height={12}
                    alt="icon-close"
                  />

                  <span className="text-gry-100 text-fs-10 m-m ">
                    12/03/2024 | 2:00pm
                  </span>
                </div>

                <span className="text-fs-12 text-or-100">MXN $10,000</span>

                <div className="flex gap-2">
                  <div className="flex gap-2">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/night/night-b.svg`}
                      width={12}
                      height={12}
                      alt="icon-night"
                    />
                    <span className="text-fs-10 text-gry-100">2</span>
                  </div>

                  <div className="flex gap-2">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                      width={12}
                      height={12}
                      alt="icon-room"
                    />
                    <span className="text-fs-10 text-gry-100">2</span>
                  </div>

                  <div className="flex gap-2">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                      width={12}
                      height={12}
                      alt="icon-dult"
                    />
                    <span className="text-fs-10 text-gry-100">2</span>
                  </div>
                </div>
              </div>
            </div>
            {/* ICON DELETE */}
            <div
              onMouseOver={() => setIconClose(index)}
              onMouseOut={() => setIconClose(null)}
              className={`${
                iconClose === index
                  ? "transition duration-500 ease-in-out bg-red-100"
                  : ""
              } w-[80px] flex justify-center items-center rounded-r-lg`}
            >
              {iconClose === index ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-w.svg`}
                  width={16}
                  height={16}
                  alt="icon-close-w"
                />
              ) : (
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-r.svg`}
                  width={16}
                  height={16}
                  alt="icon-close-r"
                />
              )}
            </div>
          </div>
        ))}
        {/* END CART HOTEL */}
      </div>
      {/* PRICE CART */}
      <div className="border-t border-[#ebebeb] mt-4 pt-4">
        <div className="flex justify-between">
          <span className="text-fs-10 text-gry-100 m-m">Subtotal</span>

          <span className="text-fs-12 text-gry-100 m-m">$12,000.00</span>
        </div>

        <div className="flex justify-between">
          <span className="text-fs-10 text-gry-100 m-m">impuestos</span>

          <span className="text-fs-12 text-gry-100 m-m">$500</span>
        </div>

        <div className="flex justify-between">
          <span className="text-fs-12 m-m">Total</span>

          <span className="text-fs-16 m-s-b">$12,000.00</span>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button className="text-fs-12 text-bl-100 m-s-b border-2 border-bl-100 rounded-full py-[14px] px-[16px] hover:bg-bl-100 hover:text-white">
            Resetear carrito
          </button>
          <button className="text-fs-12 text-white m-s-b bg-bl-100 rounded-full py-[14px] px-[16px] hover:bg-bl-70">
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}
