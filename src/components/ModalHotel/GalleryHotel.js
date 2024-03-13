import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs, Pagination, Autoplay } from "swiper";

import { images_es } from "../../language/images_es";
import { images_en } from "../../language/images_en";
import { facilities } from "../../config/Others/facilities";
import LanguageContext from "../../language/LanguageContext";
import {
  ImageNotFound,
  ImageNotFoundModalHotel,
} from "../../config/Others/ImageNotFound";

SwiperCore.use([Navigation, Thumbs]);

export function GalleryHotel(props) {
  const { hotelModal } = props;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [mainImage, setMainImage] = useState(
    hotelModal.images && hotelModal.images.length > 0
      ? hotelModal.images[0]
      : null
  );

  const handleThumbClick = (image, index) => {
    setMainImage(image);
    setCurrentImageIndex(index);
  };

  const { languageData } = useContext(LanguageContext);
  const language = localStorage.getItem("language") || "es";
  const images = language === "es" ? images_es : images_en;

  // let totalImage = hotelModal.images && hotelModal.images > 0 && hotelModal.images.length;

  return (
    <>
      <div>
        {mainImage ? (
          <img
            src={mainImage}
            alt={`${languageData.allAlt.altRoyalVacations} - ${hotelModal.name}`}
            className="image-modal-hotel-major"
            loading="lazy"
          />
        ) : (
          <img
            src={images.others.noAvailable.bannerNotFound.src}
            alt={images.others.noAvailable.bannerNotFound.alt}
            className="image-modal-hotel-major"
            loading="lazy"
          />
        )}
      </div>

      <div className="modal-images-multiple">
        <div className="modal-total-images">
          {hotelModal.images && hotelModal.images.length > 0 && (
            <>
              {currentImageIndex + 1}/{hotelModal.images.length}
            </>
          )}
        </div>

        <Swiper
          className="swiper-button-arrow"
          // modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6.5,
            },
          }}
        >
          {hotelModal.images && hotelModal.images.length > 0 ? (
            hotelModal.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  className={`image-modal-hotel ${
                    currentImageIndex === index ? "selected-image" : ""
                  }`}
                  // src={image}
                  src={image}
                  alt={`${hotelModal.name} ${index + 1}`}
                  onClick={() => handleThumbClick(image, index)}
                  loading="lazy"
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <ImageNotFoundModalHotel />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </>
  );
}

