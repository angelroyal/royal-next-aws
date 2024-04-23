"use client";

import { useContext } from "react";
import CardTransport from "./CardTransport";
import { Container } from "@/config/Others/Container";
import BannerCallHotelT from "@/components/bannerJsx/bannerCallHotelT";
import SearchBoxMobile from "@/components/searchMobil/SearchBoxMobile";
import ListingTransportContext from "../../context/ListingTransportContext";

export default function ListingTransport(props) {
  const { data } = props;
  const { setDataTransport } = useContext(ListingTransportContext);
  setDataTransport(data);

  return (
    <Container>
      {/* <BannerListingHotelTop /> */}
      <div className="flex flex-col xl:flex-row md:justify-between">
        <div className="w-full xl:w-[28%] mt-10">
          <SearchBoxMobile />
        </div>

        <div className="w-full xl:w-8/12 relative">
          <CardTransport />
        </div>
      </div>

      <div className="my-7">
        <BannerCallHotelT />
      </div>
    </Container>
  );
}