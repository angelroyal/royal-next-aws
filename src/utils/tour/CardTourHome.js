import moment from "moment";
import { Rating } from "@mui/material";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React, { useState, useEffect, useContext, Suspense, lazy } from "react";

import { useIsMobile } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";
import { ActivitiesTourCardSkeleton } from "../skeleton/SkeletonTour";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

import animationData from "../../assets/animations/animated-page-transitions.json";

const Lottie = lazy(() => import("lottie-react"));

export function CardTourHome(props) {
  const isMobile = useIsMobile();
  const [response, setResponse] = useState([]);
  const [loader, setLoader] = useState(false);

  const { languageData, currency } = useContext(LanguageContext);
  const history = useHistory();

  useEffect(() => {
    const getActivities = async () => {
      setLoader(true);
      try {
        let activities = await axiosWithInterceptor.get(
          "v1/activities/promotions",
          { params: { items: 12 } }
        );
        if (activities && activities.data) {
          setResponse(activities.data["top-activities"]);
          setLoader(false);
        }
      } catch (error) {
        setLoader(false);
      }
    };
    getActivities();
  }, []);


  const [showModal, setShowModal] = useState(false);
  // const [valueSelected, setValueSelected] = useState(null);

  const openDialog = (cardInfo) => {
    // setOpen(false);
    // console.log(cardInfo);
    // return
    setShowModal(true);
    const today = moment();

    let date = moment(today).add(1, "month");

    const checkIn = date.format("YYYY-MM-DD");

    const navigation = {
      code: "18",
      // code: cardInfo.id,
      type: "destination",
      dateStart: checkIn,
      currency: currency,
      adults: 2,
      children: 1,
    };

    const query = new URLSearchParams(navigation).toString();

    setTimeout(() => {
      history.push(`/tours?${query}`);
    }, 1200);
    // setOpen(true);
  };

  return (
    <>
      <Container className="p-0 container-cards-tour">
        <h1 className="title-cards-tour">
          {languageData.SearchBox.tabTour.topActivity}
        </h1>

        <span className="subtitle-card-tour">
          {languageData.SearchBox.tabTour.subtitleTopActivities}
        </span>

        <div
          className={`d-flex flex-wrap p-0 row-gap-4 mt-5 ${
            isMobile ? "justify-content-around " : "justify-content-between"
          }`}
        >
          {loader === false && response.length > 0 ? (
            response.map((value, index) => (
              <div
                key={index}
                className="card-tours-home"
                onClick={() => openDialog(value)}
              >
                <img
                  src={value.image}
                  alt="tour royal"
                  className="image-card-t-h"
                  width="100%"
                />
                <p className="location-tour-c">{value.destination}</p>

                <div className="description-g-t-c">
                  <div className="cont-rating-text-tour-card">
                    <div className="title-description-h">
                      <h3>{value.name}</h3>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      <Rating
                        value={value.category}
                        readOnly
                        className="rating-tour-card"
                      />
                      <p className="hours-tour-h">
                        <span>{languageData.cartTour.duration} </span>
                        {value.duration}
                      </p>
                    </div>
                  </div>
                  <div className="cont-price-tour-card-popular d-flex justify-content-between">
                    <p className="price-tour d-flex flex-column">
                      {languageData.cartTour.from}{" "}
                      <span className="total-price-tour-card-popular">
                        <span className="text-mxn-price-tour-card-popular">
                          MXN{" "}
                        </span>
                        $
                        {Math.floor(value.price)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .<sup>{(value.price % 1).toFixed(2).slice(2)}</sup>
                      </span>{" "}
                    </p>

                    <button className="btn-see-details-card-tour-popular">
                      {languageData.cartTour.seeDetails}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <ActivitiesTourCardSkeleton />
          )}
        </div>
      </Container>

      {!isMobile && (
        <>
          {showModal && (
            <div className="modal-backdrop modal-loading">
              <div className="modal-box">
                <Suspense fallback={null}>
                  <Lottie
                    className="transition-royal"
                    animationData={animationData}
                  />
                </Suspense>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
