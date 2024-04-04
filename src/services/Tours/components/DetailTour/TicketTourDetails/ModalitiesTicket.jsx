"use client";

import { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { TicketsTour } from "./TicketTour";
import LanguageContext from "@/language/LanguageContext";

export function ModalitiesTicket() {
  const { languageData } = useContext(LanguageContext);
  const [isModality, setIsModality] = useState(false);
  const [infoModality, setInfoModality] = useState(null);

  const handleModality = (modality) => {
    setIsModality(true);
    setInfoModality(modality);
  };

  return (
    <>
      {isModality === false && (
        <>
          <p className="m-s-b text-black text-fs-14 mb-4">Modalidades</p>
          <div className="max-xl:hidden flex flex-wrap gap-x-[11px] gap-y-4  ">
            {/*  */}
            {[...Array(5)].map((modality, index) => (
              <div key={index} className="relative h-max w-[202px]">
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

                      <span className="text-fs-12 m-b text-gry-100">
                        $691 MXN
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-gry-100 text-fs-10 m-m m-0">
                        {languageData.itinerary.tourItinerary.textChild}
                      </p>

                      <span className="text-fs-12 m-b text-gry-100">
                        $622 MXN
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <p className="text-gry-100 text-fs-10 m-m m-0">
                        {languageData.itinerary.tourItinerary.infant}
                      </p>

                      <span className="text-fs-12 m-b text-gry-100">
                        Gratis
                      </span>
                    </div>
                  </div>

                  <span className="px-2 border-dashed border border-gry-70 w-fulls my-4" />

                  <button
                    className="border-2 border-or-100 rounded-full px-[25px] py-[2px] text-or-100 text-fs-12 m-s-b hover:bg-gry-30"
                    onClick={() => handleModality(modality)}
                  >
                    {languageData.containerModalTour.topSelection}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="relative pr-[58px] xl:hidden block">
            <Swiper
              // slidesPerView={"auto"}
              spaceBetween={11}
              // loop={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                300: {
                  slidesPerView: 1.5,
                },
                530: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3.5,
                },

                1024: {
                  slidesPerView: 1.5,
                },
              }}
              id="dates-tour-modal"
              className="!static h-max"
              navigation={true}
              modules={[Navigation]}
            >
              {[...Array(8)].map((modality, index) => (
                <SwiperSlide>
                  <div key={index} className="relative h-max">
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

                          <span className="text-fs-12 m-b text-gry-100">
                            $691 MXN
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <p className="text-gry-100 text-fs-10 m-m m-0">
                            {languageData.itinerary.tourItinerary.textChild}
                          </p>

                          <span className="text-fs-12 m-b text-gry-100">
                            $622 MXN
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <p className="text-gry-100 text-fs-10 m-m m-0">
                            {languageData.itinerary.tourItinerary.infant}
                          </p>

                          <span className="text-fs-12 m-b text-gry-100">
                            Gratis
                          </span>
                        </div>
                      </div>

                      <span className="px-2 border-dashed border border-gry-70 w-fulls my-4" />

                      <button
                        className="border-2 border-or-100 rounded-full px-[25px] py-[2px] text-or-100 text-fs-12 m-s-b hover:bg-gry-30"
                        onClick={() => handleModality(modality)}
                      >
                        {languageData.containerModalTour.topSelection}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
      <TicketsTour
        setIsModality={setIsModality}
        isModality={isModality}
        infoModality={infoModality}
      />
    </>
  );
}
