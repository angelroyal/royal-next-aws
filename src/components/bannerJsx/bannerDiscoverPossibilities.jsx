"use client";
import React, { useContext } from 'react'
import LanguageContext from '@/language/LanguageContext'

export default function BannerDiscoverPossibilities() {
    const { languageData } = useContext(LanguageContext); 
    return (
        <div className='relative w-full flex items-center my-32 max-lg:items-start '>

            <img src={ `${process.env.NEXT_PUBLIC_URL}banners/transport/banner-baggage.jpg`} alt='banner baggage' className='w-full max-lg:hidden select-none'/>
            <img src={ `${process.env.NEXT_PUBLIC_URL}banners/transport/banner-baggage-mobile.jpg`} alt='banner baggage mobile' className='lg:hidden w-full h-[822px] select-none'/>

            <div className='absolute flex flex-col ml-[60px] max-lg:mx-[40px] max-lg:mt-[90px] max-sm:mt-[40px]'>
                <h2 className='m-b text-fs-34 '>{languageData.bannerTransportHome.discoverOptions}</h2>
                <span className='m-s-b text-fs-16 w-[70%] mt-[10px]'>{languageData.bannerTransportHome.getKnowBetter}</span>

                <div className='flex gap-2 mt-[35px] max-lg:flex-col'>
                    <input type="text" placeholder={languageData.alertHelp.name}  className='h-[44px] rounded-[4px] w-[257px] pl-[10px] m-s-b text-fs-12 max-lg:w-full focus:outline-none italic'/>
                    <input type="tel" placeholder={languageData.alertHelp.number} className='h-[44px] pl-[10px] w-[257px] rounded-[4px] m-s-b text-fs-12 max-lg:w-full focus:outline-none italic'/>
                    <bottom className='bg-bl-100 text-white px-[40px] py-[10px] hover:bg-bl-110 rounded-full flex items-center justify-center max-lg:w-full cursor-pointer'>{languageData.bannerTransportHome.sendBtn}</bottom>
                </div>
            </div>

        </div>
    )
}
