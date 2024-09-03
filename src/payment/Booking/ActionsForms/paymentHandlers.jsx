"use client";

import { SendPaymentRequest } from "@/payment/Api/fetchDataItinerary";

export const conektaErrorResponseHandler = (
  response,
  setAnimationData,
  closeModalAfterDelay
) => {
  setAnimationData("FailureData");
};

export const conektaSuccessResponseHandler = (
  token,
  paymentData,
  setAnimationData,
  handleStepChange,
  closeModalAfterDelay
) => {
  paymentData.token = token.id;

  SendPaymentRequest(paymentData)
    .then((response) => {
      setAnimationData("SuccessData");
      setTimeout(() => {
        handleStepChange(3);
        closeModalAfterDelay();
      }, 3000);
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
      console.log("Payment processed successfully.", response);
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
