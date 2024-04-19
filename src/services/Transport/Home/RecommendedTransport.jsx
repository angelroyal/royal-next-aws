"use client";
import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../assets/styles/general/Swiper.css";

export default function RecommendedTransport() {
  return (
    <>

      <div>

        {/* TITLE RECOMMENDED TRANSPORT */}
        <h2 className='mb-[32px] text-fs-24 m-b'>Opciones recomendadas</h2>
        {/* TITLE RECOMMENDED TRANSPORT */}

        <Swiper
          slidesPerView={3}
          spaceBetween={16}
          id="swiper-banner-home-tour"
          initialSlide={0}
        >

          {/* ONE CARD TRANSPORT */}
          {[...Array(2)].map((_, index) => (

            <SwiperSlide>
              <div className='flex flex-col gap-2 p-[16px] w-[248px] border-2 border-[#EBEBEB] rounded-lg bg-white'>
                <Image src={`${process.env.NEXT_PUBLIC_URL}banners/transport/transport-card.jpg`} width={216} height={164} />

                <span className='text-fs-16 m-b mt-[16px]'>Vehiculo Standard</span>

                <span className='text-gry-100 text-fs-14 m-m'>Caracteristicas</span>

                <div className='flex flex-wrap mb-[6px] gap-2'>
                  <div className='flex gap-2'>
                    <Image src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`} width={12.8} height={13.4} />
                    <span className='m-m text-fs-12'>4 personas</span>
                  </div>

                  <div className='flex gap-2'>
                    <Image src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`} width={14} height={13} />
                    <span className='m-m text-fs-12'>Modelo:KSDSDF</span>
                  </div>

                  <div className='flex gap-2'>
                    <Image src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`} width={12.1} height={14.1} />
                    <span className='m-m text-fs-12'>2 Maletas</span>
                  </div>
                </div>

                <span className='text-gry-100 text-fs-12 m-m'>Modalidades</span>

                <div className='flex gap-2 mb-[15.5px]'>
                  <div className='bg-gry-50 text-gry-100 rounded-full px-[8px] py-[4px] m-s-b text-fs-12'>Privado</div>
                  <div className='bg-gry-50 text-gry-100 rounded-full px-[8px] py-[4px] m-s-b text-fs-12'>Compartido</div>
                </div>

                <div className='flex flex-col gap-2 border-t-2 border-[#EBEBEB] items-center'>
                  <bottom className='px-[71.5px] py-[14px] text-fs-12 text-white bg-bl-100 rounded-full hover:bg-bl-110 w-fit mt-[15.5px]'>Ver detalles</bottom>

                  <span className='text-bl-100 text-fs-10'>politicas de cancelacion</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CARD TRANSPORT */}
        {/* <div className='flex flex-col gap-2 p-[16px] w-[248px] border-2 border-[#EBEBEB] rounded-lg'>
        <Image src={`${process.env.NEXT_PUBLIC_URL}banners/transport/transport-card.jpg`} width={216} height={164} />

        <span className='text-fs-16 m-b mt-[16px]'>Vehiculo Standard</span>

        <span className='text-gry-100 text-fs-14 m-m'>Caracteristicas</span>

        <div className='flex flex-wrap mb-[6px] gap-2'>
          <div className='flex gap-2'>
            <Image src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`} width={12.8} height={13.4} />
            <span className='m-m text-fs-12'>4 personas</span>
          </div>

          <div className='flex gap-2'>
            <Image src={`${process.env.NEXT_PUBLIC_URL}icons/transport/transport-b.svg`} width={14} height={13} />
            <span className='m-m text-fs-12'>Modelo:KSDSDF</span>
          </div>

          <div className='flex gap-2'>
            <Image src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`} width={12.1} height={14.1} />
            <span className='m-m text-fs-12'>2 Maletas</span>
          </div>
        </div>

        <span className='text-gry-100 text-fs-12 m-m'>Modalidades</span>

        <div className='flex gap-2 mb-[15.5px]'>
          <div className='bg-gry-50 text-gry-100 rounded-full px-[8px] py-[4px] m-s-b text-fs-12'>Privado</div>
          <div className='bg-gry-50 text-gry-100 rounded-full px-[8px] py-[4px] m-s-b text-fs-12'>Compartido</div>
        </div>

        <div className='flex flex-col gap-2 border-t-2 border-[#EBEBEB] items-center'>
          <bottom className='px-[71.5px] py-[14px] text-fs-12 text-white bg-bl-100 rounded-full hover:bg-bl-110 w-fit mt-[15.5px]'>Ver detalles</bottom>

          <span className='text-bl-100 text-fs-10'>politicas de cancelacion</span>
        </div>
      </div> */}
        {/*END CARD TRANSPORT */}
      </div>
    </>
  )
}
