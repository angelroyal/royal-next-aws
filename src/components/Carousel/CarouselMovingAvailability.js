import { Box } from "@mui/system";
import { SvgIcon } from "@mui/material";
import { Autoplay, Pagination } from "swiper";
import { Card, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect, useContext } from "react";

import "react-multi-carousel/lib/styles.css";
import { LightTooltip } from "../ToolTip/LightTooltip";
import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

import { ReactComponent as WaterIcon } from "../../assets/icons/transport/listing/water.svg";
import { ReactComponent as BaggageIcon } from "../../assets/icons/transport/listing/baggage.svg";
import { ReactComponent as AirConditioning } from "../../assets/icons/transport/listing/air-conditioning.svg";

export default function CarouselMovingAvailability() {
  const [transports, setTransports] = useState([]);

  const searchParams = new URLSearchParams(window.location.search);
  const typeMoving = parseInt(searchParams.get("type"));

  const { languageData } = useContext(LanguageContext);

  const requestBody = {
    airportCode: "CUN",
    departureDate: "2023-10-09",
    hotelCode: "54",
    passengers: "2",
  };

  useEffect(() => {
    axiosWithInterceptor
      .post("v1/transportations/hotel/list?items=3", requestBody)
      .then((response) => {
        const shuffledTransports = response.data["vehicles"].sort(
          () => 0.5 - Math.random()
        );
        setTransports(shuffledTransports);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination, Autoplay]}
        className="mySwiper style-carousel-transport container"
        autoplay={{
          delay: 7000000,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {transports.map((transport) => (
          <SwiperSlide
            key={transport.code}
            className="container card-transition border-radius-moving"
          >
            <Card.Img
              variant="top"
              className="Image-transports"
              // src={TransferLimusine}
              src={`${process.env.REACT_APP_ASSETS}${transport.imageUrl}`}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt={languageData.allAlt.altMovingCarousel}
            />
            <div className="information-cars container">
              <div className="card-info-carousel-modal container">
                <h2 className="title-transportation-m">{transport.type}</h2>
                <div className="information-text-modal-carousel container">
                  <div className="information-move-modal container">
                    <div className="card-moving-model lh-text">
                      {languageData.cardMoving.textModel}{" "}
                      <span className="card-model-car">{transport.model}</span>
                    </div>
                    <div className="card-moving-capacity lh-text">
                      {languageData.cardMoving.textCapacity}{" "}
                      <span className="card-model-capacity">
                        {transport.capacity}{" "}
                        {languageData.cardMoving.textPeople}
                      </span>
                    </div>
                    <div className="card-moving-price lh-text">
                      {languageData.cardMoving.textPriceVehicle}{" "}
                      <span className="card-model-price">
                        {" "}
                        {languageData.cardMoving.symbolMoney}
                        {Math.floor(transport.price)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .
                        <sup className="sup-price-card">
                          {(transport.price % 1).toFixed(2).slice(2)}
                        </sup>
                      </span>
                    </div>

                    {/* FACILITIES TRANSPORTATIONS */}
                    <div className="moving-facility-modal-carousel">
                      {/* Baggage */}
                      {transport.suitcases && (
                        <div className="card-moving-facilities">
                          <Box
                            key={`${transport.type}_${transport.model}_icon`}
                            mx={1}
                            display="inline"
                          >
                            <LightTooltip
                              title="Maletas"
                              style={{ cursor: "grab" }}
                            >
                              <SvgIcon component={BaggageIcon} inheritViewBox />
                            </LightTooltip>
                          </Box>
                        </div>
                      )}

                      {/* AirConditioning */}
                      {transport.airConditioner && (
                        <div className="card-moving-facilities">
                          <Box
                            key={`${transport.type}_${transport.model}_icon`}
                            mx={1}
                            display="inline"
                          >
                            <LightTooltip
                              title="Aire Acondicionado"
                              style={{ cursor: "grab" }}
                            >
                              <SvgIcon
                                component={AirConditioning}
                                inheritViewBox
                              />
                            </LightTooltip>
                          </Box>
                        </div>
                      )}

                      {/* Courtesy */}
                      {transport.courtesy && (
                        <div className="card-moving-facilities">
                          <Box
                            key={`${transport.type}_${transport.model}_icon`}
                            mx={1}
                            display="inline"
                          >
                            <LightTooltip
                              title="Agua o cerveza"
                              style={{ cursor: "grab" }}
                            >
                              <SvgIcon component={WaterIcon} inheritViewBox />
                            </LightTooltip>
                          </Box>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-line-transport-carousel" />
              <Row className="card-modal-money-moving">
                <Col
                  sm={7}
                  className="type-price-carousel"
                  style={{ padding: "0px" }}
                >
                  {typeMoving === 1 ? (
                    <div className="card-moving-type-m">
                      {languageData.cardMoving.textTypeAirport}
                    </div>
                  ) : typeMoving === 2 ? (
                    <div className="card-moving-type-m">
                      {languageData.cardMoving.textTypeHotel}
                    </div>
                  ) : typeMoving === 3 ? (
                    <div className="card-moving-type-m">
                      {languageData.cardMoving.textTypeRound}
                    </div>
                  ) : (
                    <div className="card-moving-type-m">
                      {languageData.cardMoving.textTypeInf}
                    </div>
                  )}

                  <div className="card-moving-total-m">
                    <span className="card-moving-letter-total">
                      {languageData.cardMoving.letterPrice}
                    </span>
                    $
                    <span className="price-moving-carousel-m">
                      {Math.floor(transport.totalPrice)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .
                    </span>
                    <sup className="sup-price-card">
                      {(transport.totalPrice % 1).toFixed(2).slice(2)}
                    </sup>
                  </div>
                  <div className="card-moving-taxes">
                    {languageData.cardMoving.taxesPrice}
                  </div>
                </Col>

                <Col sm={5} className="styles-moving-button-modal-m container">
                  {/* <button
                    className="button-more-preview"
                    // onClick={() => handleOpenModal(transport)}
                  >
                    {languageData.cardMoving.buttonCard}
                  </button> */}
                </Col>

                {/* <div className="price-transport">
                <div className="text-money">
                  {languageData.homeMoving.carousel.textPrice}
                </div>
                <div className="text-price">
                  $
                  {Math.floor(transport.price)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}
                  .<sup>{(transport.price % 1).toFixed(2).slice(2)}</sup>
                  <span className="text-letter-price"> MXN </span>
                </div>
              </div> */}
              </Row>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
