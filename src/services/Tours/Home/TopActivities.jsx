"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/assets/styles/general/Swiper.css";

import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import CardTopActivities from "./CardTopActivities";
import LanguageContext from "@/language/LanguageContext";
import { CardTopActivitiesSkeleton } from "@/components/Skeleton/CardTopActivitiesSkeleton";
import { fetchTopActivities } from "@/components/Recommended/Api/RequestRecommendation";

export default function TopActivities() {
  const [tours, setTours] = useState([]);
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    const getTopActivities = async () => {
      try {
        const data = await fetchTopActivities();
        setTours(data);
      } catch (error) {
        console.error(error);
      }
    };

    getTopActivities();
  }, []);

  return (
    <>
      <div className="mb-9">
        {/* TITLE TOP ACTIVITIES */}
        <h2 className="m-b text-black text-fs-26 mb-1">
          {languageData.SearchBox.tabTour.topActivity}
        </h2>

        <span className="m-m text-fs-16 text-gry-100">
          {languageData.SearchBox.tabTour.subtitleTopActivities}
        </span>
      </div>

      <div
        data-aos="fade-up"
        className="flex flex-wrap gap-[16px] justify-between max-sm:justify-around"
      >
        {tours.length > 0
          ? tours.map((tour, index) => (
              <CardTopActivities tour={tour} key={index} />
            ))
          : [...Array(5)].map((_, index) => (
              <div key={index} className="min-w-[266px] h-full">
                <CardTopActivitiesSkeleton />
              </div>
            ))}
      </div>
    </>
  );
}
