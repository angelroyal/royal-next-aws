"use client";

import { useContext } from "react";

import CardTransport from "./CardTransport";
import FilterTransport from "./FilterTransport";
import OrderingTransport from "./OrderingTransport";
import { Container } from "@/config/Others/Container";
import BannerCallHotelT from "@/components/bannerJsx/bannerCallHotelT";
import SearchBoxMobile from "@/components/searchMobil/SearchBoxMobile";
import { NotFoundDestination } from "@/components/General/NotFoundDestination";
import ListingTransportContext from "../../context/ListingTransportContext";

export default function ListingTransport(props) {
  const { data } = props;
  const { setDataTransport, dataTransportF } = useContext(
    ListingTransportContext
  );
  setDataTransport(data);

  return (
    <Container>
      {/* <BannerListingHotelTop /> */}
      <div className="flex flex-col xl:flex-row md:justify-between mb-24">
        <div className="w-full xl:w-[28%] 2xl:w-[24%] mt-10">
          {/* <SearchBoxMobile /> */}
          <SearchBoxMobile className="margin-bottom" />

          <div className="max-xl:hidden">
            <FilterTransport />
          </div>
        </div>

        <div className="w-full xl:w-8/12">
          {dataTransportF && dataTransportF.length > 0 && (
            <>
              <OrderingTransport />
              <CardTransport />
            </>
          )}

          {dataTransportF && dataTransportF.length === 0 && (
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
