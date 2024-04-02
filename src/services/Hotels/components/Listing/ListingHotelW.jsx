"use client";

import { Pagination } from "@mui/material";
import React, { useEffect, useContext, useState } from "react";

import OrderingHotel from "./OrderingHotel";
import FiltersHotels from "../../utils/FiltersHotels";
import { Container } from "@/config/Others/Container";
import { AnimatedNumber } from "../../utils/AnimatedNumber";
import { useToken } from "../../../../config/context/AuthContext";
import LanguageContext from "../../../../language/LanguageContext";
import ListingHotelContext from "../../context/ListingHotelContext";
import { scrollToTop } from "../../../../utils/pageConfig/scrollToTop";
import SkeletonChildren from "../../../../utils/skeleton/SkeletonChildren";
// import SearchBoxMobile from "../../../components/searchMobil/SearchBoxMobile";
// import { BannerListingHotelBottom } from "../../../components/bannerJsx/bannerListingHotel";

import CardHotelT from "@/services/Hotels/components/Listing/CardHotelT";
import BannerCallHotelT from "@/components/bannerJsx/bannerCallHotelT";
import SearchBoxMobile from "@/components/searchMobil/SearchBoxMobile";

export default function ListingHotelW(props) {
  const { token } = useToken();
  const { languageData } = useContext(LanguageContext);
  const [requestQueryParams, setRequestQueryParams] = useState(null);

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

  const clickPaginator = (event, value) => {
    handlePageChange(event, value);
  };

  useEffect(() => {
    scrollToTop();
    // QUERY PARAMS POST AXIOS
    if (typeof window !== "undefined") {
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
      setRequestQueryParams(requestBody);

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
      {/* <BannerListingHotelTop /> */}
      <div className="flex justify-around">
        <div className="w-3/12 mt-10">
          <SearchBoxMobile />
          {/* <SearchBox /> */}
          {/* <FiltersHotel/> */}
          <FiltersHotels />
        </div>

        <div className="w-8/12	">
          {/* SKELETON */}
          {!combinedHotelData && <SkeletonChildren />}

          {combinedHotelData && combinedHotelData.length > 0 && (
            <>
              <div className="flex items-end justify-between mt-6">
                <h2 className="m-b text-fs-20" data-aos="fade-right">
                  {languageData.listingTour.weFound}{" "}
                  {totalFilteredHotels > 0 && (
                    <AnimatedNumber targetNumber={totalFilteredHotels} />
                  )}{" "}
                  {totalFilteredHotels > 1
                    ? languageData.filtersHotel.resultFound
                    : languageData.filtersHotel.resultsHotel}{" "}
                </h2>

                {/* ORDER */}
                <OrderingHotel />
              </div>
              <CardHotelT />

              {/* CARD */}
              {combinedHotelData &&
                combinedHotelData.map((hotel, index) => (
                  <>
                    <CardHotelT
                      hotel={hotel}
                      requestQueryParams={requestQueryParams}
                    />{" "}
                    {/* <HotelCard
                      key={index}
                      index={index}
                      hotel={hotel}
                      availableNights={numNights}
                      availablePeople={totalPeople}
                      isClickPaginator={isClickPaginator}
                      setClickPaginator={setClickPaginator}
                    /> */}
                  </>
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
            <div className="flex space-between items-center justify-around mt-4">
              <div>
                <img
                  // src={IconNoAvailability}
                  alt={languageData.allAlt.altBannerNavigation}
                  src={`${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/NoAvailabilityHotels.svg`}
                />
              </div>

              <div>
                <div className="m-b text-fs-22 text-black">¡Ups!</div>
                <div className="m-s text-fs-18 text-[#1A202C] mt-2 mb-2">
                  No hemos encontrado algo relacionado a tu búsqueda.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <b />
      <BannerCallHotelT />
    </Container>
  );
}