"use client";
import { Container } from '@/config/Others/Container';
import LanguageContext from '@/language/LanguageContext';
import Lottie from 'lottie-react';
import React, { useContext } from 'react'
import animationData from "@/assets/animations/error-404.json";

export default function Page404() {
    const { languageData } = useContext(LanguageContext)

    return (

        <Container>
            <div className='flex'>
                <Lottie className="m-[3rem]" animationData={animationData} />

                <div className='ml-[3rem] flex flex-col justify-center items-start'>
                    <div className="m-b text-fs-24 text-bl-100">{languageData.pageError.titleAlert}</div>
                    <div className="m-s-b text-fs-20 text-black mb-1">{languageData.pageError.textAlert}</div>

                    <a
                        href={`${process.env.NEXT_PUBLIC_HOME}`}
                    >
                        <button className="cursor-pointer mt-[3rem] px-[50px] py-[13px] rounded-full border-2 border-bl-100 text-bl-100 hover:bg-bl-100 hover:text-white">{languageData.pageError.confirmButton}</button>
                    </a>

                </div>
            </div>
        </Container>
    )
}
