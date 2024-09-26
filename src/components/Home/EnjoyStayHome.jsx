"use client";

import "swiper/css";
import "swiper/css/navigation";
import "@/assets/styles/general/Swiper.css";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContext, useState } from "react";

import CardHotelHome from "./CardHotelHome";
import LanguageContext from "@/language/LanguageContext";

export default function EnjoyStayHome() {
  const { languageData, language } = useContext(LanguageContext);

  const hotelsEnjoy = [
    {
      code: 42883,
      name: "Park Royal Beach Cancun",
      codeName: "park-royal-beach-cancun",
      image:
        "https://cdn.worldota.net/t/x500/content/85/6c/856ce692b51b8c305884d9c23dbc682796affde3.JPEG",
      destinationCodeName: "cancun",
      price: 2341.8,
      stars: 4,
      address: "Blvd Kukulkan Km. 12.5, Zona Hotelera",
      es: {
        destination: "Cancun",
        country: "mexico",
      },
      en: {
        destination: "Cancun",
        country: "mexico",
      },
    },
    {
      code: 42886,
      name: "Sandos Caracol Eco Resort All Inclusive",
      codeName: "sandos-caracol-eco-resort-all-inclusive",
      image:
        "https://cdn.worldota.net/t/x500/content/ec/ce/eccefa29e25b07b207bf740170970bd559f2d5a8.jpeg",
      destinationCodeName: "riviera-maya-playa-del-carmen",
      price: 2255.6,
      stars: 4,
      address: "Carretera Cancun, Chetumal, Km. 295",
      es: {
        destination: "Playa del Carmen",
        country: "mexico",
      },
      en: {
        destination: "Playa del Carmen",
        country: "mexico",
      },
    },
    {
      code: 42887,
      name: "Oleo Cancun Playa",
      codeName: "oleo-cancun-playa",
      image:
        "https://cdn.worldota.net/t/x500/content/d4/ff/d4ff720f13b426428f117258062231cacb348aad.jpeg",
      destinationCodeName: "cancun",
      price: 5303.4,
      stars: 5,
      address: "Blvd. Kukulcan Km. 19.5 Zona Hotelera",
      es: {
        destination: "Cancun",
        country: "mexico",
      },
      en: {
        destination: "Cancun",
        country: "mexico",
      },
    },
    {
      code: 42889,
      name: "Occidental Tucancun",
      codeName: "occidental-tucancun",
      image:
        "https://cdn.worldota.net/t/x500/content/1f/e4/1fe421d807f28abf6cc89b8db9c2f2d9b96df5ec.jpeg",
      destinationCodeName: "cancun",
      price: 2242.4,
      stars: 3,
      address: "Boulevard Kukulcan Km 14. Lote 24",
      es: {
        destination: "Cancun",
        country: "mexico",
      },
      en: {
        destination: "Cancun",
        country: "mexico",
      },
    },
    {
      code: 42893,
      name: "Fiesta Americana Condesa Cancun- All Inclusive",
      codeName: "fiesta-americana-condesa-cancun-all-inclusive",
      image:
        "https://cdn.worldota.net/t/x500/content/27/a1/27a18b1c1f725829ba62328509857860c0f0616e.jpeg",
      destinationCodeName: "cancun",
      price: 5753.8,
      stars: 4,
      address: "Boulevard Kukulkan Km 16.5, Zona Hotelera",
      es: {
        destination: "Cancun",
        country: "mexico",
      },
      en: {
        destination: "Cancun",
        country: "mexico",
      },
    },
    {
      code: 42894,
      name: "Fiesta Americana Cozumel All Inclusive",
      codeName: "fiesta-americana-cozumel-all-inclusive",
      image:
        "https://cdn.worldota.net/t/x500/content/33/9c/339cd021f94f5956dd58441668872669b9f97211.jpeg",
      destinationCodeName: "cozumel",
      price: 3421.2,
      stars: 4,
      address: "Carr. A Chankanaab Km. 7.5 Zona Hotelera Sur",
      es: {
        destination: "Cozumel",
        country: "mexico",
      },
      en: {
        destination: "Cozumel",
        country: "mexico",
      },
    },
  ];

  const openListing = () => {
    window.open(`/${language}/mx/cancun-mexico/hotels?${query}`);
  };

  // LP DATE
  const calculateFutureDates = () => {
    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); 
      const year = String(date.getFullYear()); 
      return `${year}-${month}-${day}`;
      // return `${day}/${month}/${year}`;

    };
  
    const today = new Date();
    const twoWeeksAhead = new Date(today);
    twoWeeksAhead.setDate(today.getDate() + 14);
  
    const threeWeeksAhead = new Date(today);
    threeWeeksAhead.setDate(today.getDate() + 21);
  
    return {
      twoWeeksAhead: formatDate(twoWeeksAhead),
      threeWeeksAhead: formatDate(threeWeeksAhead),
    };
  };

  const dates = calculateFutureDates();
  // LP

  // LP PERSON
  const [roomData, setRoomData] = useState([{ adults: 2, children: [] }]);
  const encodedRoomData = encodeURIComponent(JSON.stringify(roomData));
  // 
  const requestBody = {
    codeNameHotel: "cancun",
    destination: "Cancún",
    codeName: "cancun",
    code: 18,
    type: "destination",
    "check-in": dates.twoWeeksAhead,
    "check-out": dates.threeWeeksAhead,
    occupancies: encodedRoomData,
  };

  const query = new URLSearchParams(requestBody).toString();
  return (
    <div className="flex h-[448px] w-full rounded-lg max-lg:flex-col max-lg:h-auto">
      {/* TEXT AND BTN SEE OFFERS */}
      <div className="w-[40%] relative max-lg:w-full max-lg:h-[330px] max-lg:rounded-t-lg max-lg:bg-bl-100">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}banners/home/Frame-1693.jpg`}
          alt="fondo azul con palmeras"
          className="h-full w-full rounded-l-lg max-lg:rounded-t-lg max-lg:rounded-l-0"
        />

        <div className="absolute bottom-0 flex flex-col gap-[86px] pb-[111px] pl-[49px] max-lg:pr-[49px] w-[80%] max-2xl:pb-[65px] max-xl:pb-[92px] max-lg:pb-[70px] max-lg:w-full max-lg:gap-[20px] max-md:pb-[65px] max-sm:pb-[50px]">
          <h2 className="text-white m-s-b text-fs-38 max-xl:text-fs-28 max-lg:text-fs-40 leading-[1.13] max-sm:text-fs-34">
            {languageData.enjoyStayHome.titleEnjoy}
          </h2>

          <button
            onClick={() => openListing()}
            className="px-[16px] py-[14px] bg-or-100 text-white text-fs-14 m-s-b rounded-full w-fit hover:!bg-or-110 mt-[20px]"
          >
            {languageData.enjoyStayHome.btnViewOffers}
          </button>
        </div>
      </div>

      {/* SWIPER CARDS HOTEL */}
      <div className="w-[60%] relative max-lg:w-full max-lg:h-[448px] max-lg:rounded-b-lg max-lg:bg-bl-100">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}banners/home/Pool_view_4.tmedium.jpg`}
          alt="alberca con palmeras alrededor"
          className="h-full w-full pt-[1px] rounded-r-lg brightness-75 max-lg:rounded-b-lg"
        />

        <div className="absolute top-0 w-full h-full pl-[70px] pr-[83px] max-md:px-[40px] pt-[54.2px]">
          <Swiper
            slidesPerView={1}
            className="h-full rounded-lg !static"
            id="swiper-home-enjoy-stay"
            initialSlide={0}
            spaceBetween={12}
            navigation
            modules={[Navigation]}
            breakpoints={{
              489: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {hotelsEnjoy.map((hotel, index) => (
              <SwiperSlide className="!rounded-lg shadow-3xl" key={index}>
                {/* CARDS HOTEL */}
                <CardHotelHome hotel={hotel} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
