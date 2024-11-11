import React, { useState, useEffect, useCallback, useContext } from "react";

import LanguageContext from "@/language/LanguageContext";
import { SendPaymentRequest } from "@/payment/Api/fetchDataItinerary";

function FormCreditCardClip(props) {
  const {
    paymentData,
    setAnimationData,
    handleStepChange,
    closeModalAfterDelay,
    setIsOpen,
  } = props;

  const [loading, setLoading] = useState(false);
  const [cardTokenID, setCardTokenID] = useState("");
  const { language } = useContext(LanguageContext);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);

  const API_KEY = process.env.NEXT_PUBLIC_CLIP_API_KEY;

  // HANDLE TOKEN RECIVED AND POST API STAYWUW
  const handleTokenReceived = useCallback(
    (tokenID) => {
      const updatedPaymentData = { ...paymentData, token: tokenID };

      SendPaymentRequest(updatedPaymentData)
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
        setCardTokenID(cardTokenID);
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
  }, [initializeClipElements]);

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
      {cardTokenID && <p>Card Token ID: {cardTokenID}</p>}
    </form>
  );
}

export default FormCreditCardClip;
