import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState, useContext } from "react";

import LanguageContext from "../../../language/LanguageContext";
import { useCartAxios } from "../../../components/Cart/CartAxios";
import { useTourContext } from "../../Context/ListingTourContext";
import { PriceModalTour } from "../../../config/Tour/PriceModalTour";
import { useModalTourContext } from "../../Context/ModalTourContext";
import axiosWithInterceptor from "../../../config/Others/axiosWithInterceptor";


export function OccupancyTour(props) {
  const { fetchData } = useCartAxios();
  const [ratesValue, setRateValue] = useState([]);
  const { languageData } = useContext(LanguageContext);
  const { setChangeSelectionTour, saveValueTour } = props;
  const { tourModal, dataModalTour, otherInfoTour, hourSelected, setSection } =
    useModalTourContext();
  const [isLoader, setIsLoader] = useState(false);
  const [errorAxios, setErrorAxios] = useState({ error: false, message: null });

  const { setTourPrice } = useTourContext();

  useEffect(() => {
    if (saveValueTour && saveValueTour.categories.length > 0) {
      saveValueTour.categories = saveValueTour.categories.filter(
        (tour) => tour.text
      );

      const filterResult = [];
      saveValueTour.categories.forEach((valueCategory, item) => {
        const category = {
          id: valueCategory.id,
          text: valueCategory.text,
          typeOccupancy: typeOccupancy(valueCategory.text),
          price: valueCategory.price,
          quantity: item === 0 ? 2 : 0,
        };
        filterResult.push(category);
      });
      const actualValue = [...ratesValue, ...filterResult];
      setRateValue(actualValue);
    }
  }, [saveValueTour]);

  const addOccupancy = (index) => {
    const actualRatesValue = [...ratesValue];
    actualRatesValue[index].quantity += 1;
    setRateValue(actualRatesValue);
  };

  const removeOccupancy = (index) => {
    if (ratesValue[index].quantity > 0 && index > 0) {
      const actualRatesValue = [...ratesValue];
      actualRatesValue[index].quantity -= 1;

      setRateValue(actualRatesValue);
    } else if (ratesValue[index].quantity > 1) {
      const actualRatesValue = [...ratesValue];
      actualRatesValue[index].quantity -= 1;

      setRateValue(actualRatesValue);
    }
  };

  const tourist = () => {
    const ratesActual = ratesValue;
    // console.log(ratesActual);
    const setValueRate = [];
    ratesActual.forEach((rate) => {
      setValueRate.push(`${rate.id}.${rate.quantity}`);
    });
    return setValueRate;
  };

  const totalPriceTour = ratesValue.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const reserved = async () => {
    try {
      setIsLoader(true);
      setTourPrice(totalPriceTour);
      const uidCart = localStorage.getItem("uid-cart");
      let cartId = "";

      if (uidCart) {
        const { uid } = JSON.parse(uidCart);
        cartId = uid;
      }

      const saveRequestCart = {
        activityId: tourModal.code,
        date: dataModalTour.date,
        currency: "MXN",
        tourists: tourist(),
        modality: saveValueTour.id,
        price: totalPriceTour,
        address: otherInfoTour.address,
        cancelPolicies: otherInfoTour.cancelPolicies,
        time: hourSelected,
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
      setIsLoader(false);
      setSection(2);
      if (errorAxios.error === true) {
        setErrorAxios({ error: false, message: null });
      }
    } catch (error) {
      if (
        error.response.data.message ===
          "La fecha de salida debe ser 2 días después de la fecha actual" ||
        error.response.data.message ===
          "ApiStatusCode: 422, ApiMessage: not availability, ApiInternalCode: 422"
      ) {
        setErrorAxios({ error: true, message: error.response.data.message });
      }
      setIsLoader(false);
    }
    // console.log(saveRequestCart);
  };
  useEffect(() => {
    if (errorAxios.error === true) {
      setErrorAxios({ error: false, message: null });
    }
  }, [dataModalTour]);

  // console.log(errorAxios);
  return (
    <>
      <div>
        <b className="b-time">{languageData.modalTour.OccupancyTours.selectYourTickets}</b>
        <p className="p-text-black-select-tour">
          {languageData.modalTour.OccupancyTours.subtitleSelectYourTickets}
        </p>
      </div>

      <div className="container-reservation-tour">
        {/* PLAN SELECTED INFO */}
        <div className="modality-tour-selected-entries">
          <div className="header-modality-selected-entries text-center">
            <b>{saveValueTour.nameTour}</b>
            {/* <p className="text-blue text-center">Politicas de cancelación</p> */}
          </div>

          <div>
            <div className="body-modality-tour-selected-entries d-flex flex-column gap-2">
              <b className="black-price">{languageData.modalTour.prices}</b>

              {saveValueTour.categories.map(
                (value, item) =>
                  value.text && (
                    <div className="d-flex justify-content-between" key={item}>
                      <div className="width4 grey-price-s">{value.text}</div>
                      <div className="width6 d-flex justify-content-end grey-price gap-1">
                        <PriceModalTour price={value.price} />
                        {value.price !== 0 && (
                          <span className="c-u-price">c/u</span>
                        )}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>

          <div className="btn-selected-entries">
            <button
              className="btn-modality-tour"
              onClick={() => setChangeSelectionTour()}
            >
              <b>{languageData.modalTour.OccupancyTours.changeSelection}</b>
            </button>
          </div>
        </div>

        {/* SELECTED OCCUPANCY */}
        <div className="position-relative">
          <div
            className={`${
              errorAxios.error === true && "blur-card-tour-modal"
            } card-selected-occupancy-tour`}
          >
            <div className="body-modality-tour-booking">
              {ratesValue.length > 0 &&
                ratesValue.map((value, item) => (
                  <div className="row pb-3" key={item}>
                    <div className="col-4 category-title">
                      {value.typeOccupancy.lang}
                    </div>

                    <div className="col-8 d-flex justify-content-end cont-card-res-tour">
                      <div className="d-flex justify-content-around div-people-piker">
                        <button
                          className="button-left-people-piker"
                          onClick={() => removeOccupancy(item)}
                        >
                          <b
                            className={`rest-occupancy ${
                              item > 0
                                ? value.quantity < 1
                                  ? "locked"
                                  : "unlocked"
                                : value.quantity < 2
                                ? "locked"
                                : "unlocked"
                            }`}
                          >
                            -
                          </b>
                        </button>

                        <b className="b-price">{value.quantity}</b>

                        <button
                          className="button-right-people-piker"
                          onClick={() => addOccupancy(item)}
                        >
                          <b className="add-occupancy unlocked">+</b>
                        </button>
                      </div>
                      <span className="year-occupancy">{value.text}</span>
                    </div>
                  </div>
                ))}
            </div>

            <div className="mt-3">
              <div className="row">
                <span className="col-4 span-title-total">Total</span>

                <span className="col-8 d-flex justify-content-end">
                  <b className="b-price-total">
                    $
                    {Math.floor(totalPriceTour)
                      .toLocaleString("es-MX", {
                        currency: "MXN",
                      })
                      .replace(".00", "")}
                    .
                    <sup className="sup-modality-tour">
                      {(totalPriceTour % 1).toFixed(2).slice(2)}
                    </sup>
                  </b>
                </span>
              </div>

              <div className="pt-1">
                <button
                  className="btn-booking-total"
                  onClick={() => reserved()}
                  disabled={errorAxios.error === true}
                >
                  {languageData.modalTour.OccupancyTours.reserve}
                </button>
              </div>
            </div>
          </div>
          {errorAxios.error === true && (
            <div className="block-card-tour-reservation">
              {languageData.modalTour.OccupancyTours.dateNotAvailable}
            </div>
          )}
        </div>
      </div>

      {isLoader === true && (
        <Box className="box-container-modal-tour" sx={{ display: "flex" }}>
          <CircularProgress className="louder-modal-tour" />
        </Box>
      )}
    </>
  );
}

function typeOccupancy(text) {
  text = text.split(" ");
  let typePerson = text[0];

  const result = { lang: typePerson };
  return result;
}
