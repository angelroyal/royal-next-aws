"use client";

import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";

import { useIsMobile } from "@/config/Mobile/isMobile";
import LanguageContext from "@/language/LanguageContext";
// import { /*CartHistoryW*/ CardsHistoryM } from "./CartsHistory";
import { BannerAboutUs } from "@/components/bannerJsx/bannerAboutUs";
// import BannerAbout from "../../assets/images/others/banner-about-us.webp";
import { Container } from "@/config/Others/Container";
import { CardsHistoryM } from "./CartsHistory";

export default function OurHistory() {
  const { languageData } = useContext(LanguageContext);
  const isMobile = useIsMobile();
  return (
    <>
      <div className="bg-white pb-3">
        <Container>
          {/* <MetaHistory /> */}

          <BannerAboutUs />
          <h1 className="m-b text-fs-20 md:text-fs-24 mb-4 mt-2">
            {languageData.ourHistory.titleWhoWeAre}
          </h1>

          <div className="flex flex-col lg:flex-row max-lg:gap-y-3 md:gap-x-4">
            <div className="flex flex-col gap-y-3 m-m text-[10px] md:text-[0.99rem]">
              <span>{languageData.ourHistory.textOurTeam}</span>
              <span>{languageData.ourHistory.textExperiences}</span>
              <span>{languageData.ourHistory.textAgreements}</span>
              <span>{languageData.ourHistory.textPositioning}</span>
              <span>{languageData.ourHistory.textWebsiteLaunch}</span>
              <span>{languageData.ourHistory.textImageRenovation}</span>
            </div>

            <img
              src={`${process.env.NEXT_PUBLIC_URL}banners/desktop/our-history-city.webp`}
              alt="Royal Vacations Mexico Our History City"
              className="h-[22rem] lg:h-[558px] object-cover"
            />
          </div>
        </Container>
      </div>

      <div className="bg-gry-50 pb-10">
        <Container>
          <h2 className="m-b py-10 text-fs-20 text-center md:text-start md:text-fs-24">
            {languageData.ourHistory.titleServiceQuality}
          </h2>
          
          <CardsHistoryM />
        </Container>
      </div>
    </>
  );
}
