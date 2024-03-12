import { Autoplay, Pagination } from "swiper";
import { Card, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect, useContext } from "react";

import "react-multi-carousel/lib/styles.css";
import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

import { ReactComponent as DemandIcon } from "../../assets/icons/hotel/listing/on-high-demand.svg";

export default function CarouselTourAvailability() {
  const [destinations, setDestinations] = useState([]);
  const { languageData } = useContext(LanguageContext);

  const requestBody = {
    adults: 2,
    children: 0,
    code: "CUN",
    dateStart: "2023-10-08",
    type: "destination",
  };

  useEffect(() => {
    axiosWithInterceptor
      .post("v1/tour-destinations/availability?page=1&items=3", requestBody)
      .then((response) => {
        const shuffledDestinations = response.data.activities.sort(
          () => 0.5 - Math.random()
        );
        setDestinations(shuffledDestinations);
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
        className="mySwiper style-carousel container"
        autoplay={{
          // delay: 7000,
          delay: 700000,
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
        {destinations.map((destination) => (
          <SwiperSlide key={destination.name} className="card-transition ">
            <Card.Img
              variant="top"
              className="image-hotel-modal-preview"
              src={`${destination.images[0]}`}
              width={293}
              height={356}
              style={{ objectFit: "cover", objectPosition: "center" }}
              alt={`${destination.name} image`}
            />
            <div className="container-card-carousel-a">
              <div className="card-info-tour-modal">
                <h2 className="title-tour-carousel-a">
                  {destination.name.length > 15
                    ? `${destination.name.slice(0, 18)}...`
                    : destination.name}
                </h2>

                <div className="hotel-tour-carousel-a">
                  <span>{destination.destinationName}</span>
                </div>
              </div>

              <>
                {destination.isTop === true ? (
                  <div className="container-exclusiveDeal-preview">
                    <span>
                      <DemandIcon className="" />
                    </span>

                    {languageData.cardHotel.label}
                  </div>
                ) : destination.exclusiveDeal === 2 ? (
                  <div className="">
                    {languageData.modalHotelOptions.bestHotel}
                  </div>
                ) : (
                  <div className=""></div>
                )}
              </>

              <Row className="card-price-tour-modal">
                <Col
                  sm={7}
                  className="text-price-carousel-h"
                  style={{ padding: "0px" }}
                >
                  <div className="people-carousel-tour">
                    {languageData.modalHotelOptions.peopleCarouselTour}
                  </div>
                  <div className="money-carousel-tour">
                    <span className="letter-money-carousel-t">
                      {destination.currency}
                    </span>
                    $
                    {Math.floor(destination.price)
                      .toLocaleString("es-MX", { currency: "MXN" })
                      .replace(".00", "")}
                    .
                    <sup className="number-sup-tour">
                      {(destination.price % 1).toFixed(2).slice(2)}{" "}
                    </sup>
                  </div>
                </Col>
                
                <Col
                  sm={5}
                  className="container-preview-button"
                  style={{ padding: "0px" }}
                >
                  {/* <button className="button-more-preview" type="button">
                    {languageData.modalHotelOptions.buttonChoose}
                  </button> */}
                </Col>
              </Row>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
