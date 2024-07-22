"use client";

import "swiper/css";
import "swiper/css/pagination";
import "@/assets/styles/general/Swiper.css";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { HomeReviewCard } from "./HomeReviewCard";
import { reviewsDataInfo } from "../Configs/banners";
import { Container } from "@/config/Others/Container";
import { FeedbackCardTitle } from "./FeedbackCardTitle";

export function UserExperienceBanner() {
  // console.log(reviewsDataInfo);
  return (
    <div className="relative w-full bg-bl-100 mt-[180px]">
      {/* CURVE IMAGE TOP */}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/home/curve-bl.png`}
        className="absolute top-[-95px] w-full h-24"
        alt="Curve Bottom Reviews"
        style={{ transform: "scaleY(-1) scaleX(-1)" }}
        width="100%"
        height="100%"
      />

      <Container>
        <FeedbackCardTitle />

        <Swiper
          id="Home-reviews"
          lidesPerView={"auto"}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            880: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          {/* <div className="mt-5"> */}
          {reviewsDataInfo &&
            reviewsDataInfo.slice(0, 5).map((hotelReviewTop, index) => (
              // SWIPERSLIDE REVIEW CARD
              <SwiperSlide
                key={index}
                className="bg-[#2E2686] p-6 rounded-lg mx-auto hover:bg-white hover:text-black text-white cursor-pointer !h-[344px] mt-5"
              >
                <HomeReviewCard hotelReviewTop={hotelReviewTop} />
              </SwiperSlide>
            ))}
          {/* </div> */}
        </Swiper>
      </Container>

      {/* CURVE IMAGE BOTTOM */}
      <img
        src={`${process.env.NEXT_PUBLIC_URL}img/home/curve-bl.png`}
        className="absolute bottom-[-95px] w-full h-24"
        alt="Curve Bottom Reviews"
        width="100%"
        height="20%"
      />
    </div>
  );
}
