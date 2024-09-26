"use client";

import React, { useEffect, useContext, useState } from "react";

import OrderingHotel from "./OrderingHotel";
import { Container } from "@/config/Others/Container";
import FiltersHotels from "../../utils/FiltersHotels";
import PaginationT from "@/components/General/PaginationT";
import { AnimatedNumber } from "../../utils/AnimatedNumber";
import { useToken } from "../../../../config/context/AuthContext";
import LanguageContext from "../../../../language/LanguageContext";
import ListingHotelContext from "../../context/ListingHotelContext";
import { HotelCardSkeleton } from "../Skeleton/HotelListingSkeleton";
import { scrollToTop } from "../../../../utils/pageConfig/scrollToTop";
import BannerCallHotelT from "@/components/bannerJsx/bannerCallHotelT";
import SearchBoxMobile from "@/components/searchMobil/SearchBoxMobile";
import CardHotelT from "@/services/Hotels/components/Listing/CardHotelT";
import { NotFoundDestination } from "@/components/General/NotFoundDestination";

export default function ListingHotelW() {
  const { token } = useToken();
  const { languageData } = useContext(LanguageContext);
  const [requestQueryParams, setRequestQueryParams] = useState(null);

  const {
    totalPages,
    currentPage,
    setCurrentPage,
    combinedHotelData,
    setCombinedHotelData,
    totalFilteredHotels,
    handleFetchPostHotels,
  } = useContext(ListingHotelContext);

  useEffect(() => {
    if (token) {
      const searchParams = new URLSearchParams(window.location.search);
      const requestBody = {
        code: searchParams.get("code"),
        type: searchParams.get("type"),
        codeName: searchParams.get("codeName"),
        "check-in": searchParams.get("check-in"),
        "check-out": searchParams.get("check-out"),
        occupancies: JSON.parse(
          decodeURIComponent(searchParams.get("occupancies"))
        ),
      };
      setRequestQueryParams(requestBody);
      setCombinedHotelData(null);
      handleFetchPostHotels(requestBody);
    }
  }, [token]);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalFilteredHotels]);

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  return (
    <Container>
      <div className="flex flex-col xl:flex-row md:justify-between">
        <div className="w-full xl:w-[28%] 2xl:w-[24%] mt-10">
          <SearchBoxMobile />
          <div className="hidden xl:block">
            <FiltersHotels />
          </div>
        </div>

        <div className="w-full xl:w-8/12 relative">
          {/* SKELETON */}
          {!combinedHotelData && <HotelCardSkeleton />}

          {combinedHotelData && combinedHotelData.length > 0 && (
            <>
              <div className="flex items-end justify-between mt-6">
                <h2 className="m-b text-fs-20" data-aos="fade-right">
                  {languageData.listingTour.weFound}{" "}
                  {totalFilteredHotels > 0 && (
                    <AnimatedNumber targetNumber={totalFilteredHotels} />
                  )}{" "}
                  {languageData.filtersHotel.resultsHotel}
                </h2>

                {/* ORDER */}
                <OrderingHotel />
              </div>

              {/* CARD */}
              {combinedHotelData &&
                combinedHotelData.map((hotel, index) => (
                  <CardHotelT
                    key={index}
                    hotel={hotel}
                    requestQueryParams={requestQueryParams}
                  />
                ))}

              {/* PAGINATION */}
              {combinedHotelData && (
                <div className="flex justify-center py-[1.5rem]">
                  <PaginationT
                    count={totalPages}
                    pageChange={currentPage}
                    onChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}

          {combinedHotelData && combinedHotelData.length === 0 && (
            <NotFoundDestination />
          )}
        </div>
      </div>

      <div className="my-7">
        <BannerCallHotelT />
      </div>
    </Container>
  );
}
