import { useState, useContext } from "react";


import Image from "next/image";

import LodgingHotel from "./LodgingLogic";
import LanguageContext from "../../../../language/LanguageContext";

const listOptions = [
  {
    id:1,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/beach/beach-w.svg`,
    iconActive: `${process.env.NEXT_PUBLIC_URL}icons/beach/beach-b.svg`,
    name: "beach",
  },

  {
    id:2,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/family/family-w.svg`,
    iconActive: `${process.env.NEXT_PUBLIC_URL}icons/family/family-b.svg`,
    name: "family",
  },

  {
    id:3,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/romantic/romantic-w.svg`,
    iconActive: `${process.env.NEXT_PUBLIC_URL}icons/romantic/romantic-b.svg`,
    name: "romantic",
  },

  {
    id:4,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/business/business-w.svg`,
    iconActive: `${process.env.NEXT_PUBLIC_URL}icons/business/business-b.svg`,
    name: "business",
  },

  {
    id:5,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/adults/adults-w.svg`,
    iconActive: `${process.env.NEXT_PUBLIC_URL}icons/adults/adults-b.svg`,
    name: "adults",
  },

  {
    id:6,
    icon: `${process.env.NEXT_PUBLIC_URL}icons/pet/pet-w.svg`,
    iconActive: `${process.env.NEXT_PUBLIC_URL}icons/pet/pet-b.svg`,
    name: "petFriendly",
  },
];

export default function ShuffleHotel() {
  const { languageData } = useContext(LanguageContext);

  const [menuShuffleHotel, setMenuShuffleHotel] = useState(0);
  const [categorySelected, setCategorySelected] = useState(1);

  const handleCategory = (index, category) =>{
    setMenuShuffleHotel(index)
    setCategorySelected(category)
  }

  return (
    <div>
      {/* TITLE */}
      <h2 className="m-b text-fs-24 mb-8 ">
        {languageData.homeDestinations[1].titleType}
      </h2>

      {/* MENU  */}
      <div className="flex overflow-y-hidden gap-10 bg-gry-50 py-2 px-4 rounded-3xl mb-8 w-fit max-lg:w-full h-max">
        {listOptions.map((option, index) => (
          <button key={index}
            onClick={() => handleCategory(index, option.id)}
            className={`${
              menuShuffleHotel === index
                ? "bg-or-100 rounded-3xl text-white"
                : "text-gry-100"
            } flex gap-2 py-2 px-4 justify-center items-center h-max`}
          >
            {menuShuffleHotel === index ? (
              <Image
                src={option.icon}
                alt={option.name}
                width={16}
                height={16}
              />
            ) : (
              <Image
                src={option.iconActive}
                alt={option.name}
                width={16}
                height={16}
              />
            )}

            <span className={`text-nowrap text-fs-12 m-m`}>
              {languageData.hotelTypes[option.name]}
            </span>
          </button>
        ))}
      </div>

      {/* END MENU SHUFFLE */}

      <>
        {/*ONE SWIPER CARD BEST PRICE */}
        {/* <div className="relative">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          navigation
          modules={[Navigation]}
          className="mySwiper !mb-3 !pb-2 !static"
          id="swiper-shuffle-hotel"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            390: {
              slidesPerView: 1.4,
            },
            500: {
              slidesPerView: 1.8,
            },
            620: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
            1280: {
              slidesPerView: 4,
            }
          }}
        >
          {tour.map((tour, index) => (
            <SwiperSlide key={index} className="!w-fit !rounded-lg">
              <div className="min-w-[266px] h-full cursor-pointer shadow-md shadow-gry-30 rounded-xl max-w-[280px]">
                <div className="w-full h-[216px]">
                  <img
                    className="w-full h-full rounded-t-lg object-cover select-none"
                    src={tour.image}
                    alt="card"
                  />
                </div>

                <div className="w-full h-1/4 rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col">
                  <div className="m-s-b pt-1 text-fs-14 text-start truncate">
                    {tour.spanishName}{" "}
                  </div>

                  <Rating className="my-1" name="read-only" value={tour.category} style={{ fontSize: "14px" }} readOnly size="small" />

                  <div className="flex gap-1 mb-[11px]">
                    <Image
                      className="w-auto h-auto"
                      src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
                      alt="icon-location-bl"
                      width={11}
                      height={14}
                    />
                    <span className="text-bl-100 m-s-b text-fs-10">{tour.spanishDestination}</span>
                  </div>

                  <div className='flex justify-between border-t border-[#ebebeb] pt-[11px] items-center'>
                    <div className='flex flex-col'>
                      <span className='m-m text-gry-100 text-fs-10 text-start'>{languageData.cartTour.from}</span>
                      <span className='m-b text-or-100 text-fs-12'>MXN <span className="text-fs-16">${tour.price}</span></span>
                    </div>

                    <button className='m-s-b text-bl-100 text-fs-12 min-h-8 rounded-3xl border-2 border-bl-100 px-4 py-2 hover:bg-bl-100 hover:text-white text-nowrap'>{languageData.cartTour.seeDetails}</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
        {/*END ONE SWIPER CARD BEST PRICE */}
      </>

      <LodgingHotel selectionId={categorySelected}/>
    </div>
  );
}


export function activitiesTypes(){

}