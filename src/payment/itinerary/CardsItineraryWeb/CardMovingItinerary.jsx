"use client";
import moment from "moment";
import Image from "next/image";
import React, { useContext, useState } from "react";

import { useCartAxios } from "@/components/Cart/CartAxios";
import LanguageContext from "../../../language/LanguageContext";
import { AlertPyC } from "@/components/Alerts/LottiePay/AlertPyC";
import LinearProgress from "@/components/Alerts/Progress/LinearProgress";
import { removeTransportItinerary } from "@/payment/Api/fetchDataItinerary";
import { BookingContext } from "@/payment/context/BookingContext";

export default function CardMovingItinerary(props) {
  const [loader, setLoader] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [iconRemove, setIconRemove] = useState(false);
  const { languageData } = useContext(LanguageContext);
  const { setItinerary, removeTransportById } = useCartAxios();

  const { removeIsLoader, setRemoveIsLoader } = useContext(BookingContext);

  const { itemTransport, confirmation = false } = props;
  const cancelRemove = () => {
    if (iconRemove === true) setIconRemove(false);
  };

  // REMOVE TRANSPORT FROM SHOPPING CART
  const removeReservation = (uidTransport) => {
    // removeIsLoader
    setRemoveIsLoader(true);
    const searchParams = new URLSearchParams(window.location.search);
    const cartUid = searchParams.get("uid");
    const transportId = uidTransport.id;
    setLoader(true);

    if (itemTransport.id === transportId) {
      removeTransportItinerary(cartUid, transportId)
        .then((result) => {
          removeTransportById(transportId);
          setItinerary(Math.floor(Math.random() * 100) + 1);
          setLoader(false);
          setRemoveIsLoader(false);
        })
        .catch((error) => {
          console.log(error);
          setRemoveIsLoader(false);
          throw error;
        });
    }
  };

  // DAY OF WEEK
  const dayOfWeek = moment(itemTransport.date).format("dddd");

  return (
    <>
      <div className="flex gap-x-2 items-start">
        <Image
          src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-border.svg`}
          alt="Icon Location Border"
          width={16}
          height={200}
        />

        <div className="flex flex-col gap-y-5 w-full">
          <span className="flex gap-x-1">
            <h3 className="m-b text-fs-16 text-or-100 m-0">
              {languageData.dayOfWeek[dayOfWeek]}
            </h3>{" "}
            <h3 className="m-m text-fs-16 text-gry-70 m-0">
              {moment(itemTransport.date).format("MM/DD/YYYY")} |{" "}
              {moment(`${itemTransport.date}T${itemTransport.time}`)
                .format("h:mma")
                .toLowerCase()}
            </h3>
          </span>

          {/* CARD TRANSPORT ITINERARY */}
          <div className="bg-white pl-4 pr-[37px] xl:px-4 py-4  flex max-xl:flex-col rounded-lg relative w-[732px] max-xl:w-full shadow-3xl">
            <div className="flex items-center gap-x-2 lg:gap-x-8 w-full">
              {/* REMOVE RESERVATION */}
              {!confirmation && !removeIsLoader ? (
                <button
                  className="border-0 absolute right-4 top-4"
                  onClick={() => setIconRemove(true)}
                >
                  <Image
                    className="w-[10px] h-[10px] "
                    src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-100.svg`}
                    alt="close card icon"
                    width={10}
                    height={10}
                  />
                </button>
              ) : (
                <></>
              )}

              <Image
                className="rounded-[8px] w-[133px] h-[117.7px] max-sm:h-[80px] max-sm:w-[90px] object-cover object-right"
                // className="object-cover object-right w-[133px] h-[118px]"
                src={itemTransport.image}
                // src={`${process.env.NEXT_PUBLIC_URL}banners/transport/transport-card.jpg`}
                alt="card transport"
                width={133}
                height={118}
              />

              <div className="flex flex-col gap-y-2 w-full">
                <h2 className="m-b text-fs-16 text-black">
                  {itemTransport.title}
                </h2>

                <div className="flex gap-x-6 items-start justify-between lg:pr-[21px]">
                  {/* <div className="flex flex-col w-[227px] gap-y-1 max-md:w-[65%]"> */}
                  <div className="flex flex-col w-1/2 gap-y-1 max-md:w-[65%]">
                    <span className="flex items-center gap-x-1">
                      <Image
                        className="w-[11px] h-[14px]"
                        src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
                        alt="location bl"
                        width={11}
                        height={14}
                      />

                      <p className="text-gry-100 text-fs-10 m-0 m-s-b truncate">
                        {itemTransport.fromLabel}
                      </p>
                    </span>

                    <span className="flex flex-col gap-y-[3px] ">
                      {itemTransport.suitcases && (
                        <>
                          <div className="flex gap-x-[3px] items-center">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`}
                              alt="icon baggage blue"
                              width={10.6}
                              height={12.3}
                            />

                            <p className="m-0 text-fs-10 text-gry-100">
                              {Math.trunc(
                                itemTransport.suitcases[0].handSuitcase /
                                  itemTransport.places
                              )}{" "}
                              {languageData.CardHomeTransport.handLuggage}
                            </p>
                          </div>

                          <div className="flex gap-x-[3px] items-center">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_URL}icons/baggage/baggage-b.svg`}
                              alt="icon baggage blue"
                              width={10.6}
                              height={12.3}
                            />

                            <p className="m-0 text-fs-10 text-gry-100">
                              {Math.trunc(
                                itemTransport.suitcases[0].largeSuitcase /
                                  itemTransport.places
                              )}{" "}
                              {languageData.CardHomeTransport.suitcases}
                            </p>
                          </div>
                        </>
                      )}
                    </span>
                  </div>

                  <div className="flex gap-x-[67px] max-lg:hidden">
                    <div className="flex flex-col">
                      <p className="text-fs-8 text-gry-100 m-s-b mb-1">
                        {languageData.CardHomeTransport.typeTrip}
                      </p>

                      <p className="text-fs-12 text-black m-b mb-2">
                        {itemTransport.trip}
                      </p>

                      <span className="flex items-center gap-x-1">
                        <Image
                          className="w-[12px] h-[13px]"
                          src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                          alt="adult b"
                          width={12}
                          height={13}
                        />

                        <p className="m-0 text-fs-10 text-gry-100 m-s-b text-nowrap">
                          {itemTransport.tourists}{" "}
                          {itemTransport.tourists > 1
                            ? languageData.cardHotel.people
                            : languageData.cardHotel.person}
                        </p>
                      </span>
                    </div>

                    <div className="flex flex-col gap-y-1 items-start max-xl:hidden">
                      <p className="text-fs-10 text-gry-100 m-s-b mb-1 text-nowrap">
                        {languageData.cart.taxes}
                      </p>

                      <span className="text-black m-b flex items-center gap-x-1">
                        <p className="text-fs-12 m-0">MXN</p>
                        <p className="text-fs-16 m-0">
                          $
                          {Math.floor(itemTransport.price)
                            .toLocaleString("es-MX", { currency: "MXN" })
                            .replace(".00", "")}
                          .
                          <sup>
                            {(itemTransport.price % 1).toFixed(2).slice(2)}
                          </sup>
                        </p>
                      </span>

                      <div onClick={() => setOpenAlert(true)}>
                        <span className="relative text-bl-100 text-fs-8 m-s-b text-nowrap cursor-pointer">
                          {languageData.containerModalHotel.policies}
                        </span>

                        <AlertPyC
                          openAlert={openAlert}
                          setOpenAlert={() => setOpenAlert(false)}
                          cancelPolicy={itemTransport.cancelPolicies}
                          cardView={"transport"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE INFO */}
            <div className="border-t border-gry-50 pt-[15px] mt-2 w-full flex lg:justify-center justify-between xl:hidden">
              <div className="lg:hidden flex flex-col">
                <p className="text-fs-8 text-gry-100 m-s-b mb-1">
                  {languageData.CardHomeTransport.typeTrip}
                </p>

                <p className="text-fs-12 text-black m-b mb-2">
                  {itemTransport.trip}
                </p>

                <span className="flex items-center gap-x-1">
                  <Image
                    className="w-[12px] h-[13px]"
                    src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                    alt="adult b"
                    width={12}
                    height={13}
                  />

                  <p className="m-0 text-fs-10 text-gry-100 m-s-b text-nowrap">
                    {itemTransport.tourists}
                    {itemTransport.tourists > 1
                      ? languageData.cardHotel.people
                      : languageData.cardHotel.person}
                  </p>
                </span>
              </div>

              <div className="flex flex-col gap-y-1 items-start ">
                <p className="text-fs-8 text-gry-100 m-m mb-1">
                  {languageData.cart.taxes}
                </p>

                <span className="text-black m-b flex items-center gap-x-1">
                  <p className="text-fs-12 m-0">MXN</p>
                  <p className="text-fs-16 m-0">
                    $
                    {Math.floor(itemTransport.price)
                      .toLocaleString("es-MX", { currency: "MXN" })
                      .replace(".00", "")}
                    .<sup>{(itemTransport.price % 1).toFixed(2).slice(2)}</sup>
                  </p>
                </span>

                <div className="relative">
                  <p
                    className="text-bl-100 text-fs-8 m-s-b cursor-pointer"
                    onClick={() => setOpenAlert(true)}
                  >
                    {languageData.containerModalHotel.policies}
                  </p>

                  <AlertPyC
                    openAlert={openAlert}
                    setOpenAlert={() => setOpenAlert(false)}
                    cancelPolicy={itemTransport.cancelPolicies}
                    cardView={"transport"}
                  />
                </div>
              </div>
            </div>

            {/* REMOVE CARD */}
            {iconRemove && !confirmation && (
              <>
                <div
                  className="absolute left-0 top-0 w-full h-full bg-[#96969691] rounded-lg"
                  onClick={() => cancelRemove()}
                />
                <div
                  className="absolute right-0 top-0 h-full px-[22px] flex items-center justify-center cursor-pointer bg-red-100 rounded-r-lg text-fs-16 text-white m-s-b"
                  onClick={() => removeReservation(itemTransport)}
                >
                  {languageData.cart.remove}
                </div>
              </>
            )}
            {/* END REMOVE CARD */}
          </div>
        </div>
      </div>
      {loader && <LinearProgress />}
    </>
  );
}
