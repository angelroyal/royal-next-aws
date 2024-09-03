import "swiper/css";
import "swiper/css/scrollbar";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { mockupPhone, slidesBanner } from "./Configs/banners";


export function CarrouselPaymentStep({setActiveStep}) {
  const changeSweper = (event) => {
    const currentSlideIndex = event.activeIndex;
    setActiveStep(slidesBanner[currentSlideIndex].step);
  };

  return (
    <div className="relative lg:rotate-3 lg:block  w-[299px] h-[443px] max-lg:mx-auto">
      {/* IMAGE MOCKUP PHONE */}
      <img
        className="mx-auto z-10 absolute left-0 top-0 w-full h-full"
        src={mockupPhone}
        alt="Foreground Phone"
      />

      <div className="h-full w-[64%] mx-auto relative">
        {/* // SWIPER CONFIGURATION */}
        <Swiper
          id="Home-Carrousel-PaymentStep "
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          onSlideChange={changeSweper}
          className="mySwiper  z-[2] left-0 top-[14px] w-full lg:top-[15px] h-[95%] lg:h-[93%] lg:rounded-[30px] rounded-[37px]"
        >
          {/* SWIPER SLIDE ITINERARY DESIGN */}
          {slidesBanner.map((Step, index) => (
            <SwiperSlide key={index}>
              <img
                className="rounded-[30px] object-contain h-full"
                src={Step.image}
                alt="Background Phone"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
