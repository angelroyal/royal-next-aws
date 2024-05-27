"use client";

import Lottie from "lottie-react";
import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import LanguageContext from "@/language/LanguageContext";
import animationFailure from "@/assets/animations/failure.json";
import animationSuccess from "@/assets/animations/success.json";

export default function LottiePayment() {
  const isSuccess = false;
  const [isOpen, setIsOpen] = useState(true);
  const { languageData } = useContext(LanguageContext);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  setTimeout(() => {
    setIsOpen(false);
  }, 6000);

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
              <Dialog.Panel className="w-fit max-w-md transform rounded-lg overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                {/* // LOTTIE PAYMENT */}
                <div className="bg-white  px-[24px] pt-[24px] pb-[48px] w-[423px] h-[485px] flex flex-col items-center justify-end relative max-sm:w-full">
                  {isSuccess ? (
                    <>
                      <Lottie
                        className="w-[185px] h-[185px] mb-[20px]"
                        animationData={animationSuccess}
                      />

                      <span className="text-fs-20 m-s-b text-grn-100 mb-[8px]">
                        {languageData.alertsPayment.textAlert.PE}
                      </span>

                      <p className="text-fs-12 m-m text-gry-100 text-center mb-[24px]">
                        {languageData.alertsPayment.textSuccess}
                      </p>

                      {/* BTN UNDERSTOOD */}
                      <button
                        className="text-white bg-grn-100 rounded-full px-[16px] py-[14px] text-fs-12 m-s-b hover:bg-grn-70 focus:outline-none"
                        onClick={closeModal}
                      >
                        {languageData.alertsPayment.btnUnderstood}
                      </button>
                    </>
                  ) : (
                    <>
                      <Lottie
                        className="w-[185px] h-[185px] mb-[38px]"
                        animationData={animationFailure}
                      />

                      <span className="text-fs-20 m-s-b text-red-100 mb-[8px]">
                        {languageData.alertsPayment.textAlert.PD}
                      </span>

                      <p className="text-fs-12 m-m text-gry-100 text-center mb-[24px]">
                        {languageData.alertsPayment.textDeclinedPayment}
                      </p>

                      {/* BTN RETRY */}
                      <button className="text-white bg-red-100 rounded-full px-[16px] py-[14px] text-fs-12 m-s-b hover:bg-red-70 focus:outline-none">
                        {languageData.alertsPayment.btnRetry}
                      </button>
                    </>
                  )}
                </div>
                {/* // END LOTTIE PAYMENT */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
