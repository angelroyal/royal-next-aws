import React, { useState, useContext } from "react";

import { days } from "../../../config/Others/days";
import LanguageContext from "../../../language/LanguageContext";
import { useShowContentTour } from "../../../pages/Modal/ModalTour";
import axiosWithInterceptor from "../../../config/Others/axiosWithInterceptor";

import { ReactComponent as IconDone } from "../../assets/icons/tour/modal/done_active.svg";
import { ReactComponent as IconClose } from "../../assets/icons/tour/modal/close_active.svg";

const API_ENDPOINT = `/v1/carts/activity`;

export default function ModalInformationTour(props) {
  const { setShowContent } = useShowContentTour();
  const { tourModal } = props;

  const searchParams = new URLSearchParams(window.location.search);
  const adults = parseInt(searchParams.get("adults"));
  const children = parseInt(searchParams.get("children"));
  const dateStart = searchParams.get("dateStart");
  const sumPeople = children + adults;

  const [showAll, setShowAll] = useState(false);

  const descriptionWords = tourModal.description.split(" ");
  const limitedWords = showAll
    ? descriptionWords
    : descriptionWords.slice(0, 150);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };
  const { languageData } = useContext(LanguageContext);

  // ADD CART ACTIVITIES

  const handleReserveNow = async () => {
    try {
      const uidCart = localStorage.getItem("uid-cart");
      let cartId = "";

      if (uidCart) {
        const { uid } = JSON.parse(uidCart);
        cartId = uid;
      }

      const saveRequestCart = {
        cartId: cartId,
        "activity-code": tourModal.code,
        date: dateStart,
        adults: adults,
        children: children,
        price: tourModal.netPrice,
      };

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
    } catch (error) {
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.message ===
          "La fecha de salida debe ser 2 días después de la fecha actual"
      ) {
        alert(`${languageData.modalMoving.alertError}`);
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="information-extended-modal-tour">
      {/* SECTION YOU NEED  */}
      <div className="modal-tour-subtitle">
        {languageData.modalTour.needKnow}
      </div>

      <div className="container-information-tour">
        <div>
          <div className="modal-tour-subtext">
            {languageData.modalTour.durationActivity}
          </div>

          <div className="modal-tour-subtext">
            {languageData.modalTour.availability}
          </div>

          <div className="modal-tour-subtext">
            {languageData.modalTour.schedule}
          </div>

          <div className="modal-tour-subtext">
            {languageData.modalTour.suitableText}
          </div>
        </div>

        <div>
          <div className="modal-tour-subtext2">
            {tourModal.duration ? (
              <>
                {tourModal.duration.includes("h") && (
                  <>
                    {`${parseInt(tourModal.duration, 10)} ${
                      parseInt(tourModal.duration, 10) === 1
                        ? languageData.durationTour.h
                        : languageData.durationTour.hPlural
                    }`}
                    {tourModal.duration.includes(",") ? " " : ""}
                  </>
                )}

                {tourModal.duration.includes(",") && (
                  <>
                    {`${parseInt(
                      tourModal.duration.split(",")[1].trim(),
                      10
                    )} ${languageData.durationTour.mPlural}`}
                  </>
                )}

                {!tourModal.duration.includes("h") &&
                  !tourModal.duration.includes(",") && (
                    <>
                      {`${parseInt(tourModal.duration, 10)} ${
                        languageData.durationTour.mPlural
                      }`}
                    </>
                  )}
              </>
            ) : (
              languageData.containerModalHotel.infoBed
            )}
          </div>

          {tourModal.availability && tourModal.availability.length > 0 ? (
            <div className="modal-tour-subtext2">
              {tourModal.availability.map(
                (dayNumber, index) =>
                  (days[dayNumber]
                    ? days[dayNumber].label
                    : "Invalid day number") +
                  (index !== tourModal.availability.length - 1 ? ", " : "")
              )}
            </div>
          ) : (
            <div className="modal-tour-subtext2">
              {languageData.modalTour.informationText}
            </div>
          )}

          <div className="modal-tour-subtext2">
            {tourModal.schedule
              ? tourModal.schedule
              : languageData.containerModalHotel.infoBed}
          </div>

          <div className="modal-tour-subtext2">
            {tourModal.suitableFor
              ? tourModal.suitableFor + " años en adelante"
              : languageData.containerModalHotel.infoBed}
          </div>
        </div>
      </div>

      {/* SECCTION INLUSIVE */}
      {tourModal.features.included && (
        <>
          <div className="h-line-modal" />
          <div className="modal-tour-subtitle">
            {languageData.modalTour.include}
          </div>

          <div className="modal-tour-list2">
            <ul className="ul-list2-modal-tour">
              {tourModal.features.included.map((feature, index) => (
                <div className="correct-check" key={index}>
                  <IconDone className="correct-check-icon-done" />
                  {feature}
                </div>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* SECTION RECOMMENDATIONS */}
      {tourModal.recommendations && (
        <>
          <div className="modal-tour-subtitle">
            {languageData.modalTour.recommendations}
          </div>

          <div className="modal-tour-list1">
            <ul>
              <li>{tourModal.recommendations}</li>
            </ul>
          </div>
          <br />
        </>
      )}

      <div className="h-line-modal" />

      {/* SECTION DESCRIPTION */}
      <div>
        <div className="modal-tour-subtitle">
          {languageData.modalTour.descriptionTour}
        </div>

        <div className="modal-tour-subtext1">
          {limitedWords.join(" ")}
          {descriptionWords.length > 150 && (
            <span>
              {!showAll ? (
                <button
                  className="button-shoMore-modal"
                  onClick={handleShowMore}
                >
                  {languageData.modalTour.showMore}
                </button>
              ) : (
                <button
                  className="button-shoMore-modal"
                  onClick={handleShowLess}
                >
                  {languageData.modalTour.showLess}
                </button>
              )}
            </span>
          )}
        </div>
        <div className="h-line-modal" />
      </div>

      {/* SECTION CARD */}
      <div className="modal-tour-subtitle">
        {languageData.modalTour.selectOption}
      </div>

      <br />
      <div className="modal-tour-option">
        <div className="modal-modality">
          {languageData.containerModalTour.topModality}
        </div>

        <div className="modal-price">
          {languageData.containerModalTour.topPrice}
        </div>

        <div className="modal-selection">
          {languageData.containerModalTour.topSelection}
        </div>
      </div>

      <div className="container-tour">
        <div className="modality-container-tour">
          <div className="modal-first-container">
            <div className="modal-first-title">
              {languageData.containerModalTour.infModality}
            </div>

            <div className="modal-first-text">
              {languageData.modalTour.duration}{" "}
              {tourModal.schedule
                ? tourModal.schedule
                : languageData.containerModalHotel.infoBed}
              <br />
              {languageData.modalTour.availabilityOpeningDays}
            </div>

            {tourModal.features.included && (
              <div className="list-include">
                <div className="modal-second-title">
                  {languageData.containerModalTour.infInclude}
                </div>

                <div className="modal-container-list">
                  <ul>
                    {tourModal.features.included
                      .slice(0, 3)
                      .map((feature, index) => (
                        <div key={index} className="correct-check">
                          <IconDone className="correct-check-icon-done" />
                          {feature}
                        </div>
                      ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {tourModal.features.notIncluded && (
            <div className="modal-tour-list">
              <div className="modal-third-title">
                {languageData.containerModalTour.infNoInclude}
              </div>

              <div className="modal-container-list-no">
                <ul>
                  {tourModal.features.notIncluded
                    .slice(0, 3)
                    .map((feature, index) => (
                      <li key={index} className="list-no-include">
                        <IconClose className="correct-check-icon-close" />
                        {feature}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="modal-second-container">
          <div className="modal-second-divider">
            <div className="modal-money-divider">
              <span>{tourModal.currency} </span>
              <span className="modal-money-divider1">
                $
                {Math.floor(tourModal.totalPrice)
                  .toLocaleString("es-MX", { currency: "MXN" })
                  .replace(".00", "")}
                .
              </span>

              <sup>{(tourModal.totalPrice % 1).toFixed(2).slice(2)}</sup>
            </div>
          </div>
          
          <span className="modal-tax">
            {languageData.containerModalTour.infTaxes}
          </span>

          <div className="modal-third-divider">
            {languageData.containerModalTour.infEntrance} {sumPeople}{" "}
            {sumPeople > 1
              ? languageData.containerModalTour.infPeople
              : languageData.containerModalTour.infPerson}{" "}
          </div>

          <span className="modal-family-booking">
            {adults}{" "}
            {adults > 1
              ? languageData.itinerary.tourItinerary.textAdults
              : languageData.itinerary.tourItinerary.textAdult}{" "}
            {children}{" "}
            {children > 1
              ? languageData.itinerary.tourItinerary.textChildren
              : languageData.itinerary.tourItinerary.textChild}{" "}
          </span>
        </div>

        <div className="button-select-tour">
          <button className="button-modal-tour" onClick={handleReserveNow}>
            {languageData.containerModalTour.buttonModal}
          </button>
        </div>
      </div>
    </div>
  );
}
