"use client";
import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";

export function TransportBanner() {
  const { languageData } = useContext(LanguageContext);
  return (
    <section className="flex bg-or-100 flex-col lg:flex-row h-max my-16 md:mt-[131px] md:mb-32 shadow-3xl">
      <div className="flex justify-center px-8 py-14 md:px-16 w-full lg:pr-0 items-start md:py-[88px] flex-col gap-y-2.5 lg:w-4/5 gap-y-5">
        <h3 className="m-b text-fs-32">
          {languageData.bannerTransportHome.titleDisposal}
        </h3>

        <p className="m-m text-fs-14">
          {languageData.bannerTransportHome.textBookNow}
        </p>

        <button className="rounded-full py-[20px] px-[41px] bg-bl-100 text-white w-max m-s-b text-fs-12 hover:bg-bl-110">
          {languageData.bannerTransportHome.ChooseDates}
        </button>
      </div>

      <div className="w-full relative w-4/5 flex justify-center mb-14 lg:mb-0 lg:justify-end items-center lg:items-end">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}banners/vehicle/tiggo-7-pro.webp`}
          alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} tiggo car`}
          className="absolute z-[1] bottom-0 right-0 left-0 mx-auto select-none"
          width="auto"
          height="100%"
        />
        <img
          src={`${process.env.NEXT_PUBLIC_URL}general/Frame-1414.webp`}
          alt={process.env.NEXT_PUBLIC_NAME_COMPANY}
          className="object-cover h-full mr-0 md:mr-[44px] lg:mr-0 xl:mr-[44px] select-none"
          width="auto"
          height="100%"
        />
      </div>
    </section>
  );
}
