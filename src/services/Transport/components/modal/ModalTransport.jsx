import React from 'react'
import PriceModalTransport from './PriceModalTransport'
import InfoModalTransport from './InfoModalTransport'

export default function ModalTransport() {
  return (
    <div className='absolute bg-white border border-gry-100 w-[800px] h-[657px] flex justify-between'>
        <InfoModalTransport/>
        <PriceModalTransport/>
    </div>
  )
}
