import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import LanguageContext from "@/language/LanguageContext";
import axiosWithInterceptor from "@/config/Others/axiosWithInterceptor";

export function PopularState() {
  const [popularState, setPopularState] = useState([]);
  const { languageData } = useContext(LanguageContext);
  useEffect(() => {
    const getPopularStates = async () => {
      try {
        let dataPopularState = await axiosWithInterceptor.get(
          "v1/destinations/promotions/activities"
        );

        if ((dataPopularState.data, dataPopularState.status === 200)) {
          if (dataPopularState && dataPopularState.data) {
            const shuffledDestinations = dataPopularState.data[
              "topDestinations"
            ].sort(() => 0.5 - Math.random());
            setPopularState(shuffledDestinations);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getPopularStates();
  }, []);

  // console.log(popularState);

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
      <h1 className="m-b text-fs-24 mb-9">{languageData.SearchBox.tabTour.popularState}</h1>
      {popularState.length > 0 ? (
        <Swiper 
        slidesPerView={1} 
        spaceBetween={30} 
        className="h-[408px] !static"
        navigation
        modules={[Navigation]}
        id="swiper-popular-estates"
        >
          <SwiperSlide className="bg-transparent">
            <div className="flex flex-col md:flex-row gap-x-0 gap-y-3 md:gap-y-0 h-full md:gap-x-3">
              <div className="flex gap-x-3 w-full md:h-full h-2/4">
                <div className="relative rounded-lg md:w-[23%] w-full">
                  <img
                    src={popularState[0].imageUrl}
                    alt={`${popularState[0].name} Royal Vacation`}
                    className="h-full rounded-lg object-cover brightness-[.7]"
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="text-fs-14 m-b">
                      {popularState[0].name}
                    </span>
                    <span className="m-m text-fs-10">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12">
                        {" "}
                        MXN ${parsePrice(popularState[0].price)}{" "}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="relative rounded-lg md:w-[77%] w-full">
                  <img
                    src={popularState[1].imageUrl}
                    alt={`${popularState[1].name} Royal Vacation`}
                    className="h-full rounded-lg object-cover brightness-[.7]"
                    width="100%"
                    height="100%"
                  />
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

              <div className="flex md:flex-col gap-y-3 gap-x-3 md:gap-x-0 md:w-[268px] md:h-full h-[45%]">
                <div className="relative rounded-lg md:h-[197px] w-full">
                  <img
                    src={popularState[2].imageUrl}
                    alt={`${popularState[2].name} Royal Vacation`}
                    className="h-full rounded-lg object-cover brightness-[.7]"
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="m-b text-fs-14">
                      {popularState[2].name}
                    </span>
                    <span className="text-fs-10 m-m">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12">
                        {" "}
                        MXN ${parsePrice(popularState[2].price)}{" "}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="relative rounded-lg md:h-[197px] w-full">
                  <img
                    src={popularState[3].imageUrl}
                    alt={`${popularState[3].name} Royal Vacation`}
                    className="h-full rounded-lg object-cover brightness-[.7]"
                    width="100%"
                    height="100%"
                  />
                  <div className="absolute flex flex-col bottom-0 text-white p-4 text-left">
                    <span className="m-b text-fs-14">
                      {popularState[3].name}
                    </span>
                    <span className="text-fs-10 m-m">
                      {languageData.homeDestinations[0].titleTop.textHotel}{" "}
                      <span className="m-s-b text-fs-12">
                        {" "}
                        MXN ${parsePrice(popularState[3].price)}{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-transparent">
            <div className="flex flex-col md:flex-row gap-x-0 gap-y-3 md:gap-y-0 h-full md:gap-x-3">
              <div className="flex gap-x-3 w-full md:h-full h-[45%]">
                <div className="relative rounded-lg md:w-[23%] w-full">
                  <img
                    src={popularState[4].imageUrl}
                    alt={`${popularState[4].name} Royal Vacation`}
                    className="h-full rounded-lg object-cover brightness-[.7]"
                    width="100%"
                    height="100%"
                  />
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

                <div className="relative rounded-lg md:w-[77%] w-full">
                  <img
                    src={popularState[5].imageUrl}
                    alt={`${popularState[5].name} Royal Vacation`}
                    className="h-full rounded-lg object-cover brightness-[.7]"
                    width="100%"
                    height="100%"
                  />
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

              <div className="flex md:flex-col gap-y-3 gap-x-3 md:gap-x-0 md:w-[268px] md:h-full h-2/4">
                <div className="relative rounded-lg md:h-[197px] w-full">
                  <img
                    src={popularState[6].imageUrl}
                    alt={`${popularState[6].name} Royal Vacation`}
                    className="h-full rounded-lg object-cover brightness-[.7]"
                    width="100%"
                    height="100%"
                  />
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

                <div className="relative rounded-lg md:h-[197px] w-full">
                  <img
                    src={popularState[0].imageUrl}
                    alt={`${popularState[0].name} Royal Vacation`}
                    className="h-full rounded-lg object-cover brightness-[.7]"
                    width="100%"
                    height="100%"
                  />
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
        <></>
      )}
    </div>
  );
}
