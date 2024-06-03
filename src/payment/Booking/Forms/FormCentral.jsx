import { useContext, useState } from "react";

import ClientDataT from "./FormClientData";
import FormCreditCard from "./FormCreditCard";
import { ActivityFormT } from "../ActivityFormT";
import { PaymentContext } from "@/payment/context/PaymentContext";
import { BookingContext } from "@/payment/context/BookingContext";
import AlertPayment from "@/components/Alerts/LottiePay/AlertPayment";
import { SkeletonActivitiesTourP } from "@/utils/skeleton/SkeletonActivitiesTourP";
import { handleSubmitPayment as handleSubmitPaymentFunction } from "../ActionsForms/conektaHandlers";

export default function FormCentral(props) {
  const { activityPreBooking } = props;
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    nameCard,
    numberCard,
    formActivityItems,
  } = useContext(PaymentContext);

  const { handleStepChange } = useContext(BookingContext);

  const [animationData, setAnimationData] = useState("LoadingData");
  const [isOpen, setIsOpen] = useState(false);

  const searchParams = new URLSearchParams(window.location.search);
  const uid = searchParams.get("uid");

  const paymentData = {
    name: firstName,
    lastname: lastName,
    email: email,
    phone: phoneNumber,
    currency: "MXN",
    cartId: uid,
    cardTitular: nameCard,
    cardNumber: numberCard.slice(-4),
    ...(formActivityItems ? { items: formActivityItems } : {}),
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
    setIsOpen(true);
    handleSubmitPaymentFunction(
      event,
      paymentData,
      setAnimationData,
      handleStepChange,
      closeModalAfterDelay
    );
  };

  window.Conekta.setPublicKey(conektaPublicKey);
  const conektaPublicKey = process.env.NEXT_PUBLIC_CONEKTA_KEY;

  return (
    <>
      <form
        method="POST"
        name="paymentForm"
        id="card-form"
        onSubmit={handleSubmitPayment}
      >
        <ClientDataT />

        {activityPreBooking && activityPreBooking.length > 0 && (
          <ActivityFormT activityPreBooking={activityPreBooking} />
        )}

        {!activityPreBooking && <SkeletonActivitiesTourP />}

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
