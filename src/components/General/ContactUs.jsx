import Image from 'next/image'
import React from 'react'

export default function ContactUs() {
    return (
        <div className='flex'>
            <div className='bg-bl-100 w-[60px] h-[60px] rounded-full flex justify-center items-center'>
                <div className='bg-bl-100 p-3 rounded-full border border-white'>
                    <img
                        src="https://sandboxmexico.com/assets/icons/call/call-w.svg"
                        alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} call icon`}
                        width={18}
                        height={18}
                    />
                </div>
            </div>

            <span >Contáctanos</span>


        </div>
    )
}
