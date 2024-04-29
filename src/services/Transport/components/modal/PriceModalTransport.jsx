"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import CancelPolicyTransport from '../ToulTip/CancelPolicyTransport'

export default function PriceModalTransport() {

  const [openPolicy, setOpenPolicy] = useState(false);

  return (
    <div className='py-[48px] pr-[48px]'>
      <div className='m-[16px] '>
        {/* CART VEHICLE*/}
        <div className='border border-[#ebebeb] rounded-lg p-[16px] mb-[24px] flex flex-col gap-[8px]'>
          <span className='m-s-b text-fs-20 '>Vehículo Standard Buss Lorem Ipsum</span>

          <div className='py-[8px] px-[16px] text-white bg-black rounded-full w-fit text-fs-12'>compartido</div>
          <img src={`${process.env.NEXT_PUBLIC_URL}banners/transport/transport-card.jpg`} alt='img-transport'></img>

          <div className='flex flex-wrap gap-[8px]'>

            <div className='flex gap-[8px]'>
              <Image src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-bl.svg`} alt='icon adult blue' width={12.8} height={13.4} />
              <span className='text-fs-12 m-m'>4/10 Personas</span>
            </div>

            <div className='flex gap-[8px]'>
              <Image src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-bl.svg`} alt='icon baggage blue' width={10.6} height={12.3} />
              <span className='text-fs-12 m-m'>2 Maletas</span>
            </div>

            <div className='flex gap-[8px]'>
              <Image src={`${process.env.NEXT_PUBLIC_URL}icons/general/usb.svg`} alt='icon usb' width={16} height={16} />
              <span className='text-fs-12 m-m'>Cargador</span>
            </div>

            <div className='flex gap-[8px]'>
              <Image src={`${process.env.NEXT_PUBLIC_URL}icons/air/air-bl.svg`} alt='icon air blue' width={13.3} height={13.3} />
              <span className='text-fs-12 m-m'>Aire acondicionado</span>
            </div>

            <div className='flex gap-[8px]'>
              <Image src={`${process.env.NEXT_PUBLIC_URL}icons/general/usb.svg`} alt='icon usb' width={16} height={16} />
              <span className='text-fs-12 m-m'>Seguro de viaje</span>
            </div>

            <div className='flex gap-[8px]'>
              <Image src={`${process.env.NEXT_PUBLIC_URL}icons/general/child-care.svg`} alt='icon child-care' width={12.8} height={13.4} />
              <span className='text-fs-12 m-m'>Silla para bebés </span>
            </div>


          </div>

          <div className='bg-grn-30 py-[8px] px-[15px] rounded-bl-lg'>
            <span className='text-grn-100 m-s-b text-fs-12'>El precio total se calcula sumando el costo individual de cada pasajero.</span>
          </div>
        </div>

        {/* PRICE */}
        <div className='flex flex-col gap-[8px]'>
          <div className='flex justify-between'>
            <span className='m-b text-fs-14'>Total:</span>

            <span className='m-b text-fs-14'>MXN <span className='text-fs-20'>$10,000</span></span>
          </div>

          <bottom className='py-[14px] bg-bl-100 text-white m-b text-fs-12 hover:bg-bl-110 rounded-full text-center'>Agregar al carrito</bottom>

          <div
            onMouseOver={() => setOpenPolicy(true)}
            onMouseLeave={() => setOpenPolicy(false)}
            className='text-center'
          >
            <span className="relative text-center text-fs-14 m-s-b text-bl-100 cursor-pointer relative">
              {/* {languageData.containerModalHotel.policies} */}
              politicas de cancelacion
              {openPolicy === true && <CancelPolicyTransport />}
            </span>

          </div>

        </div>
      </div>
    </div>
  )
}
