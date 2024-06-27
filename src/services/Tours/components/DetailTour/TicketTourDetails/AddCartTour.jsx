import { useRouter } from "next/navigation";
import React, { useState, useEffect, useContext, useRef } from "react";

import LanguageContext from "@/language/LanguageContext";
import { useCartAxios } from "@/components/Cart/CartAxios";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import DetailTourContext from "@/services/Tours/context/DetailTourContext";
import NotificationType from "@/components/Alerts/Notifications/NotificationType";
import { useNotification } from "@/components/Alerts/Notifications/useNotification";
import { EntitiesRecommendations } from "@/components/Recommended/Entities/Entities";

export default function AddCartTour(props) {
  const { tourists, totalPrice } = props;
  const { fetchData } = useCartAxios();

  const { notification, showNotification, hideNotification } =
    useNotification();

  const router = useRouter();

  const { languageData, language } = useContext(LanguageContext);
  const {
    dataTour,
    hourTour,
    dayTour,
    selectModality,
    codeNameTour,
    isLoader,
    setIsLoader,
    isButtonDisabled,
    setIsButtonDisabled,
  } = useContext(DetailTourContext);

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

      // CHOSE DATE ALERT
      if (error.response.status === 400) {
        showNotification(
          "warning",
          languageData.Alerts.tour.choseDate.title,
          languageData.Alerts.tour.choseDate.message,
          5000
        );
      }

      // QUANTITY PERSON ALERT
      if (error.response.status === 422 && error.response.data.message === "The quantity of people on the activity is less than the configurated.") {
        showNotification(
          "warning",
          languageData.Alerts.tour.maxPerson.title,
          languageData.Alerts.tour.maxPerson.message,
          5000
        );
        // GENERAL ALERT
      }else if (error.response.status >= 405 || error.response.data.message == "not availability") {
        showNotification(
          "error",
          languageData.Alerts.tour.tourDetails.title,
          languageData.Alerts.tour.tourDetails.message,
          3000
        );
      }
    }
  };

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
        className={`rounded-full w-full py-3.5 text-black text-center text-fs-12 m-s-b bg-yw-100 ${
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
