"use client";

import { useContext } from "react";

import { OffersNow } from '../Home/BannersHome'
import LanguageContext from "@/language/LanguageContext";

export default function OffersNowRecommendation() {

    const { languageData } = useContext(LanguageContext);

    return (
        <div className="flex flex-col bg-white p-[36px] rounded-lg">
            <span className="m-b text-fs-20 ">
                {languageData.bannersHome.currentOffers}
            </span>

            <span className="m-m text-fs-14 text-gry-100 mb-[22px]">
                {languageData.bannersHome.limitedPromotions}
            </span>

            <OffersNow />

        </div>
    )
}
