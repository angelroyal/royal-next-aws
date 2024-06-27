import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

export const fetchDataItinerary = async (
  setData,
  setSkeletonShow,
  setHasActivities,
  setHasTransport,
  setShowClr,
  setErrorAlertBooking
) => {
  setData(null);
  setSkeletonShow(true);
  try {
    const url = "/v1/carts/";
    const searchParams = new URLSearchParams(window.location.search);
    const cartId = searchParams.get("uid");
    const response = await axiosWithInterceptor.get(`${url}${cartId}/schedule`);
    const filterDataItinerary = response.data.items.filter(
      (object) => object.type === "activity"
    );

    const filterDataTransport = response.data.items.filter(
      (object) => object.type === "transportation"
    );
    if (filterDataItinerary.length > 0) {
      setHasActivities(true);
    }
    if (filterDataTransport.length > 0) {
      setHasTransport(true);
    }

    setData(response.data);
    setSkeletonShow(false);
  } catch (error) {
    console.log("error", error);
    handleFetchError(error, setShowClr, setErrorAlertBooking);
    setData(null);
    setSkeletonShow(false);
  }
};

const handleFetchError = (error, setShowClr, setErrorAlertBooking) => {
  if (error.response) {
    const errorMessage = error.response.data;

    switch (error.response.status) {
      case 404:
      case 400:
        setShowClr(errorMessage);
        break;
      case 500:
        setErrorAlertBooking(true);
        break;
    }

    if (error.response.data.message === "CNF") {
      localStorage.removeItem("uid-cart");
      localStorage.removeItem("cartData");
    }
  } else if (error.message === "Network Error") {
    setErrorAlertBooking(true);
  }
};

export const fetchDataConfirmation = async (
  setDataConfirmation,
  setInfoReservation,
  setIsLoading,
  sendConfirmationEmail,
  handleEmptyClear
) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const language = localStorage.getItem("language") || "es";
    const url = "/v1/booking/";
    const searchParams = new URLSearchParams(window.location.search);
    const cartId = searchParams.get("uid");
    const response = await axiosWithInterceptor.get(`${url}${cartId}`);
    setDataConfirmation(response.data);
    setInfoReservation(response.data);
    setIsLoading(false);

    const sentEmail = response.data.sent;
    if (!sentEmail) {
      const uid = searchParams.get("uid");
      const newRequestBody = {
        cartId: uid,
        lang: language,
        status: 1,
      };
      sendConfirmationEmail(newRequestBody);
    }

    const token = localStorage.getItem("token");
    const iat = localStorage.getItem("iat");
    const exp = localStorage.getItem("exp");

    localStorage.clear();

    if (token) localStorage.setItem("token", token);
    if (iat) localStorage.setItem("iat", iat);
    if (exp) localStorage.setItem("exp", exp);
    handleEmptyClear();
  } catch (error) {
    console.error("Error al realizar la petición:", error);
    setIsLoading(false);
  }
};

// ITINERARY ENDPOINTS

// REMOVE CART HOTEL
export async function removeHotelItinerary(cartUid, cartHotelId) {
  try {
    const response = await axiosWithInterceptor.delete(
      `v1/carts/${cartUid}/hotel/${cartHotelId}`
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// REMOVE CART TRANSPORT
export async function removeTransportItinerary(cartUid, cartTransportId) {
  try {
    const response = await axiosWithInterceptor.delete(
      `v1/carts/${cartUid}/transports/${cartTransportId}`
    );
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// BOOKING ENDPOINTS
export const SendPaymentRequest = (paymentData) => {
  return axiosWithInterceptor
    .post("v1/payment", paymentData)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log("Payment error:", error);
      throw error;
    });
};
