"use client";

import Lottie from 'lottie-react';
import React, { useContext } from 'react'

import LanguageContext from '@/language/LanguageContext';
import animationLoading from "@/assets/animations/loadingFly.json";

export default function LottieProcessing() {

    const { languageData } = useContext(LanguageContext);

    return (
        <div className='bg-white rounded-lg shadow-3xl px-[24px] pt-[12px] pb-[47px] w-[423px] h-[485px] flex flex-col items-center gap-[8px] max-sm:w-full'>

            <Lottie className="w-[300px] h-[300px]" animationData={animationLoading} />

            <span className='text-fs-20 m-s-b'>{languageData.alertsPayment.textAlert.PP}...</span>

            <div className='flex gap-[6px] items-center'>
                <img
                    src={`${process.env.NEXT_PUBLIC_URL}icons/general/encrypted.svg`}
                    alt='icon encrypted'
                />

                <span className='text-fs-12 text-grn-100 m-s-b'>{languageData.alertsPayment.dataSafe}</span>
            </div>

            <p className='text-fs-12 text-gry-100 m-m text-center'>{languageData.alertsPayment.textProcessing}</p>

        </div>
    )
}