export function InformationModalHotel(props) {
  const { hotelModal } = props;
  const [activeFacility, setActiveFacility] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleFacilityHover = (index) => {
    setActiveFacility(index);
  };

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescriptionPreview = (description) => {
    const words = description.split(" ");
    return words.slice(0, 30).join(" ");
  };

  const { languageData } = useContext(LanguageContext);

  return (
    <div data-aos="fade-left">
      <h2 className="modal-hotel-subtitle">
        {languageData.modalHotel.textLearn}
      </h2>
      {showFullDescription ? (
        <>
          <div className="modal-hotel-description">
            {hotelModal.description}
            <span>
              <button
                className="button-shoMore-modal"
                onClick={handleToggleDescription}
              >
                {languageData.modalHotel.showLess}
              </button>
            </span>
          </div>
        </>
      ) : (
        <div>
          <div className="modal-hotel-description">
            {getDescriptionPreview(hotelModal.description)}...
            <span>
              <button
                className="button-shoMore-modal"
                onClick={handleToggleDescription}
              >
                {languageData.modalHotel.showMore}
              </button>
            </span>
          </div>
        </div>
      )}

      <h2 className="modal-hotel-subtitle">
        {languageData.modalHotel.titlePrincipal}
      </h2>

      <div className="options-labels-modal">
        {hotelModal.facilities && hotelModal.facilities.length > 0 ? (
          <>
            {hotelModal.facilities.slice(0, 5).map((facility, index) => (
              <div
                className={`icon-separate-modal ${
                  activeFacility === index ? "active" : ""
                }`}
                key={`${facility}_${index}_icon`}
                onMouseOver={() => handleFacilityHover(index)}
                onMouseOut={() => setActiveFacility(null)}
              >
                {/* {React.createElement(
                  facilities[facility][
                    activeFacility === index ? "active" : "default"
                  ]
                )} */}
                <div
                  className={`${
                    activeFacility === index
                      ? "label-modal-active"
                      : "label-modal"
                  }`}
                >
                  {
                    languageData.hotelTypesFacilities[
                      facilities[facility].label
                    ]
                  }
                </div>
              </div>
            ))}
          </>
        ) : (
          <span>{languageData.modalHotel.amenities}</span>
        )}
      </div>
      <h2 className="modal-hotel-subtitle">
        {languageData.modalHotel.textNeedKnow}
      </h2>

      <div>
        <li className="modal-hotel-subtext">
          {languageData.modalHotel.checkIn}
        </li>
        <li className="modal-hotel-subtext">
          {languageData.modalHotel.checkOut}
        </li>
        {hotelModal.breakfast === true ? (
          <li className="modal-hotel-subtext">
            {languageData.modalHotel.breakfast}
          </li>
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
}

export function GalleryHotelMobile({ hotelModal }) {
  return (
    <>
      <Swiper
        id="m-swiper-modal"
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        // modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {hotelModal.images.length > 0 ? (
          hotelModal.images.map((image, index) => (
            <SwiperSlide className="m-swiper-modal-hotel width100" key={index}>
              <img
                data-aos="fade-right"
                className="m-image-modal-hotel"
                src={image}
                alt="modal hotel"
              ></img>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <ImageNotFound />
          </SwiperSlide>
        )}
      </Swiper>
      {infoModalHotelMobile(hotelModal)}
    </>
  );
}

function infoModalHotelMobile(hotelModal) {
  const { languageData } = useContext(LanguageContext);
  const [activeFacility, setActiveFacility] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const handleFacilityHover = (index) => {
    setActiveFacility(index);
  };

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getDescriptionPreview = (description) => {
    const words = description.split(" ");
    return words.slice(0, 30).join(" ");
  };
  return (
    <>
      <div className="container">
        <>
          <h2 className="modal-hotel-subtitle">
            {languageData.modalHotel.titlePrincipal}
          </h2>

          <div className="options-labels-modal">
            {hotelModal.facilities && hotelModal.facilities.length > 0 ? (
              <>
                {hotelModal.facilities.slice(0, 5).map((facility, index) => (
                  <div
                    className={`icon-separate-modal ${
                      activeFacility === index ? "active" : ""
                    }`}
                    key={`${facility}_${index}_icon`}
                    onMouseOver={() => handleFacilityHover(index)}
                    onMouseOut={() => setActiveFacility(null)}
                  >
                    {React.createElement(
                      facilities[facility][
                        activeFacility === index ? "active" : "default"
                      ]
                    )}
                    <div
                      className={`${
                        activeFacility === index
                          ? "label-modal-active"
                          : "label-modal"
                      }`}
                    >
                      {
                        languageData.hotelTypesFacilities[
                          facilities[facility].label
                        ]
                      }
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <span>{languageData.modalHotel.amenities}</span>
            )}
          </div>
        </>

        <div className="line-divided-hotel-modal" />

        <>
          <h2 className="modal-hotel-subtitle">
            {languageData.modalHotel.textLearn}
          </h2>

          {showFullDescription ? (
            <>
              <div className="modal-hotel-description">
                {hotelModal.description}
                <br />
                <span>
                  <button
                    className="button-shoMore-modal p-0"
                    onClick={handleToggleDescription}
                  >
                    {languageData.modalHotel.showLess}
                  </button>
                </span>
              </div>
            </>
          ) : (
            <div>
              <div className="modal-hotel-description">
                {getDescriptionPreview(hotelModal.description)}...
                <br />
                <span>
                  <button
                    className="button-shoMore-modal p-0"
                    onClick={handleToggleDescription}
                  >
                    {languageData.modalHotel.showMore}
                  </button>
                </span>
              </div>
            </div>
          )}
        </>

        <>
          <h2 className="modal-hotel-subtitle">
            {languageData.modalHotel.textNeedKnow}
          </h2>

          <li className="m-modal-hotel-subtext">
            {languageData.modalHotel.checkIn}
          </li>

          <li className="m-modal-hotel-subtext">
            {languageData.modalHotel.checkOut}
          </li>

          {hotelModal.breakfast === true ? (
            <li className="m-modal-hotel-subtext">
              {languageData.modalHotel.breakfast}
            </li>
          ) : (
            ""
          )}
        </>
      </div>
      <div className="rectangle-divided-hotel-modal" />
    </>
  );
}
