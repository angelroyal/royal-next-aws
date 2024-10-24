import Image from "next/image";
import React, { useContext, useEffect } from "react";

import {
  DescriptionHotel,
  TourDescription,
  TransportDescription,
} from "./TypeReservation";
import ModalShare from "../../../utils/booking/ModalShare";
import LanguageContext from "../../../language/LanguageContext";
import { useIsMobileNew } from "../../../config/Mobile/isMobile";
import { BookingContext } from "@/payment/context/BookingContext";

export default function DetailsPayment(props) {
  const { data, step } = props;

  const isMobile = useIsMobileNew();
  const { languageData } = useContext(LanguageContext);

  // NEW CONTEXT
  const {
    setOpenDialog,
    handleStepChange,
    setOpenTaxesNotIncluded,
    setRoomsWithTaxesNotIncluded,
    setTotalTaxesNotIncluded,
  } = useContext(BookingContext);

  const nextStep = () => {
    if (isMobile) {
      setOpenDialog(false);
    }
    handleStepChange(step + 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FILTER TAXES NOT INCLUDED ROOMS
  useEffect(() => {
    if (data && data.summary) {
      let taxesNotIncluded = data.summary.hotels
        .map((hotel) => {
          const filteredRooms = hotel.rooms.filter(
            (room) => room.taxesNotIncluded
          );
          if (filteredRooms.length > 0) {
            return {
              name: hotel.name,
              rooms: filteredRooms,
            };
          }
          return null;
        })
        .filter((hotel) => hotel !== null);
      setRoomsWithTaxesNotIncluded(taxesNotIncluded);
      setTotalTaxesNotIncluded(
        data.summary?.totalTaxesNotIncluded
          ? data.summary?.totalTaxesNotIncluded
          : 0
      );
    }
  }, [data]);

  return (
    <>
      <div className="flex w-full h-full lg:h-max pt-[28px] pb-[20px] px-6 lg:pt-[4.6rem] lg:pl-[24px] lg:pb-[24px] flex-col gap-y-[40px] sticky top-0 will-change-transform">
        {/* TITLE AND LOGO */}
        {data && (
          <>
            <div className="flex !gap-x-2 items-center">
              <Image
                className="w-[27px] h-[25px]"
                src={`${process.env.NEXT_PUBLIC_URL}icons/general/infotipo-staywuw.svg`}
                alt={`${process.env.NEXT_PUBLIC_NAME_COMPANY} icon`}
                width={27}
                height={25}
              />

              {/* TEXT PAYMENT DETAILS /LP 15-02-24 */}
              <span className="text-black m-b text-fs-24">
                {languageData.itinerary.paymentDetails}
              </span>
            </div>

            {/* INFO PRICE AND TOTAL*/}
            <div className="w-full lg:!pb-4 lg:mb-[18px] h-full relative">
              <div className="flex flex-col mb-[3rem]">
                {data.summary.hotels.length > 0 && (
                  <DescriptionHotel hotel={data.summary.hotels} />
                )}

                {data.summary.activities.length > 0 && (
                  <TourDescription tours={data.summary.activities} />
                )}

                {data.summary.transportations.length > 0 && (
                  <TransportDescription
                    transport={data.summary.transportations}
                  />
                )}

                <div
                  className={`w-full flex flex-col gap-y-2 border-b border-gry-70 !pb-4 mb-[18px]`}
                >
                  {/* TEXT TAXES /LP 15-02-24  */}
                  <span className="m-b text-fs-16 text-gry-100 ">
                    {languageData.booking.taxes}
                  </span>

                  <div className="flex justify-between items-center">
                    <span className="text-fs-12 m-m text-black">IVA</span>

                    <span className="text-black m-b text-fs-12">
                      $
                      {Math.floor(data.summary.taxes)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .<sup>{(data.summary.taxes % 1).toFixed(2).slice(2)}</sup>
                    </span>
                  </div>

                  {/* TAXES NOT INCLUDED */}
                  {data.summary?.totalTaxesNotIncluded &&
                    data.summary?.totalTaxesNotIncluded > 0 && (
                      <div className="flex justify-between items-center">
                        <span
                          className="text-fs-12 m-m text-red-100 underline cursor-pointer"
                          onClick={() => setOpenTaxesNotIncluded(true)}
                        >
                          {languageData.itinerary.taxesNotInclude}
                        </span>
                      </div>
                    )}
                </div>
              </div>

              {/* FOOTER SECTION DETAILS */}
              <div className="flex w-full flex-col gap-y-[20px] lg:gap-y-[40px] sticky !bottom-0 bg-white">
                <div className="flex flex-col-reverse lg:flex-col gap-y-[20px] lg:gap-y-[40px]">
                  <div className="flex justify-between">
                    <p className="m-0 text-black text-fs-16 m-b">Total</p>

                    <p className="m-0 text-black text-fs-20 m-b">
                      $
                      {Math.floor(data.summary.totalCurrentPrice)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .
                      <sup>
                        {(data.summary.totalCurrentPrice % 1)
                          .toFixed(2)
                          .slice(2)}
                      </sup>
                    </p>
                  </div>

                  {/* ICONS CREDIT CART */}
                  <div className="flex flex-nowrap gap-2 justify-end">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/payment/visa.svg`}
                      width={48}
                      height={29}
                      alt="icon visa"
                    />
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/payment/master.svg`}
                      width={49}
                      height={29}
                      alt="icon master card"
                    />
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/payment/amex.svg`}
                      width={48}
                      height={29}
                      alt="icon american card"
                    />
                    <Image
                      src={`${process.env.NEXT_PUBLIC_URL}icons/payment/spei.svg`}
                      width={77}
                      height={32}
                      alt="icon spei card"
                    />
                  </div>
                </div>

                <div className="flex justify-center flex-nowrap gap-[51px] items-center">
                  <ModalShare itinerary={true} className="w-[30%]" />

                  {step === 1 && (
                    <button
                      onClick={() => nextStep()}
                      className="rounded-full py-[10px] px-[27px] flex !gap-x-2 bg-yw-100 items-center border-0 focus:outline-none text-fs-10 text-black m-b text-nowrap"
                    >
                      {languageData.itinerary.detailsPayment.completePayment}
                      <Image
                        src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/right-100.svg`}
                        alt="arrow right b"
                        width={6}
                        height={13}
                        className="w-[6px] h-[13px]"
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
