import Image from 'next/image'
import React from 'react'

export default function ContactUs() {
    return (
        <div className='flex'>
            <img
                src="https://sandboxmexico.com/assets/icons/call/call-w.svg"
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} call icon`}
                width={17}
                height={18}
            />


        </div>
    )
}
