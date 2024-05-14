import Image from "next/image";
import { CircularProgress } from "@mui/material";
import React, { useContext, useState } from "react";

import ModalShare from "../../utils/booking/ModalShare";
import LanguageContext from "../../language/LanguageContext";
import { useIsMobileNew } from "../../config/Mobile/isMobile";
import { ShareContainer } from "../../utils/booking/ShareContainer";
import { StepperContext } from "../context/steeperContext";
import { DialogItineraryMobile } from "../itinerary/others/DialogItineraryMobile";

import IconRightBl from "../../assets/icons/utils/payment/right-bl.svg";
import IconShowLessW from "../../assets/icons/utils/payment/show_less_w.svg";
import IconShareW from "../../assets/icons/utils/payment/share-w.svg";

export function DialogPaymentItinerary(props) {
  const { handleStepChange, reservationData, step, setChangeButton } = props;
  const { languageData } = useContext(LanguageContext);

  const reservationType = (type) => {
    switch (type) {
      case "hotel":
        return "hotel";
      default:
        return "hotel";
    }
  };

  const [openDialog, setOpenDialog] = useState(false);
  const {
    termsAccept,
    policyAccept,
    buttonActive,
    progressCount,
    countNumber,
  } = useContext(StepperContext);

  const isMobile = useIsMobileNew();
  const [smShow, setSmShow] = useState(false);

  const paymentReservation = () => {
    setChangeButton(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <>
      {reservationData && (
        <div className="lg:hidden border-t-0 bg-white sticky bottom-0 left-0 w-full h-auto ">
          {step !== 3 ? (
            <div className="rounded-t-[12px] relative h-full pt-[1.2rem] pb-[1rem] px-[1.2rem] shadow-[0px_-4px_14px_-3px_rgb(0,0,0,52%)]">
              <div
                className="absolute top-[-16px] w-[3rem] h-[3rem] rounded-full left-0 right-0 mx-auto bg-white z-[3] shadow-[0px_-12px_12px_-11px]"
                onClick={() => setOpenDialog(true)}
              >
                <Image
                  className="absolute top-[13px] left-[11px] !w-1/2"
                  src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/up-70.svg`}
                  width={14}
                  height={7}
                  alt="show less icon"
                />
              </div>

              <div className="flex flex-col px-2">
                <div className="block pb-3 border-b border-gry-70">
                  <p className="mb-2 m-s-b text-fs-12 "></p>
                  {
                    languageData.navigation[
                      reservationType(reservationData.items[0].type)
                    ]
                  }

                  <p className="text-fs-10 text-gry-70 m-s-b m-0">
                    {reservationData.items[0].name}
                  </p>
                </div>

                {/* Dialog  */}
                <div className="d-flex justify-content-between mt-3">
                  <div className="text-fs-16 m-b ">Total</div>

                  <div className="m-b text-black">
                    <span className="text-fs-14 mr-[8px]">MXN</span>
                    <span className="text-fs-20">
                      $
                      {Math.floor(reservationData.summary.totalCurrentPrice)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .
                    </span>
                    <sup>
                      {(reservationData.summary.totalCurrentPrice % 1)
                        .toFixed(2)
                        .slice(2)}
                    </sup>{" "}
                  </div>
                </div>

                <div className="d-flex justify-content-between mt-2">
                  {step === 1 && (
                    <ModalShare
                      itinerary={true}
                      className="modal-style-share"
                    />
                  )}

                  {isMobile && step === 2 && (
                    <ModalShare
                      itinerary={true}
                      className="modal-style-share"
                    />
                  )}

                  {step === 1 && (
                    <button
                      onClick={() => handleStepChange(step + 1)}
                      className="py-[10px] px-[2.1rem] flex items-center justify-center bg-yw-100 border-0 rounded-full m-b text-nowrap gap-x-[0.3rem] text-fs-10"
                    >
                      {languageData.itinerary.detailsPayment.completePayment}
                      <Image src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/right-100.svg`} width={6} height={13} alt="arrow right icon"/>
                    </button>
                  )}

                  {step === 2 && (
                    <div>
                      <button
                        onClick={() => paymentReservation()}
                        type="submit"
                        className={`button-payment-details  ${
                          !policyAccept || !termsAccept || !buttonActive
                            ? "disabled"
                            : ""
                        } ${
                          policyAccept && termsAccept
                            ? "add-padding-container"
                            : "disabled-padding-button"
                        } `}
                        disabled={
                          !policyAccept || !termsAccept || !buttonActive
                        }
                      >
                        {languageData.booking.paymentConekta.buttonForms}{" "}
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
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="container-confirmation">
              <div
                className="circle-open-dialog-c"
                onClick={() => setOpenDialog(true)}
              >
                <Image className="icon-show-less !w-1/2" src={IconShowLessW} />
              </div>

              <div className="d-flex flex-column">
                <span className="total-confirmation-text">Totall</span>

                <div className="total-confirmation-text">
                  MXN $
                  <span className="total-confirmation-price">
                    <span>
                      {Math.floor(reservationData.summary.totalCurrentPrice)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .
                    </span>
                    <sup>
                      {(reservationData.summary.totalCurrentPrice % 1)
                        .toFixed(2)
                        .slice(2)}
                    </sup>{" "}
                  </span>
                </div>
              </div>

              <bottom
                onClick={() => setSmShow(!smShow)}
                className="share-confirmation"
              >
                <Image className="share-icon-confirmed" src={IconShareW} />
                Compartir
              </bottom>
            </div>
          )}
        </div>
      )}

      <ShareContainer
        smShow={smShow}
        handleCloseModal={() => setSmShow(!smShow)}
      />

      <DialogItineraryMobile
        open={openDialog}
        onClose={() => setOpenDialog(!openDialog)}
        setChangeButton={setChangeButton}
        dataItinerary={reservationData}
        setSmShow={() => setSmShow(true)}
      />
    </>
  );
}
