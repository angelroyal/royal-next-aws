"use client";

import "swiper/css";
import "swiper/css/navigation";
import "../../../assets/styles/general/Swiper.css";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import LanguageContext from "@/language/LanguageContext";
// import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { getCatalogueTransport } from "@/components/Recommended/Api/RequestRecommendation";

export default function RecommendedTransport() {
  const { languageData } = useContext(LanguageContext);

  const [transportData, setTransportData] = useState([]);

  useEffect(() => {
    const responseCatalogue = async ()=>{
      const response = await getCatalogueTransport();
      if(response){
        setTransportData(response.data);
      }
    }
    responseCatalogue()
    // axiosWithInterceptor
    //   .get("v1/transport-catalogue")
    //   .then((response) => {
    //     setTransportData(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("There was an error fetching the transport data!", error);
    //   });
  }, []);

  return (
    <>
      <div className="relative">
        {/* TITLE RECOMMENDED TRANSPORT */}
        <h2 className="mb-[32px] text-fs-24 m-b">
          {languageData.CardHomeTransport.titleRecommended}
        </h2>

        <Swiper
          // data-aos="fade-up"
          slidesPerView={5}
          spaceBetween={24}
          className="!static"
          navigation
          modules={[Navigation]}
          id="swiper-recommended-transport"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            350: {
              slidesPerView: 1.5,
            },
            580: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1250: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 4.5,
            },
          }}
        >
          {/* CARD TRANSPORT */}
          {transportData.map((transport, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col gap-2 p-[16px] border-2 border-[#EBEBEB] rounded-lg bg-white h-[22rem]">
                <CatalogueRoutesCard transport={transport} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/*END CARD TRANSPORT */}
      </div>
    </>
  );
}

export function CatalogueRoutesCard({ transport }) {
  const { languageData } = useContext(LanguageContext);
  console.log(transport);

  return (
    <>
      {/* IMG TRANSPORT */}
      <div className="w-full flex justify-center items-center">
        <Image
          src={transport.img}
          width={216}
          height={164}
          alt={transport.name}
          className="select-none"
        />
      </div>

      {/* NAME TRANSPORT */}
      <div className="flex flex-col gap-[16px]">
        <span className="text-fs-16 m-b mt-[16px]">{transport.name}</span>

        {/* FEATURES */}
        <div className="flex flex-col gap-[8px]">
          <span className="text-gry-100 text-fs-12 m-m">
            {languageData.CardHomeTransport.features}
          </span>

          <div className="flex flex-wrap gap-2">
            <div className="flex gap-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                width={12.8}
                height={13.4}
                alt="icon adult"
              />
              <span className="m-m text-fs-12">
                {transport.capacity} {languageData.CardHomeTransport.people}
              </span>
            </div>

            {/* suitcases */}
            <div className="flex gap-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`}
                width={12.1}
                height={14.1}
                alt="icon baggage"
              />
              <span className="m-m text-fs-12">
                {transport.facilities.largeSuitcase}{" "}
                {languageData.CardHomeTransport.suitcases}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`}
              width={12.1}
              height={14.1}
              alt="icon baggage"
            />
            <span className="m-m text-fs-12">
              {transport.facilities.handSuitcase}{" "}
              {languageData.CardHomeTransport.handLuggage}
            </span>
          </div>
        </div>

        {/* MODALITIES */}
        <div className="flex flex-col gap-[8px]">
          <span className="text-gry-100 text-fs-12 m-m">
            {languageData.modalTour.modalities}
          </span>

          <div className="flex gap-2 mb-[15.5px]">
            {transport.type === "private" ? (
              <div className="bg-gry-50 text-gry-100 rounded-full px-[8px] py-[4px] m-s-b text-fs-12">
                {languageData.CardHomeTransport.private}
              </div>
            ) : (
              <div className="bg-gry-50 text-gry-100 rounded-full px-[8px] py-[4px] m-s-b text-fs-12">
                {languageData.CardHomeTransport.shared}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
