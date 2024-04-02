"use client";

import React, { useEffect, useRef, useState } from 'react'

import CartT from './CartT';
import Image from 'next/image'
import CartMobile from './CartMobile';

export default function CartOpen() {

  const [openCart, setOpenCart] = useState(false);

  // const changeBoolean = () => { setOpenCart(!openCart); }

  const ref = useRef(null);

  useEffect(() => {
    // ADD AN EVENT LISTENER
    document.addEventListener('click', handleClickOutside);

    // CLEAR THE EVENT LISTENER
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  //CLICK OCCURRED OUTSIDE THE DIVE, CLOSE THE DIV 
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpenCart(false);
    }
  };

  return (

    <div ref={ref} className='relative'>

      <Image
        onClick={() => setOpenCart(!openCart)}
        src={`${process.env.NEXT_PUBLIC_URL}icons/cart/cart-b.svg`}
        width={26}
        height={22}
        alt='icon-cart'
        className="cursor-pointer hover:drop-shadow-xl"
      />
      {openCart && <CartMobile closeCart={() => setOpenCart(false)} />}

      <div className={`transition-opacity ease-in duration-300 ${openCart ? 'opacity-100' : 'opacity-0'}`}>
        {/* {openCart === true && (<CartHotelT closeCart={() => setOpenCart(false)} />)} */}
        {openCart && <CartT closeCart={() => setOpenCart(false)} />}
      </div>

    </div>
  )
}
