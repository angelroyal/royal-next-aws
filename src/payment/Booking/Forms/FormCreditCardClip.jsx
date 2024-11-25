"use client";

import React, { useState, useEffect, useCallback, useContext } from "react";

import LanguageContext from "@/language/LanguageContext";
import {
  confirmBooking,
  SendPaymentRequest,
} from "@/payment/Api/fetchDataItinerary";
import { useRouter } from "next/navigation";

function FormCreditCardClip(props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { language } = useContext(LanguageContext);
  const API_KEY = process.env.NEXT_PUBLIC_CLIP_API_KEY;
  

  // PROPS
  const {
    paymentData,
    setAnimationData,
    handleStepChange,
    closeModalAfterDelay,
    setIsOpen,
  } = props;

  let uid = null;
  if (typeof window !== "undefined") {
    const searchParams = new URLSearchParams(window.location.search);
    uid = searchParams.get("uid");
  }
  

  // HANDLE TOKEN RECIVED AND POST API STAYWUW
  const handleTokenReceived = useCallback(
    (tokenID) => {
      const updatedPaymentData = { ...paymentData, token: tokenID };

      SendPaymentRequest(updatedPaymentData)
        .then((response) => {
          if (response.paymentStatus === "PAID") {
            confirmBooking(uid)
              .then((confirmResponse) => {
                router.push(`/${language}/confirmation?uid=${uid}`);
              })
              .catch((error) => {
                console.error("Error al confirmar la reserva:", error);
              });
          } else if (response.paymentStatus === "PENDING") {
            router.push(
              `/${language}/pending-payment?reference=${response?.orderReference}`
            );
          } else {
            setAnimationData("FailureData");
          }
          setAnimationData("SuccessData");
          // setTimeout(() => {
          //   closeModalAfterDelay();
          // }, 3000);
        })
        .catch((error) => {
          setAnimationData("FailureData");
        })
        .finally(() => {
          console.log("Finalizó el manejo del pago.");
          // router.push(`/${language}/confirmation?uid=1ef9af6f-243e-6656-89e4-bf48e233bae1`);
        });
    },
    [paymentData, setAnimationData, handleStepChange, closeModalAfterDelay]
  );

  // SUBMIT FORM PAYMENT
  const handleSubmit = useCallback(
    (card) => async (event) => {
      event.preventDefault();
      setLoading(true);
      setIsOpen(true);
      setAnimationData("LoadingData");

      let timeoutId;

      try {
        const timeoutPromise = new Promise((_, reject) => {
          timeoutId = setTimeout(() => {
            reject(new Error("Timeout: No se recibió el token en 5 segundos"));
          }, 5000);
        });

        const cardTokenPromise = card.cardToken();

        const cardToken = await Promise.race([
          cardTokenPromise,
          timeoutPromise,
        ]);

        clearTimeout(timeoutId);

        const cardTokenID = cardToken.id;
        handleTokenReceived(cardTokenID);
      } catch (error) {
        handleErrors(error);
      } finally {
        setLoading(false);
      }
    },
    [handleTokenReceived, setIsOpen, setAnimationData]
  );

  // INITIALIZE CLIP ELEMENTS
  const initializeClipElements = useCallback(() => {
    try {
      if (!window.ClipSDK) {
        setAnimationData("FailureData");
        return;
      }

      const clip = new window.ClipSDK(API_KEY);
      const card = clip.element.create("Card", {
        theme: "light",
        locale: language,
      });
      card.mount("checkout");

      const paymentForm = document.querySelector("#payment-form");
      if (!paymentForm) {
        setAnimationData("FailureData");
        return;
      }

      paymentForm.addEventListener("submit", handleSubmit(card));
    } catch (error) {
      setAnimationData("FailureData");
    }
  }, [API_KEY, handleSubmit]);

  // LOAD CLIP SCRIPTS

  const loadClipSDK = useCallback(() => {
    if (typeof document !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://sdk.clip.mx/js/clip-sdk.js";
      script.async = true;
      script.onload = initializeClipElements;
      script.onerror = () => {
        setAnimationData("FailureData");
      };
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    } else {
      // Opcional: Maneja el caso en que la función se llama en un entorno sin `document`
      console.error("Document is not available. loadClipSDK should run in the client.");
      return () => {};
    }
  }, [initializeClipElements, setAnimationData]);
  

  const handleErrors = (error) => {
    setAnimationData("FailureData");
  };

  useEffect(() => {
    if (
      !document.querySelector(
        "script[src='https://sdk.clip.mx/js/clip-sdk.js']"
      )
    ) {
      loadClipSDK();
    }
  }, [loadClipSDK]);

  return (
    <form id="payment-form">
      <div id="checkout"></div>
      <div className="grid justify-end pt-8">
        <button
          className="border-transparent bg-yw-100 text-black text-fs-16 rounded-full m-b flex items-center gap-[5px] px-[64px] py-[13px] hover:bg-yw-110"
          type="submit"
          disabled={loading}
        >
          {loading ? "Procesando..." : "Pagar"}
        </button>
      </div>
    </form>
  );
}

export default FormCreditCardClip;
