"use client"

import { Rating } from "@mui/material";
import { Image } from 'react-bootstrap';
import React, { useContext } from 'react'
import LanguageContext from '@/language/LanguageContext'
import { homeRecommendedTour } from '@/config/Others/HomeRecommendedTour';

import "swiper/css";

export default function TopActivities() {
    const { languageData } = useContext(LanguageContext);
    const tour = (homeRecommendedTour);

    return (
        <>
            <div className='mb-9'>

                {/* TITLE TOP ACTIVITIES */}
                <h2 className="m-b text-black text-fs-26 mb-1">
                    {languageData.SearchBox.tabTour.topActivity}
                </h2>

                <span className="m-m text-fs-16 text-gry-100">
                    {languageData.SearchBox.tabTour.subtitleTopActivities}
                </span>
            </div>

            {/* FIX BOOSTRAP 16px*/}
            <div className='flex flex-wrap gap-[16px] justify-between max-lg:justify-around'>

                {tour.slice(0, 12).map((tour, index) => (

                    // CARD TOP ACTIVITIES TOUR
                    <div key={index} className="!w-fit !rounded-lg">
                        <div className="min-w-[266px] h-full cursor-pointer shadow-md shadow-gry-30 rounded-xl max-w-[300px] relative">
                            <div className="w-full h-[216px]">

                                <img
                                    className="w-full h-full rounded-t-lg object-cover select-none"
                                    src={tour.image}
                                    alt="card"
                                />

                                <p className="absolute m-b text-fs-10 text-gry-100 top-[2%] right-[2%] py-[14px] px-[10px] rounded-lg bg-[#EBEBEB] bg-opacity-70">
                                    <span>{languageData.cartTour.duration} </span>
                                    {tour.duration}
                                </p>
                            </div>

                            <div className="w-full rounded-b-lg pb-3 pt-2 px-4 bg-white flex flex-col">

                                <div className="m-s-b pt-1 text-fs-14 text-start truncate">
                                    {tour.spanishName}{" "}
                                </div>

                                <Rating className="my-1" name="read-only" value={tour.category} style={{ fontSize: "14px" }} readOnly size="small" />

                                <div className="flex gap-1 mb-[26px]">
                                    <Image
                                        className="w-auto h-auto"
                                        src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
                                        alt="icon-location"
                                        width={11}
                                        height={14}
                                    />
                                    <span className="text-bl-100 m-s-b text-fs-12">{tour.spanishDestination}</span>
                                </div>

                                <div className='flex justify-between border-t border-[#ebebeb] pt-[11px] items-center'>
                                    <div className='flex flex-col'>
                                        <span className='m-m text-black text-fs-12 text-start'>{languageData.cartTour.from}</span>
                                        <span className='m-b text-or-100 text-fs-14'>MXN <span className="text-fs-16">${tour.price}</span></span>
                                    </div>

                                    <button className='m-s-b text-black text-fs-12 min-h-8 rounded-3xl border-2 border-bl-100 px-4 py-2 hover:bg-bl-100 hover:!text-white text-nowrap'>{languageData.cartTour.seeDetails}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    //END CARD TOP ACTIVITIES TOUR
                ))}
            </div>
        </>
    )
}

