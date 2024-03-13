"use client";

import React, { useEffect, useContext, useState } from "react";
import { Container } from "react-bootstrap";

import {
  BannerListingHotelBottom,
  BannerListingHotelTop,
  BlockBlueHotelListing,
} from "../../../components/bannerJsx/bannerListingHotel";
import { AnimatedNumber } from "../../Utils/AnimatedNumber";
import { useToken } from "../../../config/context/AuthContext";
import LanguageContext from "../../../language/LanguageContext";
import HotelCard from "../../../components/HotelCard/HotelCard";
import ListingHotelContext from "../../Context/ListingHotelContext";
import SkeletonChildren from "../../../utils/skeleton/SkeletonChildren";
import AnimationFlyMobile from "../../../utils/others/AnimationFlyMobile";
import { SkeletonListingHMobil } from "../../../utils/skeleton/SkeletonListingHMobil";
import {
  ScrollButton,
  scrollToTop,
} from "../../../utils/pageConfig/scrollToTop";

import "../../../assets/styles/mobile/HotelMobile.css";
import IconNoAvailability from "../../../assets/images/others/no-availability-hotel.jpg";

export default function ListingHotelM(props) {
  const { token } = useToken();
  const { totalPeople, numNights } = props;

  const [isClickPaginator, setClickPaginator] = useState(false);

  const {
    orderHotel,
    handleShowMore,
    combinedHotelData,
    setCombinedHotelData,
    totalHotelsToShow,
    handleFetchPostHotels,
    totalFilteredHotels,
    setTotalHotelsToShow,
    isLoading,
  } = useContext(ListingHotelContext);

  const { languageData } = useContext(LanguageContext);

  const clickPaginator = () => {
    handleShowMore();
    setClickPaginator(true);
  };
  const searchParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    scrollToTop();

    const requestBody = {
      code: searchParams.get("code"),
      type: searchParams.get("type"),
      "check-in": searchParams.get("check-in"),
      "check-out": searchParams.get("check-out"),
      occupancies: JSON.parse(
        decodeURIComponent(searchParams.get("occupancies"))
      ),
      "test-v2": true,
    };

    if (requestBody) {
      if (token) {
        setCombinedHotelData(null);
        handleFetchPostHotels(requestBody);
      }
    }
  }, [window.location.search, token]);

  useEffect(() => {
    scrollToTop();
    setTotalHotelsToShow(10);
  }, [totalFilteredHotels, orderHotel]);

  return (
    <>
      <BlockBlueHotelListing />

      {/* LINEAR PROGRESS */}
      {!combinedHotelData && <AnimationFlyMobile isListing={true} />}
      <br />

      {/* BANNER */}
      <BannerListingHotelTop />

      <Container>
        {/* SKELETON */}
        {!combinedHotelData && <SkeletonChildren />}

        {/* DATA combinedData */}
        {combinedHotelData && combinedHotelData.length > 0 && (
          <>
            {/* TITLE */}
            <h2 className="hotel-page-title" data-aos="fade-right">
              {languageData.filtersHotel.results}{" "}
              {totalFilteredHotels > 0 && (
                <AnimatedNumber targetNumber={totalFilteredHotels} />
              )}{" "}
              {totalFilteredHotels > 1
                ? languageData.filtersHotel.resultsHotelEn
                : languageData.filtersHotel.resultsHotel}
            </h2>

            {/* HOTEL CARD */}
            {combinedHotelData &&
              combinedHotelData.map((hotel, index) => (
                <HotelCard
                  key={index}
                  index={index}
                  hotel={hotel}
                  availableNights={numNights}
                  availablePeople={totalPeople}
                  isClickPaginator={isClickPaginator}
                  setClickPaginator={setClickPaginator}
                />
              ))}

            {/* "Load More" Button */}
            {combinedHotelData &&
              totalHotelsToShow <= combinedHotelData.length && (
                <div className="m-center">
                  <button
                    onClick={clickPaginator}
                    // onClick={handleShowMore}
                    // disabled={totalHotelsToShow >= mapHotels.length}
                    className="m-more-cards"
                  >
                    {languageData.ListingPhrases.loadMore}
                  </button>
                </div>
              )}

            {isLoading && <SkeletonListingHMobil />}

            {/* SCROLL BUTTON TOP */}
            <ScrollButton />

            {/* BANNER */}
            <BannerListingHotelBottom />
          </>
        )}

        {/* NO DATA combinedData */}
        {combinedHotelData && combinedHotelData.length === 0 && (
          <>
            <div className="m-txt-nav">
              {languageData.filtersTour.noAvailability}
            </div>

            <img
              className="image-do-not-fund"
              src={IconNoAvailability}
              alt={languageData.allAlt.altBannerNavigation}
              // height="auto"
              // width="auto"
            />
          </>
        )}
      </Container>
    </>
  );
}
