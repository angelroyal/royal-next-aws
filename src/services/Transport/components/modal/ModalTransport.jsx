import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import InfoModalTransport from './InfoModalTransport'
import { Dialog, Transition } from '@headlessui/react'
import PriceModalTransport from './PriceModalTransport'

export default function ModalTransport() {

  const [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (

    // <div className='absolute bg-white border border-gry-100 w-[800px] h-[657px] flex justify-between'>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={openModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" w-[58rem] rounded-lg transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                <div className='flex relative gap-[48px] max-md:flex-col p-[48px] w-full'>
                  <InfoModalTransport />
                  <PriceModalTransport />
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-100.svg`}
                    width={16}
                    height={16}
                    alt="icon-close"
                    className="absolute cursor-pointer top-[20px] right-[22px]"
                    onClick={() => closeModal()}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>

    // </div>
  )
}
