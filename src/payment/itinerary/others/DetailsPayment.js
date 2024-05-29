import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { CircularProgress } from "@mui/material";

import {
  DescriptionHotel,
  TourDescription,
  TransportDescription,
} from "./TypeReservation";
import ModalShare from "../../../utils/booking/ModalShare";
import LanguageContext from "../../../language/LanguageContext";
import { useIsMobileNew } from "../../../config/Mobile/isMobile";
import { BookingContext } from "@/payment/context/BookingContext";

import IconCreditCart from "../../../assets/images/others/credit-card.svg";
import IconRightBlack from "../../../assets/icons/utils/payment/right-bl.svg";
import LogoFlyRoyal from "../../../assets/icons/utils/payment/icon-royal-vacations.svg";

import "@/assets/styles/mobile/AppMobile.css";
import "@/assets/styles/mobile/PaymentMobile.css";
import "../../../../src/assets/styles/web/Tour.css";

export default function DetailsPayment(props) {
  const { data, step, setChangeButton } = props;

  const isMobile = useIsMobileNew();
  const { languageData } = useContext(LanguageContext);

  // NEW CONTEXT
  const {
    termsAccept,
    policyAccept,
    buttonActive,
    countNumber,
    progressCount,
    setOpenDialog,
    handleStepChange,
  } = useContext(BookingContext);

  const paymentReservation = () => {
    if (isMobile) {
      setOpenDialog(false);
    }
    setChangeButton(Math.floor(Math.random() * 100) + 1);
  };

  const nextStep = () => {
    if (isMobile) {
      setOpenDialog(false);
    }
    handleStepChange(step + 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* h-full */}
      <div className="flex w-full h-full lg:h-max pt-[28px] pb-[20px] px-6 lg:pt-[4.6rem] lg:pl-[24px] lg:pb-[24px] flex-col gap-y-[40px] sticky top-0 will-change-transform">
        {/* TITLE AND LOGO */}
        {data && (
          <>
            <div className="flex !gap-x-2 items-center">
              <Image
                className="w-[27px] h-[25px]"
                src={`${process.env.NEXT_PUBLIC_URL}icons/general/infotipo-staywuw.svg`}
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
                width={27}
                height={25}
              />
              {/* TEXT PAYMENT DETAILS /LP 15-02-24 */}
              <span className="text-black m-b text-fs-24">
                {languageData.itinerary.paymentDetails}
              </span>
            </div>

            {/* INFO PRICE AND TOTAL*/}
            {/* <div className="cont-info-price-info-itinerary"> */}
            <div className="w-full lg:!pb-4 lg:mb-[18px] h-full relative">
              {/* mb-[9rem] */}
              <div className="flex flex-col mb-[3rem]">
                {data.summary.hotels.length > 0 && (
                  <DescriptionHotel hotel={data.summary.hotels} />
                )}

                {data.summary.activities.length > 0 && (
                  <TourDescription tours={data.summary.activities} />
                )}

                {data.summary.transportations.length > 0 && (
                  <TransportDescription tours={data.summary.transportations} />
                )}

                <div
                  className={`w-full flex flex-col gap-y-2 border-b border-gry-70 !pb-4 mb-[18px]`}
                >
                  {/* TEXT TAXES /LP 15-02-24  */}
                  <span className="m-b text-fs-16 text-gry-100 ">
                    {languageData.booking.taxes}
                  </span>

                  <div className="flex justify-between items-center">
                    <span className="text-fs-12 m-m text-black">IVA</span>

                    <span className="text-black m-b text-fs-12">
                      $
                      {Math.floor(data.summary.taxes)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .<sup>{(data.summary.taxes % 1).toFixed(2).slice(2)}</sup>
                    </span>
                  </div>
                </div>
              </div>

              {/* FOOTER SECTION DETAILS */}
              {/* absolute */}
              <div className="flex w-full flex-col gap-y-[20px] lg:gap-y-[40px] sticky !bottom-0 bg-white">
                <div className="flex flex-col-reverse lg:flex-col gap-y-[20px] lg:gap-y-[40px]">
                  <div className="flex justify-between">
                    <p className="m-0 text-black text-fs-16 m-b">Total</p>

                    <p className="m-0 text-black text-fs-20 m-b">
                      $
                      {Math.floor(data.summary.totalCurrentPrice)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .
                      <sup>
                        {(data.summary.totalCurrentPrice % 1)
                          .toFixed(2)
                          .slice(2)}
                      </sup>
                    </p>
                  </div>

                  <Image src={IconCreditCart} alt="icons credit carts" />
                </div>

                <div className="flex justify-between flex-wrap items-center">
                  <ModalShare itinerary={true} className="modal-style-share" />

                  {step === 1 ? (
                    <button
                      onClick={() => nextStep()}
                      className="rounded-full py-[10px] px-[27px] flex !gap-x-2 bg-yw-100 items-center border-0 focus:outline-none text-fs-10 text-black m-b"
                    >
                      {languageData.itinerary.detailsPayment.completePayment}
                      <Image
                        src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/right-100.svg`}
                        alt="arrow right b"
                        width={6}
                        height={13}
                        className="w-[6px] h-[13px]"
                      />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={() => paymentReservation()}
                      className={`button-payment-details ${
                        !policyAccept || !termsAccept || !buttonActive
                          ? "disabled"
                          : ""
                      } ${
                        policyAccept && termsAccept
                          ? "add-padding-container"
                          : "disabled-padding-button"
                      } `}
                      disabled={!policyAccept || !termsAccept || !buttonActive}
                    >
                      {languageData.booking.paymentConekta.buttonForms}
                      {policyAccept && termsAccept && (
                        <div className="position-relative d-inline-flex justify-content-center">
                          <CircularProgress
                            variant="determinate"
                            value={progressCount}
                            id="circle-count"
                          />
                          <div className="count-number">{countNumber}</div>
                        </div>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
