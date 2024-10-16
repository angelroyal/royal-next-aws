"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

import { fetchCartData } from "./apiCart";
import { handleErrorsAxios } from "../../config/Logger/handleErrors";

const CartAxiosContext = createContext();

export const useCartAxios = () => {
  return useContext(CartAxiosContext);
};

export const CartAxiosProvider = ({ children }) => {
  // INTENT LOADING DATA LOCAL STORAGE
  const [cartData, setCartData] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedData = localStorage.getItem("cartData");
      return storedData ? JSON.parse(storedData) : null;
    } else {
      return null;
    }
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [itineraryData, setItinerary] = useState(null);
  const [totalItemsInCart, setTotalItemsInCart] = useState(null);

  // AXIOS FETCH CART DATA
  const fetchData = async (cartUid) => {
    try {
      const newData = await fetchCartData(cartUid);
      setCartData(newData);
      localStorage.setItem("cartData", JSON.stringify(newData));
    } catch (error) {
      handleErrorsAxios(error);
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("cartData");
    if (storedData) {
      setCartData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    getTotalItems();

    // SUM PRICE TOTAL CART
    if (cartData && cartData.cartItems) {
      const { hotels, activities, transportations } = cartData.cartItems;

      const totalHotelPrice = hotels
        ? hotels.reduce((acc, hotel) => acc + hotel.price, 0)
        : 0;
      const totalActivityPrice = activities
        ? activities.reduce((acc, activity) => acc + activity.price, 0)
        : 0;

      const totalTransportPrice = transportations
        ? transportations.reduce((acc, transport) => acc + transport.prices, 0)
        : 0;

      const totalPrice =
        totalHotelPrice + totalActivityPrice + totalTransportPrice;

      setTotalPrice(totalPrice);
    } else {
      setTotalPrice(0);
    }
  }, [cartData]);

  const getTotalItems = () => {
    if (cartData && cartData.cartItems) {
      const { hotels, activities, transportations } = cartData.cartItems;

      const totalHotels = hotels ? hotels.length : 0;
      const totalActivities = activities ? activities.length : 0;
      const totalTransports = transportations ? transportations.length : 0;

      setTotalItemsInCart(totalHotels + totalActivities + totalTransports);
    }
    return 0;
  };

  const removeHotelById = (hotelId) => {
    if (cartData && cartData.cartItems && cartData.cartItems.hotels) {
      const updatedHotels = cartData.cartItems.hotels.filter(
        (hotel) => hotel.id !== hotelId
      );

      const updatedCartData = {
        ...cartData,
        cartItems: {
          ...cartData.cartItems,
          hotels: updatedHotels,
        },
      };

      setCartData(updatedCartData);
      localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    }
  };

  const removeActivityById = (activityId) => {
    if (cartData && cartData.cartItems && cartData.cartItems.activities) {
      const updatedActivities = cartData.cartItems.activities.filter(
        (activity) => activity.id !== activityId
      );

      const updatedCartData = {
        ...cartData,
        cartItems: {
          ...cartData.cartItems,
          activities: updatedActivities,
        },
      };

      setCartData(updatedCartData);
      localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    }
  };

  const removeTransportById = (transportInfo) => {
    if (cartData && cartData.cartItems && cartData.cartItems.transportations) {
      let updatedActivities;
      if (transportInfo.reference) {
        updatedActivities = cartData.cartItems.transportations.filter(
          (transport) =>
            transport.id !== transportInfo.id &&
            transport.id !== transportInfo.reference
        );
      } else {
        updatedActivities = cartData.cartItems.transportations.filter(
          (transport) => transport.id !== transportInfo.id
        );
      }

      const updatedCartData = {
        ...cartData,
        cartItems: {
          ...cartData.cartItems,
          transportations: updatedActivities,
        },
      };

      setCartData(updatedCartData);
      localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    }
  };

  return (
    <CartAxiosContext.Provider
      value={{
        cartData,
        setCartData,
        fetchData,
        itineraryData,
        setItinerary,
        totalItemsInCart,
        removeHotelById,
        removeActivityById,
        removeTransportById,
        totalPrice,
        setTotalItemsInCart,
      }}
    >
      {children}
    </CartAxiosContext.Provider>
  );
};
