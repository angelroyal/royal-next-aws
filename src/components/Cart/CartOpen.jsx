"use client";
import Image from 'next/image'
import CartHotelT from './CartHotelT';
import React, { useEffect, useRef, useState } from 'react'

export default function CartOpen() {

  const [openCart, setOpenCart] = useState(false);

  const changeBoolean = () => { setOpenCart(!openCart); }

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
        onClick={() => setOpenCart(changeBoolean)}
        src={`${process.env.NEXT_PUBLIC_URL}icons/cart/cart-b.svg`}
        width={26}
        height={22}
        alt='icon-cart'
        className="transition cursor-pointer hover:drop-shadow-xl"
      />

      {openCart === true ? (
        <CartHotelT />
      ) : (
        ""
      )}

    </div>
  )
}
