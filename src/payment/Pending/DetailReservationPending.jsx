"use client";

import React, { useEffect, useState, useContext } from "react";

import LanguageContext from "@/language/LanguageContext";
import { getBookingInfo } from "../Api/fetchDataItinerary";
import SkeletonConfirmPay from "@/utils/skeleton/SkeletonConfirmPay";

export default function DetailReservationPending() {
  const { languageData } = useContext(LanguageContext);
  const [uid, setUid] = useState(null);
  const [bookingInfo, setBookingInfo] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      setUid(searchParams.get("uid"));
    }
  }, []);

  useEffect(() => {
    if (uid) {
      getBookingInfo(uid)
        .then((data) => {
          setBookingInfo(data);
        })
        .catch((error) => {
          console.error("Error fetching booking information:", error);
        });
    }
  }, [uid]);

  if (!bookingInfo) {
    return (
      <>
        <SkeletonConfirmPay />
      </>
    );
  }

  const { orderReference, reservation_details, payment_information } =
    bookingInfo;

  return (
    <div className="flex py-[32px] px-[24px] items-start gap-x-[32px] rounded-[8px] w-full lg:shadow-[1px_0px_20px_1px_rgba(189,183,183,0.75)] lg:mb-[35px] h-max top-0 right-0 bg-white lg:mt-[3.2rem] max-lg:flex-col">
      {/* NUMBER CONFIRMATION */}
      <div className="flex !p-4 flex-col bg-grn-20 !border border-grn-100 gap-y-2 lg:gap-y-4 rounded-[8px] w-full">
        <div className="flex gap-x-[8px] items-center">
          <span className="text-fs-16 text-black m-b left-[8px]">
            {languageData.confirmation.confirmationNumber}
          </span>
        </div>
        <div className="text-gry-100 text-fs-24 m-b">#{orderReference}</div>
        <div className="text-black text-fs-12 m-s-b">
          {languageData.confirmation.textInformative}
        </div>
      </div>

      {/* DATES RESERVATION */}
      <div className="flex flex-col !gap-y-4 w-full">
        <div className="text-black text-fs-20 m-b ">
          {languageData.confirmation.reservationDetails}
        </div>
        <div className="flex flex-col">
          <span className="m-s-b text-fs-12 text-gry-100">
            {languageData.confirmation.titular}
          </span>
          <span className="m-m text-fs-12 text-gry-100">
            {reservation_details.name}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="m-s-b text-fs-12 text-gry-100">
            {languageData.confirmation.email}
          </span>
          <span className="m-m text-fs-12 text-gry-100">
            {reservation_details.email}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="m-s-b text-fs-12 text-gry-100">
            {languageData.confirmation.phone}
          </span>
          <span className="m-m text-fs-12 text-gry-100">
            {reservation_details.phone}
          </span>
        </div>
      </div>

      {/* INFO PAYMENT */}
      <div className="w-full flex flex-col gap-y-4">
        <div className="m-b text-fs-20 text-black">
          {languageData.confirmation.infoPayment}
        </div>
        <div className="flex gap-8 max-lg:flex-col">
          <div className="flex justify-between items-start flex-col gap-4">
            <div className="flex flex-col">
              <span className="m-s-b text-fs-12 text-gry-100">
                {languageData.confirmation.bookingData.titular}
              </span>
              <span className="m-m text-fs-12 text-gry-100">
                {payment_information.name}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="m-s-b text-fs-12 text-gry-100">
                {languageData.confirmation.bookingData.dateBooking}
              </span>
              <span className="m-m text-fs-12 text-gry-100">
                {payment_information.date_time}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-start flex-col gap-4">
            <div className="flex flex-col">
              <span className="m-s-b text-fs-12 text-gry-100">
                {languageData.confirmation.bookingData.titleBookingData}
              </span>
              <span className="m-m text-fs-12 text-gry-100">
                {payment_information.booking_data}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="m-s-b text-fs-12 text-gry-100">
                {languageData.confirmation.bookingData.reference}
              </span>
              <span className="m-m text-fs-12 text-gry-100">
                {payment_information.reference}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
