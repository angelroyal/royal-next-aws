"use client";

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import CartHotelT from './CartHotelT';
import CartTourT from './CartTourT';
export default function CartMobile() {
    const [open, setOpen] = useState(true)

    return (
        <Transition.Root show={open} as={Fragment} className='sm:hidden'>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-[22rem]">
                                    <div className="flex h-[90%] flex-col bg-white py-6 shadow-xl">
                                        <div className="px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-base m-b text-fs-16 text-[#1a202c]">
                                                    Revisa tu itinerario
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="absolute -inset-2.5" />
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6 flex flex-col">
                                            {/*CART MOBILE */}
                                            <div className='h-[65vh]  overflow-y-auto scroll-page-gry'>

                                                <CartHotelT />

                                                <CartTourT />

                                            </div>

                                            {/* PRICE CART */}
                                            <div className='h-[30%] border-t border-[#ebebeb] mt-[16px] pt-[16px]'>
                                                <div className='flex justify-between mx-3'>
                                                    <span className='text-fs-12 text-gry-100 m-m'>Subtotal</span>

                                                    <span className='text-fs-14 text-gry-100 m-m'>$12,000.00</span>
                                                </div>

                                                <div className='flex justify-between mb-[12px] mx-3'>
                                                    <span className='text-fs-12 text-gry-100 m-m'>impuestos</span>

                                                    <span className='text-fs-14 text-gry-100 m-m'>$500</span>
                                                </div>

                                                <div className='flex justify-between mx-3'>
                                                    <span className='text-fs-14 m-s-b'>Total</span>

                                                    <span className='text-fs-18 m-s-b'>$12,000.<sup>00</sup></span>
                                                </div>

                                                <div className='flex justify-end gap-[16px] mt-[16px]'>
                                                    <button className='text-fs-14 text-bl-100 m-s-b border-2 border-bl-100 rounded-full py-[12px] px-[16px] hover:bg-bl-100 hover:text-white'>Resetear carrito</button>
                                                    <button className='text-fs-14 text-white m-s-b bg-bl-100 rounded-full py-[12px] px-[16px] hover:bg-[#1b317d]'>Finalizar compra</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>

    )
}
