"use client";

import { SendPaymentRequest } from "@/payment/Api/fetchDataItinerary";

export const conektaErrorResponseHandler = (response, setAnimationData, closeModalAfterDelay) => {
    console.log("error", response);
    setAnimationData("FailureData");
    closeModalAfterDelay();
};

export const conektaSuccessResponseHandler = (token, paymentData, setAnimationData, handleStepChange, closeModalAfterDelay) => {
    paymentData.token = token.id;

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
            console.log("There was an error processing the payment.", error);
            setAnimationData("FailureData");
            closeModalAfterDelay();
        });
};

export const openpayErrorResponseHandler = (error, setAnimationData, closeModalAfterDelay) => {
    console.log("error", error);
    setAnimationData("FailureData");
    closeModalAfterDelay();
};

export const openpaySuccessResponseHandler = (response, paymentData, setAnimationData, handleStepChange, closeModalAfterDelay) => {
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
            console.log("There was an error processing the payment.", error);
            setAnimationData("FailureData");
            closeModalAfterDelay();
        });
};