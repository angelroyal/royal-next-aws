"use client";

import Lottie from 'lottie-react';
import React, { useContext } from 'react'

import LanguageContext from '@/language/LanguageContext';
import animationFailure from "@/assets/animations/failure.json";
import animationSuccess from "@/assets/animations/success.json";

export default function LottiePayment() {

    const isSuccess = true;
    const { languageData } = useContext(LanguageContext);

    return (

        <div className='bg-white rounded-lg shadow-3xl px-[24px] pt-[24px] pb-[48px] w-[423px] h-[485px] flex flex-col items-center justify-end relative max-sm:w-full'>

            <img
                src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-70.svg`}
                width={12}
                height={12}
                alt="icon-close"
                className="cursor-pointer absolute top-[20px] right-[20px]"
            />

            {isSuccess ?
                <>
                    <Lottie className="w-[185px] h-[185px] mb-[20px]" animationData={animationSuccess} />

                    <span className='text-fs-20 m-s-b text-grn-100 mb-[8px]'>{languageData.alertsPayment.textAlert.PE}</span>

                    <p className='text-fs-12 m-m text-gry-100 text-center mb-[24px]'>{languageData.alertsPayment.textSuccess}</p>

                    <button className='text-white bg-grn-100 rounded-full px-[16px] py-[14px] text-fs-12 m-s-b hover:bg-grn-70'>{languageData.alertsPayment.btnUnderstood}</button>
                </>

                :
                <>
                    <Lottie className="w-[185px] h-[185px] mb-[38px]"  animationData={animationFailure} />

                    <span className='text-fs-20 m-s-b text-red-100 mb-[8px]'>{languageData.alertsPayment.textAlert.PD}</span>

                    <p className='text-fs-12 m-m text-gry-100 text-center mb-[24px]'>{languageData.alertsPayment.textDeclinedPayment}</p>


                    <button className='text-white bg-red-100 rounded-full px-[16px] py-[14px] text-fs-12 m-s-b hover:bg-red-110'>{languageData.alertsPayment.btnRetry}</button>
                </>
            }

        </div>
    )
}
