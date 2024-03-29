"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import CartHotelT from './CartHotelT';
export default function CartOpen() {

    const [openCart, setOpenCart] = useState(false);

    const cambiarEstado = () => { setOpenCart(!openCart); }

    return (
        
        <div className='relative'>
            <Image
                onClick={() => setOpenCart(cambiarEstado)}
                src={`${process.env.NEXT_PUBLIC_URL}icons/cart/cart-b.svg`}
                width={31}
                height={29}
                alt='icon-cart'
                className={`transition ${
                    openCart ? 'duration-700 ease-in-out' : 'opacity-80 visible'
                  }`}
            />
            {openCart === true ? (
                <CartHotelT/>
            ) : (
                ""
            )}

        </div>
    )
}
