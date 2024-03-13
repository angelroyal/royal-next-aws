import moment from "moment";
import Image from "next/image";
import React, { useContext, useState } from "react";

import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

import IconDate from "../../assets/icons/utils/payment/date.svg";
import IconPerson from "../../assets/icons/utils/payment/person.svg";
import IconLocation from "../../assets/icons/utils/payment/location-inactive.svg";
import IconTransportation from "../../assets/icons/utils/navigation/transportation.svg";

export default function CartMoving(props) {
  const { movingGetCart, cartId, onUpdateData } = props;
  const [showDelete, setShowDelete] = useState({});
  const { languageData } = useContext(LanguageContext);

  const handleDeleteClick = (transport) => {
    const vehicleCode = transport.id;

    axiosWithInterceptor
      .delete(`v1/carts/${cartId}/transports/${vehicleCode}`)
      .then((response) => {
        onUpdateData();
      })
      .catch((error) => {
        // console.error("Error al eliminar la actividad:", error);
      });

    const updatedShowDelete = { ...showDelete };
    updatedShowDelete[transport.id] = false;
    setShowDelete(updatedShowDelete);
  };

  const toggleDelete = (transportId) => {
    const updatedShowDelete = { ...showDelete };
    updatedShowDelete[transportId] = !updatedShowDelete[transportId];
    setShowDelete(updatedShowDelete);
  };

  const handleCardClick = (transportId) => {
    const updatedShowDelete = { ...showDelete };
    updatedShowDelete[transportId] = !updatedShowDelete[transportId];
    setShowDelete(updatedShowDelete);
  };

  return (
    <>
      {movingGetCart.transportations.map((transport, index) => (
        <div
          key={index}
          className="cart-card"
          onClick={() => handleCardClick(transport.id)}
        >
          <div className="cart-date">
            <div>{moment(transport.departureDate).format("DD/MM/YY")}</div>
            {transport.comebackDate && (
              <div>{moment(transport.comebackDate).format("DD/MM/YY")}</div>
            )}
          </div>
          <div className="cart-title-information">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="cart-title-type">
                {languageData.cart.titleTransportation}
              </span>
              <span>
                <span
                  className="cart-card-delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDelete(transport.id);
                  }}
                >
                  x
                </span>
              </span>{" "}
            </div>
            <div className="cart-destination">{transport.destination}</div>
          </div>
          <div className="cart-type-transport">
            <Image src={IconTransportation} alt="icon transport" />
            {languageData.cart.titleTransportation}
          </div>
          <div className="cart-information-reservation">
            <div className="cart-title-types">
              {transport.round === "10"
                ? [languageData.itinerary.movingItinerary.optionRound]
                : transport.round === "01"
                ? [languageData.itinerary.movingItinerary.optionSimple]
                : [languageData.itinerary.movingItinerary.optionOther]}
            </div>
            <div className="container-destinations-cart">
              <div className="cart-destination-a">
                <Image
                  src={IconLocation}
                  alt="icon location"
                  className="icon-size-cart-location"
                />
                {transport.airport}
              </div>
              <div className="cart-destination-b ">
                <Image
                  src={IconLocation}
                  alt="icon location"
                  className="icon-size-cart-location"
                />
                {transport.hotel.length > 26
                  ? `${transport.hotel.substring(0, 26)}...`
                  : transport.hotel}
              </div>
            </div>

            <div className="cart-detail-info-transport">
              <span className="cart-text-content-t">
                <Image
                  src={IconDate}
                  alt="icon date"
                  className="icon-size-cart-date"
                />{" "}
                <span className="cart-text-date-t">
                  {moment(transport.departureDate).format("DD/MM/YY")} |{" "}
                  {transport.departureTime}
                </span>
              </span>
              <span className="cart-text-content-t">
                <Image src={IconPerson} alt="icon person" />{" "}
                <span className="cart-text-detail">{transport.passengers}</span>
              </span>
            </div>
          </div>
          {showDelete[transport.id] && (
            <div
              className="delete-card-new"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteClick(transport);
              }}
            >
              {languageData.cart.remove}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
