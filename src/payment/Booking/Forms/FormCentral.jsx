import { useContext, useState, useEffect } from "react";

import {
  conektaErrorResponseHandler,
  conektaSuccessResponseHandler,
  openpayErrorResponseHandler,
  openpaySuccessResponseHandler,
} from "../ActionsForms/paymentHandlers";
import FormClientHB from "./FormClientHB";
import ClientDataT from "./FormClientData";
import FormCreditCard from "./FormCreditCard";
import { FormClientRH } from "./ClientDataRH";
import { ActivityFormT } from "../ActivityFormT";
import { PaymentContext } from "@/payment/context/PaymentContext";
import { BookingContext } from "@/payment/context/BookingContext";
import AlertPayment from "@/components/Alerts/LottiePay/AlertPayment";
import SkeletonActivitiesTourPT from "@/utils/skeleton/SkeletonActivitiesTourPT";
import FormCreditCardClip from "./FormCreditCardClip";

export default function FormCentral(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const { handleStepChange } = useContext(BookingContext);
  const [animationData, setAnimationData] = useState("LoadingData");
  const paymentProvider = process.env.NEXT_PUBLIC_PAYMENT_PROVIDER;
  const { activityPreBooking, activityTrue, dataItinerary, transportTrue } =
    props;

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    nameCard,
    numberCard,
    formActivityItems,
    hotelRH,
    expirationMonth,
    expirationYear,
    cvvCard,
    roomHolders,
  } = useContext(PaymentContext);

  const searchParams = new URLSearchParams(window.location.search);
  const uid = searchParams.get("uid");
  // const dev = window.OpenPay?.deviceData.setup("card-form");

  // PAYLOAD PAYMENT
  const paymentData = {
    name: firstName,
    lastname: lastName,
    email: email,
    phone: phoneNumber,
    currency: "MXN",
    cartId: uid,
    cardTitular: nameCard,
    cardNumber: numberCard.slice(-4),
    serviceType: paymentProvider.toLowerCase(),
    ...(hotelRH ? { guests: hotelRH } : {}),
    ...(roomHolders ? { paxes: roomHolders } : {}),
    ...(formActivityItems ? { items: formActivityItems } : {}),
    ...(paymentProvider === "OPENPAY" &&
    window.OpenPay &&
    window.OpenPay.deviceData
      ? {
          deviceId: window.OpenPay.deviceData.setup("card-form"),
          description: "solo si es para openpay",
        }
      : {}),
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeModalAfterDelay = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const handleSubmitPayment = (event, clipToken = null) => {
    event.preventDefault();
    setIsOpen(true);
    setAnimationData("LoadingData");

    switch (paymentProvider) {
      case "CONEKTA":
        const conektaPublicKey = process.env.NEXT_PUBLIC_CONEKTA_KEY;
        window.Conekta.setPublicKey(conektaPublicKey);

        window.Conekta.Token.create(
          event.target,
          (token) =>
            conektaSuccessResponseHandler(
              token,
              paymentData,
              setAnimationData,
              handleStepChange,
              closeModalAfterDelay
            ),
          (response) => conektaErrorResponseHandler(response, setAnimationData)
        );
        break;

      case "OPENPAY":
        window.OpenPay.token.create(
          {
            card_number: numberCard,
            holder_name: nameCard,
            expiration_year: expirationYear.slice(-2),
            expiration_month: expirationMonth,
            cvv2: cvvCard,
          },
          (response) =>
            openpaySuccessResponseHandler(
              response,
              paymentData,
              setAnimationData,
              handleStepChange,
              closeModalAfterDelay
            ),
          (error) => openpayErrorResponseHandler(error, setAnimationData)
        );
        break;

      default:
        console.error("Proveedor de pago no soportado");
        setAnimationData("Error");
        break;
    }
  };

  const handleContinueToStep2 = (event) => {
    event.preventDefault();
    setCurrentStep(2);
  };

  const handleContinueToStep3 = (event) => {
    event.preventDefault();
    setCurrentStep(3);
  };

  return (
    <>
      {currentStep === 1 && (
        <form onSubmit={handleContinueToStep2}>
          {/* GENERAL INFO CLIENT */}
          <ClientDataT />
          <div className="grid justify-end pt-8">
            <button
              className="rounded-full py-[16px] px-[3rem] flex !gap-x-2 bg-yw-100 items-center border-0 focus:outline-none text-fs-14 text-black m-b text-nowrap"
              type="submit"
            >
              Continuar
            </button>
          </div>
        </form>
      )}

      {currentStep === 2 && (
        <form onSubmit={handleContinueToStep3}>
          {dataItinerary && (
            <>
              {/* FORM PROVIDER HB */}
              <FormClientHB dataItinerary={dataItinerary} />

              {/* FORM PROVIDER RH */}
              <FormClientRH dataItinerary={dataItinerary} />
            </>
          )}

          {activityPreBooking && activityPreBooking.length > 0 && (
            <ActivityFormT activityPreBooking={activityPreBooking} />
          )}

          {activityTrue === true || transportTrue === true
            ? !activityPreBooking && <SkeletonActivitiesTourPT />
            : null}
          <div className="grid justify-end pt-8">
            <button
              className="rounded-full py-[16px] px-[3rem] flex !gap-x-2 bg-yw-100 items-center border-0 focus:outline-none text-fs-14 text-black m-b text-nowrap"
              type="submit"
            >
              Continuar
            </button>
          </div>
        </form>
      )}

      {currentStep === 3 && (
        <>
          {(paymentProvider === "CONEKTA" || paymentProvider === "OPENPAY") && (
            <form
              method="POST"
              name="paymentForm"
              id="card-form"
              onSubmit={handleSubmitPayment}
            >
              <FormCreditCard/>
            </form>
          )}

          {paymentProvider === "CLIP" && (
            <FormCreditCardClip
              paymentData={paymentData}
              setAnimationData={setAnimationData}
              handleStepChange={handleStepChange}
              closeModalAfterDelay={closeModalAfterDelay}
              setIsOpen={setIsOpen}
            />
          )}
        </>
      )}

      <AlertPayment
        animationData={animationData}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
}
