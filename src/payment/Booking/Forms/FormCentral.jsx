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

export default function FormCentral(props) {
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
    roomHolders
  } = useContext(PaymentContext);

  const { handleStepChange } = useContext(BookingContext);

  const [isOpen, setIsOpen] = useState(false);
  const [animationData, setAnimationData] = useState("LoadingData");

  const searchParams = new URLSearchParams(window.location.search);
  const uid = searchParams.get("uid");

  useEffect(() => {
    if (paymentProvider === "OPENPAY") {
      if (window.OpenPay) {
        window.OpenPay.setId(process.env.NEXT_PUBLIC_OPENPAY_ID);
        window.OpenPay.setApiKey(process.env.NEXT_PUBLIC_OPENPAY_API_KEY);
        window.OpenPay.setSandboxMode(true);
        console.log("OpenPay credentials set");
      } else {
        console.error("OpenPay library is not loaded");
      }
    }
  }, [paymentProvider]);

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
    ...(roomHolders ? { roomHolders: roomHolders } : {}),
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

  const handleSubmitPayment = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setAnimationData("LoadingData");

    if (paymentProvider === "CONEKTA") {
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
        (response) =>
          conektaErrorResponseHandler(
            response,
            setAnimationData,
          )
      );
    } else if (paymentProvider === "OPENPAY") {
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
        (error) =>
          openpayErrorResponseHandler(
            error,
            setAnimationData,
          )
      );
    }
  };

  return (
    <>
      <form
        method="POST"
        name="paymentForm"
        id="card-form"
        onSubmit={handleSubmitPayment}
      >
        {/* GENERAL INFO CLIENT */}
        <ClientDataT />

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

        <FormCreditCard />
      </form>

      <AlertPayment
        animationData={animationData}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
}
