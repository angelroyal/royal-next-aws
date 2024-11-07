"use client";
import Image from "next/image";
import React, { useContext } from "react";

import LanguageContext from "@/language/LanguageContext";

export default function DetailReservationPending() {
  const { languageData } = useContext(LanguageContext);
  return (
    <>
      <div className="flex py-[32px] px-[24px] items-start gap-x-[32px] rounded-[8px] w-full lg:shadow-[1px_0px_20px_1px_rgba(189,183,183,0.75)] lg:mb-[35px] h-max top-0 right-0 bg-white lg:mt-[3.2rem] max-lg:flex-col">
        {/* NUMBER CONFIRMATION */}
        <div className="flex !p-4 flex-col bg-grn-20 !border border-grn-100 gap-y-2 lg:gap-y-4 rounded-[8px] w-full">
          <div className="flex gap-x-[8px] items-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}icons/check/check-g.svg`}
              alt="check icon reservation"
              width={16}
              height={16}
            />

            <span className="text-fs-16 text-black m-b left-[8px]">
              {languageData.confirmation.confirmationNumber}
            </span>
          </div>

          <div className="text-gry-100 text-fs-24 m-b">
            #0000000001*
            {/* {infoReservation.booking.reference} */}
          </div>

          <div className="text-black text-fs-12 m-s-b">
            {languageData.confirmation.textInformative}
          </div>
        </div>

        {/* DATES RESERVATION */}
        <div className="flex flex-col !gap-y-4 w-full">
          <div className="text-black text-fs-20 m-b ">
            {languageData.confirmation.reservationDetails}
          </div>

          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="m-s-b text-fs-12 text-gry-100">
                {languageData.confirmation.titular}
              </span>

              <span className="m-m text-fs-12 text-gry-100">
                {/* {infoReservation.booking.name} */}
                Katherine González Ramírez*
              </span>
            </div>

            <div className="flex flex-col">
              <span className="m-s-b text-fs-12 text-gry-100">
                {/* {languageData.confirmation.bookingData.typePay} */}
              </span>

              <span className="m-m text-fs-12 text-gry-100">
                {/* {infoReservation.payment.type} */}
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="m-s-b text-fs-12 text-gry-100">
              {languageData.confirmation.email}
            </span>

            <email className="m-m text-fs-12 text-gry-100">
              katherine_dev@royalvacationsmexico.com*
              {/* {infoReservation.booking.email} */}
            </email>
          </div>

          <div className="flex flex-col">
            <span className="m-s-b text-fs-12 text-gry-100">
              {languageData.confirmation.phone}
            </span>

            <tel className="m-m text-fs-12 text-gry-100">
              9999999999*
              {/* {infoReservation.booking.phone} */}
            </tel>
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
                  {languageData.confirmation.titular}
                </span>

                <span className="m-m text-fs-12 text-gry-100">
                  Katherine González Ramírez*
                  {/* {infoReservation.payment.titular} */}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="m-s-b text-fs-12 text-gry-100">
                  {languageData.confirmation.bookingData.dateBooking}
                </span>

                <span className="m-m text-fs-12 text-gry-100">
                  29/01/2024 12:48pm*
                  {/* {infoReservation.booking.date} */}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-start flex-col gap-4">
              <div className="flex flex-col mr-[30px]">
                <span className="m-s-b text-fs-12 text-gry-100">
                  {" "}
                  {languageData.confirmation.bookingData.titleBookingData}
                </span>
                <span className="m-m text-fs-12 text-gry-100">
                  xxxx xxxx xxxx42*
                </span>
              </div>
              <div className="flex flex-col">
                <span className="m-s-b text-fs-12 text-gry-100">
                  {languageData.confirmation.bookingData.reference}
                </span>

                <span className="m-m text-fs-12 text-gry-100">
                  0123456789*
                  {/* {infoReservation.payment.reference} */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
