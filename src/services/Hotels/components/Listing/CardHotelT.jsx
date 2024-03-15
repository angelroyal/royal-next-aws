import React from 'react'
import { Rating } from "@mui/material";
import Image from 'next/image';

export default function CardHotelT() {
    return (
        //NEW CARD HOTEL TAILWIND /LP
        <div className='flex border border-gry-50 rounded mb-[10px] bg-white w-full h-[219px] gap-2'>
            {/* IMAGE CARD HOTEL */}
            <div className='w-[30%]'>
                <img
                    className="w-full h-full object-cover rounded-l-md"
                    src="https://cdn.worldota.net/t/x500/content/53/d7/53d7b42e4a23bb1c3779fc15b5ae8b08fb17bfa1.jpeg"
                    alt="card"
                />
            </div>

            <div className='w-[70%] p-[20px]'>
                {/* NAME AND STARS HOTEL */}
                <div>
                    <h2 className='text-fs-16 m-b mb-0'>Microtel inn and suites By Wyndham Culiacan</h2>
                    <Rating name="read-only" value={5} readOnly size="small" className='!text-fs-12'/>
                </div>

                <div className='flex'>
                    {/* INFO HOTEL*/}
                    <div className='w-3/5  pr-[23px]'>
                        <div className='flex gap-1 '>
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
                                width={16}
                                height={16}
                            />
                            <span className='m-b text-fs-12 text-gry-100 '>Muy solicitado</span>
                        </div>
                    </div>

                    {/* INFO PRICE */}
                    <div className='w-2/5 border-l border-gry-70 flex flex-col items-center pl-[23px]'>
                        <span className='m-b text-red-100 text-fs-12'>¡sólo quedan 3!</span>
                        <h2 className='m-b text-fs-16 flex items-center gap-1'><span className='text-fs-12'>desde </span>MXN $10,000</h2>
                        <div className='flex gap-1 mb-1 items-center'>
                            <del className='m-s-b text-gry-100 text-fs-10'>MXN $11,000</del>
                            <div className='bg-red-100 text-white text-fs-12 px-[5px] rounded-r-md'>10%</div>
                        </div>
                        <div className='m-b bg-[#E0FEF0] text-grn-100 text-fs-8 mb-3 py-[2px] px-[6px] rounded'>Impuestos incluidos</div>
                        <button className='bg-yw-100 text-black text-fs-12 m-b px-[40px] py-[5px] rounded-full hover:opacity-75'>Ver detalles</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
