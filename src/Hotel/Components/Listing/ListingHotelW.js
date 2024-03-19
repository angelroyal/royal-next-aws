"use client";

import Image from "next/image";
import { Pagination } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useContext, useState } from "react";

import OrderingHotel from "../Listing/OrderingHotel";
import FiltersHotels from "../../Utils/FiltersHotels";
import { AnimatedNumber } from "../../Utils/AnimatedNumber";
import { useToken } from "../../../config/context/AuthContext";
import LanguageContext from "../../../language/LanguageContext";
// import HotelCard from "../../../components/HotelCard/HotelCard";
import HotelCard from "@/components/HotelCard/HotelCard";
import ListingHotelContext from "../../Context/ListingHotelContext";
import { scrollToTop } from "../../../utils/pageConfig/scrollToTop";
import SkeletonChildren from "../../../utils/skeleton/SkeletonChildren";
import SearchBoxMobile from "../../../components/searchMobil/SearchBoxMobile";
import {
  BannerListingHotelBottom,
  BannerListingHotelTop,
} from "../../../components/bannerJsx/bannerListingHotel";

import IconNoAvailability from "../../../assets/images/others/no-availability-hotel.jpg";
import IconBanner from "../../../assets/icons/utils/payment/icon-royal-vacations.svg";
import CardHotelT from "@/services/Hotels/components/Listing/CardHotelT";

export default function ListingHotelW(props) {
  const { token } = useToken();
  const { totalPeople, numNights } = props;

  const [isClickPaginator, setClickPaginator] = useState(false);

  const {
    totalPages,
    currentPage,
    handlePageChange,
    setCurrentPage,
    combinedHotelData,
    setCombinedHotelData,
    totalFilteredHotels,
    handleFetchPostHotels,
  } = useContext(ListingHotelContext);
  const { languageData } = useContext(LanguageContext);

  const clickPaginator = (event, value) => {
    handlePageChange(event, value);
    setClickPaginator(true);
  };

  // useEffect(() => {
  //   scrollToTop();
  //   // QUERY PARAMS POST AXIOS
  //   const searchParams = new URLSearchParams(window.location.search);
  //   const requestBody = {
  //     code: searchParams.get("code"),
  //     type: searchParams.get("type"),
  //     "check-in": searchParams.get("check-in"),
  //     "check-out": searchParams.get("check-out"),
  //     occupancies: JSON.parse(
  //       decodeURIComponent(searchParams.get("occupancies"))
  //     ),
  //   };

  //   if (requestBody) {
  //     if (token) {
  //       setCombinedHotelData(null);
  //       handleFetchPostHotels(requestBody);
  //     }
  //   }
  // }, [window.location.search, token]);
  useEffect(() => {
  scrollToTop();
  // QUERY PARAMS POST AXIOS
  if (typeof window !== 'undefined') {
    const searchParams = new URLSearchParams(window.location.search);
    const requestBody = {
      code: searchParams.get("code"),
      type: searchParams.get("type"),
      "check-in": searchParams.get("check-in"),
      "check-out": searchParams.get("check-out"),
      occupancies: JSON.parse(
        decodeURIComponent(searchParams.get("occupancies"))
      ),
    };

    if (requestBody) {
      if (token) {
        setCombinedHotelData(null);
        handleFetchPostHotels(requestBody);
      }
    }
  }
}, [/* window.location.search, */ token]);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalFilteredHotels]);

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  return (
    <Container>
      <BannerListingHotelTop />
      <Row className="display-flex-center">
        <Col sm={3}>
          <h1 className="hotel-title-filters" data-aos="fade-right">
            <Image className="me-5" src={IconBanner} alt="IconBanner" />
            {languageData.filtersHotel.titleFilter}
          </h1>

          <SearchBoxMobile />
          <FiltersHotels />
        </Col>

        <Col sm={8}>
          {/* SKELETON */}
          {!combinedHotelData && <SkeletonChildren />}

          {combinedHotelData && combinedHotelData.length > 0 && (
            <>
              <h2 className="hotel-page-title" data-aos="fade-right">
                {languageData.filtersHotel.results}{" "}
                {totalFilteredHotels > 0 && (
                  <AnimatedNumber targetNumber={totalFilteredHotels} />
                )}{" "}
                {totalFilteredHotels > 1
                  ? languageData.filtersHotel.resultsHotelEn
                  : languageData.filtersHotel.resultsHotel}
              </h2>

              {/* ORDER */}
              <OrderingHotel />
              <CardHotelT />

              {/* CARD */}
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

              {/* PAGINATION */}
              {combinedHotelData && (
                <div className="pagination pagination-cards-hotel">
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={clickPaginator}
                    // onChange={handlePageChange}
                    color="primary"
                  />
                </div>
              )}
            </>
          )}

          {combinedHotelData && combinedHotelData.length === 0 && (
            <>
              <div className="image-no-availability-h">
                {languageData.filtersTour.noAvailability}
              </div>

              <img
                src={IconNoAvailability}
                alt={languageData.allAlt.altBannerNavigation}
                // height="auto"
                // width="auto"
              />
            </>
          )}
        </Col>
      </Row>

      <BannerListingHotelBottom />
    </Container>
  );
}
