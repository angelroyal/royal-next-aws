import React, { useContext } from 'react'
import Image from 'next/image';
import { Rating } from "@mui/material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "../../../../assets/styles/general/Swiper.css";
import LanguageContext from '@/language/LanguageContext';
// import "./styles.css";

export default function CardHotelT() {
    const { languageData } = useContext(LanguageContext);
    return (
        //NEW CARD HOTEL TAILWIND /LP
        //  h-[219px]
        <div className='flex border border-gry-50 rounded-lg mb-[10px] bg-white w-full gap-2 my-[20px] max-md:flex-col'>

            {/* IMAGE CARD HOTEL */}
            <div className='w-[30%] relative max-md:w-full max-md:h-[225px]'>
                <Swiper
                    // spaceBetween={30}
                    id='card-hotel-t'
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className='!h-[87%] !rounded-tl-lg max-md:!rounded-t-lg'
                >
                    {[...Array(4)].map((_, index) => (
                        <SwiperSlide>
                            <img
                                key={index}
                                className="w-full h-full object-cover "
                                src="https://cdn.worldota.net/t/x500/content/53/d7/53d7b42e4a23bb1c3779fc15b5ae8b08fb17bfa1.jpeg"
                                alt="card"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Image
                    className="absolute z-[4] top-0"
                    src={`${process.env.NEXT_PUBLIC_URL}icons/info/offer-es.svg`}
                    alt="icon-solicited"
                    width={42}
                    height={91}
                />
                <div className='h-[13%] bg-black text-white m-b text-fs-12 flex items-center justify-center rounded-bl-lg max-md:rounded-none'>{languageData.optionsFilterHotel.allInclusive}</div>
            </div>

            <div className='w-[70%] p-[20px] max-md:w-full'>
                {/* NAME AND STARS HOTEL */}
                <div>
                    <h2 className='text-fs-16 m-b mb-0 truncate'>Microtel inn and suites By Wyndham Culiacan Microtel inn and suites By Wyndham Culiacan</h2>
                    <Rating name="read-only" value={5} readOnly size="small" className='!text-fs-12 !gap-[2px]' />
                </div>

                <div className='flex max-md:flex-col'>

                    {/* INFO HOTEL*/}
                    <div className='w-3/5  pr-[23px] max-md:w-full flex flex-col gap-[8px]'>
                        <div className='flex gap-1'>
                            <Image
                                className="w-[11px] h-[14px]"
                                src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
                                alt="icon-location"
                                width={11}
                                height={14}
                            />
                            <span className="text-bl-100 m-s-b text-fs-10">Culiacan, a 1km de Centro Histórico a 1km de Centro Histórico</span>
                        </div>

                        <span className='m-s-b text-fs-10 text-gry-100'>2 noches, 3 personas</span>

                        <p className='m-m text-fs-10 text-gry-70 !mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias repellendus saepe nam dignissimos inventore optio delectus soluta consectetur illo, nulla itaque eius ratione vel nemo animi illum reiciendis ea.</p>

                        <div className='flex bg-[#FFF0BD] px-[10px] py-[3px] items-center w-fit rounded-lg gap-1'>
                            <Image
                                className="w-4 h-4"
                                src={`${process.env.NEXT_PUBLIC_URL}icons/info/solicited.svg`}
                                alt="icon-solicited"
                                width={24}
                                height={25}
                            />
                            <span className='m-b text-fs-12 text-gry-100 px-[8px]'>{languageData.cardHotel.label}</span>
                        </div>
                    </div>

                    {/* INFO PRICE */}
                    <div className='w-2/5 border-l border-gry-[#ebebeb] flex flex-col pl-[23px] items-center justify-end max-md:w-full max-md:border-t max-md:border-l-0 max-md:mt-2 max-md:pt-2 max-md:flex-row max-md:justify-between max-md:pl-0'>
                        <div className='flex flex-col items-center '>
                            <span className='m-b text-red-100 text-fs-12'>¡{languageData.cardHotel.titleSpace} 3!</span>
                            <h2 className='m-b text-fs-16 flex items-center gap-1'><span className='m-s-b text-fs-12'>{languageData.cartTour.from} </span>MXN $100,000.00</h2>
                            <div className='flex gap-1 mb-1 items-center'>
                                <del className='m-s-b text-gry-100 text-fs-10'>MXN $11,000</del>
                                <div className='bg-red-100 text-white text-fs-12 px-[8px] py-[2px] rounded-r-md'>10%</div>
                            </div>
                            <div className='m-b bg-[#E0FEF0] text-grn-100 text-fs-8  py-[4px] px-[8px] rounded md:mb-3'>{languageData.cartTour.taxesText}</div>
                        </div>

                        <button className='bg-yw-100 text-black text-fs-12 m-b px-[40px] py-[5px] rounded-full hover:bg-yw-50 text-nowrap w-[160px] h-[32px]'>{languageData.cartTour.seeDetails}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
