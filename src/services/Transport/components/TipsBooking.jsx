import React from 'react'

export default function TipsBooking() {
    return (
        <div className='flex flex-col items-center'>
            <h3>Reserva tu traslado en 3 pasos</h3>
            <div className='flex'>
                {/* LOCATION */}
                <div className='flex flex-col'>
                    <div className='p-[16px] bg-gry-50'>
                        <img src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-on-bl.svg`} alt='icon-location'></img>
                    </div>
                    <span>Elige la ubicación</span>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>

                <div className='border-dashed border-2 border-gry-50'></div>

                {/* CALENDAR */}
                <div className='flex flex-col'>
                    <div className='p-[16px] bg-or-100'>
                        <img src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-done-w.svg`} alt='icon-location'></img>
                    </div>
                    <span>Elige la ubicación</span>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>

                {/* AIRPORT */}
                <div className='flex flex-col'>
                    <div className='p-[16px] bg-gry-50'>
                        <img src={`${process.env.NEXT_PUBLIC_URL}icons/general/airport-bl.svg`} alt='icon-location'></img>
                    </div>
                    <span>Elige la ubicación</span>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>

            </div>
        </div>
    )
}
