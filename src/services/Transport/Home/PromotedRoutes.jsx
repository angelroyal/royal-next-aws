"use client";

import "swiper/css";
import "swiper/css/pagination";
import "../../../assets/styles/general/Swiper.css";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useContext, useEffect, useState } from "react";

import LanguageContext from "@/language/LanguageContext";
import { GetPromotedRoutes } from "../Api/requestTransport";
import PolicyCardTransportWhite from "../components/ToolTip/PolicyCardTransportWhite";
import { PromotedRoutesSkeleton } from "../components/Skeleton/PromotedRoutersSkeleton";

export default function PromotedRoutes() {
  const { languageData, language } = useContext(LanguageContext);
  const [menuPromoted, setMenuPromoted] = useState(1);

  const listOptions = [
    {
      id: 1,
      icon: `${process.env.NEXT_PUBLIC_URL}icons/beach/beach-w.svg`,
      iconActive: `${process.env.NEXT_PUBLIC_URL}icons/beach/beach-b.svg`,
      name: "private",
      alt: `icon-beach ${process.env.NEXT_PUBLIC_NAME_COMPANY}`,
    },
    {
      id: 2,
      icon: `${process.env.NEXT_PUBLIC_URL}icons/family/family-w.svg`,
      iconActive: `${process.env.NEXT_PUBLIC_URL}icons/family/family-b.svg`,
      name: "shared",
      alt: `icon-family ${process.env.NEXT_PUBLIC_NAME_COMPANY}`,
    },
  ];

  const [transports, setTransports] = useState(null);
  const [filterTransports, setFiltersTransports] = useState(null);

  // GET TRANSPORTS PROMOTIONS
  useEffect(() => {
    const getTransports = async () => {
      try {
        const response = await GetPromotedRoutes("719395", language);
        setTransports(response);
      } catch (error) {
        console.error(error);
      }
    };
    getTransports();
  }, []);

  // DIVIDED TRANSPORT BY TYPE
  useEffect(() => {
    switch (menuPromoted) {
      case 1:
        filterTransportByType(false);
        break;
      case 2:
        filterTransportByType(true);
        break;
    }
  }, [menuPromoted, transports]);

  // FILTER TRANSPORTS BY TYPE
  const filterTransportByType = (isPrivate) => {
    let transportsOrigin = transports;
    if (transportsOrigin) {
      setFiltersTransports(
        transportsOrigin.filter((transport) => transport.isShared === isPrivate)
      );
    }
  };

  return (
    <div className="my-[10px]">
      {/* TITLE */}
      <h3 className="m-b text-fs-24 mb-8 ">
        {languageData.CardHomeTransport.titlePromoted}
      </h3>

      {/* MENU  */}
      <div className="flex overflow-y-hidden gap-[15px] bg-gry-50 py-[8px] px-[12px] rounded-3xl mb-8 w-fit h-max">
        {listOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => setMenuPromoted(option.id)}
            className={`${
              menuPromoted === option.id
                ? "bg-or-100 rounded-3xl text-white"
                : "text-gry-100"
            } flex gap-2 py-2 px-4 justify-center items-center h-max`}
          >
            {menuPromoted === option.id ? (
              <Image
                src={option.icon}
                alt={option.alt}
                width={16}
                height={16}
                className="w-[16px] h-[16px]"
              />
            ) : (
              <Image
                src={option.iconActive}
                alt={option.alt}
                width={16}
                height={16}
                className="w-[16px] h-[16px]"
              />
            )}

            <span className={`text-nowrap text-fs-12 m-m`}>
              {languageData.CardHomeTransport[option.name]}
            </span>
          </button>
        ))}
      </div>

      {filterTransports ? (
        <>
          {/* CARDS TRANSPORT DESKTOP*/}
          <div
            data-aos="fade-up"
            className="grid gap-4 grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-lg:hidden justify-between"
          >
            {filterTransports.map((transport, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 p-[16px] border-2 border-[#EBEBEB] rounded-lg bg-white w-[280px]"
              >
                <PromotedRoutesCard transport={transport} />
              </div>
            ))}
          </div>

          {/* CARDS TRANSPORT MOBILE SWIPER */}
          <div className="lg:hidden block relative">
            <Swiper
              slidesPerView={5}
              spaceBetween={24}
              className=""
              id="swiper-shuffle-hotel"
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
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
              {filterTransports.map((transport, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-2 p-[16px] border-2 border-[#EBEBEB] rounded-lg bg-white">
                    <PromotedRoutesCard transport={transport} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      ) : (
        <PromotedRoutesSkeleton />
      )}
    </div>
  );
}

export function PromotedRoutesCard({ transport }) {
  const [openPolicy, setOpenPolicy] = useState(false);
  const { languageData } = useContext(LanguageContext);

  const dataDialogWhite = {
    text: languageData.tourPolicyCancelation.title,
  };

  return (
    <>
      {/*IMAGE TRANSPORT*/}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}banners/transport/transport-card.jpg`}
        alt="test card"
        className="select-none w-full"
      />

      <div className="flex flex-col gap-[16px]">
        {/* LOCATION , NAME TRANSPORT , TYPE */}
        <div className="flex flex-col gap-1">
          <span className="text-fs-12 m-m text-gry-100">Vehiculo Standard</span>

          <div className="flex gap-2 items-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
              alt="icon location"
              width={12}
              height={12}
              className="w-[12px] h-[12px]"
            />
            <span className="text-fs-16 m-b">cancun</span>
          </div>

          <div className="flex gap-1">
            <span className="text-fs-12 text-gry-100 m-m">
              {languageData.CardHomeTransport.typeTrip}
            </span>
            <span className="text-fs-12 m-b">Redondo</span>
          </div>
        </div>

        {/* FEATURES */}
        <div className="flex flex-col gap-1">
          <span className="text-gry-100 text-fs-12 m-m">
            {languageData.CardHomeTransport.features}
          </span>

          <div className="flex flex-wrap mb-[6px] gap-2">
            <div className="flex gap-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                width={12.8}
                height={13.4}
                alt="icon adult"
                className="w-[12.8px] h-[13.4px]"
              />

              <span className="m-m text-fs-12">
                4 {languageData.CardHomeTransport.people}
              </span>
            </div>

            <div className="flex gap-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`}
                width={14}
                height={13}
                alt="icon transport"
                className="w-[14px] h-[13px]"
              />
              <span className="m-m text-fs-12">
                {languageData.cardMoving.textModel} KSDSDF
              </span>
            </div>

            <div className="flex gap-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`}
                width={12.1}
                height={14.1}
                alt="icon baggage"
              />
              <span className="m-m text-fs-12">
                2 {languageData.CardHomeTransport.suitcases}
              </span>
            </div>
          </div>
        </div>

        {/* MODALITIES */}
        <div className={`flex flex-col gap-1`}>
          <span className="text-gry-100 text-fs-12 m-m">
            {languageData.modalTour.modalities}
          </span>

          <div className="flex gap-2 mb-[15.5px]">
            <div className="bg-gry-50 text-gry-100 rounded-full px-[8px] py-[4px] m-s-b text-fs-12">
              {transport.isShared
                ? languageData.CardHomeTransport.shared
                : languageData.CardHomeTransport.private}
            </div>
          </div>
        </div>
      </div>

      {/* PRICE */}
      <div
        className={`flex gap-2 border-t-2 border-[#EBEBEB] pt-[16px] items-center justify-between `}
      >
        <div className="flex flex-col">
          <span className="text-fs-10 text-gry-100">
            {languageData.cartTour.from}
          </span>

          <span className="m-b text-fs-16">MXN $5,000</span>

          {/* CANCELATION POLICES */}
          <span
            className="text-bl-100 text-fs-10 cursor-pointer relative"
            onMouseOver={() => setOpenPolicy(true)}
            onMouseLeave={() => setOpenPolicy(false)}
          >
            {languageData.containerModalHotel.policies}
            {openPolicy === true && (
              <PolicyCardTransportWhite dataDialogWhite={dataDialogWhite} />
            )}
          </span>
        </div>

        <bottom className="flex items-center px-[23px] py-[12px] text-fs-12 text-white bg-bl-100 rounded-full hover:bg-bl-110 w-fit text-nowrap cursor-pointer">
          {languageData.cartTour.seeDetails}
        </bottom>
      </div>
      {/* </div> */}
    </>
  );
}
