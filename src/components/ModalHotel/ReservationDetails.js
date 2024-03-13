import React, { useState, useEffect, useContext } from "react";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

import {
  SelectedRoomsContext,
  useShowContentHotel,
} from "../../pages/Modal/ModalHotel";
import { useCartAxios } from "../Cart/CartAxios";
import LanguageContext from "../../language/LanguageContext";

import { ReactComponent as Close } from "../../assets/icons/hotel/modal/close.svg";
import { ReactComponent as WarningIcon } from "../../assets/icons/hotel/listing/exclamation-mark.svg";
import { ReactComponent as MarkDeclined } from "../../assets/icons/hotel/modal/mark-decline-card.svg";
import { MissingRooms } from "../../config/Hotel/ModalHotel";

const API_ENDPOINT = `v1/carts/hotel`;

export default function ReservationDetails(props) {
  const { fetchData } = useCartAxios();
  const { changeDate } = props;
  const { isTrueChangeDate } = props;
  const { showNestedModal } = props;
  const { requestBody, handleShowContentChange } = props;
  const { isRoomSelected, totalRoomsSelected } = props;
  const [numNights, setNumNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showAlert, setShowAlert] = useState(null);

  const [selectedRooms, setSelectedRooms] = useContext(SelectedRoomsContext);
  const [isError, setError] = useState(false);


  // MODAL SECOND
  const { setShowContent } = useShowContentHotel();

  // DATA ROOMS
  useEffect(() => {
    let sum = 0;
    selectedRooms.forEach((room) => {
      sum += parseFloat(room.price);
    });
    setTotalPrice(sum);
  }, [selectedRooms]);

  const deleteRoom = (index) => {
    const newRooms = selectedRooms.filter((room, i) => i !== index);
    setSelectedRooms(newRooms);
  };

  useEffect(() => {
    const datesLocal = JSON.parse(localStorage.getItem("selectedDates"));
    if (
      selectedRooms.length === 0 ||
      (selectedRooms.length > 0 && isTrueChangeDate)
    ) {
      if (datesLocal && datesLocal.length >= 2) {
        const checkInDate = new Date(datesLocal[0]);
        const checkOutDate = new Date(datesLocal[1]);
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(
          Math.abs((checkInDate - checkOutDate) / oneDay)
        );
        setTimeout(() => {
          setNumNights(diffDays);
        }, 2000);
      } else {
        setNumNights(2);
      }
    }
  }, [changeDate]);

  const handleReserveNow = async () => {
    try {
      const uidCart = localStorage.getItem("uid-cart");
      let cartId = "";

      if (uidCart) {
        const { uid } = JSON.parse(uidCart);
        cartId = uid;
      }

      const saveRequestCart = {
        key: requestBody.code,
        checkIn: requestBody["check-in"],
        checkOut: requestBody["check-out"],
        occupancies: selectedRooms.map((room) => ({
          rateCode: room.rateKey,
          roomCode: room.code,
          adults: room.adults,
          children: room.children || [],
          price: room.netPrice,
          boardCode: room.boardCode,
          hash: room.hash,
        })),
      };

      if (cartId) {
        saveRequestCart.cart = cartId;
      }

      const response = await axiosWithInterceptor.post(
        API_ENDPOINT,
        saveRequestCart
      );

      const cartUid = response.data.cart;
      const expirationTime = new Date().getTime() + 2 * 60 * 60 * 1000;
      localStorage.setItem(
        "uid-cart",
        JSON.stringify({ uid: cartUid, expirationTime })
      );
      setShowContent(2);
      fetchData(cartUid);
    } catch (error) {
      console.log(error);
      setShowAlert(error.response.data);
      if (error.response.data.message === "CNF") {
        setError(true);
        localStorage.removeItem("uid-cart");
        localStorage.removeItem("cartData");
      }
    }
    handleShowContentChange();
  };

  useEffect(() => {
    if (isError === true) {
      handleReserveNow();
      setError(false);
    }
  }, [isError]);

  const handleCloseAlert = () => {
    setShowAlert(null);
  };

  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <h2 className="container-modal-title">
        {languageData.detailHotel.detail}
      </h2>

      <div className="container-modal-booking">
        {isRoomSelected && (
          <div className="tooltip-select-l">
            <MissingRooms
              roomsBySelected={totalRoomsSelected}
              addRoom={selectedRooms}
            />
          </div>
        )}
        {showNestedModal && (
          <div className="d-flex align-items-center justify-content-center">
            <WarningIcon />
            <div className="text-center mt-3 text-danger">
              {languageData.detailHotel.alert}
            </div>
          </div>
        )}

        {/* Map add rooms detail */}
        {selectedRooms && selectedRooms.length > 0 ? (
          selectedRooms.map((room, index) => (
            <div key={index} className="booking-reservation">
              <div className="booking-title">{room.name}</div>
              <div
                className="booking-deleted"
                onClick={() => deleteRoom(index)}
              >
                {languageData.detailHotel.buttonDelete}
              </div>

              <div className="booking-information-subtitle">
                <span>
                  {numNights}{" "}
                  {numNights > 1
                    ? languageData.containerModalHotel.nights
                    : languageData.containerModalHotel.night}{" "}
                </span>

                <span>
                  {" "}
                  {`${parseInt(room.persons.split(".")[0])} ${
                    parseInt(room.persons.split(".")[0]) > 1
                      ? languageData.containerModalHotel.adults
                      : languageData.containerModalHotel.adult
                  }${
                    parseInt(room.persons.split(".")[1]) !== 0
                      ? `, ${parseInt(room.persons.split(".")[1])} ${
                          parseInt(room.persons.split(".")[1]) > 1
                            ? languageData.containerModalHotel.children
                            : languageData.containerModalHotel.child
                        }`
                      : ""
                  }`}{" "}
                </span>
              </div>

              {room.eatingPlan && (
                <li className="booking-li">{room.eatingPlan}</li>
              )}

              {room.facilities && (
                <li className="booking-li">{room.facilities}</li>
              )}
            </div>
          ))
        ) : (
          <h3 className="no-data-rooms">
            {languageData.detailHotel.selectRoom}
          </h3>
        )}

        {/* General information detail reservation */}
        <div className="container-modal-price">
          <span className="modal-hotel-price">
            {languageData.detailHotel.priceText}
          </span>

          <span className="card-hotel-price-number">
            {Math.floor(totalPrice)
              .toLocaleString("es-MX", { currency: "MXN" })
              .replace(".00", "")}
            .
            <sup className="sup-price-card">
              {(totalPrice % 1).toFixed(2).slice(2)}
            </sup>
          </span>

          <div className="card-hotel-taxes">
            {languageData.detailHotel.taxesText}
          </div>
        </div>
        <div className="card-hotel-button-booking">
          {" "}
          <button
            className={`room-add-button ${
              !selectedRooms.length > 0 ? "disabled" : ""
            }`}
            onClick={handleReserveNow}
            disabled={!selectedRooms.length > 0}
          >
            {languageData.detailHotel.buttonPrincipal}
          </button>{" "}
        </div>
      </div>

      {showAlert && showAlert.message === "MPE" && (
        <div className="alert-amount-exceeded margin-top">
          <button className="close-button-amount" onClick={handleCloseAlert}>
            <Close width="20px" height="20px" />
          </button>

          <div className="alert-text-amount">
            <MarkDeclined /> {languageData.alertsPayment.alertAmount}
          </div>

          <div className="alert-subtext-declined">
            {languageData.alertsPayment.alertAmountText}
          </div>
        </div>
      )}
    </>
  );
}
