import moment from "moment";
import Image from "next/image";
import React, { useContext, useState } from "react";

import LanguageContext from "../../../language/LanguageContext";
import { useCartAxios } from "../../../components/Cart/CartAxios";
import { AlertPyC } from "@/components/Alerts/LottiePay/AlertPyC";
import { BookingContext } from "@/payment/context/BookingContext";
import LinearProgress from "@/components/Alerts/Progress/LinearProgress";
import axiosWithInterceptor from "../../../config/Others/axiosWithInterceptor";

export default function TourCardItinerary({ key, itemActivity }) {
  const [loader, setLoader] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const { setItinerary, fetchData } = useCartAxios();
  const { languageData } = useContext(LanguageContext);
  const { removeIsLoader, setRemoveIsLoader } = useContext(BookingContext);

  const cancelRemove = () => {
    if (isRemove) {
      setIsRemove(false);
    }
  };

  const searchParams = new URLSearchParams(window.location.search);
  const cartUid = searchParams.get("uid");

  // REMOVE TOUR
  const handleRemoveTour = (cardTourID) => {
    setLoader(true);
    setRemoveIsLoader(true);
    const reservationRemove = async () => {
      axiosWithInterceptor
        .delete(`v1/carts/${cartUid}/activity/${cardTourID}`)
        .then((response) => {
          fetchData(cartUid);
          setIsRemove(false);
          setLoader(false);
          setItinerary(Math.floor(Math.random() * 100) + 1);
          setRemoveIsLoader(false);
        })
        .catch((error) => {
          console.error(error);
          setLoader(false);
          setRemoveIsLoader(false);
        });
    };
    reservationRemove();
  };

  // DAY OF WEEK
  const dayOfWeek = moment(itemActivity.date).format("dddd");
  const dateFormat = moment(itemActivity.date).format("DD/MM/YY");

  const [openAlert, setOpenAlert] = useState(false);
  return (
    itemActivity && (
      <>
        <div className="relative my-[10px]">
          <Image
            className="absolute"
            src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-border.svg`}
            alt="Icon Location Border"
            width={16}
            height={200}
          />

          <div className="ml-[26px]">
            <div className="flex items-center gap-[10px]">
              <span className="m-b text-or-100 text-fs-16">
                {languageData.dayOfWeek[dayOfWeek]}
              </span>
              <span className="m-m text-fs-16 text-[#a6a6a6]">
                {/* {itemActivity.date} */}
                {dateFormat}
              </span>
              <span className="m-m text-fs-16 text-[#a6a6a6]">|</span>
              <span className="m-m text-fs-16 text-[#a6a6a6]">02:00pm</span>
            </div>

            {/* ITINERARY CARD */}

            <div className="w-[732px] max-xl:w-full flex rounded-[8px] p-[16px] shadow-3xl bg-white mt-[12px] border border-[#ebebeb] relative max-lg:flex-col max-lg:px-[20px] ">
              {!removeIsLoader && (
                <div
                  className="absolute right-[1rem] top-[1rem] cursor-pointer"
                  onClick={() => setIsRemove(true)}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-100.svg`}
                    alt="CloseIcon"
                    width={10}
                    height={10}
                  />
                </div>
              )}

              <div
                className={`max-lg:hidden rounded-[8px] w-[133px] h-[117.7px] ${
                  isRemove && "opacity-50"
                }`}
              >
                <img
                  className="w-full h-full rounded-[8px] object-cover select-none"
                  src={itemActivity.image ? itemActivity.image : ""}
                  alt="tour gallery"
                />
              </div>

              <div className={` flex lg:hidden ${isRemove && "opacity-50"}`}>
                <div className="rounded-[8px] w-[133px] h-[117.7px] max-sm:h-[80px] max-sm:w-[90px]">
                  <img
                    className="w-full h-full rounded-[8px] object-cover"
                    src={itemActivity.image ? itemActivity.image : ""}
                    alt="tour gallery mobile"
                  />
                </div>

                <div className="flex gap-[4px] flex-col w-[65%] pl-[20px] max-sm:pl-[10px]">
                  <h2 className="m-b text-fs-21 w-[94%] leading-[24px] max-md:text-fs-16 !line-clamp-2">
                    {itemActivity.title}
                  </h2>

                  <div className="w-full flex flex-col justify-evenly gap-[8px]">
                    {itemActivity.address && (
                      <div className="flex gap-[8px] m-b text-fs-10 text-bl-100">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
                          alt="LocationIcon"
                          width={14}
                          height={14.7}
                        />

                        <span className="truncate">{itemActivity.address}</span>
                      </div>
                    )}

                    <div className="flex gap-[8px] text-fs-10 text-gry-100 m-s-b text-nowrap items-center">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                        alt="icon-adult"
                        width={14}
                        height={14.7}
                      />
                      <span className="text-gry-100 text-fs-10 m-s-b leading-[12px] truncate">
                        {itemActivity.tourists &&
                          itemActivity.tourists.categories.map(
                            (tourist, index) =>
                              `${tourist.quantity} ${tourist.category}${
                                index !== itemActivity.tourists.length - 1
                                  ? ","
                                  : ""
                              } `
                          )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={` w-[80%] pl-[32px] flex flex-col justify-center gap-[8px] max-lg:mt-[8px] max-lg:pt-[16px] max-lg:border-t max-lg:border-[#ebebeb] max-lg:w-full max-lg:pl-0 ${
                  isRemove && "opacity-50"
                }`}
              >
                <h2 className="max-lg:hidden text-fs-16 m-b text-black pt-[13px] pb-[10px] truncate">
                  {itemActivity.title}
                </h2>

                <div className="h-full flex justify-between max-lg:flex-col flex-row gap-x-[24px]">
                  <div className="max-lg:hidden w-1/2 flex justify-start flex-col max-lg:w-full gap-[4px]">
                    {itemActivity.address && (
                      <div className="flex gap-[6px] m-s-b text-gry-100 text-fs-10">
                        <Image
                          src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-b.svg`}
                          alt="LocationIcon"
                          width={11}
                          height={14}
                          className="w-[11px] h-[14px]"
                        />

                        <span className="truncate">{itemActivity.address}</span>
                      </div>
                    )}
                    <div className="flex gap-[6px] text-fs-10 text-gry-100 m-s-b text-nowrap items-center">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                        alt="icon-adult"
                        width={14}
                        height={15}
                        className="w-[14px] h-[15px]"
                      />

                      <span className="truncate">
                        {itemActivity.tourists &&
                          itemActivity.tourists.categories.map(
                            (tourist, index) =>
                              `${tourist.quantity} ${tourist.category}${
                                index !== itemActivity.tourists.length - 1
                                  ? ","
                                  : ""
                              } `
                          )}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`${
                      itemActivity.duration ? "justify-between" : "justify-end"
                    } w-1/2 flex items-start  max-lg:w-full`}
                  >
                    {itemActivity.duration && (
                      <div className="flex flex-col items-center justify-center max-lg:items-start">
                        <span className="m-s-b text-fs-10 text-gry-100 text-nowrap">
                          {languageData.confirmation.cardTour.duration}
                        </span>

                        <span className="text-black text-fs-14 m-b">
                          {itemActivity.duration}
                        </span>
                      </div>
                    )}

                    <div className="w-1/2 flex flex-col justify-center gap-[4px] max-lg:items-end max-sm:w-fit">
                      <span className="m-s-b text-fs-10 text-gry-100 text-nowrap">
                        {languageData.modalTourOptions.taxes}
                      </span>
                      <span className="m-b text-fs-16 text-nowrap">
                        <span className="text-fs-12">MXN </span> $
                        {Math.floor(itemActivity.price)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .
                        <sup>
                          {(itemActivity.price % 1).toFixed(2).slice(2)}
                        </sup>
                      </span>

                      {itemActivity.cancelPolicies &&
                        itemActivity.cancelPolicies.length > 0 &&
                        itemActivity.cancelPolicies.map(
                          (cancelPolicy, item) => (
                            <>
                              <div
                                key={item}
                                className="text-bl-100 m-s-b text-fs-8 cursor-pointer relative"
                              >
                                <span onClick={() => setOpenAlert(true)}>
                                  {languageData.containerModalHotel.policies}
                                </span>

                                <AlertPyC
                                  openAlert={openAlert}
                                  setOpenAlert={() => setOpenAlert(false)}
                                  description={"policy"}
                                  cancelPolicy={cancelPolicy}
                                  isHours={true}
                                />
                              </div>
                            </>
                          )
                        )}
                    </div>
                  </div>
                </div>
              </div>

              {isRemove && (
                <>
                  <div
                    className="absolute left-0 top-0 h-full w-full rounded-lg bg-[#0000002e] rounded-l-[8px]"
                    onClick={() => cancelRemove()}
                  />
                  <div
                    className="absolute right-0 top-0 h-full px-[22px] flex items-center justify-center cursor-pointer bg-red-100 rounded-r-lg text-fs-16 text-white m-s-b"
                    onClick={() => handleRemoveTour(itemActivity.key)}
                  >
                    {languageData.cart.remove}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {loader && <LinearProgress />}
      </>
    )
  );
}
