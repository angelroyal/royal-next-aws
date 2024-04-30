import React, { useState } from 'react'
import "@/assets/styles/general/Swiper.css";

export default function InfoModalTransport() {

  const [changePrivate, setChangePrivate] = useState(true);

  const [counter, setCounter] = useState(0);

  const counterAdd = () => {
    setCounter(counter + 1)
  }

  const counterRemove = () => {
    if (counter > 0)
      setCounter(counter - 1)
  }


  return (
    <div className='flex flex-col gap-2 w-1/2 max-md:w-full'>
      {/* TITLE */}
      <h3 className='text-fs-24 m-b mb-[36px]'>Reservar transporte</h3>

      {/* TYPE OF TRIP */}
      <div className='flex flex-col gap-[6px] mb-[16px]'>
        <span className='text-gry-100 text-fs-12 m-s-b'>Tipo de viaje</span>

        <div className='text-gry-100 text-fs-12 m-s-b py-[8px] px-[16px] bg-gry-50 rounded-full w-fit'>Redondo</div>
      </div>

      {/* FROM , TO */}
      <span className='text-gry-100 text-fs-12 m-s-b'>Desde</span>

      <div className="flex bg-[#f1f6ff] rounded-[4px] gap-[8px] py-[10px] pl-[16px] max-w-[324px] mb-[16px]">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
          alt="Location Icon"
          className="w-[12.7] h-[16px] mr-2"
        />

        <div className='text-gry-100 m-s-b text-fs-12'>Aeropuesto internacional de cancun</div>
      </div>

      <span className='text-gry-100 text-fs-12 m-s-b'>Hacia</span>

      <div className="flex bg-[#f1f6ff] rounded-[4px] gap-[8px] py-[10px] pl-[16px] max-w-[324px]  mb-[16px]">
        <img
          src={`${process.env.NEXT_PUBLIC_URL}/icons/location/location-b.svg`}
          alt="Location Icon"
          className="w-[12.7] h-[16px] mr-2"
        />

        <div className='text-gry-100 m-s-b text-fs-12'>Hotel nickelodeon Riviera maya</div>
      </div>

      {/* DATE AND HOUR */}
      <div className='flex w-full gap-[24px] mb-[36px]'>

        {/* DATE */}
        <div className='w-1/2'>
          <span>Fecha</span>

          <div className='flex px-[16px] py-[11.5px] border border-[#ebebeb] items-center gap-2 relative'>
            <img
              className="w-[14px] h-[16px]"
              src={`${process.env.NEXT_PUBLIC_URL}icons/calendar/calendar-b.svg`}
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
            />
            {/* <span className='text-fs-12 m-m'>23/05/2024</span> */}
            <input type="date" className='focus:outline-0 bg-white text-fs-12 m-m time-input'></input>
          </div>
        </div>

        {/* HOUR */}
        <div className='w-1/2'>
          <div>Horario</div>
          <div className='flex py-[11.5px] px-[16px] border border-[#ebebeb] items-center gap-2 relative'>
            <img
              className=""
              src={`${process.env.NEXT_PUBLIC_URL}icons/general/schedule.svg`}
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon calendar`}
            />
            <input type="time" id="timeInput" className="focus:outline-0 bg-white text-fs-12 m-m time-input" />
            {/* <span className='text-fs-12 m-m'>09:00 am</span> */}
          </div>
        </div>
      </div>

      {/* HOW MANY PASSENGERS */}
      <div className='flex flex-col gap-[16px]'>
        <span className='text-fs-14 m-s-b'>¿Cuántos pasajeros?</span>

        <div className='flex gap-[16px]'>
          <div
            onClick={counterRemove}
            className={`${counter === 0
                ? "cursor-not-allowed"
                : "cursor-pointer"
              } px-[8px] flex items-center`}
          >
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/remove/remove-100.svg`}
              alt="icon Remove"
              width={9.3}
              height={9.3}
            />
          </div>

          <div className='pl-[22px] pr-[22px] py-[8px] border border-gry-50'>
            {counter}
          </div>

          <button
            onClick={counterAdd}
            className='px-[8px] cursor-no-drop'
          >
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/add/add-100.svg`}
              alt="icon Add"
              width={9.3}
              height={9.3}
            />
          </button>

        </div>

        {changePrivate === true &&
          <div className='flex gap-1 items-center'>
            <span className='text-fs-12 m-m'>Precio individual: </span>
            <span className='text-fs-12 m-b text-bl-100'>MXN</span>
            <span className='text-fs-14 m-b text-bl-100'>$5,000</span>
          </div>
        }


      </div>

    </div>
  )
}
