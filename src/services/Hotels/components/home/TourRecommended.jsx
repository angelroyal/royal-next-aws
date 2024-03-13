import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import LanguageContext from '../../../../language/LanguageContext';
import Image from 'next/image';
export default function CartTourOptions() {
  const { languageData } = useContext(LanguageContext);
  return (
    <>
      <div className='mb-10'>
        <h2 className="m-b text-center text-fs-24 mb-2">{languageData.TourRecommended.title}</h2>
        <div className="flex w-full text-center justify-center">
          <div className="m-m text-gry-100 w-4/5">{languageData.TourRecommended.subtitle} 
          <b className="text-black">{languageData.TourRecommended.subtitle2}</b> 
          {languageData.TourRecommended.subtitle3}</div>
        </div>
      </div>

      <Swiper
      
        slidesPerView={5}
        spaceBetween={20}
        className="mySwiper !pb-10"
        id="swiper-shuffle-hotel"
        pagination={{
          clickable: true,
        }}

        modules={[Pagination]}

        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          390: {
            slidesPerView: 2,
          },
          570: {
            slidesPerView: 2.5,
          },
          700: {
            slidesPerView: 3,
          },
          846: {
            slidesPerView: 4,
          },
          1286: {
            slidesPerView: 5,
          },
          1440: {
            slidesPerView: 6,
          },


        }}
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white w-fit max-w-[185px] cursor-pointer shadow-md shadow-gry-70 border border-gry-50 rounded-md p-4 pb-6 flex flex-col justify-center items-center mx-1">
              <div className="w-[132px] h-[132px] mb-3">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src="https://cdn.worldota.net/t/x500/content/53/d7/53d7b42e4a23bb1c3779fc15b5ae8b08fb17bfa1.jpeg"
                  alt="card"
                />

              </div>

              <h2 className="flex justify-center text-fs-14 mb-2 text-center m-s-b"><b>Excursion a las Grutas</b></h2>

              <div className="flex justify-center gap-1">
                <Image src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`} width={9.5} height={12.1} alt="icon-location-b" />
                <span className="m-m text-gry-100 text-fs-12 truncate ...">Baja California Sur</span>
              </div>
            </div>
          </SwiperSlide>
        ))}


      </Swiper>

    </>
  )
}
