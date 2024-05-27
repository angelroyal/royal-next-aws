import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import { Dialog, Transition } from "@headlessui/react";
import React, { useState, useEffect, useContext, Fragment } from "react";

import LanguageContext from "../../language/LanguageContext";
import axiosWithInterceptor from "../../config/Others/axiosWithInterceptor";

import IconRoyal from "../../assets/icons/utils/payment/icon-royal-vacations.svg";

export function AlertRate(props) {
  const { alertShowRate, infoDataRate, cartUid } = props;
  const { languageData } = useContext(LanguageContext);

  const [smShow, setSmShow] = useState(false);

  const handleOpenModal = () => {
    setSmShow(true);
  };

  useEffect(() => {
    if (alertShowRate === true) {
      handleOpenModal();
    }
  }, [alertShowRate]);

  const handleUpdatePrice = async () => {
    const requestPayload = {
      items: infoDataRate.priceChanges.map((change) => ({
        type: "hotel",
        id: change.id,
        items: [
          {
            type: "room",
            id: change.items.id,
            price: change.items.price,
          },
        ],
      })),
    };

    try {
      const url = `v1/carts/${cartUid}/update-prices`;
      const response = await axiosWithInterceptor.post(url, requestPayload);
      if (response) {
      }
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="modal">
        <Modal
          size="sm"
          id="modal-alert-rate"
          show={smShow}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header></Modal.Header>
          <Modal.Body className="display-modal-rate">
            <Image
              src={IconRoyal}
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
              className="icon-royal-modal-rate"
            />
            <div className="title-modal-rate">
              {languageData.alertsPayment.rateTitle}
            </div>

            <div className="text-rate-modal">
              {languageData.alertsPayment.rateText}
            </div>

            <div className="service-change-rate">
              <ul>
                {infoDataRate &&
                  infoDataRate.priceChanged &&
                  infoDataRate.priceChanges.map((service, index) => (
                    <li key={index}>{service.name}</li>
                  ))}
              </ul>
            </div>

            <div className="line-rate-modal" />
            <div>
              <button
                className="button-rate-modal"
                type="button"
                onClick={() => handleUpdatePrice()}
              >
                {languageData.alertsPayment.buttonRate}
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export function AlertLoad() {
  const { languageData } = useContext(LanguageContext);
  const [smShow, setSmShow] = useState(false);

  const handleOpenModal = () => {
    setSmShow(true);
  };

  const handleCloseModal = () => {
    setSmShow(false);
  };

  const handleIconClick = () => {
    if (!smShow) {
      handleOpenModal();
    } else {
      handleCloseModal();
    }
  };
  return (
    <div>
      <div className={`styles-button-share ${smShow ? "active" : ""}`}>
        <div className="button-share-itinerary" onClick={handleOpenModal}>
          {languageData.alertsPayment.rateAlert}
        </div>
        <div className="button-share-link" onClick={handleIconClick}></div>
      </div>

      <div className="modal">
        <Modal
          size="sm"
          id="modal-alert-rate-load"
          show={smShow}
          onHide={handleCloseModal}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header></Modal.Header>
          <Modal.Body className="display-modal-rate">
            <Image
              src={IconRoyal}
              alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
              className="icon-royal-modal-load-r"
            />
            <div className="title-modal-load-r">
              {languageData.alertsPayment.textAlert.PE}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export function AlertUpdate(props) {
  const { priceChanged } = props;

  const [smShow, setSmShow] = useState(false);
  const { languageData } = useContext(LanguageContext);

  const handleOpenModal = () => {
    setSmShow(true);
  };

  const handleCloseModal = () => {
    setSmShow(false);
  };

  useEffect(() => {
    if (priceChanged === false) {
      handleOpenModal();
    }
  }, []);
  return (
    <>
      {smShow === true && (
        <div className="modal">
          <Modal
            size="sm"
            id="modal-alert-rate-update"
            show={smShow}
            onHide={handleCloseModal}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="display-modal-rate-update">
              <Image
                src={IconRoyal}
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
                className="icon-royal-modal-rate"
              />
              <div className="title-modal-rate-update">
                {languageData.alertsPayment.updatePrice}
              </div>
              <div className="text-rate-modal-update">
                {languageData.alertsPayment.rateReservation}
              </div>
              <div className="line-rate-modal-update"></div>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
}

export function AlertNoAvailability(props) {
  const { isNoAvailability } = props;
  const [smShow, setSmShow] = useState(false);
  const { languageData } = useContext(LanguageContext);

  useEffect(() => {
    if (isNoAvailability === true) {
      setSmShow(true);
    }
  }, []);

  return (
    <Transition.Root show={smShow} as={Fragment}>
      <Dialog className="relative z-10" onClose={() => setSmShow(false)}>
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
              <Dialog.Panel className="transform overflow-hidden bg-white rounded-lg shadow-xl transition-all my-auto">
                <div className="p-[24px] relative flex flex-col items-center">
                  <button
                    className="border-0 focus:outline-none absolute mr-[11px] mt-[11px] right-0 top-0 w-4 h-4 z-[2]"
                    onClick={() => setSmShow(false)}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-70.svg`}
                      alt="close icon modal"
                      width={16}
                      height={16}
                      className="w-full h-full"
                    />
                  </button>

                  <Image
                    src={IconRoyal}
                    alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
                    className="w-[46] h-[46px]"
                  />
                  
                  <div className="text-bl-100 text-center m-s-b text-fs-20">
                    {languageData.confirmation.bookingData.alertNoAvailability}
                  </div>

                  <div className="m-m text-fs-17 text-gry-100">
                    {
                      languageData.confirmation.bookingData
                        .alertNoAvailabilityText
                    }
                  </div>
                </div>

                <div className="border w-full h-[1px] my-[26px]" />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
