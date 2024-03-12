import moment from "moment";
import Lottie from "lottie-react";
import { Card } from "react-bootstrap";
import { Autoplay, Pagination } from "swiper";
import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState, useContext } from "react";

import SkeletonCarousel from "../skeleton/SkeletonCarousel";
import { tourTypes } from "../../config/Tour/tourTypes";
import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
import animationData from "../../assets/animations/animated-page-transitions.json";

function ItemCarousel(props) {
  const [activities, setactivities] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosWithInterceptor
      .get(`v1/activities/shuffle?activityType=3&limit=7`, {
        params: {
          hotelType: props.hotelType,
        },
      })
      .then((response) => {
        setactivities(response.data.activities);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [props.hotelType]);


  const history = useHistory();
  const today = moment();
  const oneMonthFromToday = moment(today).add(1, "months");
  const dateStart = oneMonthFromToday.format("YYYY-MM-DD");
  const [showModal, setShowModal] = useState(false);

  const sendAutocomplete = (activity) => {
    setShowModal(true);

    const requestBody = {
      code: activity.code,
      type: "activity",
      dateStart: dateStart,
      adults: 2,
      children: 0,
    };

    // We convert the object to a string and append it to the URL
    const query = new URLSearchParams(requestBody).toString();

    setTimeout(() => {
      history.push(`/tours?${query}`);
      setShowModal(false);
    }, 1500);
  };

  const { languageData } = useContext(LanguageContext);

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper style-carousel container"
        autoplay={{
          delay: 5000,
          // delay: 70000000,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <>
          {loading ? (
            <>
              {[...Array(4)].map((_, index) => (
                <SwiperSlide key={index} className="card-transition-carousel-all">
                  <SkeletonCarousel />
                </SwiperSlide>
              ))}
            </>
          ) : (
            <>
              {activities.map((activity) => (
                <SwiperSlide key={activity.name} className="card-transition "
                onClick={() => sendAutocomplete(activity)}
                >
                  <Card.Img
                    variant="top"
                    className="Image-destinations"
                    src={activity.images}
                    width={293}
                    height={356}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    alt={`${activity.name} - ${languageData.allAlt.altRoyalVacations}`}
                  />
                  <div className="activities-carousel-card">
                    <h2 className="ElementTitle-carousel-tour">
                      {activity.name.length > 15
                        ? `${activity.name.slice(0, 40)}...`
                        : activity.name}
                    </h2>
                    <p className="location-card-carousel-activities">
                      {activity.destination}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </>
          )}
        </>
      </Swiper>

      {showModal && (
        <div className="modal-backdrop modal-loading">
          <div className="modal-box">
            <Lottie
              className="transition-royal"
              animationData={animationData}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default function CardCarousel() {
  const [selectedType, setSelectedType] = useState(tourTypes[0]);
  const { languageData } = useContext(LanguageContext);

  const handleClick = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <h2 className="container">{languageData.tourCarouselHome.titleTop}</h2>
      <div className="container options-labels-tour">
        {tourTypes.map((type) => (
          <div key={type.id} className="options-labels-hotel">
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className={
                selectedType.id === type.id
                  ? "icon-separate selected"
                  : "icon-separate"
              }
              onClick={() => handleClick(type)}
            >
              {selectedType.id === type.id ? (
                <type.iconActive />
              ) : (
                <type.icon />
              )}{" "}
              {languageData.tourTypes[type.label]}
            </label>
          </div>
        ))}

        {selectedType && <ItemCarousel hotelType={selectedType.id} />}
      </div>
    </>
  );
}
