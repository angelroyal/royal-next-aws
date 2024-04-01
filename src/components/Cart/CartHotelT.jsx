"use client";

import Image from 'next/image'
import React, { useState } from 'react'

export default function CartHotelT() {

    const [iconClose, setIconClose] = useState(null);

    return (
        <div className='absolute right-[-15px] top-[48px]'>
            <div className="relative p-[16px] pt-[25px] w-[416px] bg-white rounded-lg !shadow-[0_4px_48px_0_rgba(102,102,102,0.25)] z-[2] before:content-[' '] before:z-[4] before:w-[3rem] before:h-[3rem] before:block before:bg-[url(https://sandboxmexico.com/assets/icons/general/ellipse.svg)] before:absolute before:left-[88%] before:top-[-14px] before:bg-no-repeat">

                {/* TITLE AND BTN CLOSE */}
                <div className='flex justify-between border-b border-[#ebebeb] mb-[16px] pb-[25px]'>
                    <span className='m-b text-fs-16 text-[#1a202c]'>Revisa tu itinerario</span>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-100.svg`}
                        width={8}
                        height={8}
                        alt='icon-close'
                        className='mr-2'
                    />
                </div>

                <div className='max-h-[364px] overflow-y-auto scroll-page-gry'>
                    {/* CARD CART HOTEL */}
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className='flex rounded-lg hover:bg-[#efefef] mb-3 mr-[16px]'>

                            <div className='p-2 gap-4 flex justify-between w-full '>

                                {/* IMAGE CART */}
                                <img
                                    src="https://cdn.worldota.net/t/x500/content/53/d7/53d7b42e4a23bb1c3779fc15b5ae8b08fb17bfa1.jpeg"
                                    alt='img-cart-hotel'
                                    className='w-[100px] h-[100px] rounded-lg object-cover'
                                />

                                {/* INFO CART */}
                                <div className='w-full leading-4 flex flex-col justify-center'>
                                    <span className='m-m text-gry-100 text-fs-12 truncate w-[187px] '>Cancun</span>

                                    <span className='m-s-b text-fs-14 truncate w-[187px]'>Hotel Xcaret Cancun Cancun Cancun  Cancun Cancun Cancun</span>

                                    <div className='flex gap-2'>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
                                            width={12}
                                            height={12}
                                            alt='icon-calendar'
                                        />

                                        <span className=' m-m text-gry-100 text-fs-12 mb-[3px]'>12/03/2024 | 2:00pm</span>
                                    </div>

                                    <span className='m-s-b text-fs-14 text-or-100 mb-[3px]'>MXN $10,000</span>

                                    <div className='flex gap-3'>
                                        <div className='flex gap-2'>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_URL}icons/night/night-b.svg`}
                                                width={12}
                                                height={12}
                                                alt='icon-night'
                                            />
                                            <span className=' m-m text-fs-12 text-gry-100'>2</span>
                                        </div>

                                        <div className='flex gap-2'>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                                                width={12}
                                                height={12}
                                                alt='icon-room'
                                            />
                                            <span className='m-m text-fs-12 text-gry-100'>2</span>
                                        </div>

                                        <div className='flex gap-2'>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                                                width={12}
                                                height={12}
                                                alt='icon-dult'
                                            />
                                            <span className=' m-m text-fs-12 text-gry-100'>2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ICON DELETE */}
                            <div onMouseOver={() => setIconClose(index)} onMouseOut={() => setIconClose(null)} className={`${iconClose === index
                                ? "transition duration-500 ease-in-out bg-red-100"
                                : ""
                                } w-[48px] flex justify-center items-center rounded-r-lg cursor-pointer`}
                            >

                                {iconClose === index ? (
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-w.svg`}
                                        width={16}
                                        height={16}
                                        alt='icon-close-w'
                                    />
                                ) : (
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-r.svg`}
                                        width={16}
                                        height={16}
                                        alt='icon-close-r'
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                    {/* END CART HOTEL */}

                </div>

                {/* PRICE CART */}
                <div className='border-t border-[#ebebeb] mt-[16px] pt-[16px]'>
                    <div className='flex justify-between'>
                        <span className='text-fs-12 text-gry-100 m-m'>Subtotal</span>

                        <span className='text-fs-14 text-gry-100 m-m'>$12,000.00</span>
                    </div>

                    <div className='flex justify-between mb-[12px]'>
                        <span className='text-fs-12 text-gry-100 m-m'>impuestos</span>

                        <span className='text-fs-14 text-gry-100 m-m'>$500</span>
                    </div>

                    <div className='flex justify-between'>
                        <span className='text-fs-14 m-s-b'>Total</span>

                        <span className='text-fs-18 m-s-b'>$12,000.<sup>00</sup></span>
                    </div>

                    <div className='flex justify-end gap-[16px] mt-[16px]'>
                        <button className='text-fs-14 text-bl-100 m-s-b border-2 border-bl-100 rounded-full py-[12px] px-[16px] hover:bg-bl-100 hover:text-white'>Resetear carrito</button>
                        <button className='text-fs-14 text-white m-s-b bg-bl-100 rounded-full py-[12px] px-[16px] hover:bg-[#1b317d]'>Finalizar compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
