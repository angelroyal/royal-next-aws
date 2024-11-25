"use client";
import React, { useState, useEffect, useContext } from "react";

import { TotalPriceBL } from "./TotalPriceBl";
import { BookingContext } from "../context/BookingContext";
import ConfirmationEmail from "../Email/ConfirmationEmail";
import { scrollToTop } from "@/utils/pageConfig/scrollToTop";
import { useCartAxios } from "../../components/Cart/CartAxios";
import CardsItinerary from "../itinerary/others/CardsItinerary";
import { fetchDataConfirmation } from "../Api/fetchDataItinerary";
import SkeletonConfirmPay from "@/utils/skeleton/SkeletonConfirmPay";
import { StepsToPayments, StepsToPaymentsM } from "@/hooks/StepsToPay";
import ReservationShortInfo from "../itinerary/others/DetailReservation";
import { BannerState } from "@/components/bannerJsx/bannerPaymentConfirmed";
import BannerConfirmationT from "@/components/bannerJsx/bannerConfirmationT";
import { Container } from "@/config/Others/Container";
import { ListCardsConfirmations } from "./ListCardsConfirmation";

export default function ConfirmReservation() {
  const { fetchData, setCartData, setItinerary, setTotalItemsInCart } =
    useCartAxios();

  const [smShow, setSmShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dataConfirmation, setDataConfirmation] = useState(null);
  const { setInfoReservation, handleStepChange, step } =
    useContext(BookingContext);

  const handleOpenModal = () => {
    setSmShow(true);
  };

  const handleCloseModal = () => {
    setSmShow(false);
  };

  const handleIconClick = () => {
    if (!smShow) {
      handleOpenModal();
    } else {
      handleCloseModal();
    }
  };

  useEffect(() => {
    scrollToTop();
    fetchDataConfirmation(
      setDataConfirmation,
      setInfoReservation,
      setIsLoading,
      sendConfirmationEmail,
      handleEmptyClear
    );
  }, []);

  const sendConfirmationEmail = (requestBody) => {
    ConfirmationEmail({ requestBody });
  };

  const handleEmptyClear = () => {
    fetchData(null);
    setItinerary(null);
    setTotalItemsInCart(null);
    setCartData(null);
  };

  return (
    <Container>
      {isLoading && <SkeletonConfirmPay step={step} />}

      <>
        {dataConfirmation && (
          <>
            {/* BANNER STATE CONFIRMATION */}
            <BannerState />

            <div className="flex min-h-[42rem] ">
              {/* LEFT INFORMATION */}
              <div className="w-full lg:w-[68%] xl:w-[90%] lg:pr-[20px] lg:mt-[3.2rem] mt-[1.8rem]">

                <ListCardsConfirmations confirmations={dataConfirmation}/>
                {/* <CardsItinerary dataItinerary={dataConfirmation} /> */}
              </div>

              {/* RIGHT INFORMATION */}
              <div className="hidden lg:flex lg:w-[35%] xl:pl-[49px] pl-[9px]">
                <ReservationShortInfo />
              </div>
            </div>

            {/* TOTAL PRICE CONFIRMATION */}
            <TotalPriceBL
              smShow={smShow}
              handleCloseModal={handleCloseModal}
              handleIconClick={handleIconClick}
            />

            {/* BOTTOM BANNER CONFIRMATION */}
            <BannerConfirmationT />
          </>
        )}
      </>
    </Container>
  );
}
