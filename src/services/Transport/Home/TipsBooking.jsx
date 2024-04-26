"use client";
import Image from 'next/image'
import React, { useContext } from 'react'
import LanguageContext from '@/language/LanguageContext'

export default function TipsBooking() {
    const { languageData } = useContext(LanguageContext);
    return (
        <div className='flex flex-col items-center my-32'>
            <h3 className='m-b text-fs-24 max-sm:text-center'>{languageData.tipsBooking.titleBookSteps}</h3>

            <div className='flex gap-[16px] max-md:flex-col overflow-x-clip scroll-page-gry max-[991px]:gap-0'>

                {/* LOCATION */}
                <div className='flex flex-col p-[20px] items-center  w-[165px]'>
                    <div className='p-[4px] bg-white shadow-3xl mb-[16px]'>
                        <div className='bg-gry-50 w-[80px] h-[80px] flex items-center justify-center border-2 border-white rounded-lg'>
                            <Image src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-on-bl.svg`}
                                alt='icon-location'
                                width={24}
                                height={30}
                                className='w-[24px] h-[30px]' />
                        </div>
                    </div>

                    <span className='mb-[8px] text-fs-14px m-s-b text-nowrap'>{languageData.tipsBooking.chooseLocation}</span>
                    <span className='text-gry-100 text-fs-12 text-center'>Lorem ipsum dolor sit amet</span>
                </div>

                {/* LINE TOP DASHED */}
                {/* <div className=' w-[116px] h-[109px] border-dashed border-t-4 border-gry-50 rounded-full mt-[43px] max-md:mt-0 max-md:border-r-4 max-md:border-t-0'></div> */}
                <img src={`${process.env.NEXT_PUBLIC_URL}icons/general/dashed-up.svg`} alt='icon-dashed-up' className='pb-[6rem] max-md:hidden max-[991px]:w-[80px]' />
                <img src={`${process.env.NEXT_PUBLIC_URL}icons/general/dashed-right.svg`} alt='icon-dashed-right' className='md:hidden w-[30px] ml-[73px]' />


                {/* CALENDAR */}
                <div className='flex flex-col p-[20px] items-center w-[165px]'>
                    <div className='p-[4px] bg-white mb-[16px] shadow-3xl'>
                        <div className='bg-or-100 w-[80px] h-[80px] flex items-center justify-center border-2 border-white rounded-lg'>
                            <Image src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-done-w.svg`}
                                alt='icon-location'
                                width={27}
                                height={30}
                                className='w-[27px] h-[30px]' />
                        </div>
                    </div>

                    <span className='mb-[8px] text-fs-14px m-s-b text-nowrap'>{languageData.tipsBooking.pickUpDate}</span>
                    <span className='text-gry-100 text-fs-12 text-center'>Lorem ipsum dolor sit amet</span>
                </div>

                {/* LINE BOTTOM DASHED */}
                {/* <div className=' w-[116px] border-dashed border-b-4 border-gry-50 rounded-full h-[109px] max-md:border-l-4 max-md:border-b-0 max-md:ml-[47px]'></div> */}
                <img src={`${process.env.NEXT_PUBLIC_URL}icons/general/dashed-down.svg`} alt='icon-dashed-down' className='pb-[5.5rem] max-md:hidden max-[991px]:w-[80px]' />
                <img src={`${process.env.NEXT_PUBLIC_URL}icons/general/dashed-left.svg`} alt='icon-dashed-left' className='md:hidden w-[30px] ml-[45px] ' />

                {/* AIRPORT */}
                <div className='flex flex-col p-[20px] items-center w-[165px]'>
                    <div className='p-[4px] bg-white mb-[16px] shadow-3xl'>
                        <div className='bg-gry-50 w-[80px] h-[80px] flex items-center justify-center border-2 border-white rounded-lg'>
                            <Image src={`${process.env.NEXT_PUBLIC_URL}icons/general/airport-bl.svg`}
                                alt='icon-location'
                                width={33}
                                height={21}
                                className='w-[33px] h-[21px]' />
                        </div>
                    </div>

                    <span className='mb-[8px] text-fs-14px m-s-b text-nowrap' >{languageData.tipsBooking.bookCar}</span>
                    <span className='text-gry-100 text-fs-12 text-center'>Lorem ipsum dolor sit amet</span>
                </div>

            </div>
        </div>
    )
}
