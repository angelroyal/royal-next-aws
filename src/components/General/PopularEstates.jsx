"use client";

import "swiper/css";
// import axios from "axios";
import moment from "moment";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import LanguageContext from "@/language/LanguageContext";
import UpdateAutocomplete from "@/config/Others/UpdateAutocomplete";
import PopularStateSkeleton from "../../services/Hotels/components/Skeleton/HotelHomeSkeleton";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";
import { UpdateAutocompleteTour } from "@/config/Others/UpdateAutocompleteTour";

export function PopularState({ tour = false }) {
  const [popularState, setPopularState] = useState([]);
  const { language, languageData } = useContext(LanguageContext);
  const router = useRouter();

  useEffect(() => {
    const getPopularStates = async () => {
      try {
        let dataPopularState = await axiosWithInterceptor.get(
          `v1/destinations/promotions/hotels`
        );

        if (dataPopularState.data && dataPopularState.status === 200) {
          const shuffledDestinations = dataPopularState.data.topDestinations
            .slice(0, 8)
            .sort(() => 0.5 - Math.random());
          setPopularState(shuffledDestinations);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getPopularStates();
  }, []);

  const sendDestination = (destinationInfo) => {
    if (tour) {
      const persons = [{ adults: 2, children: 0 }];
      const today = moment();

      let initDate = moment(today).add(1, "month");
      const checkIn = initDate.format("YYYY-MM-DD");

      const requestBodyTour = {
        codeNameTour: destinationInfo.codeName,
        dateStart: checkIn,
        adults: persons[0].adults,
        children: persons[0].children,
      };

      const queryTour = new URLSearchParams(requestBodyTour).toString();
      sendDataSearchTour(destinationInfo);
      const newURL = `/${language}/mx/${destinationInfo.codeName}-${destinationInfo.country}/tours?${queryTour}`;
      router.push(newURL);
    } else {
      const encodedRoomData = encodeURIComponent(
        JSON.stringify([{ adults: 2, children: [] }])
      );
      const today = moment();

      let initDate = moment(today).add(1, "month");
      let endDate = moment(today).add(1, "month").add(2, "day");
      const checkIn = initDate.format("YYYY-MM-DD");
      const checkOut = endDate.format("YYYY-MM-DD");

      const requestBodyHotel = {
        codeNameHotel: destinationInfo.codeName,
        destination: destinationInfo.name,
        codeName: destinationInfo.codeName,
        code: destinationInfo.code,
        type: "destination",
        "check-in": checkIn,
        "check-out": checkOut,
        occupancies: encodedRoomData,
      };
      const queryHotel = new URLSearchParams(requestBodyHotel).toString();
      sendDataSearch(destinationInfo);
      // PUSH RESULT HOTEL
      router.push(
        `/${language}/mx/${destinationInfo.codeName}/hotels?${queryHotel}`
      );
    }
  };

  //UPDATE LOCAL STORAGE HOTEL
  const sendDataSearch = (destination) => {
    const dataLocalSend = destination;
    UpdateAutocomplete({ dataLocalSend });
  };

  //UPDATE LOCAL STORAGE TOUR
  const sendDataSearchTour = (tourInfo) => {
    const dataLocalSend = tourInfo;
    UpdateAutocompleteTour({ dataLocalSend });
  };

  const parsePrice = (price) => (
    <>
      {Math.floor(price)
        .toLocaleString("es-MX", { currency: "MXN" })
        .replace(".00", "")}
      .<sup>{(price % 1).toFixed(2).slice(2)}</sup>
    </>
  );

  return (
    <div className="my-16 md:my-32 relative">
      <h1 className="m-b text-fs-24 mb-9">
        {languageData.SearchBox.tabTour.popularState}
      </h1>
      {popularState.length > 0 && language ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          className="h-[500px] !static"
          navigation
          modules={[Navigation]}
          id="swiper-popular-estates"
        >
          <SwiperSlide className="bg-transparent">
            <div className="flex flex-col md:flex-row gap-x-0 gap-y-3 md:gap-y-0 h-full md:gap-x-3">
              <div className="flex gap-x-3 w-full md:h-full h-2/4">
                {/* IMAGE LEFT CARROUSEL */}
                <div
                  className="relative rounded-lg md:w-[23%] w-full cursor-pointer overflow-hidden"
                  onClick={() => sendDestination(popularState[0])}
                >
                  {popularState[0].imageUrl ? (
                    <img
                      src={popularState[0].imageUrl}
                      alt={`${popularState[0].name} ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                      className="brightness-[.7] absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform scale-100 hover:scale-105 hover:brightness-[.5] select-none"
                    />
                  ) : (
                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full" />
                  )}
                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="text-fs-14 m-b">
                      {popularState[0].name}
                    </span>
                    <span className="m-m text-fs-10">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12">
                        MXN ${parsePrice(popularState[0].price)}
                      </span>
                    </span>
                  </div>
                </div>

                {/* IMAGE CENTER CARROUSEL */}
                <div
                  className="relative rounded-lg md:w-[77%] w-full cursor-pointer overflow-hidden"
                  onClick={() => sendDestination(popularState[1])}
                >
                  {popularState[1].imageUrl ? (
                    <img
                      src={popularState[1].imageUrl}
                      alt={`${popularState[1].name} ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                      className="h-full rounded-lg object-cover brightness-[.7] select-none w-full transition-transform duration-500 transform scale-100 hover:scale-105 hover:brightness-[.5]"
                      width="100%"
                      height="100%"
                    />
                  ) : (
                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full" />
                  )}

                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="text-fs-14 md:text-fs-20 m-b">
                      {popularState[1].name}
                    </span>
                    <span className="m-m text-fs-10 md:text-fs-12">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12 md:text-fs-16">
                        {" "}
                        MXN ${parsePrice(popularState[1].price)}{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              {/* IMAGE RIGHT CARROUSEL */}
              <div className="flex md:flex-col gap-y-3 gap-x-3 md:gap-x-0 md:w-[268px] md:h-full h-[45%]">
                {popularState.slice(2, 4).map((destination, index) => (
                  <div
                    key={index}
                    className="relative rounded-lg md:h-[246px] w-full cursor-pointer overflow-hidden"
                    onClick={() => sendDestination(destination)}
                  >
                    {destination.imageUrl ? (
                      <img
                        src={destination.imageUrl}
                        alt={`${destination.name} ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                        className="brightness-[.7] absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform scale-100 hover:scale-105 hover:brightness-[.5] select-none"
                      />
                    ) : (
                      <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full" />
                    )}
                    <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                      <span className="m-b text-fs-14">{destination.name}</span>
                      <span className="text-fs-10 m-m">
                        {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                        <span className="m-s-b text-fs-12">
                          MXN ${parsePrice(destination.price)}
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>

          {/* MOBILE */}
          <SwiperSlide className="bg-transparent">
            <div className="flex flex-col md:flex-row gap-x-0 gap-y-3 md:gap-y-0 h-full md:gap-x-3">
              <div className="flex gap-x-3 w-full md:h-full h-2/4">
                <div
                  className="relative rounded-lg md:w-[23%] w-full cursor-pointer overflow-hidden"
                  onClick={() => sendDestination(popularState[4])}
                >
                  {popularState[4].imageUrl ? (
                    <img
                      src={popularState[4].imageUrl}
                      alt={`${popularState[4].name} ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                      className="brightness-[.7] absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform scale-100 hover:scale-105 hover:brightness-[.5] select-none"
                      width="100%"
                      height="100%"
                    />
                  ) : (
                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full" />
                  )}
                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="text-fs-14 m-b">
                      {popularState[4].name}
                    </span>
                    <span className="m-m text-fs-10">
                      {" "}
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12">
                        {" "}
                        MXN ${parsePrice(popularState[4].price)}{" "}
                      </span>
                    </span>
                  </div>
                </div>

                <div
                  className="relative rounded-lg md:w-[77%] w-full cursor-pointer overflow-hidden"
                  onClick={() => sendDestination(popularState[5])}
                >
                  {popularState[5].imageUrl ? (
                    <img
                      src={popularState[5].imageUrl}
                      alt={`${popularState[5].name} ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                      className="h-full rounded-lg object-cover brightness-[.7]  transition-transform duration-500 transform scale-100 hover:scale-105 hover:brightness-[.5] select-none"
                      width="100%"
                      height="100%"
                    />
                  ) : (
                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full" />
                  )}

                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="text-fs-14 md:text-fs-20 m-b">
                      {popularState[5].name}
                    </span>
                    <span className="m-m text-fs-10 md:text-fs-12">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12 md:text-fs-16">
                        {" "}
                        MXN ${parsePrice(popularState[5].price)}{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex md:flex-col gap-y-3 gap-x-3 md:gap-x-0 md:w-[268px] md:h-full h-[45%]">
                <div
                  className="relative rounded-lg md:h-[246px] w-full cursor-pointer overflow-hidden"
                  onClick={() => sendDestination(popularState[6])}
                >
                  {popularState[6].imageUrl ? (
                    <img
                      src={popularState[6].imageUrl}
                      alt={`${popularState[6].name} ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                      className="h-full rounded-lg object-cover brightness-[.7] select-none transition-transform duration-500 transform scale-100 hover:scale-105 hover:brightness-[.5]"
                      width="100%"
                      height="100%"
                    />
                  ) : (
                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full" />
                  )}

                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="m-b text-fs-14">
                      {popularState[6].name}
                    </span>
                    <span className="text-fs-10 m-m">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12">
                        {" "}
                        MXN ${parsePrice(popularState[6].price)}{" "}
                      </span>
                    </span>
                  </div>
                </div>

                <div
                  className="relative rounded-lg md:h-[246px] w-full cursor-pointer overflow-hidden"
                  onClick={() => sendDestination(popularState[0])}
                >
                  {popularState[0].imageUrl ? (
                    <img
                      src={popularState[0].imageUrl}
                      alt={`${popularState[0].name} ${process.env.NEXT_PUBLIC_NAME_COMPANY}`}
                      className="h-full rounded-lg object-cover brightness-[.7] select-none  transition-transform duration-500 transform scale-100 hover:scale-105 hover:brightness-[.5]"
                      width="100%"
                      height="100%"
                    />
                  ) : (
                    <div className="animate-[skeletonLoading_1s_linear_infinite_alternate] w-full h-full" />
                  )}

                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="m-b text-fs-14">
                      {popularState[0].name}
                    </span>
                    <span className="text-fs-10 m-m">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12">
                        {" "}
                        MXN ${parsePrice(popularState[0].price)}{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <PopularStateSkeleton />
      )}
    </div>
  );
}
