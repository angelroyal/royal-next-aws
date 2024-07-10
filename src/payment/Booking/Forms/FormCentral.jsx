import { useContext, useState } from "react";

import ClientDataT from "./FormClientData";
import FormCreditCard from "./FormCreditCard";
import { FormClientRH } from "./ClientDataRH";
import { ActivityFormT } from "../ActivityFormT";
import { PaymentContext } from "@/payment/context/PaymentContext";
import { BookingContext } from "@/payment/context/BookingContext";
import AlertPayment from "@/components/Alerts/LottiePay/AlertPayment";
import SkeletonActivitiesTourPT from "@/utils/skeleton/SkeletonActivitiesTourPT";
import {
  conektaErrorResponseHandler,
  conektaSuccessResponseHandler,
  openpayErrorResponseHandler,
  openpaySuccessResponseHandler,
} from "../ActionsForms/paymentHandlers";

const openpayId = process.env.NEXT_PUBLIC_OPENPAY_ID;
const openpayApiKey = process.env.NEXT_PUBLIC_OPENPAY_API_KEY;

export default function FormCentral(props) {
  const paymentProvider = process.env.NEXT_PUBLIC_PAYMENT_PROVIDER;

  const {
    activityPreBooking,
    activityTrue,
    dataItinerary,
    transportTrue,
  } = props;

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
    cvvCard
  } = useContext(PaymentContext);

  const { handleStepChange } = useContext(BookingContext);

  const [isOpen, setIsOpen] = useState(false);
  const [animationData, setAnimationData] = useState("LoadingData");

  const searchParams = new URLSearchParams(window.location.search);
  const uid = searchParams.get("uid");

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
    ...(hotelRH ? { guests: hotelRH } : {}),
    ...(formActivityItems ? { items: formActivityItems } : {}),
    ...(process.env.NEXT_PUBLIC_PAYMENT_PROVIDER === "OPENPAY" ? {
      deviceId: window.OpenPay.deviceData.setup("card-form"),
      description: "solo si es para openpay"
    } : {})
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeModalAfterDelay = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  // PROVIDER PAY CONEKTA OR OPEN PAY
  const handleSubmitPayment = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setAnimationData("LoadingData");

    if (paymentProvider === "CONEKTA") {
      const conektaPublicKey = process.env.NEXT_PUBLIC_CONEKTA_KEY;
      window.Conekta.setPublicKey(conektaPublicKey);

      window.Conekta.Token.create(
        event.target,
        (token) => conektaSuccessResponseHandler(token, paymentData, setAnimationData, handleStepChange, closeModalAfterDelay),
        (response) => conektaErrorResponseHandler(response, setAnimationData, closeModalAfterDelay)
      );
    } else if (paymentProvider === "OPENPAY") {

      window.OpenPay.setId(openpayId);
      window.OpenPay.setApiKey(openpayApiKey);
      window.OpenPay.setSandboxMode(true);

      window.OpenPay.token.create(
        {
          "card_number": numberCard,
          "holder_name": nameCard,
          "expiration_year": expirationYear.slice(-2),
          "expiration_month": expirationMonth,
          "cvv2": cvvCard,
        },
        (response) => openpaySuccessResponseHandler(response, paymentData, setAnimationData, handleStepChange, closeModalAfterDelay),
        (error) => openpayErrorResponseHandler(error, setAnimationData, closeModalAfterDelay)
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
        <ClientDataT />

        {dataItinerary && <FormClientRH dataItinerary={dataItinerary} />}

        {activityPreBooking && activityPreBooking.length > 0 && (
          <ActivityFormT activityPreBooking={activityPreBooking} />
        )}

        {activityTrue === true || transportTrue === true ? (
          !activityPreBooking && <SkeletonActivitiesTourPT />
        ) : null}

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
