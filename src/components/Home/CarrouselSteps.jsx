
import "swiper/css";
import "swiper/css/scrollbar";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";

import { TitleItinerarySteepCard } from "./TitleItinerarySteepCard";
import { StepCard } from "./StepCard";

export default function CarrouselSteps({ activeStep, stepData }) {
    const sliderRef = useRef(null);
  
    useEffect(() => {
      if (sliderRef.current && sliderRef.current.swiper) {
        sliderRef.current.swiper.slideTo(activeStep - 1);
      }
    }, [activeStep]);
  
    return (
      <div className="mt-6 mx-auto w-[100%] lg:hidden block">
        <TitleItinerarySteepCard />
  
        <Swiper
          id="Home-Carrousel-Steps"
          // scrollbar={{ hide: true }}
          spaceBetween={20}
          modules={[Scrollbar, Autoplay]}
          className="mySwiper mt-6 h-[10rem] w-full md:w-[60%] mx-auto"
          ref={sliderRef}
        >
          {stepData &&
            stepData.map((step, index) => (
              <SwiperSlide key={index}>
                <StepCard
                  activeStep={activeStep}
                  number={step.number}
                  stepType={step.stepType}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    );
  }