import moment from "moment";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect, useContext } from "react";
// import "react-multi-carousel/lib/styles.css";

import ModalHotel from "../../pages/Modal/ModalHotel";
import LanguageContext from "../../language/LanguageContext";
import { ImageNotFound } from "../../config/Others/ImageNotFound";
import SkeletonCarousel from "../../utils/skeleton/SkeletonCarousel";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

export default function CarouselHotelAvailability(props) {
  const [hotels, setHotels] = useState([]);

  // MODAL CONFIG
  const [showModal, setShowModal] = useState(false);
  const [selectedHotelKey, setSelectedHotelKey] = useState(null);
  const [requestDataModal, setRequestDataModal] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleOpenModal = (hotel) => {
    // DAYS REQUEST BODY
    const today = moment();
    const oneMonthFromToday = moment(today).add(1, "months");
    const oneMonthAndTwoDaysFromToday = moment(today)
      .add(1, "months")
      .add(2, "days");

    const checkInDate = oneMonthFromToday.format("YYYY-MM-DD");
    const checkOutDate = oneMonthAndTwoDaysFromToday.format("YYYY-MM-DD");

    const requestBody = {
      code: hotel.code,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      occupancies: [
        {
          adults: 2,
          children: [],
        },
      ],
      type: "destination",
    };

    setRequestDataModal(requestBody);

    const requestBodyJSON = JSON.stringify(requestBody);
    localStorage.setItem("requestBody", requestBodyJSON);

    setSelectedHotelKey(hotel.code);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setHotels(null);
    axiosWithInterceptor
      .get(`v1/hotels/shuffle?items=12&hotelType=1`, {})
      .then((response) => {
        setHotels(response.data.hotels);
        setShowTooltip(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.hotelType]);

  const { languageData } = useContext(LanguageContext);

  return (
    <div className="container">
      <>
        <Swiper
          slidesPerView={"auto"}
          id="swiper-carousel-swi"
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          // loop={true}
          modules={[Pagination, Autoplay]}
          className="popular-carousel-h"
          autoplay={{
            delay: 9000,
            // delay: 500000000,
          }}
          breakpoints={{
            390: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          <>
            {!hotels && (
              <>
                {[...Array(4)].map((_, index) => (
                  <SwiperSlide
                    key={index}
                    id="carousel-hotel-options"
                    className="card-transition-carousel-all"
                  >
                      <SkeletonCarousel />
                  </SwiperSlide>
                ))}
              </>
            )}

            {hotels && (
              <>
                {hotels.map((hotel) => (
                  <SwiperSlide
                    key={hotel.name}
                    onClick={() => handleOpenModal(hotel)}
                    className="c-popular-swiper"
                  >
                    <div className="container-image-carrousel">
                      {hotel.image ? (
                        <img
                          className="img-lazy-popular cover-center-img"
                          src={hotel.image}
                          alt={`${hotel.name} - ${languageData.allAlt.altRoyalVacations}`}
                        />
                      ) : (
                        <ImageNotFound />
                      )}
                    </div>

                    <div className="popular-c-text description-plan-carrousel">
                      <h2 className="ElementTitle-carousel">
                        {hotel.name.length > 25
                          ? `${hotel.name.slice(0, 25)}...`
                          : hotel.name}
                      </h2>

                      <p className="location-card-carousel-plan">
                        {hotel.destination}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </>
            )}
          </>
        </Swiper>

        {showModal && (
          <ModalHotel
            show={showModal}
            onHide={handleCloseModal}
            hotelKey={selectedHotelKey}
            showTooltip={showTooltip}
            requestBodyHome={requestDataModal}
          />
        )}
      </>
    </div>
  );
}
