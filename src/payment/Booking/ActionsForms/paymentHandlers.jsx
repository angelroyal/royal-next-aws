"use client";

import {
  confirmBooking,
  SendPaymentRequest,
} from "@/payment/Api/fetchDataItinerary";

export const conektaErrorResponseHandler = (
  response,
  setAnimationData,
  closeModalAfterDelay
) => {
  setAnimationData("FailureData");
};

export const conektaSuccessResponseHandler = (
  token,
  uid,
  language,
  router,
  paymentData,
  setAnimationData,
  handleStepChange,
  closeModalAfterDelay
) => {
  paymentData.token = token.id;


  SendPaymentRequest(paymentData)
    .then((response) => {

      if (response.data.data.paymentStatus === "PAID") {
        confirmBooking(uid)
          .then((confirmResponse) => {
            router.push(`/${language}/confirmation?uid=${uid}`);
          })
          .catch((error) => {
            console.error("Error al confirmar la reserva:", error);
          });
      } else if (response.data.data.paymentStatus === "PENDING") {
        router.push(`/${language}/pending-payment?uid=${uid}`);
      } else {
        setAnimationData("FailureData");
      }

      setAnimationData("SuccessData");
    })
    .catch((error) => {
      setAnimationData("FailureData");
    });
};

export const openpayErrorResponseHandler = (error, setAnimationData) => {
  console.error("error", error);
  setAnimationData("FailureData");
};

export const openpaySuccessResponseHandler = (
  response,
  paymentData,
  setAnimationData,
  handleStepChange,
  closeModalAfterDelay
) => {
  paymentData.token = response.data.id;

  SendPaymentRequest(paymentData)
    .then((response) => {
      setAnimationData("SuccessData");
      setTimeout(() => {
        handleStepChange(3);
        closeModalAfterDelay();
      }, 3000);
    })
    .catch((error) => {
      console.error("There was an error processing the payment.", error);
      setAnimationData("FailureData");
    });
};
