"use client";

import moment from "moment";
import Image from "next/image";
import { useState } from "react";

export default function CartTransportT(props) {
  const { transportGetCart } = props;

  const [deleteTransport, setDeleteTransport] = useState(false);

  console.log(transportGetCart);

  return (
    <div>
      {transportGetCart.transportations.map((transport, index) => (
        <div
          key={index}
          className="flex relative rounded-lg hover:bg-[#efefef] mb-3 mr-[16px] max-sm:w-[98%]"
        >
          {/* STYLE WHEN REMOVED  HAZLO GUILLE ATTE LUIS*/}
          {/* {loadingTours[tourInfo.id] && (
                    <div className="absolute flex justify-center items-center w-full h-full backdrop-contrast-50">
                        <div className="relative w-[8px] h-[8px] rounded-[5px] bg-bl-100 text-bl-100 animate-[dot-flashing_1s_infinite_linear_alternate] before:content-[' '] before:block before:absolute before:top-0 before:left-[15px] before:w-[8px] before:h-[8px] before:rounded-[5px] before:bg-bl-100 before:text-bl-100 before:animate-[dot-flashing_1s_infinite_alternate] before:delay-0 after:content-[' '] after:block after:absolute after:top-0 after:left-[30px] after:w-[8px] after:h-[8px] after:rounded-[5px] after:bg-bl-100 after:text-bl-100 after:animate-[dot-flashing_1s_infinite_alternate] after:delay-1000	dot-flashing" />
                    </div>
                )} */}

          <div className="p-2 gap-4 flex justify-between w-full max-sm:w-[86%]">
            {/* IMAGE CART */}
            <img
              src={`${process.env.NEXT_PUBLIC_URL}banners/transport/transport-card.jpg`}
              alt="img-cart-tour"
              className="w-[100px] h-[100px] rounded-lg object-cover"
            />

            {/* INFO CART */}
            <div className="w-full leading-4 flex flex-col justify-center max-sm:w-[61%]">
              <span className="m-m text-gry-100 text-fs-12 truncate w-[187px] ">
                {transport.destination}
              </span>

              <span className="m-s-b text-fs-14 truncate w-[187px] max-sm:w-full">
                {transport.name}
              </span>

              <div className="flex gap-2 mb-[3px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
                  width={12}
                  height={12}
                  alt="icon-calendar"
                />

                <span className=" m-m text-gry-100 text-fs-12">
                  {moment(transport.date).format("MM/DD/YYYY")} |{" "}
                  {moment(`${transport.date}T${transport.time}`)
                    .format("h:mma")
                    .toLowerCase()}
                </span>
              </div>

              <span className="m-s-b text-fs-14 text-or-100 mb-[3px]">
                MXN $
                      {Math.floor(transport.prices)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .<sup>{(transport.prices % 1).toFixed(2).slice(2)}</sup>
              </span>

              <div className="flex gap-3">
                <div className="flex gap-2">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`}
                    width={12}
                    height={12}
                    alt="icon-transport"
                  />
                  <span className=" m-m text-fs-12 text-gry-100">Compartido</span>
                </div>

                <div className="flex gap-2">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                    width={12}
                    height={12}
                    alt="icon-dult"
                  />
                  <span className=" m-m text-fs-12 text-gry-100">2</span>
                </div>
              </div>
            </div>
          </div>

          {/* ICON DELETE */}

          {deleteTransport === true ? (
            <div
              className={`${
                deleteTransport === false && "hidden"
              } transition duration-500 ease-in-out bg-red-100 w-[48px] flex justify-center items-center rounded-r-lg cursor-pointer`}
              onClick={() => setDeleteTransport(false)}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-w.svg`}
                width={16}
                height={16}
                alt="icon-delete-w"
              />
            </div>
          ) : (
            <div
              className={`${
                deleteTransport && "hidden"
              }  w-[48px] flex justify-center items-center rounded-r-lg cursor-pointer`}
              onClick={() => setDeleteTransport(true)}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-r.svg`}
                width={16}
                height={16}
                alt="icon-delete-w"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
