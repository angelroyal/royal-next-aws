"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import LanguageContext from "@/language/LanguageContext";
import { StepsBannerStyle } from "../config/SteppsBannerStyle";

const originDashedOne = [
  { key: 0, value: false },
  { key: 1, value: false },
  { key: 2, value: false },
  { key: 3, value: false },
  { key: 4, value: false },
  { key: 5, value: false },
  { key: 6, value: false },
  { key: 7, value: false },
];

const originDashedTwo = [
  { key: 0, value: false },
  { key: 1, value: false },
  { key: 2, value: false },
  { key: 3, value: false },
  { key: 4, value: false },
  { key: 5, value: false },
  { key: 6, value: false },
  { key: 7, value: false },
];

export default function TipsBooking() {
  const { languageData } = useContext(LanguageContext);
  const [dashedOne, setDashedOne] = useState(originDashedOne);

  const [dashedTwo, setDashedTwo] = useState(originDashedTwo);

  const [cartAnimate, setCartAnimate] = useState(1);

  const AnimateDashed = () => {
    const interval = 3000 / dashedOne.length;
    dashedOne.forEach((item, index) => {
      setTimeout(() => {
        setDashedOne((prevDashedOne) =>
          prevDashedOne.map((el) =>
            el.key === item.key ? { ...el, value: true } : el
          )
        );
      }, interval * index);
    });
  };

  const AnimateDashedTwo = () => {
    const interval = 3000 / dashedTwo.length;
    dashedTwo.forEach((item, index) => {
      setTimeout(() => {
        setDashedTwo((prevDashedTwo) =>
          prevDashedTwo.map((el) =>
            el.key === item.key ? { ...el, value: true } : el
          )
        );
      }, interval * index);
    });
  };

  const CartActual = () => {
    const interval = 3000 / dashedOne.length;
    let initAnimate = cartAnimate;
    setTimeout(() => {
      if (initAnimate < 3) {
        initAnimate++;
        setCartAnimate(initAnimate);
      } else {
        setCartAnimate(1);
      }
    }, interval * dashedOne.length);
  };

  useEffect(() => {
    CartActual();
    if (cartAnimate == 1) {
      AnimateDashed();
    } else if (cartAnimate == 2) {
      AnimateDashedTwo();
    }

    if (cartAnimate == 1) {
      setDashedOne(originDashedOne);
      setDashedTwo(originDashedTwo);
    }
  }, [cartAnimate]);

  return (
    <div className="flex flex-col items-center my-32">
      <h3 className="m-b text-fs-24 max-sm:text-center">
        {languageData.tipsBooking.titleBookSteps}
      </h3>

      <div className="flex gap-[16px] max-md:flex-col overflow-x-clip scroll-page-gry max-[991px]:gap-0 items-center">
        {/* LOCATION */}
        <div className="flex flex-col p-[20px] items-center  w-[165px]">
          <div className="p-[4px] bg-white shadow-3xl mb-[16px]">
            <div
              className={`${
                cartAnimate === 1 || cartAnimate > 1 ? "bg-or-100" : "bg-gry-50"
              } w-[80px] h-[80px] flex items-center justify-center border-2 border-white rounded-lg`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/location/${
                  cartAnimate === 1 || cartAnimate > 1
                    ? "location-w.svg"
                    : "location-on-bl.svg"
                }`}
                alt="icon-location"
                width={24}
                height={30}
                className="w-[24px] h-[30px]"
              />
            </div>
          </div>

          <span className="mb-[8px] text-fs-14px m-s-b text-nowrap">
            {languageData.tipsBooking.chooseLocation}
          </span>
          <span className="text-gry-100 text-fs-12 text-center">
            {languageData.tipsBooking.chooseLocationDescription}
          </span>
        </div>

        {/* LINE TOP DASHED */}
        <div className="flex max-md:h-[8rem] max-md:items-center w-[116px] relative justify-around max-md:rotate-[90deg] md:mb-[75px]">
          {dashedOne.map((dashed, index) => (
            <div
              key={index}
              className={`${
                dashed.key === 0 || dashed.key === 7 ? "w-[7px]" : "w-[10px]"
              } h-[3px] relative ${
                dashed.value ? "bg-or-100" : "bg-gry-50"
              } ${StepsBannerStyle(dashed.key, 1)}`}
            />
          ))}
        </div>

        {/* CALENDAR */}
        <div className="flex flex-col p-[20px] items-center w-[165px]">
          <div className="p-[4px] bg-white mb-[16px] shadow-3xl">
            <div
              className={`${
                cartAnimate === 2 || cartAnimate > 2 ? "bg-or-100" : "bg-gry-50"
              } w-[80px] h-[80px] flex items-center justify-center border-2 border-white rounded-lg`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/${
                  cartAnimate === 2 || cartAnimate > 2
                    ? "calendar-done-w.svg"
                    : "calendar-bl-100.svg"
                }`}
                alt="icon-location"
                width={27}
                height={30}
                className="w-[27px] h-[30px]"
              />
            </div>
          </div>

          <span className="mb-[8px] text-fs-14px m-s-b text-nowrap">
            {languageData.tipsBooking.pickUpDate}
          </span>
          <span className="text-gry-100 text-fs-12 text-center">
            {languageData.tipsBooking.pickUpDateDescription}
          </span>
        </div>

        {/* LINE BOTTOM DASHED */}
        <div className="flex max-md:h-[8rem] max-md:items-center w-[116px] relative justify-around max-md:rotate-[90deg] md:mb-[75px]">
          {dashedTwo.map((dashed, index) => (
            <div
              key={index}
              className={`!w-[10px] ${
                dashed.key === 0 || dashed.key === 7 ? "w-[7px]" : "w-[10px]"
              } h-[3px] relative ${
                dashed.value === true ? "bg-or-100" : "bg-gry-50"
              } ${StepsBannerStyle(dashed.key, 2)}`}
            />
          ))}
        </div>

        {/* AIRPORT */}
        <div className="flex flex-col p-[20px] items-center w-[165px]">
          <div className="p-[4px] bg-white mb-[16px] shadow-3xl">
            <div
              className={`${
                cartAnimate === 3 ? "bg-or-100" : "bg-gry-50"
              } w-[80px] h-[80px] flex items-center justify-center border-2 border-white rounded-lg`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/general/${
                  cartAnimate === 3 ? "airport-w.svg" : "airport-bl.svg"
                }`}
                alt="icon-location"
                width={33}
                height={21}
                className={`w-[33px] h-[21px]`}
              />
            </div>
          </div>

          <span className="mb-[8px] text-fs-14px m-s-b text-nowrap">
            {languageData.tipsBooking.bookCar}
          </span>
          <span className="text-gry-100 text-fs-12 text-center">
            {languageData.tipsBooking.bookCarDescription}
          </span>
        </div>
      </div>
    </div>
  );
}
