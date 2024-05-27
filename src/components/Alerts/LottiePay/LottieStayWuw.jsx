"use client";

import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function LottieStayWuw() {

    const [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (

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
                            <Dialog.Panel className="w-fit max-w-md transform rounded-lg shadow-3xl overflow-hidden bg-white text-left align-middle shadow-xl transition-all">

                                {/* // LOTTIE STAYWUW*/}
                                <div className='bg-white rounded-lg shadow-3xl px-[24px] pt-[24px] pb-[48px] w-[423px] h-[485px] flex flex-col items-center relative justify-end max-sm:w-full'>

                                    <img
                                        src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-70.svg`}
                                        width={12}
                                        height={12}
                                        alt="icon-close"
                                        className="cursor-pointer absolute top-[20px] right-[20px]"
                                        onClick={closeModal}
                                    />

                                    <img
                                        src={`${process.env.NEXT_PUBLIC_URL}/icons/general/infotipo-staywuw.svg`}
                                        alt="icon-logo"
                                        width={145}
                                        height={145}
                                        className='pb-[56px]'
                                    />

                                    {/* <Lottie className="w-[300px] h-[300px]" animationData={animationLoading} /> */}

                                    <span className='text-fs-20 m-s-b mb-[8px]'>Lorem ipsum.</span>

                                    <p className='text-fs-12 text-gry-100 m-m text-center mb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.consectetur adipisicing elit</p>

                                    <button
                                        className='text-white bg-bl-100 px-[16px] py-[14px] text-fs-12 m-s-b rounded-full hover:bg-bl-110'
                                        onClick={closeModal}
                                    >
                                        Button Label
                                    </button>
                                </div>
                                {/* // END LOTTIE STAYWUW*/}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
