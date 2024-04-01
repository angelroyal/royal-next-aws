"use client";
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import CartHotelT from './CartHotelT';

export default function CartOpen() {

    const [openCart, setOpenCart] = useState(false);

    const cambiarEstado = () => { setOpenCart(!openCart); }
    const ref = useRef(null);

    useEffect(() => {
        // Agregar un event listener cuando el componente se monta
        document.addEventListener('click', handleClickOutside);
    
        // Limpiar el event listener cuando el componente se desmonta
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);
    
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          // Si el clic ocurrió fuera del div, cierra el div
          setOpenCart(false);
        }
      };

    return (
        
        <div ref={ref} className='relative'>
            <Image
                onClick={() => setOpenCart(cambiarEstado)}
                src={`${process.env.NEXT_PUBLIC_URL}icons/cart/cart-b.svg`}
                width={26}
                height={22}
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
