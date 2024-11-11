"use client"

import Image from "next/image";
import React, { useContext } from "react";
import LanguageContext from "@/language/LanguageContext";

export default function BannerPaymentPending() {
  const { languageData } = useContext(LanguageContext);
  return (
    <div className="w-full flex flex-col">
      <Image
        className="max-md:h-[11rem] w-full object-cover"
        src={`${process.env.NEXT_PUBLIC_URL}banners/desktop/payment-pending.jpg`}
        alt="hotel reservation"
        width={1167}
        height={227}
      />

      <div className="flex flex-col py-7 !px-4 bg-yw-100 items-center rounded-b-lg gap-y-1 md:gap-y-4">
        <div className="md:hidden flex bg-white rounded-full w-full py-2 px-4 mb-[2px] items-center justify-center">
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}icons/general/infotipo-staywuw.svg`}
            alt="infotype stay-wuw"
            width={16}
            height={14}
            className="!w-4 h-3.5 mr-[4px]"
          />

          <p className="m-0 m-s-b text-fs-12 text-gry-100 mr-[2px]">
            {languageData.confirmation.bookingData.numberConfirmation}
          </p>

          <p className="m-0 py-1 px-2 rounded bg-grn-30 text-grn-100 m-b text-fs-14">
            {/* {infoReservation.booking.reference} */}
            00000001*
          </p>
        </div>

        <h5 className="m-b text-black text-fs-20 md:text-fs-28 text-center">
          {languageData.pending.titlePending}
        </h5>

        <h2 className="text-black text-fs-12 md:text-fs-16 m-m text-center">
        {languageData.pending.subtitlePending}
        </h2>
      </div>
    </div>
  );
}
