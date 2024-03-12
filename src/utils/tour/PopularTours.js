import moment from "moment";
import { Navigation } from "swiper";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React, { Suspense, lazy, useContext, useEffect, useState } from "react";

import { useIsMobile } from "../../config/Mobile/isMobile";
import LanguageContext from "../../language/LanguageContext";
import { SkeletonPopularTour } from "../skeleton/SkeletonTour";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

import animationData from "../../assets/animations/animated-page-transitions.json";

const Lottie = lazy(() => import("lottie-react"));
export function PopularTours() {
  const { languageData, currency } = useContext(LanguageContext);
  const [response, setResponse] = useState([]);
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const isMobile = useIsMobile();

  useEffect(() => {
    setLoader(true);
    const getPopularState = async () => {
      try {
        let dataPopularState = await axiosWithInterceptor.get(
          "v1/destinations/promotions/activities"
        );
        if (dataPopularState && dataPopularState.data) {
          const shuffledDestinations = dataPopularState.data[
            "topDestinations"
          ].sort(() => 0.5 - Math.random());
          setResponse(shuffledDestinations);
        }
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    };
    getPopularState();
  }, []);

  // console.log(response);

  const navigationTour = (tourData) => {
    setShowModal(true);
    const today = moment();

    let date = moment(today).add(1, "month");

    const checkIn = date.format("YYYY-MM-DD");

    const navigation = {
      code: tourData.code,
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
  };

  const parsePrice = (price) => (
    <>
      {Math.floor(price)
        .toLocaleString("es-MX", { currency: "MXN" })
        .replace(".00", "")}
      .<sup>{(price % 1).toFixed(2).slice(2)}</sup>
    </>
  );

  return (
    <>
      <Container className="p-0 carousel-tour-container">
        <h1 className="title-cards-tour carrousel">
          {languageData.SearchBox.tabTour.popularState}
        </h1>
        
        {loader === false && response.length > 0 ? (
          <>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              id="carousel-home-tour"
            >
              <SwiperSlide className="container-item-carrousel-tour gap-3">
                <div className="container-one-image-tour gap-3">
                  <div
                    className="carrousel-image column-image-one-tour"
                    onClick={() => navigationTour(response[0])}
                  >
                    <img
                      src={response[0].imageUrl}
                      alt="carousel tour"
                      className="height100 object-fit-cover"
                    />
                    <span className="title-location-tour-carousel">
                      {response[0].name}
                      <span className="price-text-carousel-tour">
                        {" "}
                        {languageData.tourCarouselHome.tourPrice}{" "}
                        <span className="price-tour-carousel">
                          {" "}
                          MXN {parsePrice(response[0].price)}
                        </span>{" "}
                      </span>{" "}
                    </span>
                  </div>

                  <div
                    className="carrousel-image column-image-two-tour"
                    onClick={() => navigationTour(response[1])}
                  >
                    <img
                      // src="https://sandboxmexico.com/assets/test/los-cabos-royal-vacations-mexico.webp"
                      src={response[1].imageUrl}
                      alt="carousel tour"
                      className="height100 object-fit-cover"
                    />
                    <span className="title-xl-tour-carousel">
                      {response[1].name}
                      <span className="price-text-xl-tour-carousel">
                        {" "}
                        {languageData.tourCarouselHome.tourPrice}{" "}
                        <span className="price-xl-tour-carousel">
                          {" "}
                          MXN {parsePrice(response[1].price)}
                        </span>{" "}
                      </span>{" "}
                    </span>
                  </div>
                </div>

                <div className="column-image-three-tour row-gap-3">
                  <div
                    className="carrousel-image column-image-tour-home"
                    onClick={() => navigationTour(response[2])}
                  >
                    <img
                      src={response[2].imageUrl}
                      alt="carousel tour"
                      className="height100 object-fit-cover"
                    />
                    <span className="title-location-tour-carousel">
                      {response[2].name}
                      <span className="price-text-carousel-tour">
                        {" "}
                        {languageData.tourCarouselHome.tourPrice}{" "}
                        <span className="price-tour-carousel">
                          {" "}
                          MXN {parsePrice(response[2].price)}
                        </span>{" "}
                      </span>{" "}
                    </span>
                  </div>

                  <div
                    className="carrousel-image column-image-tour-home"
                    onClick={() => navigationTour(response[3])}
                  >
                    <img
                      src={response[3].imageUrl}
                      alt="carousel tour"
                      className="height100 object-fit-cover"
                    />
                    <span className="title-location-tour-carousel">
                      {response[3].name}
                      <span className="price-text-carousel-tour">
                        {" "}
                        {languageData.tourCarouselHome.tourPrice}{" "}
                        <span className="price-tour-carousel">
                          {" "}
                          MXN {parsePrice(response[3].price)}
                        </span>{" "}
                      </span>{" "}
                    </span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="container-item-carrousel-tour gap-3">
                <div className="container-one-image-tour gap-3">
                  <div
                    className="carrousel-image column-image-one-tour"
                    onClick={() => navigationTour(response[4])}
                  >
                    <img
                      src={response[4].imageUrl}
                      alt="carousel tour"
                      className="height100 object-fit-cover"
                    />
                    <span className="title-location-tour-carousel">
                      {response[4].name}
                      <span className="price-text-carousel-tour">
                        {" "}
                        {languageData.tourCarouselHome.tourPrice}{" "}
                        <span className="price-tour-carousel">
                          {" "}
                          MXN {parsePrice(response[4].price)}
                        </span>{" "}
                      </span>{" "}
                    </span>
                  </div>

                  <div
                    className="carrousel-image column-image-two-tour"
                    onClick={() => navigationTour(response[5])}
                  >
                    <img
                      // src="https://sandboxmexico.com/assets/test/los-cabos-royal-vacations-mexico.webp"
                      src={response[5].imageUrl}
                      alt="carousel tour"
                      className="height100 object-fit-cover"
                    />
                    <span className="title-xl-tour-carousel">
                      {response[5].name}
                      <span className="price-text-xl-tour-carousel">
                        {" "}
                        {languageData.tourCarouselHome.tourPrice}{" "}
                        <span className="price-xl-tour-carousel">
                          {" "}
                          MXN {parsePrice(response[5].price)}
                        </span>{" "}
                      </span>{" "}
                    </span>
                  </div>
                </div>

                <div className="column-image-three-tour row-gap-3">
                  <div
                    className="carrousel-image column-image-tour-home"
                    onClick={() => navigationTour(response[6])}
                  >
                    <img
                      src={response[6].imageUrl}
                      alt="carousel tour"
                      className="height100 object-fit-cover"
                    />
                    <span className="title-location-tour-carousel">
                      {response[6].name}
                      <span className="price-text-carousel-tour">
                        {" "}
                        {languageData.tourCarouselHome.tourPrice}{" "}
                        <span className="price-tour-carousel">
                          {" "}
                          MXN {parsePrice(response[6].price)}
                        </span>{" "}
                      </span>{" "}
                    </span>
                  </div>

                  <div
                    className="carrousel-image column-image-tour-home"
                    onClick={() => navigationTour(response[3])}
                  >
                    <img
                      src={response[3].imageUrl}
                      alt="carousel tour"
                      className="height100 object-fit-cover"
                    />
                    <span className="title-location-tour-carousel">
                      {response[3].name}
                      <span className="price-text-carousel-tour">
                        {" "}
                        {languageData.tourCarouselHome.tourPrice}{" "}
                        <span className="price-tour-carousel">
                          {" "}
                          MXN {parsePrice(response[3].price)}
                        </span>{" "}
                      </span>{" "}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <>
              {/* <Carousel>
              <Carousel.Item className="container-item-carrousel-tour gap-3">
                <div
                  className="carrousel-image column-image-one-tour"
                  onClick={() => navigationTour(response[0])}
                >
                  <img
                    src={response[0].imageUrl}
                    alt="carousel tour"
                    className="height100 object-fit-cover"
                  />
                  <span className="title-location-tour-carousel">
                    {response[0].name}
                    <span className="price-text-carousel-tour">
                      {" "}
                      {languageData.tourCarouselHome.tourPrice}{" "}
                      <span className="price-tour-carousel">
                        {" "}
                        MXN {parsePrice(response[0].price)}
                      </span>{" "}
                    </span>{" "}
                  </span>
                </div>

                <div
                  className="carrousel-image column-image-two-tour"
                  onClick={() => navigationTour(response[1])}
                >
                  <img
                    // src="https://sandboxmexico.com/assets/test/los-cabos-royal-vacations-mexico.webp"
                    src={response[1].imageUrl}
                    alt="carousel tour"
                    className="height100 object-fit-cover"
                  />
                  <span className="title-location-tour-carousel">
                    {response[1].name}
                    <span className="price-text-carousel-tour">
                      {" "}
                      {languageData.tourCarouselHome.tourPrice}{" "}
                      <span className="price-tour-carousel">
                        {" "}
                        MXN {parsePrice(response[1].price)}
                      </span>{" "}
                    </span>{" "}
                  </span>
                </div>

                <div className="column-image-three-tour row-gap-3">
                  <div
                    className="carrousel-image column-image-tour-home"
                    onClick={() => navigationTour(response[2])}
                  >
                    <img
                      src={response[2].imageUrl}
                      alt="carousel tour"
                      className="height100 object-fit-cover"
                    />
                    <span className="title-location-tour-carousel">
                      {response[2].name}
                      <span className="price-text-carousel-tour">
                        {" "}
                        {languageData.tourCarouselHome.tourPrice}{" "}
                        <span className="price-tour-carousel">
                          {" "}
                          MXN {parsePrice(response[2].price)}
                        </span>{" "}
                      </span>{" "}
                    </span>
                  </div>

                  <div
                    className="carrousel-image column-image-tour-home"
                    onClick={() => navigationTour(response[3])}
                  >
                    <img
                      src={response[3].imageUrl}
                      alt="carousel tour"
                      className="height100 object-fit-cover"
                    />
                    <span className="title-location-tour-carousel">
                      {response[3].name}
                      <span className="price-text-carousel-tour">
                        {" "}
                        {languageData.tourCarouselHome.tourPrice}{" "}
                        <span className="price-tour-carousel">
                          {" "}
                          MXN {parsePrice(response[3].price)}
                        </span>{" "}
                      </span>{" "}
                    </span>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="container-item-carrousel-tour gap-3">
                <div
                  className="carrousel-image column-image-one-tour"
                  onClick={() => navigationTour(response[4])}
                >
                  <img
                    src={response[4].imageUrl}
                    alt="carousel tour"
                    className="height100 object-fit-cover"
                  />
                  <span className="title-location-tour-carousel">
                    {response[4].name}
                    <span className="price-text-carousel-tour">
                      {" "}
                      {languageData.tourCarouselHome.tourPrice}{" "}
                      <span className="price-tour-carousel">
                        {" "}
                        MXN {parsePrice(response[4].price)}
                      </span>{" "}
                    </span>{" "}
                  </span>
                </div>

                <div
                  className="carrousel-image column-image-two-tour"
                  onClick={() => navigationTour(response[5])}
                >
                  <img
                    // src="https://sandboxmexico.com/assets/test/los-cabos-royal-vacations-mexico.webp"
                    src={response[5].imageUrl}
                    alt="carousel tour"
                    className="height100 object-fit-cover"
                  />
                  <span className="title-location-tour-carousel">
                    {response[5].name}
                    <span className="price-text-carousel-tour">
                      {" "}
                      {languageData.tourCarouselHome.tourPrice}{" "}
                      <span className="price-tour-carousel">
                        {" "}
                        MXN {parsePrice(response[5].price)}
                      </span>{" "}
                    </span>{" "}
                  </span>
                </div>

                <div className="column-image-three-tour row-gap-3">
                  <div
                    className="carrousel-image column-image-tour-home"
                    onClick={() => navigationTour(response[6])}
                  >
                    <img
                      src={response[6].imageUrl}
                      alt="carousel tour"
                      className="height100 object-fit-cover"
                    />
                    <span className="title-location-tour-carousel">
                      {response[6].name}
                      <span className="price-text-carousel-tour">
                        {" "}
                        {languageData.tourCarouselHome.tourPrice}{" "}
                        <span className="price-tour-carousel">
                          {" "}
                          MXN {parsePrice(response[6].price)}
                        </span>{" "}
                      </span>{" "}
                    </span>
                  </div>

                  <div
                    className="carrousel-image column-image-tour-home"
                    onClick={() => navigationTour(response[3])}
                  >
                    <img
                      src={response[3].imageUrl}
                      alt="carousel tour"
                      className="height100 object-fit-cover"
                    />
                    <span className="title-location-tour-carousel">
                      {response[3].name}
                      <span className="price-text-carousel-tour">
                        {" "}
                        {languageData.tourCarouselHome.tourPrice}{" "}
                        <span className="price-tour-carousel">
                          {" "}
                          MXN {parsePrice(response[3].price)}
                        </span>{" "}
                      </span>{" "}
                    </span>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel> */}
            </>
          </>
        ) : (
          // <></>
          <SkeletonPopularTour />
        )}
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
