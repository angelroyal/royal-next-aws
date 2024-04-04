import Image from 'next/image'
import React from 'react'
export default function EmptyCart() {
  return (
    <div className='flex flex-col items-center'>
      <Image
        src={`${process.env.NEXT_PUBLIC_URL}royal/fly-gry.svg`} 
        alt='fly-gry'
        width={72} 
        height={65}
        className='mb-6 mt-2'
        />

      <h4 className='m-b text-fs-14 mb-2'>Tu itinerario está vacio</h4>

      <span className='m-m text-gry-100 text-fs-12 mb-6'>Empieza a planear tu siguiente aventura</span>

      <button className='m-s-b text-fs-12 text-white bg-bl-100 px-4 py-3 hover:bg-bl-110 rounded-full mb-12'>Comenzar ahora</button>
    </div>
  )
}
