import React from "react";
import SearchReservation from "./SearchReservation";

export default function BannerMyReservation() {
  return (
    <div className="w-full">
      <div className="relative">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}/banners/desktop/banner-my-reservation.jpg`}
          alt="line-footer-or"
          className="w-full z-[3] object-cover relative h-[379px] max-2xl:h-[350px] max-lg:h-[300px] max-md:h-[250px]"
        />
        <SearchReservation />
      </div>
    </div>
  );
}
