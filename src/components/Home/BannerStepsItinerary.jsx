"use client";

import { useState } from "react";

import { StepsCards } from "./StepsCards";
import { slidesBanner } from "./Configs/banners";
import { PaymentBannerMobile } from "./PaymentBannerMobile";
import { CarrouselPaymentStep } from "./CarrouselPaymentStep";

export function BannerStepsItinerary() {
  const [activeStep, setActiveStep] = useState(slidesBanner[0].step);

  return (
    <div className="bg-gry-50">
      <div className="flex gap-x-[110px]  max-md:justify-center max-lg:flex-col-reverse p-5">
        {/* LEFT CARD */}
        <div className="lg:flex lg:flex-row lg:w-1/2 justify-end h-max my-auto max-lg:mt-7">
          <PaymentBannerMobile />

          {/* CARROUSEL PAYMENT STEPS */}
          <CarrouselPaymentStep setActiveStep={setActiveStep} />
        </div>

        {/* RIGHT CARD */}
        <div className="lg:mt-10 lg:mb-10 lg:w-1/2 mt-5">
          <div className="w-full">
            <StepsCards activeStep={activeStep} />
          </div>
        </div>
      </div>
    </div>
  );
}
