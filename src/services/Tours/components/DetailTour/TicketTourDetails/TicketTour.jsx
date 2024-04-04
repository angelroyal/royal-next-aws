"use client";

import LanguageContext from "@/language/LanguageContext";
import { useContext, useState } from "react";
import { AdultsButton } from "./AdultsButton";
import { ChildrenButton } from "./ChildrenButton";
import { InfantButton } from "./InfantButton";

export function TicketsTour({ setIsModality ,isModality, infoModality }) {
  const { languageData } = useContext(LanguageContext);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);

  return (
    isModality && (
      <>
        <div className="flex flex-col gap-y-1 pb-4">
          <span className="m-s-b text-fs-14 text-black text-start w-max pb-1">
            {languageData.modalTour.OccupancyTours.selectYourTickets}
          </span>

          <span className="text-fs-12 m-m text-gry-100">
            {languageData.modalTour.OccupancyTours.subtitleSelectYourTickets}
          </span>
        </div>

        <div className="flex flex-col max-sm:gap-y-4 sm:flex-row items-center sm:items-start gap-x-[11px]">
          {/* CART INFO TOUR */}
          <div className="relative h-max w-[202px]">
            <img
              src={`${process.env.NEXT_PUBLIC_URL}general/ticket-tour.webp`}
              alt="ticket tour"
              className="absolute left-0 top-0 w-full h-full drop-shadow-[0_0_10px_rgba(0,0,0,.11)] z-[1]"
            />

            <div className="flex flex-col pt-4 pb-[13px] pl-4 pr-[22px] relative z-[2]">
              <span className="text-fs-12 m-s-b text-black text-center mb-4">
                Tour con recogida en punto de encuentro
              </span>

              <div className="flex flex-col gap-y-2">
                <span className="text-fs-12 m-b text-black text-start">
                  {languageData.modalTour.prices}
                </span>

                <div className="flex justify-between items-center">
                  <p className="text-gry-100 text-fs-10 m-m m-0">
                    {languageData.itinerary.tourItinerary.textAdult}
                  </p>

                  <span className="text-fs-12 m-b text-gry-100">$691 MXN</span>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-gry-100 text-fs-10 m-m m-0">
                    {languageData.itinerary.tourItinerary.textChild}
                  </p>

                  <span className="text-fs-12 m-b text-gry-100">$622 MXN</span>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-gry-100 text-fs-10 m-m m-0">
                    {languageData.itinerary.tourItinerary.infant}
                  </p>

                  <span className="text-fs-12 m-b text-gry-100">Gratis</span>
                </div>
              </div>

              <span className="px-2 border-dashed border border-gry-70 w-fulls my-4" />

              <button className="border-2 border-or-100 rounded-full px-[25px] py-[2px] text-or-100 text-fs-12 m-s-b hover:bg-gry-30" onClick={()=> setIsModality(false)}>
                {languageData.modalTour.OccupancyTours.changeSelection}
              </button>

              <span className="text-center text-fs-10 m-s-b text-bl-100 pt-2 cursor-pointer">
                {languageData.containerModalHotel.policies}
              </span>
            </div>
          </div>

          {/* CART SELECT PEOPLE */}
          <div className="bg-bl-100 rounded-lg !p-5 flex flex-col gap-y-2 w-[229px]">
            <AdultsButton adults={adults} setAdults={setAdults} />
            <ChildrenButton children={children} setChildren={setChildren} />
            <InfantButton infant={infant} setInfant={setInfant} />

            <span className="my-[7.5px] border-dashed border border-gry-70 w-fulls" />

            <div className="flex flex-col gap-y-2 mb-2">
              <div className="flex justify-between items-center">
                <span className="text-fs-10 m-s-b text-white w-max">
                  Subtotal
                </span>
                <span className="text-white text-fs-12 m-s-b">$12,000.00</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-fs-10 m-s-b text-white w-max">
                  Impuestos
                </span>
                <span className="text-white text-fs-12 m-s-b">$500.00</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-fs-12 m-s-b text-white w-max">Total</span>
                <span className="text-white text-fs-12 m-s-b">
                  $12,500.<sub>00</sub>
                </span>
              </div>
            </div>

            <button
              className={`rounded-full w-full py-3.5 text-black text-center text-fs-12 m-s-b bg-yw-100 hover:bg-yw-110`}
            >
              {languageData.modalTour.OccupancyTours.reserve}
            </button>
          </div>
        </div>
      </>
    )
  );
}
