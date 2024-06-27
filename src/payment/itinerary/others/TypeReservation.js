import React, { useContext } from "react";

import LanguageContext from "../../../language/LanguageContext";

export function DescriptionHotel({ hotel }) {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="flex flex-col !gap-y-2 border-b border-gry-70 !pb-4 mb-[18px]">
      <span className="text-fs-[1.12rem] m-b text-gry-100">Hotel</span>

      {hotel &&
        hotel.map((info, item) => (
          <div className="flex flex-col mt-1 gap-y-2" key={item}>
            <span className="m-b text-fs-[0.75rem] text-justify w-full pb-[6px]">
              {info.name}
            </span>

            <span className="m-s-b text-or-100 text-fs-10 leading-[12px]">
              {languageData.itinerary.detailsPayment.rooms}
            </span>

            {/* ROOMS */}
            <div className="flex flex-col !gap-y-2">
              {info.rooms &&
                info.rooms.map((room, item) => (
                  <div
                    className="flex !pl-2 justify-between items-start "
                    key={item}
                  >
                    <span className="text-fs-12 m-m leading-[1.75] text-[#1a202c]">
                      {room.name}
                    </span>

                    <span className="text-fs-12 m-b text-justify">
                      $
                      {Math.floor(room.currentPrice)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .<sup>{(room.currentPrice % 1).toFixed(2).slice(2)}</sup>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export function TourDescription(props) {
  const { tours } = props;
  return (
    <div className="flex flex-col !gap-y-2 border-b border-gry-70 !pb-4 mb-[18px]">
      <div>
        <span className="text-fs-[1.12rem] m-b text-gry-100">Tour</span>
        {tours &&
          tours.map((tour, index) => (
            <div key={index} className="flex flex-col !gap-y-2">
              <div className="flex !pl-2 justify-between items-start ">
                <span className="m-m text-[0.75rem] text-justify pb-[6px] w-[70%]">
                  {tour.title}
                </span>

                <span className="text-fs-12 m-b text-justify w-fit">
                  $
                  {Math.floor(tour.currentPrice)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                  .<sup>{(tour.currentPrice % 1).toFixed(2).slice(2)}</sup>
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export function TransportDescription({ transport }) {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="flex flex-col !gap-y-2 border-b border-gry-70 !pb-4 mb-[18px]">
      <span className="text-fs-[1.12rem] m-b text-gry-100">
        {languageData.confirmation.cardMoving.titleMoving}
      </span>

      {transport &&
        transport.map((transport, index) => (
          <div key={index} className="flex flex-col !gap-y-2">
            <div className="flex !pl-2 justify-between items-start ">
              <span className="m-m text-[0.75rem] text-justify w-full pb-[6px]">
                {transport.round
                  ? languageData.CardHomeTransport.roundTrip
                  : languageData.CardHomeTransport.oneWay}
              </span>

              <span className="text-fs-12 m-b text-justify">
                $
                {Math.floor(transport.currentPrice)
                  .toLocaleString("es-MX", { currency: "MXN" })
                  .replace(".00", "")}
                .<sup>{(transport.currentPrice % 1).toFixed(2).slice(2)}</sup>
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
