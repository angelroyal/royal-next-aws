import "@/assets/styles/general/Swiper.css";

import React, { useContext, useState } from "react";

// import ModalTransportContext from "../../context/ModalTransportContext";
import DateAndHour from "./DateAndHour";
import PassengersTransport from "./PassengersTransport";

export default function InfoModalTransport(props) {
  const { transport } = props;
  console.log(transport);

  return (
    <div className="flex flex-col gap-2 w-1/2 max-md:w-full">
      {/* TITLE */}
      <h3 className="text-fs-24 m-b mb-[36px]">
        ¡Ya casi está listo tu transporte!
      </h3>

      {/* TYPE OF TRIP */}
      <div className="flex flex-col gap-[6px] mb-[16px]">
        <span className="text-gry-100 text-fs-12 m-s-b">Tipo de viaje</span>

        <div className="text-gry-100 text-fs-12 m-s-b py-[8px] px-[16px] bg-gry-50 rounded-full w-fit">
          {transport.round === true ? "Redondo" : "Sencillo"}
        </div>
      </div>

      {/* FROM , TO */}
      <span className="text-gry-100 text-fs-12 m-s-b">Desde</span>

      <div className="flex bg-[#f1f6ff] rounded-[4px] gap-[8px] py-[10px] pl-[16px] max-w-[324px] mb-[16px]">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
          alt="Location Icon"
          className="w-[12.7] h-[16px] mr-2"
        />

        <div className="text-gry-100 m-s-b text-fs-12">
          Aeropuesto internacional de cancun
        </div>
      </div>

      <span className="text-gry-100 text-fs-12 m-s-b">Hacia</span>

      <div className="flex bg-[#f1f6ff] rounded-[4px] gap-[8px] py-[10px] pl-[16px] max-w-[324px]  mb-[16px]">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
          alt="Location Icon"
          className="w-[12.7] h-[16px] mr-2"
        />

        <div className="text-gry-100 m-s-b text-fs-12">
          Hotel nickelodeon Riviera maya
        </div>
      </div>

      {/* DATE AND HOUR */}
      <DateAndHour transport={transport} />

      {/* HOW MANY PASSENGERS */}
      <PassengersTransport transport={transport} />
    </div>
  );
}
