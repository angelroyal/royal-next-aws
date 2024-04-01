import { Rating } from "@mui/material";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { Suspense, lazy, useEffect, useState, useContext } from "react";

// import { useIsMobile } from "../../../config/Mobile/isMobile";
import { getCombinedRate } from "../Services/ModalTourService";
import LanguageContext from "../../../language/LanguageContext";
import { useTourContext } from "../../Context/ListingTourContext";
import { useModalTourContext } from "../../Context/ModalTourContext";
import GeneralInformationTourModal from "./GeneralInformationTourModal";
import { SkeletonTourModal } from "../../../utils/skeleton/SkeletonTourModal";

import ImageNotFount from "../../../assets/images/banners/es/no-image-available.png";
import { ReactComponent as IconLeft } from "../../../assets/icons/utils/navigation/left.svg";
import { ReactComponent as InfoGray } from "../../../assets/icons/utils/others/info-gray.svg";
import { ReactComponent as InfoWhite } from "../../../assets/icons/utils/others/info-withe.svg";
import { ReactComponent as MoneyGray } from "../../../assets/icons/utils/others/money-gray.svg"; //LP WARNINGS 09-02-2024
import { ReactComponent as MoneyWhite } from "../../../assets/icons/utils/others/money-white.svg";
import { ReactComponent as IconLocation } from "../../../assets/icons/utils/others/location-blue.svg";
// import { ReactComponent as BlackPackGray } from "../../../assets/icons/utils/others/blackpack-gray.svg";
// import { ReactComponent as BlackPackWhite } from "../../../assets/icons/utils/others/blackpack-white.svg"; //LP WARNINGS 09-02-2024

import "../../../assets/styles/web/GalleryTour.css";
import "../../../assets/styles/mobile/GalleryTour.css";
import "./../../../assets/styles/web/Tour/StyleModalTourNw.css"; // Importa los estilos CSS

const SelectTour = lazy(() => import("./SelectTour"));

