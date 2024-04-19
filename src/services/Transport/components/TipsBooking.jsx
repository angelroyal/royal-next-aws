import React from 'react'

export default function TipsBooking() {
    return (
        <div className='flex flex-col items-center'>
            <h3>Reserva tu traslado en 3 pasos</h3>
            <div className='flex gap-[16px]'>

                {/* LOCATION */}
                <div className='flex flex-col p-[20px] items-center  w-[165px]'>
                    <div className='p-[4px] bg-white shadow-3xl mb-[16px]'>
                        <div className='bg-gry-50 w-[80px] h-[80px] flex items-center justify-center border-2 border-white rounded-lg'>
                            <img src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-on-bl.svg`} alt='icon-location'></img>
                        </div>
                    </div>

                    <span className='mb-[8px] text-fs-14px m-s-b text-nowrap'>Elige la ubicación</span>
                    <span className='text-gry-100 text-fs-12 text-center'>Lorem ipsum dolor sit amet</span>
                </div>

                {/* LINE TOP DASHED */}
                <div className=' w-[116px] border-dashed border-t-4 border-gry-50 rounded-full mt-[43px]'></div>

                {/* CALENDAR */}
                <div className='flex flex-col p-[20px] items-center w-[165px]'>
                    <div className='p-[4px] bg-white mb-[16px] shadow-3xl'>
                        <div className='bg-or-100 w-[80px] h-[80px] flex items-center justify-center border-2 border-white rounded-lg'>
                            <img src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-done-w.svg`} alt='icon-location'></img>
                        </div>
                    </div>

                    <span className='mb-[8px] text-fs-14px m-s-b text-nowrap'>Fecha de recolección</span>
                    <span className='text-gry-100 text-fs-12 text-center'>Lorem ipsum dolor sit amet</span>
                </div>

                {/* LINE BOTTOM DASHED */}
                <div className=' w-[116px] border-dashed border-b-4 border-gry-50 rounded-full h-[109px]'></div>

                {/* AIRPORT */}
                <div className='flex flex-col p-[20px] items-center w-[165px]'>
                    <div className='p-[4px] bg-white mb-[16px] shadow-3xl'>
                        <div className='bg-gry-50 w-[80px] h-[80px] flex items-center justify-center border-2 border-white rounded-lg'>
                            <img src={`${process.env.NEXT_PUBLIC_URL}icons/general/airport-bl.svg`} alt='icon-location'></img>
                        </div>
                    </div>

                    <span className='mb-[8px] text-fs-14px m-s-b text-nowrap' >Reserva tu coche </span>
                    <span className='text-gry-100 text-fs-12 text-center'>Lorem ipsum dolor sit amet</span>
                </div>

            </div>
        </div>
    )
}
