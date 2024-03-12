import moment from "moment";
import Lottie from "lottie-react";
// import { Pagination } from "swiper";
// import { Swiper, Autoplay, Pagination } from "swiper/react";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// import { useHistory } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect, useContext } from "react";

import { useIsMobile } from "../../config/Mobile/isMobile";
import SkeletonCarousel from "../skeleton/SkeletonCarousel";
import { useToken } from "../../config/context/AuthContext";
import LanguageContext from "../../language/LanguageContext";
import { ImageNotFound } from "../../config/Others/ImageNotFound";
import UpdateAutocomplete from "../../config/Others/UpdateAutocomplete";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";
import animationData from "../../assets/animations/animated-page-transitions.json";

import "swiper/swiper-bundle.css";

// const Lottie = lazy(() => import("lottie-react"));


export default function PopularCarousel() {
  const { token } = useToken();
  // const history = useHistory();
  const isMobile = useIsMobile();
  const roomData = [{ adults: 2, children: [] }];
  const [showModal, setShowModal] = useState(false);
  const { languageData } = useContext(LanguageContext);
  const [destinations, setDestinations] = useState(null);

  useEffect(() => {
    if (token) {
      axiosWithInterceptor
        .get(`v1/destinations/promotions/hotels`, {})
        .then((response) => {
          const shuffledDestinations = response.data["topDestinations"].sort(
            () => 0.5 - Math.random()
          );
          setDestinations(shuffledDestinations);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token]);

  //SEND SECOND SCREEN
  const sendAutocomplete = (destination) => {
    setShowModal(true);

    const encodedRoomData = encodeURIComponent(JSON.stringify(roomData));

    // DAYS REQUEST BODY
    const today = moment();
    const oneMonthFromToday = moment(today).add(1, "months");
    const oneMonthAndTwoDaysFromToday = moment(today)
      .add(1, "months")
      .add(2, "days");

    const checkInDate = oneMonthFromToday.format("YYYY-MM-DD");
    const checkOutDate = oneMonthAndTwoDaysFromToday.format("YYYY-MM-DD");

    const requestBody = {
      destination: destination.name,
      code: destination.code,
      "check-in": checkInDate,
      "check-out": checkOutDate,
      occupancies: encodedRoomData,
      type: "destination",
    };

    sendDataSearch(destination);

    // PUSH RESULT HOTEL
    const query = new URLSearchParams(requestBody).toString();

    setTimeout(() => {
      // history.push(`/resultHotel?${query}`);
    }, 1200);
  };

  const sendDataSearch = (destination) => {
    const dataLocalSend = destination;
    UpdateAutocomplete({ dataLocalSend });
  };

  return (
    <div className="container container-carrousel">
      <>
        <Swiper
          className="popular-carousel-h "
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // autoplay={true}
          loop={true}
          // modules={[Pagination]}
          // autoplay={{
          //   delay: 7000,
          // }}
          breakpoints={{
            390: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <>
            {!destinations && (
              <>
                {[...Array(4)].map((_, index) => (
                  <SwiperSlide
                    key={index}
                    className="card-transition-carousel-all"
                  >
                    <SkeletonCarousel/>
                  </SwiperSlide>
                ))}
              </>
            )}

            {destinations && (
              <>
                {destinations.map((destination) => (
                  <SwiperSlide
                    key={destination.name}
                    onClick={() => sendAutocomplete(destination)}
                    className="c-popular-swiper"
                  >
                    <div className="container-image-carrousel">
                      {destination.imageUrl ? (
                        <img
                          className="img-lazy-popular cover-center-img"
                          src={destination.imageUrl}
                          alt={`${destination.name} - ${languageData.allAlt.altRoyalVacations}`}
                        ></img>
                      ) : (
                        <ImageNotFound />
                      )}
                    </div>

                    <div data-aos="zoom-out" className="popular-c-text">
                      <h2 className="name-hotel-second-carousel-home">
                        {destination.name}
                      </h2>

                      <div className="hotel">
                        <span className="hotel-from-second-carousel-home">
                          {languageData.homeDestinations[0].titleTop.textHotel}
                        </span>
                      </div>

                      <div className="money">
                        <span className="money-second-carousel-home">
                          MXN $
                          {Math.floor(destination.price)
                            .toLocaleString("es-MX", { currency: "MXN" })
                            .replace(".00", "")}
                          <sup>
                            {(destination.price % 1).toFixed(2).slice(2)}{" "}
                          </sup>
                        </span>
                        <span className="night-second-carousel-home">
                          {languageData.homeDestinations[0].titleTop.textNight}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </>
            )}
          </>
        </Swiper>

        { !isMobile && (
          <>
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
        )}
      </>
    </div>
  );
}
