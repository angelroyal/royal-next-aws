"use client";

import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";

// import { CartHistoryW, CardsHistoryM } from "./CartsHistory";
import CardCarousel from "../../utils/hotel/CardCarousel";
import { useIsMobile } from "../../config/Mobile/isMobile";
// import MetaHistory from "../../components/Meta/MetaHistory";
// PENDING
import LanguageContext from "../../language/LanguageContext";
import { BannerAboutUs } from "../../components/bannerJsx/bannerAboutUs";

import BannerAbout from "../../assets/images/others/banner-about-us.webp";
import CartHistoryW from "./CartsHistory";

export default function OurHistory() {
  const { languageData } = useContext(LanguageContext);
  const isMobile = useIsMobile();
  return (
    <Container>
      {/* <MetaHistory /> */}

      <BannerAboutUs />
      <div className="flex flex-col md:flex-row">
        <h1 className="title-about-us">
          {languageData.ourHistory.titleWhoWeAre}
        </h1>

        <Col sm={7} className="text-about-us">
          <div className="padding-bottom">
            {languageData.ourHistory.textOurTeam}
          </div>
          <div className="padding-bottom">
            {languageData.ourHistory.textExperiences}
          </div>
          <div className="padding-bottom">
            {languageData.ourHistory.textAgreements}
          </div>
          <div className="padding-bottom">
            {languageData.ourHistory.textPositioning}
          </div>
          <div className="padding-bottom">
            {languageData.ourHistory.textWebsiteLaunch}
          </div>
          <div className="padding-bottom">
            {languageData.ourHistory.textImageRenovation}
          </div>
        </Col>

        {!isMobile && (
          <Col sm={5}>
            <div data-aos="fade-right" className="content-image-royal-about">
              <img
                src={BannerAbout}
                alt="Royal Vacations Mexico"
                width="100%"
              />
            </div>
          </Col>
        )}
      </div>

      {isMobile && (
        <div data-aos="fade-right" className="content-image-royal-about">
          <img
            className="object-fit-cover"
            src={BannerAbout}
            alt="Royal Vacations Mexico"
            width="100%"
            height="100%"
          />
        </div>
      )}

      <div data-aos="fade-up" className="service-quality-about">
        <div className="service-quality padding-container-about container">
          <h2 className="title-service-quality">
            {languageData.ourHistory.titleServiceQuality}
          </h2>
          <CartHistoryW/>
        </div>
      </div>

      <div className="container carousel-destination">
        <h2 className="title-popular-about ">
          {languageData.ourHistory.titleCarousel}
        </h2>
        {/* <CardCarousel /> */}
      </div>
    </Container>
  );
}
