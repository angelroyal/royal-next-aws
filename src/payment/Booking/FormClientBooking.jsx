"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useContext } from "react";

import {
  loadOpenpayScripts,
  unloadOpenpayScripts,
} from "../config/openpayScripts";
import {
  loadConektaScripts,
  unloadConektaScripts,
} from "../config/conektaScripts";

import Booking from "./Booking";
import { decrypt } from "@/config/Others/encrypt";
import { Container } from "@/config/Others/Container";
import LanguageContext from "@/language/LanguageContext";
import { useCartAxios } from "@/components/Cart/CartAxios";
import { scrollToTop } from "@/utils/pageConfig/scrollToTop";
import { fetchDataItinerary } from "../Api/fetchDataItinerary";
import DetailsPayment from "../itinerary/others/DetailsPayment";
import EmptyItinerary from "../itinerary/Alerts/EmptyItinerary";
import { DialogPaymentItinerary } from "../Utils/DialogPaymentItinerary";
import FormPaymentSkeleton from "@/components/Skeleton/FormPaymentSkeleton";


export default function FormClientBooking() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const { itineraryData } = useCartAxios();
  const [showClr, setShowClr] = useState(null);
  const { language,languageData } = useContext(LanguageContext);
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

  let uid = null;
  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    uid = searchParams.get("uid");
  }

  useEffect(() => {
    
    if (data?.status === 3) {
      router.push(`/${language}/confirmation?uid=${uid}`);
    }
  }, [data]);

  const [provider, setProvider] = useState(null);
  
  useEffect(() => {
    const encrypted = Cookies.get("payment");
    
    if (encrypted) {
      setProvider(decrypt(encrypted));
    }
  }, []);

  useEffect(() => {
    if (provider === "CONEKTA") {
      loadConektaScripts();
    } else if (provider === "OPENPAY") {
      loadOpenpayScripts();
    }

    return () => {
      if (provider === "CONEKTA") {
        unloadConektaScripts();
      } else if (provider === "OPENPAY") {
        unloadOpenpayScripts();
      }
    };
  }, []);

  // useEffect(() => {
  //   if (process.env.NEXT_PUBLIC_PAYMENT_PROVIDER === "CONEKTA") {
  //     loadConektaScripts();
  //   } else if (process.env.NEXT_PUBLIC_PAYMENT_PROVIDER === "OPENPAY") {
  //     loadOpenpayScripts();
  //   }

  //   return () => {
  //     if (process.env.NEXT_PUBLIC_PAYMENT_PROVIDER === "CONEKTA") {
  //       unloadConektaScripts();
  //     } else if (process.env.NEXT_PUBLIC_PAYMENT_PROVIDER === "OPENPAY") {
  //       unloadOpenpayScripts();
  //     }
  //   };
  // }, []);

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

        {data === null && skeletonShow && <FormPaymentSkeleton />}

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
              href={`tel:${languageData.navigation.hrefNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {languageData.Alerts.itinerary.contact}{" "}
              <p className="m-0 ml-[4px] m-s-b hover:text-or-100">
                {" "}
                {languageData.navigation.number}
              </p>
            </a>
          </div>
        )}
      </Container>

      {data && data.items && <DialogPaymentItinerary reservationData={data} form={true}/>}
    </div>
  );
}
