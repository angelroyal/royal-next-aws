import { Fragment, useContext } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition } from "@headlessui/react";

import { Ratings } from "./Ratings";
import { CardReview } from "./CardReview";
import { OrderReview } from "./OrderReview";
import RoomsHotelContext from "../../../context/RoomsHotelContext";

export function ModalReviews({ showModal, handleCloseModal }) {
  const { reviewDataFilter } = useContext(RoomsHotelContext);
  return (
    <Transition show={showModal} as={Fragment}>
      <Dialog className="relative z-[1000]" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[70%] mb-auto mt-auto">
                <div className="absolute right-0 top-0 pr-4 pt-4 block">
                  <button
                    type="button"
                    className="rounded-md ng-white text-gry-400 hover:text-gry-500 focus:outline-none"
                    onClick={handleCloseModal}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon
                      className="h-6 w-6 !text-gry-70 m-b"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <div className="p-12 flex max-lg:flex-col lg:gap-x-[69px]">
                  <Ratings modal={true} />

                  <div
                    className={`flex flex-col gap-y-6 ${
                      !reviewDataFilter ||
                      (reviewDataFilter.length === 0 && "w-full")
                    }`}
                  >
                    <OrderReview />

                    <div className="hidden lg:block h-full md:h-[46rem] overflow-y-scroll scroll-page-gry lg:pr-6">
                      <CardReviewModal />
                    </div>

                    <div className="lg:hidden  h-full">
                      <CardReviewModal />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

function CardReviewModal() {
  const { reviewDataFilter } = useContext(RoomsHotelContext);
  return (
    <div className="flex flex-col gap-y-6">
      {reviewDataFilter &&
        reviewDataFilter.map((reviews, index) => (
          <div
            key={index}
            className={`${
              reviewDataFilter.length - 1 !== index &&
              "border-b-2 border-gray-200"
            }`}
          >
            <CardReview hotelReview={reviews} isModal={true} />
          </div>
        ))}
    </div>
  );
}