export function ModalTourNw({ closeDialog }) {
  const { tourInfo } = useTourContext();
  // console.log(tourInfo);
  const { tourModal, setOtherInfoTour } = useModalTourContext();
  const { languageData } = useContext(LanguageContext);
  const [combinedRates, setCombinedRates] = useState([]);
  const [menuModalTour, setMenuModalTour] = useState(1);
  const [infoVoucher, setInfoVoucher] = useState(null);

  const [shortInfo, setShortInfo] = useState(null);
  useEffect(() => {
    if (
      tourInfo &&
      tourModal &&
      tourInfo.rates &&
      tourModal.schedule &&
      tourModal.schedule[0] &&
      tourModal.schedule[0].rates
    ) {
      setCombinedRates(getCombinedRate({ tourModal, tourInfo }));
      setShortInfo({
        address: tourInfo.address,
        cancelPolicies: tourInfo.cancelPolicies,
      });
      setInfoVoucher(tourInfo.infoVoucher);
    }
  }, [tourInfo, tourModal]);

  useEffect(() => {
    if (shortInfo) {
      setOtherInfoTour(shortInfo);
    }
  }, [shortInfo]);

  return (
    <div>
      {/* <SkeletonTourModal/> */}
      {tourInfo && combinedRates.length > 0 ? (
        <>
          {/* Header */}
          <button
            className="icon-go-back d-flex gap2"
            onClick={() => closeDialog()}
          >
            <IconLeft className="icon-left-m" />
            {languageData.payment.return}
          </button>

          <div className="mb-3">
            {/* <img
              src={
                tourInfo && tourInfo.mainImage
                  ? tourInfo.mainImage
                  : "https://viajerosocultos.com/wp-content/uploads/2023/07/antiguo-monumento-piramidal-construido-material-piedra-generado-ia.jpg"
              }
              alt="Excursión a Chichén Itzá y cenote Chichi Kan"
              className="image-modal-hotel-major-tour"
              loading="lazy"
            /> */}

            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="swiperCardTour swiperCardTourLP"
              // id="swiper-tour-list"
            >
              {tourInfo.images && tourInfo.images.length > 0 ? (
                tourInfo.images.slice(0, 5).map((tourImage, index) => (
                  <SwiperSlide
                    key={index}
                    id={`dotsSwiperHotel${index}`}
                    // style={{ width: 280, height: "100%" }}
                  >
                    <img
                      className="image-modal-hotel-major-tour"
                      alt="tours list"
                      src={tourImage}
                      width={"100%"}
                      height={"100%"}
                      effect="blur"
                    />
                  </SwiperSlide>
                ))
              ) : (
                <img
                  src={ImageNotFount}
                  alt="notFount"
                  className="object-fit-cover rounded-start-4 img-tour-list"
                ></img>
              )}
            </Swiper>
          </div>

          <div className="line-down">
            <div className="row text-ti-tour-modal-nw">
              <div className="col-md-8">
                <b className="b-size-50">{tourInfo ? tourInfo.name : ""}</b>
              </div>

              <div className="col-md-4 d-flex justify-content-end align-items-center">
                <div className="d-flex flex-column">
                  <span className="d-flex align-items-center gap-1">
                    {/* TEXT FROM /LP-15-02-24 */}
                    <b className="b-size-15">
                      {languageData.cartTour.from}
                    </b>{" "}
                    <b className="b-size-30">
                      MXN $
                      <span>
                        {Math.floor(tourInfo.price)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .
                      </span>
                      <sup>{(tourInfo.price % 1).toFixed(2).slice(2)}</sup>{" "}
                    </b>
                  </span>

                  {tourInfo.discount > 0 && (
                    <p class="p-none">
                      <del className="b-size-20">
                        MXN $
                        {Math.floor(tourInfo.originalPrice)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .
                        <sup>
                          {(tourInfo.originalPrice % 1).toFixed(2).slice(2)}
                        </sup>
                      </del>
                      <button className="badge-discount-red">
                        {tourInfo ? tourInfo.discount : 99999999}%
                      </button>
                    </p>
                  )}
                  {/* TEXT TAXES/LP 15-02-24 */}
                  <button class="badge-ligth-green">
                    {languageData.cartTour.taxesText}
                  </button>
                </div>
              </div>
            </div>

            <div className="d-flex gap-2 align-items-center width100">
              <div className="d-flex">
                <IconLocation width={20} height={20} />

                <b className="b-blue"> {tourInfo ? tourInfo.address : ""}</b>
              </div>

              <Rating
                name="size-small"
                style={{ padding: "5px 0px" }}
                defaultValue={0}
                value={tourInfo ? tourInfo.star_rating : ""}
                size="small"
                sx={{
                  fontSize: "23px",
                }}
                className="start-rating-modal-tour"
                // max={tour.star_rating}
                readOnly
              />
            </div>

            <div className="d-flex flex-wrap gap-2 my-3">
              {tourInfo.included.length > 0 &&
                tourInfo.included.map((value, index) => (
                  <div className="detail-radius" key={index}>
                    {value}
                  </div>
                ))}
            </div>
          </div>

          {/* Body */}
          <div className="d-flex select-info-tour-modal">
            <button
              onClick={() => setMenuModalTour(1)}
              className={`children-Info-Tour ${
                menuModalTour === 1 && "orange"
              }`}
            >
              {menuModalTour === 1 ? (
                <MoneyWhite width={40} height={21} />
              ) : (
                <MoneyGray width={40} height={21} />
              )}
              {/* TEXT PRICES /LP 15-02-24 */}
              {languageData.modalTour.prices}
            </button>

            <button
              className={`children-Info-Tour ${
                menuModalTour === 2 && "orange"
              }`}
              onClick={() => setMenuModalTour(2)}
            >
              {menuModalTour === 2 ? (
                <InfoWhite width={40} height={21} />
              ) : (
                <InfoGray width={40} height={21} />
              )}
              {/* TEXT GENERAL INFORMATION /LP 15-02-24 */}
              {languageData.modalTour.generalInformation}
            </button>

            {/* <button
              className={`children-Info-Tour ${
                menuModalTour === 3 && "orange"
              }`}
              onClick={() => setMenuModalTour(3)}
            >
              {menuModalTour === 3 ? (
                <BlackPackWhite width={40} height={21} />
              ) : (
                <BlackPackGray width={40} height={21} />
              )}
              {languageData.modalTour.details}
            </button> */}
          </div>

          <div className="row">
            <div className="col-12">
              {menuModalTour === 1 ? (
                <Suspense fallback={null}>
                  <SelectTour combinedRates={combinedRates} />
                </Suspense>
              ) : (
                <GeneralInformationTourModal infoVoucher={infoVoucher} />
              )}
            </div>
          </div>
        </>
      ) : (
        <SkeletonTourModal />
      )}
    </div>
  );
}
