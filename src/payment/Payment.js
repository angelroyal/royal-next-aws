"use client";

import React, { useState, useEffect, useContext } from "react";

import {
  loadConektaScripts,
  unloadConektaScripts,
} from "./config/conektaScripts";
import Booking from "./Booking/Booking";
import Itinerary from "./itinerary/Itinerary";
import { Container } from "@/config/Others/Container";
import SkeletonPay from "../utils/skeleton/SkeletonPay";
import LanguageContext from "../language/LanguageContext";
import { BookingContext } from "./context/BookingContext";
import { useCartAxios } from "../components/Cart/CartAxios";
import { scrollToTop } from "../utils/pageConfig/scrollToTop";
import { fetchDataItinerary } from "./Api/fetchDataItinerary";
import EmptyItinerary from "./itinerary/Alerts/EmptyItinerary";
import DetailsPayment from "./itinerary/others/DetailsPayment";
import ConfirmReservation from "./Confirmation/ConfirmReservation";
import { StepsToPayments, StepsToPaymentsM } from "../hooks/StepsToPay";
import { DialogPaymentItinerary } from "./Utils/DialogPaymentItinerary";

export default function Payment() {
  const [data, setData] = useState(null);
  const { itineraryData } = useCartAxios();
  const [showClr, setShowClr] = useState(null);
  const [changeButton, setChangeButton] = useState(0);
  const { languageData } = useContext(LanguageContext);
  const [skeletonShow, setSkeletonShow] = useState(true);
  const [hasActivities, setHasActivities] = useState(false);
  const [errorAlertBooking, setErrorAlertBooking] = useState(false);
  const { step, handleStepChange, openDialog } = useContext(BookingContext);

  useEffect(() => {
    loadConektaScripts();

    return () => {
      unloadConektaScripts();
    };
  }, []);

  useEffect(() => {
    scrollToTop();
    fetchDataItinerary(
      setData,
      setSkeletonShow,
      setHasActivities,
      setShowClr,
      setErrorAlertBooking
    );
  }, [itineraryData]);

  return (
    <div className="w-full h-full relative bg-[#f6f6f6]">
      {openDialog && (
        <div className="backdrop-brightness-50 w-full h-full absolute z-[1]" />
      )}

      <Container>
        <>
          {/* BACKGROUND WHITE STEP */}
          {step !== 3 && (
            <div className="max-lg:hidden absolute right-0 z-0 lg:w-[25%] h-full bg-white top-0" />
          )}

          {/* STEPS STRUCTURE  */}
          {data && (
            <>
              <div>
                {step !== 3 && (
                  <div className="flex min-h-[42rem]">
                    <div className="w-full lg:w-[68%] xl:w-[90%] lg:pr-[20px]">
                      <div className="h-auto mt-[31.6px] mb-[28px] lg:mt-[4rem] lg:mb-[6rem] p-0">
                        <StepsToPaymentsM
                          step={step}
                          handleStepChange={handleStepChange}
                        />
                        <StepsToPayments
                          step={step}
                          handleStepChange={handleStepChange}
                        />
                      </div>

                      {data.items && (
                        <div className="m-min-h mb-3">
                          {step === 1 && <Itinerary dataItinerary={data} />}
                          {step === 2 && (
                            <Booking
                              dataItinerary={data}
                              step={step}
                              handleStepChange={handleStepChange}
                              changeButton={changeButton}
                              hasActivities={hasActivities}
                            />
                          )}
                        </div>
                      )}
                    </div>

                    <div className="hidden lg:flex lg:w-[35%] xl:pl-[49px] pl-[9px] bg-white">
                      <DetailsPayment
                        data={data}
                        step={step}
                        handleStepChange={handleStepChange}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* SCREEN PAGE CONFIRMATION */}
              {step === 3 && <ConfirmReservation />}
            </>
          )}
        </>

        {!data && skeletonShow && <SkeletonPay />}

        {showClr &&
          (showClr.message === "CLR" || showClr.message === "CNF") && (
            <EmptyItinerary />
          )}

        {errorAlertBooking && (
          <div className="container-itinerary-no-data">
            <img
              className="name-logo m-0"
              src={`${process.env.NEXT_PUBLIC_URL}royal/principal-logo.svg`}
              alt={process.env.NEXT_PUBLIC_NAME_COMPANY}
            />
            <h2 className="itinerary-no-show">
              {languageData.Alerts.itinerary.title}
            </h2>
            <p className="itinerary-no-text padding-bottom">
              {languageData.Alerts.itinerary.contact} 800 953 0342
            </p>
          </div>
        )}
      </Container>

      {data && data.items && (
        <DialogPaymentItinerary
          handleStepChange={handleStepChange}
          reservationData={data}
          step={step}
          setChangeButton={setChangeButton}
        />
      )}
    </div>
  );
}
