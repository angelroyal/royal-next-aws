
import React, { useState, useEffect, useContext } from "react";

import { BookingContext } from "../context/BookingContext";
import ConfirmationEmail from "../Email/ConfirmationEmail";
import { useIsMobileNew } from "../../config/Mobile/isMobile";
import { useCartAxios } from "../../components/Cart/CartAxios";
import { StepsToPayments, StepsToPaymentsM } from "@/hooks/StepsToPay";
import SkeletonConfirmPay from "../../utils/skeleton/SkeletonConfirmPay";
import ReservationShortInfo from "../itinerary/others/DetailReservation";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
import { BannerState } from "@/components/bannerJsx/bannerPaymentConfirmed";
import BannerConfirmationT from "@/components/bannerJsx/bannerConfirmationT";
import StructureItineraryWeb from "../itinerary/others/StructureItineraryWeb";
import { TotalPriceBL } from "./TotalPriceBl";

export default function ConfirmReservation() {
  const isMobile = useIsMobileNew();
  const {
    fetchData,
    cartData,
    setCartData,
    setItinerary,
    setTotalItemsInCart,
  } = useCartAxios();

  const [dataConfirmation, setDataConfirmation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [smShow, setSmShow] = useState(false);

  const { setInfoReservation, handleStepChange } = useContext(BookingContext);

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
    const fetchDataConfirmation = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const language = localStorage.getItem("language") || "es";
        const url = "/v1/booking/";
        const searchParams = new URLSearchParams(window.location.search);
        const cartId = searchParams.get("uid");
        const response = await axiosWithInterceptor.get(`${url}${cartId}`);
        setDataConfirmation(response.data);
        setInfoReservation(response.data);
        setIsLoading(false);

        const sentEmail = response.data.sent;
        if (!sentEmail) {
          const searchParams = new URLSearchParams(window.location.search);
          const uid = searchParams.get("uid");
          const newRequestBody = {
            cartId: uid,
            lang: language,
            status: 1,
          };
          sendConfirmationEmail(newRequestBody);
        }

        const token = localStorage.getItem("token");
        const iat = localStorage.getItem("iat");
        const exp = localStorage.getItem("exp");

        localStorage.clear();

        if (token) localStorage.setItem("token", token);
        if (iat) localStorage.setItem("iat", iat);
        if (exp) localStorage.setItem("exp", exp);
        handleEmptyClear();
      } catch (error) {
        console.error("Error al realizar la petición:", error);
        setIsLoading(false);
      }
    };

    fetchDataConfirmation();
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
    <>
      {isLoading && <SkeletonConfirmPay />}

      <>
        {dataConfirmation && (
          <>
            {/* BANNER STATE CONFIRMATION */}
            <BannerState />

            <div className="flex min-h-[42rem] ">
              {/* LEFT INFORMATION */}
              <div className="w-full lg:w-[68%] xl:w-[90%] lg:pr-[20px]">
                {/* STEPS */}
                <div className="h-auto mt-[31.6px] mb-[28px] lg:mt-[4rem] lg:mb-[6rem] p-0">
                  <StepsToPaymentsM
                    step={3}
                    handleStepChange={handleStepChange}
                  />
                  <StepsToPayments
                    step={3}
                    handleStepChange={handleStepChange}
                  />
                </div>

                <StructureItineraryWeb dataItinerary={dataConfirmation} />
              </div>

              {/* RIGHT INFORMATION */}
              <div className="hidden lg:flex lg:w-[35%] xl:pl-[49px] pl-[9px]">
                <ReservationShortInfo />
              </div>
            </div>

            {/* TOTAL PRICE CONFIRMATION */}
            <TotalPriceBL smShow={smShow} handleCloseModal={handleCloseModal} handleIconClick={handleIconClick} />
           

            {/* BOTTOM BANNER CONFIRMATION */}
            <BannerConfirmationT />
          </>
        )}
      </>
    </>
  );
}
