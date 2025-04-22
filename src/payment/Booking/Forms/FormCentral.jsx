"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
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
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import LanguageContext from "@/language/LanguageContext";
import { decrypt } from "@/config/Others/encrypt";

export default function FormCentral(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useContext(LanguageContext);

  const [currentStep, setCurrentStep] = useState(1);
  const { handleStepChange } = useContext(BookingContext);
  const [animationData, setAnimationData] = useState("LoadingData");
  // const paymentProvider = process.env.NEXT_PUBLIC_PAYMENT_PROVIDER;
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

  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const encrypted = Cookies.get("payment");

    if (encrypted) {
      setProvider(decrypt(encrypted));
    }
  }, []);

  // PAYLOAD PAYMENT
  const paymentData = {
    currency: "MXN",
    cartId: uid,
    serviceType: provider?.toLowerCase(),
    cardTitular: nameCard || "staywuw",
    description: "solo si es para clip",
    cardNumber: numberCard ? numberCard.slice(-4) : "4242",
    ...(provider === "OPENPAY" && window.OpenPay && window.OpenPay.deviceData
      ? {
          deviceId: window.OpenPay.deviceData.setup("card-form"),
          description: "solo si es para openpay",
        }
      : {}),
  };
  // const paymentData = {
  //   currency: "MXN",
  //   cartId: uid,
  //   serviceType: paymentProvider.toLowerCase(),
  //   cardTitular: nameCard || "staywuw",
  //   description: "solo si es para clip",
  //   cardNumber: numberCard ? numberCard.slice(-4) : "4242",
  //   ...(paymentProvider === "OPENPAY" &&
  //   window.OpenPay &&
  //   window.OpenPay.deviceData
  //     ? {
  //         deviceId: window.OpenPay.deviceData.setup("card-form"),
  //         description: "solo si es para openpay",
  //       }
  //     : {}),
  // };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeModalAfterDelay = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  const router = useRouter();

  const handleSubmitPayment = (event, clipToken = null) => {
    event.preventDefault();
    setIsOpen(true);
    setAnimationData("LoadingData");

    switch (provider) {
      case "CONEKTA":
        const conektaPublicKey = process.env.NEXT_PUBLIC_CONEKTA_KEY;
        window.Conekta.setPublicKey(conektaPublicKey);

        window.Conekta.Token.create(
          event.target,
          (token) =>
            conektaSuccessResponseHandler(
              token,
              uid,
              language,
              router,
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
        setAnimationData("Error");
        break;
    }
  };

  const handleContinueToStep2 = (event) => {
    event.preventDefault();
    setCurrentStep(2);
  };

  const handleSecondFormSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      name: firstName,
      prefix: "+52",
      lastname: lastName,
      email: email,
      phone: phoneNumber,
      currency: "MXN",
      cartId: uid,
      serviceType: provider.toLowerCase(),
      ...(hotelRH ? { guests: hotelRH } : {}),
      ...(roomHolders ? { paxes: roomHolders } : {}),
      ...(formActivityItems ? { items: formActivityItems } : {}),
    };

    try {
      const response = await axiosWithInterceptor.post(
        "v1/booking/form",
        payload
      );

      if (response.status === 201) {
        console.log("Datos enviados exitosamente:", response.data);
        setCurrentStep(3);
      } else {
        console.error("Error al enviar los datos:", response.data.message);
        setAnimationData("Error");
      }
    } catch (error) {
      console.error(
        "Error en la solicitud POST:",
        error.response || error.message
      );
      setAnimationData("Error");
    }
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
        <form onSubmit={handleSecondFormSubmit}>
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
          {(provider === "CONEKTA" || provider === "OPENPAY") && (
            <form
              method="POST"
              name="paymentForm"
              id="card-form"
              onSubmit={handleSubmitPayment}
            >
              <FormCreditCard />
            </form>
          )}

          {provider === "CLIP" && (
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
