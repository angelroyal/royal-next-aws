import React, { useState, useEffect, useContext } from "react";

import LanguageContext from "@/language/LanguageContext";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import DetailTourContext from "@/services/Tours/context/DetailTourContext";

export default function AddCartTour(props) {
  const { totalPrice, tourists } = props;
  const { languageData } = useContext(LanguageContext);
  const { dataTour, hourTour, dayTour, selectModality } =
    useContext(DetailTourContext);

  // console.log(dataTour);

  const handleAddCartTour = async () => {
    try {
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

      console.log(response);

      const cartUid = response.data.cart;
      const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000;
      localStorage.setItem(
        "uid-cart",
        JSON.stringify({ uid: cartUid, expirationTime })
      );
      // setShowContent(2);
      //   fetchData(cartUid);
    } catch (error) {
      //   if (
      //     error.response.data.message ===
      //       "La fecha de salida debe ser 2 días después de la fecha actual" ||
      //     error.response.data.message ===
      //       "ApiStatusCode: 422, ApiMessage: not availability, ApiInternalCode: 422"
      //   ) {
      //     setErrorAxios({ error: true, message: error.response.data.message });
      //   }
    }
  };

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Verifica si al menos un elemento tiene una parte decimal mayor a 0
    const hasValidTourists = tourists.some(tourist => {
      const decimalPart = Number(`0.${tourist.split('.')[1]}`);
      return decimalPart > 0;
    });
    setIsButtonDisabled(!hasValidTourists);
  }, [tourists]);

  return (
    <button
      onClick={() => handleAddCartTour()}
      className={`rounded-full w-full py-3.5 text-black text-center text-fs-12 m-s-b bg-yw-100 hover:bg-yw-110 ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={isButtonDisabled}
    >
      {languageData.modalTour.OccupancyTours.reserve}
    </button>
  );
}
