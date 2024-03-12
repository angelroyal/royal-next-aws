import { useState, useContext } from "react";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import 'swiper/css/navigation';
// import "../../../../assets/css/Libreries/Swiper.css";
// import required modules
import { Navigation, Pagination } from "swiper/modules";
import LanguageContext from "../../../../language/LanguageContext";
import Image from "next/image";

export default function ShuffleHotel() {
  const { languageData } = useContext(LanguageContext);

  const [menuShuffleHotel, setMenuShuffleHotel] = useState(1);

  return (
    <div>
      <h2 className="m-b text-fs-24 mb-8 ">
        {languageData.homeDestinations[1].titleType}
      </h2>

      {/* MENU  */}
      <div className="flex overflow-x-auto gap-10 bg-gry-50 py-2 px-4 rounded-3xl mb-8 w-fit max-lg:w-full">
        <button
          onClick={() => setMenuShuffleHotel(1)}
          className={`${
            menuShuffleHotel === 1
              ? "bg-or-100 rounded-3xl text-white"
              : "text-gry-100"
          } flex gap-2 py-2 px-4 justify-center`}
        >
          {menuShuffleHotel === 1 ? (
            <Image
              // src={`${import.meta.env.VITE_ASSETS_URL}icons/beach/beach-w.svg`}
              alt="icon-beach-w"
            />
          ) : (
            <Image
              // src={`${import.meta.env.VITE_ASSETS_URL}icons/beach/beach-b.svg`}
              alt="icon-beach-b"
            />
          )}

          <span className="text-fs-15 m-m">
            {languageData.hotelTypes.beach}
          </span>
        </button>

        <button
          onClick={() => setMenuShuffleHotel(2)}
          className={`${
            menuShuffleHotel === 2
              ? "bg-or-100 rounded-3xl text-white"
              : "text-gry-100"
          } flex gap-2 py-2 px-4 justify-center`}
        >
          {menuShuffleHotel === 2 ? (
            <Image
              // src={`${import.meta.env.VITE_ASSETS_URL}icons/family/family-w.svg`}
              alt="icon-family-w"
            />
          ) : (
            <Image
              // src={`${import.meta.env.VITE_ASSETS_URL}icons/family/family-b.svg`}
              alt="icon-family-b"
            />
          )}
          <span className="text-fs-15 m-m">
            {languageData.hotelTypes.family}
          </span>
        </button>

        <button
          onClick={() => setMenuShuffleHotel(3)}
          className={`${menuShuffleHotel === 3
            ? " bg-or-100 rounded-3xl text-white"
            : "text-gry-100"} flex gap-2 py-2 px-4 justify-center`
            
          }
        >
          {menuShuffleHotel === 3 ? (
            <Image
              // src={`${import.meta.env.VITE_ASSETS_URL}icons/romantic/romantic-w.svg`}
              alt="icon-romantic-w"
            />
          ) : (
            <Image
              // src={`${import.meta.env.VITE_ASSETS_URL}icons/romantic/romantic-b.svg`}
              alt="icon-romantic-b"
            />
          )}

          <span className="text-fs-15 m-m">
            {languageData.hotelTypes.romantic}
          </span>
        </button>

        <button
          onClick={() => setMenuShuffleHotel(4)}
          className={`${menuShuffleHotel === 4
            ? "bg-or-100 rounded-3xl text-white"
            : "text-gry-100"} flex gap-2 py-2 px-4 justify-center`
            
          }
        >
          {menuShuffleHotel === 4 ? (
            <Image
              // src={`${import.meta.env.VITE_ASSETS_URL}icons/business/business-w.svg`}
              alt="icon-business-w"
            />
          ) : (
            <Image
              // src={`${import.meta.env.VITE_ASSETS_URL}icons/business/business-b.svg`}
              alt="icon-business-b"
            />
          )}

          <span className="text-fs-15 m-m">
            {languageData.hotelTypes.business}
          </span>
        </button>

        <button
          onClick={() => setMenuShuffleHotel(5)}
          className={`${menuShuffleHotel === 5
            ? "bg-or-100 rounded-3xl text-white"
            : "text-gry-100"} flex gap-2 py-2 px-4 justify-center`
            
          }
        >
          {menuShuffleHotel === 5 ? (
            <Image
              // src={`${import.meta.env.VITE_ASSETS_URL}icons/adults/adults-w.svg`}
              alt="icon-adults-w"
            />
          ) : (
            <Image
              // src={`${import.meta.env.VITE_ASSETS_URL}icons/adults/adults-b.svg`}
              alt="icon-adults-b"
            />
          )}

          <span className="text-fs-15 m-m">
            {languageData.hotelTypes.adults}
          </span>
        </button>

        <button
          onClick={() => setMenuShuffleHotel(6)}
          className={`${ menuShuffleHotel === 6
            ? "bg-or-100 rounded-3xl text-white"
            : "text-gry-100"} flex gap-2 py-2 px-4  justify-center`
           
          }
        >
          {menuShuffleHotel === 6 ? (
            <Image
              // src={`${import.meta.env.VITE_ASSETS_URL}icons/pet/pet-w.svg`}
              alt="icon-pet-w"
            />
          ) : (
            <Image
              // src={`${import.meta.env.VITE_ASSETS_URL}icons/pet/pet-b.svg`}
              alt="icon-pet-b"
            />
          )}

          <span className="text-fs-15 m-m text-nowrap	">
            {languageData.hotelTypes.petFriendly}
          </span>
        </button>
      </div>

      {/* END MENU SHUFFLE */}

      {/*ONE SWIPER CARD BEST PRICE */}

      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        navigation
        modules={[Navigation]}
        className="mySwiper mb-3 pb-2"
        id="swiper-shuffle-hotel"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          390: {
            slidesPerView: 1.4,
          },
          500:{
            slidesPerView:1.8,
          },
          620:{
            slidesPerView:2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024:{
            slidesPerView: 3.5,
          },
          1280:{
            slidesPerView: 4,
          }
        }}
      >
        {[...Array(7)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="min-w-[266px] h-full cursor-pointer shadow-lg shadow-gry-50 rounded-xl max-w-[280px]">
              <div className="w-full h-[216px]">
                <Image
                  className="w-full h-full rounded-t-lg object-cover"
                  src="https://cdn.worldota.net/t/x500/content/53/d7/53d7b42e4a23bb1c3779fc15b5ae8b08fb17bfa1.jpeg"
                  alt="card"
                />
              </div>

              <div className="bottom-0 w-full h-1/4 rounded-b-lg pb-3 pt-2 px-4 bg-white">
                <div className="m-s-b pt-1 text-fs-14">
                  El Dorado Seaside Suite{" "}
                </div>

                <Rating className="my-1" name="read-only" value={2} style={{fontSize:"14px"}} readOnly size="small" />

                <div className="flex gap-1 mb-[11px]">
                  <Image
                    // src={`${import.meta.env.VITE_ASSETS_URL}icons/location/location-bl.svg`}
                    alt="icon-pet-b"
                    width={11}
                    height={14}
                  />
                  <span className="text-bl-100 m-s-b text-fs-10">Oaxaca</span>
                </div>

                <div className='flex justify-between border-t border-[#ebebeb] pt-[11px] items-center'>
                  <div className='flex flex-col'>
                    <span className='m-m text-gry-100 text-fs-10'>{languageData.cartTour.from}</span>
                    <span className='m-b text-or-100 text-fs-12'>MXN <span className="text-fs-16">$5,000</span></span>
                  </div>

                  <button className='m-s-b text-bl-100 text-fs-12 min-h-8 rounded-3xl border-2 border-bl-100 px-4 py-2 hover:bg-bl-100 hover:text-white text-nowrap'>{languageData.cartTour.seeDetails}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/*END ONE SWIPER CARD BEST PRICE */}

      {/* TWO SWIPER */}
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        navigation
        id="swiper-shuffle-hotel-pag"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper pb-10"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          390: {
            slidesPerView: 1.4,
          },
          500:{
            slidesPerView:1.8,
          },
          620:{
            slidesPerView:2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024:{
            slidesPerView: 3.5,
          },
          1280:{
            slidesPerView: 4,
          }
        }}
      >
        {[...Array(7)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="min-w-[266px] h-full cursor-pointer shadow-lg shadow-gry-50 rounded-xl max-w-[280px]">
              <div className="w-full h-[216px]">
                <Image
                  className="w-full h-full rounded-t-lg object-cover"
                  src="https://cdn.worldota.net/t/x500/content/53/d7/53d7b42e4a23bb1c3779fc15b5ae8b08fb17bfa1.jpeg"
                  alt="card"
                />
              </div>

              <div className="bottom-0 w-full h-1/4 rounded-b-lg pb-3 pt-2 px-4 bg-white">
                <div className="m-b text-fs-14 pt-1">
                  El Dorado Seaside Suite{" "}
                </div>

                <Rating className="my-1" name="read-only" value={2} readOnly size="small" />

                <div className="flex gap-1 mb-[11px]">
                  <Image
                    // src={`${import.meta.env.VITE_ASSETS_URL}icons/location/location-bl.svg`}
                    alt="icon-pet-b"
                  />
                  <span className="text-bl-100 m-s-b text-fs-12">Oaxaca</span>
                </div>

                <div className='flex justify-between border-t border-[#ebebeb] pt-[11px] items-center'>
                  <div className='flex flex-col'>
                    <span className='m-m text-gry-100 text-fs-12'>{languageData.cartTour.from}</span>
                    <span className='m-b text-or-100 text-fs-12'>MXN <span className="text-fs-16">$5,000</span></span>
                  </div>

                  <button className='m-s-b text-bl-100 text-fs-12 min-h-8 rounded-3xl border-2 border-bl-100 px-4 py-2 hover:bg-bl-100 hover:text-white text-nowrap'>{languageData.cartTour.seeDetails}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/*END TWO SWIPER */}
    </div>
  );
}
