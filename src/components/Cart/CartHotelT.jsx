import Image from 'next/image'
import React from 'react'

export default function CartHotelT() {
    return (
        <div className='p-4'>
            {/* TITLE AND BTN CLOSE */}
            <div className='flex justify-between border-b border-[#ebebeb] mb-4 pb-4'>
                <h4>Revisa tu itinerario</h4>
                <Image
                    src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-100.svg`}
                    width={8}
                    height={8}
                    alt='icon-close'
                />
            </div>

            {/*  */}

        </div>
    )
}
