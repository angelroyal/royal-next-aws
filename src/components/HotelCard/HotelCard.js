import Image from "next/image";
import { Box } from "@mui/system";
import Col from "react-bootstrap/Col";
// import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Rating, SvgIcon } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";

import { images_es } from "../../language/images_es";
import { images_en } from "../../language/images_en";
import { facilities } from "../../config/Others/facilities";
import ModalHotel from "../../pages/Modal/ModalHotel";
import { LightTooltip } from "../ToolTip/LightTooltip";
import {
  CardListing,
  MobileCardListing,
} from "../../config/Others/imagesBanners";
import { transformDistance } from "../../utils/hotel/helpers";
import LanguageContext from "../../language/LanguageContext";
import { useIsMobile } from "../../config/Mobile/isMobile";

import LabelTop from "../../assets/icons/hotel/listing/labelTop.svg";
import RateBedsRH from "../../assets/icons/hotel/listing/rateBedsRH.svg";
import RateBedsHB from "../../assets/icons/hotel/listing/rateBedsHB.svg";

import DemandIcon from "../../assets/icons/hotel/listing/on-high-demand.svg";

export default function HotelCard(props) {
  const { index, hotel, availableNights, isClickPaginator, setClickPaginator } = props;
  const isMobile = useIsMobile();

  const [totalPeople, setTotalPeople] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { languageData } = useContext(LanguageContext);
  const [imagesBanners, setImagesBanners] = useState([]);
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const language = localStorage.getItem("language") || "es";
  const images = language === "es" ? images_es : images_en;

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const occupanciesCode = searchParams.get("occupancies");

    // DECODE OCCUPANCIES
    const decodedOccupancies = JSON.parse(decodeURIComponent(occupanciesCode));

    function sumOccupancies(decodedOccupancies) {
      return decodedOccupancies.reduce((total, occupancy) => {
        return total + occupancy.adults + occupancy.children.length;
      }, 0);
    }

    const total = sumOccupancies(decodedOccupancies);
    setTotalPeople(total);

    setImagesBanners(
      isMobile ? MobileCardListing.imgListing : CardListing.imgListing
    );
  }, [window.location.search]);

  const handleOpenModal = () => {
    localStorage.removeItem("adultsHotelSecondary");
    localStorage.removeItem("childrenHotelSecondary");
    localStorage.removeItem("roomDataSecondary");
    localStorage.removeItem("totalPeopleSecondary");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (hotel.destinationCode) {
      localStorage.setItem("codeZone", hotel.destinationCode);
    }
  }, [hotel.destinationCode]);


  const [positionActual, setPositionActual] = useState(0)

  const isImage = (number) => {

    return number === 5 || (number - 5) % 10 === 0;
  };

  const maxLength = 20;

  const [randomBanner, setRandomBanner] = useState([]);

  useEffect(()=>{
    const arrayImage = imagesBanners;

    const randomPosition = Math.floor(Math.random() * imagesBanners.length);
    setPositionActual(randomPosition)
    setRandomBanner(arrayImage)
    if(isClickPaginator){
      setClickPaginator(!isClickPaginator)
    }
  },[isClickPaginator, imagesBanners]);
  // },[imagesBanners]);

  return (
    <>
      <div className="card-div-label">
        {hotel.isTop && <Image className="label-icon-top" src={LabelTop} />}

        {process.env.NEXT_PUBLIC_DEV === "true" && (
          <>
            {hotel.provider === "rh" && (
              <>
                <Image src={RateBedsRH} className="label-icon-top" />

                <div className="rate-hook-rh">RateHawk</div>
              </>
            )}

            {hotel.provider === "hb" && (
              <>
                <Image src={RateBedsHB} className="label-icon-top" />
                <div className="rate-hook-beds">HotelBeds</div>
              </>
            )}
          </>
        )}
        
        <Card
          sx={{ display: "flex" }}
          className="card-hotel" /* data-aos="fade-left" */
        >
          <Swiper
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper swiperCardHotel"
          >
            {hotel.images && hotel.images.length > 0 ? (
              hotel.images.map((image, index) => (
                <SwiperSlide key={index} id={`dotsSwiperHotel${index}`}>
                  <img
                    className="cover-center-img"
                    alt={`${hotel.name} - ${languageData.allAlt.altRoyalVacations}`}
                    src={image}
                    effect="blur" // Opcional, para aplicar un efecto de desenfoque
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide id="dotsSwiperHotel">
                <img
                  alt={`${hotel.name} - ${images.others.noAvailable.bannerNoAvailable.alt}`}
                  src={images.others.noAvailable.bannerNoAvailable.src}
                />
              </SwiperSlide>
            )}
          </Swiper>

          <Col className="card-hotel-col">
            <h2 className="card-hotel-title">{hotel.name}</h2>

            <div className="city-card-title">{hotel.destinationName}</div>
            {hotel.closestInterestPointDistance && (
              <div className="city-card-title" style={{ padding: "1px 0px" }}>
                {`${languageData.cardHotel.to} ${transformDistance(
                  hotel.closestInterestPointDistance
                )} ${languageData.cardHotel.from} ${
                  hotel.closestInterestPointName.length > maxLength
                    ? hotel.closestInterestPointName.substring(0, maxLength) +
                      "..."
                    : hotel.closestInterestPointName
                }`}
              </div>
            )}

            <Rating
              name="size-small"
              style={{ padding: "5px 0px" }}
              defaultValue={0}
              value={hotel.stars}
              size="small"
              max={hotel.stars}
              readOnly
            />

            <Box my={2} width="auto" className="container-facilities">
              {hotel.facilities && hotel.facilities.length > 0 ? (
                <>
                  {hotel.facilities.slice(0, 5).map((facility, index) => (
                    <Box
                      key={`${facility}_${index}_icon`}
                      mx={1}
                      display="inline"
                    >
                      <LightTooltip
                        title={
                          languageData.hotelTypesFacilities[
                            facilities[facility].label
                          ]
                        }
                        style={{ cursor: "grab", width: "18px" }}
                      >
                        <SvgIcon
                          component={facilities[facility].default}
                          inheritViewBox
                        />
                      </LightTooltip>
                    </Box>
                  ))}
                </>
              ) : (
                <span>{languageData.cardHotel.amenities}</span>
              )}
            </Box>
            {hotel.food && (
              <div className="card-hotel-eating">
                {languageData.eatingPlan[hotel.food]}
              </div>
            )}
          </Col>

          <div className="v-line" />

          <Col className="card-hotel-col2">
            {hotel.exclusiveDeal < 5 ? (
              <div>
                <div className="card-hotel-subtitle">
                  <span>
                    <Image src={DemandIcon} className="icon-Demand-Icon" />
                  </span>

                  <span className="m-icon-label-demand">
                    {languageData.cardHotel.label}
                  </span>
                </div>
              </div>
            ) : hotel.exclusiveDeal >= 5 && hotel.exclusiveDeal <= 10 ? (
              <div className="card-hotel-subtitle">
                {languageData.cardHotel.bestHotel}
              </div>
            ) : (
              <div className="card-hotel-subtitle"></div>
            )}

            {hotel.availableRooms && (
              <div className="card-hotel-availability">
                {languageData.cardHotel.titleSpace} {hotel.availableRooms}
              </div>
            )}

            <div className="container-info-card">
              <div className="card-hotel-information">
                {availableNights}{" "}
                {availableNights > 1
                  ? languageData.cardHotel.nights
                  : languageData.cardHotel.night}{" "}
                {totalPeople}{" "}
                {totalPeople > 1
                  ? languageData.cardHotel.people
                  : languageData.cardHotel.person}
              </div>

              {hotel.minRate && hotel.currency ? (
                <>
                  <span className="card-hotel-price">{hotel.currency}</span>
                  <span className="card-hotel-price-number">
                    $
                    {Math.floor(hotel.minRate)
                      .toLocaleString("es-MX", { currency: "MXN" })
                      .replace(".00", "")}
                    .
                    <sup className="sup-price-card">
                      {(hotel.minRate % 1).toFixed(2).slice(2)}
                    </sup>
                  </span>
                  <div className="card-hotel-taxes">
                    {languageData.cardHotel.taxes}
                  </div>
                </>
              ) : (
                <div className="center-text unavailable-card ">
                  {languageData.cardHotel.unavailable}
                </div>
              )}
            </div>

            {hotel.minRate && (
              <button
                className="card-hotel-button"
                type="button"
                onClick={() => handleOpenModal(hotel.key)}
              >
                {languageData.cardHotel.buttonShow}
              </button>
            )}

            {showModal && (
              <ModalHotel
                show={showModal}
                onHide={handleCloseModal}
                hotelKey={hotel.key}
                distanceHotel={hotel.closestInterestPointName}
                nameHotel={hotel.name}
              />
            )}
          </Col>
        </Card>
      </div>

      {isImage(index + 1) && (
        <Card
          sx={{ display: "flex" }}
          className="card-hotel position-image-new"
        >
          {randomBanner.length > 0 && (
            <>
              <Image
                src={randomBanner[positionActual].image}
                alt={randomBanner[positionActual].alt}
                width="100%"
                height="auto"
              />

              <div className="position-new-titles-card">
                <h2 className="text-image-new-card">
                  {
                    languageData.titleBanners.cardListingImage[
                      randomBanner[positionActual].title
                    ]
                  }
                </h2>

                <h4 className="text-image-nex-h4-card">
                  {
                    languageData.titleBanners.cardListingImage[
                      randomBanner[positionActual].paragraph
                    ]
                  }
                </h4>
              </div>
            </>
          )}
        </Card>
      )}
    </>
  );
}
