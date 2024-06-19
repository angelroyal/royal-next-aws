import { useRouter } from "next/navigation";
import React, { useState, useEffect, useContext, useRef } from "react";

import LanguageContext from "@/language/LanguageContext";
import { useCartAxios } from "@/components/Cart/CartAxios";
// import { AlertTourDetails } from "../../AlertsTour/AlertTours";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import DetailTourContext from "@/services/Tours/context/DetailTourContext";
import { EntitiesRecommendations } from "@/components/Recommended/Entities/Entities";
import NotificationType from "@/components/Alerts/Notifications/NotificationType";
import { useNotification } from "@/components/Alerts/Notifications/useNotification";

export default function AddCartTour(props) {
  const { totalPrice, tourists, isLoader, setIsLoader } = props;
  const { fetchData } = useCartAxios();
  // const [alert, setAlert] = useState({
  //   alert: false,
  //   type: null,
  //   title: null,
  //   message: null,
  // });

  const { notification, showNotification, hideNotification } =
    useNotification();

  const router = useRouter();

  const { languageData, language } = useContext(LanguageContext);
  const { dataTour, hourTour, dayTour, selectModality, codeNameTour } =
    useContext(DetailTourContext);

  const handleAddCartTour = async () => {
    try {
      setIsLoader(true);
      const uidCart = localStorage.getItem("uid-cart");
      let cartId = "";

      if (uidCart) {
        const { uid } = JSON.parse(uidCart);
        cartId = uid;
      }

      const saveRequestCart = {
        activityId: dataTour.code,
        date: dayTour.date,
        currency: "MXN",
        tourists: tourists,
        modality: selectModality.id,
        price: totalPrice,
        address: dataTour.address,
        cancelPolicies: dataTour.cancelPolicies,
        ...(hourTour && hourTour.time ? { time: hourTour.time } : {}),
      };

      if (cartId) {
        saveRequestCart.cartId = cartId;
      }

      const response = await axiosWithInterceptor.post(
        "v1/carts/activity",
        saveRequestCart
      );

      const cartUid = response.data.cart;
      const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000;
      localStorage.setItem(
        "uid-cart",
        JSON.stringify({ uid: cartUid, expirationTime })
      );
      // setShowContent(2);
      fetchData(cartUid);

      const InfoTour = {
        name: dataTour.name,
        date: dayTour.date,
        codeName: codeNameTour,
      };

      showNotification(
        "success",
        languageData.Alerts.notification.tour.successTitle,
        languageData.Alerts.notification.tour.successSubtitle,
        3000
      );

      setTimeout(() => {
        router.push(
          EntitiesRecommendations(language, "tour", InfoTour, cartUid)
        );
      }, 3000);
    } catch (error) {
      console.error("error 1", error);
      setIsLoader(false);
      // if (error.response.status === 422) {
      //   setAlert({
      //     alert: true,
      //     type: "warning",
      //     title: languageData.Alerts.tour.maxPerson.title,
      //     message: languageData.Alerts.tour.maxPerson.message,
      //   });
      // }

      if (error.response.status === 400) {
        // setAlert({
        //   alert: true,
        //   type: "warning",
        //   title: languageData.Alerts.tour.NotAvailability.title,
        //   message: languageData.Alerts.tour.NotAvailability.message,
        // });
        showNotification(
          "warning",
          languageData.Alerts.tour.tourDetails.title,
          languageData.Alerts.tour.tourDetails.message,
          2000
        );
      }

      // if (error.response.status >= 405 && error.response.status !== 422) {
      if (error.response.status >= 405) {
        // setAlert({
        //   alert: true,
        //   type: "error",
        //   title: languageData.Alerts.tour.tourDetails.title,
        //   message: languageData.Alerts.tour.tourDetails.message,
        // });

        showNotification(
          "error",
          languageData.Alerts.tour.tourDetails.title,
          languageData.Alerts.tour.tourDetails.message,
          3000
        );
      }
    }
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //CLICK OCCURRED OUTSIDE THE DIVE, CLOSE THE DIV
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setAlert({ alert: false, type: null, title: null, message: null });
    }
  };

  useEffect(() => {
    // Verifica si al menos un elemento tiene una parte decimal mayor a 0
    const hasValidTourists = tourists.some((tourist) => {
      const decimalPart = Number(`0.${tourist.split(".")[1]}`);
      return decimalPart > 0;
    });
    setIsButtonDisabled(!hasValidTourists);
  }, [tourists]);

  return (
    <>
      <button
        onClick={() => handleAddCartTour()}
        className={`rounded-full w-full py-3.5 text-black text-center text-fs-12 m-s-b bg-yw-100 hover:bg-yw-110 ${
          isButtonDisabled || isLoader
            ? "opacity-50 cursor-not-allowed hover:bg-yw-100"
            : ""
        }`}
        disabled={isButtonDisabled || isLoader}
      >
        {isLoader
          ? languageData.cart.loadingText
          : languageData.modalTour.OccupancyTours.reserve}
      </button>
      {/* {alert.alert && (
        <div ref={ref}>
          <AlertTourDetails alertInfo={alert} />
        </div>
      )} */}

      {notification && notification.visible && (
        <NotificationType
          type={notification.type}
          title={notification.title}
          message={notification.message}
          duration={notification.duration}
          onClose={hideNotification}
        />
      )}
    </>
  );
}
