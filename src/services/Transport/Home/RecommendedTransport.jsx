"use client";

import "swiper/css";
import Image from "next/image";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../assets/styles/general/Swiper.css";

export default function RecommendedTransport() {
  return (
    <>

      <div className="relative">

        {/* TITLE RECOMMENDED TRANSPORT */}
        <h2 className='mb-[32px] text-fs-24 m-b'>Opciones recomendadas</h2>
        {/* TITLE RECOMMENDED TRANSPORT */}

        <Swiper
          slidesPerView={5}
          spaceBetween={24}
          className="!static"
          navigation
          modules={[Navigation]}
          id="swiper-recommended-transport"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            350: {
              slidesPerView: 1.5,
            },
            580: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1250: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 4.5,
            },
          }}
        >

          {/* CARD TRANSPORT */}
          {[...Array(8)].map((_, index) => (

            <SwiperSlide key={index}>
              <div className='flex flex-col gap-2 p-[16px] border-2 border-[#EBEBEB] rounded-lg bg-white'>
                <Image src={`${process.env.NEXT_PUBLIC_URL}banners/transport/transport-card.jpg`} width={216} height={164} alt="test card" className="select-none"/>

                <span className='text-fs-16 m-b mt-[16px]'>Vehiculo Standard</span>

                <span className='text-gry-100 text-fs-14 m-m'>Caracteristicas</span>

                <div className='flex flex-wrap mb-[6px] gap-2'>
                  <div className='flex gap-2'>
                    <Image src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`} width={12.8} height={13.4} alt="icon adult"/>
                    <span className='m-m text-fs-12'>4 personas</span>
                  </div>

                  <div className='flex gap-2'>
                    <Image src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`} width={14} height={13} alt="icon transport"/>
                    <span className='m-m text-fs-12'>Modelo:KSDSDF</span>
                  </div>

                  <div className='flex gap-2'>
                    <Image src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`} width={12.1} height={14.1} alt="icon baggage"/>
                    <span className='m-m text-fs-12'>2 Maletas</span>
                  </div>
                </div>

                <span className='text-gry-100 text-fs-12 m-m'>Modalidades</span>

                <div className='flex gap-2 mb-[15.5px]'>
                  <div className='bg-gry-50 text-gry-100 rounded-full px-[8px] py-[4px] m-s-b text-fs-12'>Privado</div>
                  <div className='bg-gry-50 text-gry-100 rounded-full px-[8px] py-[4px] m-s-b text-fs-12'>Compartido</div>
                </div>

                <div className='flex flex-col gap-2 border-t-2 border-[#EBEBEB] items-center'>
                  <bottom className='px-[71.5px] py-[14px] text-fs-12 text-white bg-bl-100 rounded-full hover:bg-bl-110 w-fit mt-[15.5px] text-nowrap cursor-pointer'>Ver detalles</bottom>

                  <span className='text-bl-100 text-fs-10'>politicas de cancelacion</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/*END CARD TRANSPORT */}
      </div>
    </>
  )
}
