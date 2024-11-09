"use client";

import React, { useState, useEffect, useContext } from "react";

import Booking from "./Booking";
import EmptyItinerary from "../itinerary/Alerts/EmptyItinerary";
import DetailsPayment from "../itinerary/others/DetailsPayment";
import { Container } from "@/config/Others/Container";
import SkeletonPay from "@/utils/skeleton/SkeletonPay";
import LanguageContext from "@/language/LanguageContext";
import { useCartAxios } from "@/components/Cart/CartAxios";
import { scrollToTop } from "@/utils/pageConfig/scrollToTop";
import { fetchDataItinerary } from "../Api/fetchDataItinerary";
import { DialogPaymentItinerary } from "../Utils/DialogPaymentItinerary";
import {
  loadOpenpayScripts,
  unloadOpenpayScripts,
} from "../config/openpayScripts";
import {
  loadConektaScripts,
  unloadConektaScripts,
} from "../config/conektaScripts";

export default function FormClientBooking() {
  const [data, setData] = useState(null);
  const { itineraryData } = useCartAxios();
  const [showClr, setShowClr] = useState(null);
  const { languageData } = useContext(LanguageContext);
  const [skeletonShow, setSkeletonShow] = useState(true);
  const [errorAlertBooking, setErrorAlertBooking] = useState(false);
  const [hasActivities, setHasActivities] = useState(false);
  const [hasTransport, setHasTransport] = useState(false);

  useEffect(() => {
    scrollToTop();
    fetchDataItinerary(
      setData,
      setSkeletonShow,
      setShowClr,
      setErrorAlertBooking,
      setHasActivities,
      setHasTransport
    );
  }, [itineraryData]);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_PAYMENT_PROVIDER === "CONEKTA") {
      loadConektaScripts();
    } else if (process.env.NEXT_PUBLIC_PAYMENT_PROVIDER === "OPENPAY") {
      loadOpenpayScripts();
    }

    return () => {
      if (process.env.NEXT_PUBLIC_PAYMENT_PROVIDER === "CONEKTA") {
        unloadConektaScripts();
      } else if (process.env.NEXT_PUBLIC_PAYMENT_PROVIDER === "OPENPAY") {
        unloadOpenpayScripts();
      }
    };
  }, []);

  return (
    <div className="w-full h-full relative bg-[#f6f6f6]">
      <Container>
        <div className="mx-[70px] max-2xl:mx-0">
          {/* BACKGROUND WHITE STEP */}
          <div className="max-lg:hidden absolute right-0 z-0 lg:w-[25%] h-full bg-white top-0" />

          {/* STEPS STRUCTURE  */}
          {data && (
            <div className="flex min-h-[42rem] pt-6">
              <div className="w-full lg:w-[68%] xl:w-[90%] lg:pr-[20px]">
                {data.items && (
                  <div className="m-min-h mb-3">
                    <Booking
                      dataItinerary={data}
                      hasActivities={hasActivities}
                      hasTransport={hasTransport}
                    />
                  </div>
                )}
              </div>

              <div className="hidden lg:flex lg:w-[35%] xl:pl-[49px] pl-[9px] bg-white z-[1]">
                <DetailsPayment data={data} />
              </div>
            </div>
          )}
        </div>

        {data === null && skeletonShow && <SkeletonPay />}

        {showClr &&
          (showClr.message === "CLR" || showClr.message === "CNF") && (
            <EmptyItinerary />
          )}

        {errorAlertBooking && (
          <div className="py-[21vh] flex flex-col items-center justify-center">
            <img
              className="w-[174px] h-auto m-0"
              width={174}
              height={50}
              src={`${process.env.NEXT_PUBLIC_URL}royal/principal-logo.svg`}
              alt={process.env.NEXT_PUBLIC_NAME_COMPANY}
            />
            <h2 className="m-s-b text-or-100 text-fs-20 text-center">
              {languageData.Alerts.itinerary.title}
            </h2>
            <a
              className="text-nowrap m-m text-fs-14 text-gry-100 text-center flex cursor-pointer"
              href="tel:8009530342"
              target="_blank"
              rel="noopener noreferrer"
            >
              {languageData.Alerts.itinerary.contact}{" "}
              <p className="m-0 ml-[4px] m-s-b hover:text-or-100">
                {" "}
                800 953 0342
              </p>
            </a>
          </div>
        )}
      </Container>

      {data && data.items && <DialogPaymentItinerary reservationData={data} />}
    </div>
  );
}
