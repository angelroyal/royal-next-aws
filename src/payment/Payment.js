"use client";

// import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import React, { useState, useEffect, useContext } from "react";

import Booking from "./Booking/Booking";
import Itinerary from "./itinerary/Itinerary";
import SkeletonPay from "../utils/skeleton/SkeletonPay";
import { useToken } from "../config/context/AuthContext";
import LanguageContext from "../language/LanguageContext";
import { BookingContext } from "./context/BookingContext";
import { useCartAxios } from "../components/Cart/CartAxios";
import { scrollToTop } from "../utils/pageConfig/scrollToTop";
import EmptyItinerary from "./itinerary/Alerts/EmptyItinerary";
import DetailsPayment from "./itinerary/others/DetailsPayment";
import ConfirmReservation from "./Confirmation/ConfirmReservation";
import { StepsToPayments, StepsToPaymentsM } from "../hooks/StepsToPay";
import { DialogPaymentItinerary } from "./Utils/DialogPaymenItitnerary";
import axiosWithInterceptor from "../config/Others/axiosWithInterceptor";

import "../assets/styles/web/App.css";
import "../assets/styles/web/Tour.css";
import "../assets/styles/web/Hotel.css";
import "../assets/styles/web/Payment.css";
import "../assets/styles/mobile/PaymentMobile.css";

export default function Payment() {
  const { step, handleStepChange, openDialog } = useContext(BookingContext);
  const { token } = useToken();
  const [data, setData] = useState(null);
  const [errorAlertBooking, setErrorAlertBooking] = useState(false);

  const [showClr, setShowClr] = useState(null);
  const { itineraryData, cartData } = useCartAxios();
  const [changeButton, setChangeButton] = useState(0);

  useEffect(() => {
    const loadConektaScripts = () => {
      const script1 = document.createElement("script");
      script1.src =
        "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
      script1.type = "text/javascript";
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      script2.src = "https://cdn.conekta.io/js/latest/conekta.js";
      script2.type = "text/javascript";
      document.body.appendChild(script2);
    };

    loadConektaScripts();

    const unloadConektaScripts = () => {
      const scripts = document.querySelectorAll("script[src*='conekta.js']");
      scripts.forEach((script) => {
        script.parentNode.removeChild(script);
      });
    };

    return () => {
      unloadConektaScripts();
    };
  }, []);

  // LOADING SKELETON SHOW SCREEN
  const [skeletonShow, setSkeletonShow] = useState(true);

  const { languageData } = useContext(LanguageContext);
  const [hasACtivities, setHasActivities] = useState(false);

  useEffect(() => {
    scrollToTop();

    if (token) {
      fetchData();
    }
  }, [token, itineraryData]);

  const fetchData = async () => {
    setData(null);
    setSkeletonShow(true);
    try {
      const url = "/v1/carts/";
      const searchParams = new URLSearchParams(window.location.search);
      const cartId = searchParams.get("uid");
      const response = await axiosWithInterceptor.get(
        `${url}${cartId}/schedule`
      );

      const filterDataItinerary = response.data.items.filter(
        (objeto) => objeto.type === "activity"
      );

      if (filterDataItinerary.length > 0) {
        setHasActivities(true);
      }

      setData(response.data);
      setSkeletonShow(false);
    } catch (error) {
      // console.eror(error);

      if (error.response) {
        const errorMessage = error.response.data;

        switch (error.response.status) {
          case 404:
            setShowClr(errorMessage);
            break;
          case 500:
            setErrorAlertBooking(true);
            break;
        }

        if (error.response.data.message === "CNF") {
          localStorage.removeItem("uid-cart");
          localStorage.removeItem("cartData");
        }
      } else if (error.message === "Network Error") {
        setErrorAlertBooking(true);
      }

      setData(null);
      setSkeletonShow(false);
    }
  };

  // const history = useHistory();
  const handleStart = () => {
    const baseUrl = process.env.REACT_APP_BASE_URL;
  };
  console.log(openDialog);
  return (
    <>
      <div className={`w-full h-full relative bg-[#f6f6f6]`}>
        {openDialog && (
          <div className="backdrop-brightness-50 w-full h-full absolute z-[1]" />
        )}
        <Container>
          <>
            {/* BACKGROUND WHITE */}
            {step !== 3 && (
              <div className=" max-lg:hidden absolute right-0 z-0 lg:w-[25%] h-full bg-white top-0" />
            )}

            {data && (
              <>
                <div>
                  {/* ITINERARY AND BOOKING VIEW */}
                  {step !== 3 && (
                    <div className="flex min-h-[42rem]">
                      {/* LEFT INFORMATION */}
                      <div className="w-full lg:w-[68%] xl:w-[90%] pr-[20px] container-steeps-payment">
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
                                hasACtivities={hasACtivities}
                              />
                            )}
                          </div>
                        )}
                      </div>

                      {/* RIGHT INFORMATION */}
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

                {/* CONFIRMATION VIEW */}
                {step === 3 && <ConfirmReservation />}
              </>
            )}
          </>

          {/* SKELETON */}
          <div>{!data && skeletonShow && <SkeletonPay />}</div>

          {/* EMPTY CART ALERT */}
          {showClr &&
            (showClr.message === "CLR" || showClr.message === "CNF") && (
              <EmptyItinerary />
            )}

          {/* ERROR ALERT  */}
          {errorAlertBooking === true && (
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

        {/* DIALOG INFORMATION MOBILE */}
        {data && data.items && (
          <DialogPaymentItinerary
            handleStepChange={handleStepChange}
            reservationData={data}
            step={step}
            setChangeButton={setChangeButton}
          />
        )}
      </div>
    </>
  );
}
