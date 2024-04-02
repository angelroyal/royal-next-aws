"use client";

import Image from 'next/image';
import React, { useState } from 'react'

export default function CartTourT() {

    const [iconDelete, setIconDelete] = useState(null);

    return (
        <div>
            
            {/* CARD CART TOUR */}
            {[...Array(2)].map((_, index) => (
                <div key={index} className='flex rounded-lg hover:bg-[#efefef] mb-3 mr-[16px]'>

                    <div className='p-2 gap-4 flex justify-between w-full '>

                        {/* IMAGE CART */}
                        <img
                            src="https://cdn.worldota.net/t/x500/content/53/d7/53d7b42e4a23bb1c3779fc15b5ae8b08fb17bfa1.jpeg"
                            alt='img-cart-tour'
                            className='w-[100px] h-[100px] rounded-lg object-cover'
                        />

                        {/* INFO CART */}
                        <div className='w-full leading-4 flex flex-col justify-center'>
                            <span className='m-m text-gry-100 text-fs-12 truncate w-[187px] '>Tulum</span>

                            <span className='m-s-b text-fs-14 truncate w-[187px]'>Paseo en la costa Tulum Tulum Tulum Tulum Tulum</span>

                            <div className='flex gap-2 mb-[3px]'>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
                                    width={12}
                                    height={12}
                                    alt='icon-calendar'
                                />

                                <span className=' m-m text-gry-100 text-fs-12'>12/03/2024 | 2:00pm</span>
                            </div>

                            <span className='m-s-b text-fs-14 text-or-100 mb-[3px]'>MXN $1,000</span>

                            <div className='flex gap-3'>

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
                    <div onMouseOver={() => setIconDelete(index)} onMouseOut={() => setIconDelete(null)} className={`${iconDelete === index
                        ? "transition duration-500 ease-in-out bg-red-100"
                        : ""
                        } w-[48px] flex justify-center items-center rounded-r-lg cursor-pointer`}
                    >

                        {iconDelete === index ? (
                            <Image
                                src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-w.svg`}
                                width={16}
                                height={16}
                                alt='icon-delete-w'
                            />
                        ) : (
                            <Image
                                src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-r.svg`}
                                width={16}
                                height={16}
                                alt='icon-delete-r'
                            />
                        )}
                    </div>
                </div>
            ))}
            {/* END CART TOUR */}
        </div>
    )
}
