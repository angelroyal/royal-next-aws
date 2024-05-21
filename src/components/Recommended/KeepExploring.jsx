import React from 'react'

export default function KeepExploring() {
  
  return (

    <div className='flex justify-between bg-white rounded-lg mt-[28px] mb-[85px] p-[36px] items-center max-md:flex-col max-md:items-start gap-[16px]'>

      <div className='flex flex-col gap-[8px]'>
        <span className='m-b text-fs-24'>Sigue explorando</span>

        <span className='m-m text-fs-14 text-gry-100'>No te detengas aquí. Descubre más destinos emocionantes y planifica tu próxima aventura.</span>
      </div>
 
      <button className='bg-yw-100 m-b text-fs-12 hover:bg-yw-110 px-[24px] py-[14px] rounded-full'>Volver al inicio</button>

    </div>
  )
}
