import { Navigation } from "swiper";
import { Rating } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { useTourContext } from "../../Context/ListingTourContext";

export default function GalleryTour() {
  const { tourInfo } = useTourContext();
  // console.log(tourInfo);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [mainImage, setMainImage] = useState(null);

  const handleThumbClick = (image, index) => {
    setMainImage(image);
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    if (tourInfo && tourInfo.mainImage) {
      setMainImage(tourInfo.mainImage);
    }
  }, [tourInfo]);

  return (
    <>
      {tourInfo && (
        <>
          {/* TITLE TOUR */}
          <div className="contain-title-tour-modal">
            <div className="title-tour-modal">{tourInfo.name}</div>

            <div className="d-flex-tour-tile">
              <div className="rating-tour-modal">
                <span>
                  {/* <Rating
                    name="size-small"
                    defaultValue={5}
                    value={5}
                    size="small"
                    max={5}
                    readOnly
                  /> */}

                  <Rating
                    name="size-small"
                    defaultValue={0}
                    value={tourInfo.star_rating}
                    size="small"
                    // max={tourInfo.star_rating}
                    readOnly
                  />
                </span>
                <span className="tour-state-modal">Quintana Roo, México.</span>
              </div>

              <div className="price-from-tour-modal">
                <span>desde</span>
                <span className="price-tour-modal">
                  $
                  {Math.floor(tourInfo.price)
                    .toLocaleString("es-MX", { currency: "MXN" })
                    .replace(".00", "")}.
                  <sup>{(tourInfo.price % 1).toFixed(2).slice(2)}</sup>MXN
                </span>
              </div>
            </div>
          </div>

          {/* GALLERY TOUR  */}
          <>
            <img
              src={mainImage}
              alt="Excursión a Chichén Itzá y cenote Chichi Kan"
              className="image-modal-hotel-major"
              loading="lazy"
            />
          </>

          <div className="container-images-tour-modal">
            <Swiper
              className="swiper-modal-tour"
              modules={[Navigation]}
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
                  slidesPerView: 9,
                },
              }}
            >
              {tourInfo.images.length > 0 ? (
                tourInfo.images.map((image, index) => (
                  <SwiperSlide key={index} id="small-image-tour-modal">
                    <img
                      className={`image-modal-hotel ${
                        currentImageIndex === index
                          ? "selected-image-tour-modal"
                          : ""
                      }`}
                      src={image}
                      alt={tourInfo.name}
                      onClick={() => handleThumbClick(image, index)}
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  {/* Handle case when there are no images */}
                </SwiperSlide>
              )}
            </Swiper>
          </div>

          <div></div>
        </>
      )}
    </>
  );
}
