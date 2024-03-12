import React from "react"
// import { SkeletonActivitiesTourP } from "../utils/skeleton/SkeletonActivitiesTourP"
import SkeletonCarousel from "../utils/skeleton/SkeletonCarousel"
import { SwiperSlide } from "swiper/react";

export default function Test2() {
  return (
    <div className="d-flex gap-4">
                {[...Array(4)].map((_, index) => (
                  <SwiperSlide
                    key={index}
                    className="card-transition-carousel-all"
                  >
                    <SkeletonCarousel/>
                  </SwiperSlide>
                ))}
    </div>
  )
}