"use client";

import React from 'react'
import Image from 'next/image'
import CartTourT from './CartTourT';
import CartHotelT from './CartHotelT';


export default function CartT({ closeCart }) {

    return (
        <>
            <div className='absolute right-[-15px] top-[48px] max-sm:hidden'>

                <div className="relative p-[16px] pt-[25px] w-[416px] bg-white rounded-lg !shadow-[0_4px_40px_0_rgba(102,102,102,0.25)] z-[2] before:content-[' '] before:z-[4] before:w-[3rem] before:h-[3rem] before:block before:bg-[url(https://sandboxmexico.com/assets/icons/general/ellipse.svg)] before:absolute before:left-[88%] before:top-[-14px] before:bg-no-repeat">

                    {/* TITLE AND BTN CLOSE */}
                    <div className='flex justify-between border-b border-[#ebebeb] mb-[16px] pb-[25px]'>
                        <span className='m-b text-fs-16 text-[#1a202c]'>Revisa tu itinerario</span>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-100.svg`}
                            width={8}
                            height={8}
                            alt='icon-close'
                            className='mr-2 cursor-pointer'
                            onClick={() => closeCart()}
                        />
                    </div>

                    <div className='max-h-[364px] overflow-y-auto scroll-page-gry'>

                        <CartHotelT />

                        <CartTourT />

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
        </>
    )
}
