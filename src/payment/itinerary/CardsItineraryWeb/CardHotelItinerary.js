import moment from "moment";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import { CircularProgress } from "@mui/material";
import React, { useContext, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import { TotalStars } from "@/components/General/Stars";
import { useIsMobile } from "../../../config/Mobile/isMobile";
import LanguageContext from "../../../language/LanguageContext";
import UnavailableCardHotel from "../others/UnavailableCardHotel";
import { useCartAxios } from "../../../components/Cart/CartAxios";
import { ImageNotFound } from "../../../config/Others/ImageNotFound";
import axiosWithInterceptor from "../../../config/Others/axiosWithInterceptor";

import "@/assets/styles/web/Hotel.css";
import "../../../../src/assets/styles/mobile/HotelMobile.css";
import RoomIcon from "../../../assets/icons/utils/searchBox/room.svg";
import ErrorIcon from "../../../assets/icons/utils/others/error-r.svg";
import DoneIcon from "../../../assets/icons/tour/modal/done_active.svg";
import IconLocationBorder from "../../../assets/icons/utils/others/location-border.svg";

export default function CardHotelItinerary(props) {
  const { itemHotel } = props;
  const { fetchData } = useCartAxios();
  const isMobile = useIsMobile();

  const { languageData } = useContext(LanguageContext);

  const dateFormatCheckIn = moment(itemHotel.checkIn).format("DD/MM/YY");
  const dateFormatCheckOut = moment(itemHotel.checkOut).format("DD/MM/YY");

  const [loader, setLoader] = useState(false);

  // DAY OF WEEK
  const dayOfWeek = moment(itemHotel.date).format("dddd");

  const [iconRemove, setIconRemove] = useState(false);

  const cancelRemove = () => {
    if (iconRemove === true) setIconRemove(false);
  };

  // REMOVE RESERVATION
  const searchParams = new URLSearchParams(window.location.search);
  const cartUid = searchParams.get("uid");
  const cartHotelId = itemHotel.code;

  const removeReservation = (uidHotel) => {
    setLoader(true);
    if (cartHotelId === uidHotel) {
      const reservationRemove = async () => {
        axiosWithInterceptor
          .delete(`v1/carts/${cartUid}/hotel/${cartHotelId}`)
          .then((response) => {
            fetchData(cartUid);
            setIconRemove(false);
          })
          .catch((error) => {
            console.error(error);
            setLoader(false);
          })
          .finally(() => {
            // setLoader(false);
          });
      };
      reservationRemove();
    }
  };

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <>
      <div className="flex gap-x-2 items-start">
        <Image
          className="w-4"
          src={IconLocationBorder}
          alt="IconLocationBorder"
          width={16}
        />

        <div className="flex flex-col gap-y-5 w-full">
          {/* DAY,TIME HOTEL */}
          <div className="flex gap-x-4 max-lg:!flex-row">
            <div>
              <span className="m-b text-fs-16 text-or-100 m-0">
                {languageData.dayOfWeek[dayOfWeek]}
              </span>{" "}
              <span className="m-m text-fs-16 text-gry-70 mr-2 pr-2 border-r-2 border-gyr-100">
                {dateFormatCheckIn}
              </span>{" "}
              <span className="m-m text-fs-16 text-gry-70 m-0">14:00pm</span>
            </div>

            <ul className="m-0 p-0">
              <li>
                <span className="mr-4 text-gry-100">•</span>
                <span className="text-fs-16 m-b text-gry-100">
                  Check out
                </span>{" "}
                <span className="text-gry-70 text-fs-16 m-m">
                  {dateFormatCheckOut}{" "}
                </span>
                <span className="text-gry-70 text-fs-16 m-m">- </span>
                <span className="text-gry-70 text-fs-16 m-m">02:00pm</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-[16px] rounded-lg flex-col flex gap-x-8 relative w-[732px] max-xl:w-full shadow-3xl">
            {/* CLOSE BUTTON */}

            {/* <CloseIcon /> */}
            <button onClick={() => setIconRemove(true)}>
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}icons/close/close-100.svg`}
                alt="icon close"
                className="w-[10px] h-[10px] absolute right-4 top-4"
                width={10}
                height={10}
              />
            </button>

            {/* FATHER ONE */}

            <div className="flex gap-x-8 items-center max-sm:gap-[10px]">
              <Image
                src={itemHotel.image ? itemHotel.image : ImageNotFound}
                alt="hotel"
                width={132}
                height={114}
                className="h-[114px] w-[132px] rounded-lg max-sm:h-[80px] max-sm:w-[90px]"
              />

              <div className="flex justify-between my-auto w-[80%]">
                <div className="flex flex-col gap-y-1">
                  <div className="d-flex title-start">
                    <span className="text-fs-16 m-b text-black">
                      {itemHotel.name}
                    </span>

                    <TotalStars
                      stars={itemHotel.stars}
                      width={"w-[12]"}
                      height={"h-[12]"}
                    />
                  </div>

                  <div className="flex items-center gap-x-1">
                    <Image
                      className="w-[11px] h-[14px]"
                      src={`${process.env.NEXT_PUBLIC_URL}icons/location/location-bl.svg`}
                      alt="icon-location-bl"
                      width={11}
                      height={14}
                    />
                    <span className="text-bl-100 text-fs-10 m-s-b">
                      {itemHotel.address}
                    </span>
                  </div>

                  <div className="flex gap-x-4 max-lg:!hidden">
                    <div className="flex gap-x-1 items-center">
                      <Image
                        className="w-[14px] h-[15px]"
                        src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                        alt="icon-adult-b"
                        width={14}
                        height={15}
                      />
                      <span className="text-fs-10 text-gry-100 m-s-b">
                        {/* TEXT ADULTS AND CHILDREN /LP 15-02-24 */}
                        {itemHotel.totalAdults} {languageData.modalHotel.adults}{" "}
                        {itemHotel.totalChildren}{" "}
                        {languageData.modalHotel.children}
                      </span>
                    </div>

                    <div className="text-grey-card-hotel-i d-flex gap-2 align-items-center">
                      <Image
                        className="w-[14px] h-[15px]"
                        src={`${process.env.NEXT_PUBLIC_URL}icons/room/room-b.svg`}
                        alt="icon Room"
                        width={14}
                        height={15}
                      />

                      <span className="text-fs-10 text-gry-100 m-s-b">
                        {itemHotel.totalRooms}{" "}
                        {languageData.itinerary.detailsPayment.rooms}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-auto max-lg:hidden flex flex-col gap-y-1 ">
                  <span className="text-fs-10 text-gry-100 m-m">
                    {languageData.cartTour.taxesText}
                  </span>

                  <span className="m-b text-black flex items-center gap-x-[2px]">
                    <p className="text-fs-12 m-0">MXN</p>
                    <p className="text-fs-16 m-0">
                      $
                      {Math.floor(itemHotel.price)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .<sup>{(itemHotel.price % 1).toFixed(2).slice(2)}</sup>
                    </p>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-between border-y border-[#ebebeb] items-start py-[0.6rem] my-[1rem] lg:!hidden">
              <div className="flex flex-col gap-y-[1rem]">
                <div className="flex gap-x-2 items-center">
                  <Image
                    className="w-[14px] h-[15px]"
                    src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                    alt="icon-adult-b"
                    width={14}
                    height={15}
                  />

                  <span className="text-fs-10 text-gry-100 m-s-b text-nowrap">
                    {itemHotel.totalAdults}{" "}
                    {languageData.containerModalHotel.adults},{" "}
                    {itemHotel.totalChildren}{" "}
                    {languageData.containerModalHotel.children}
                  </span>
                </div>

                <div className="flex gap-x-2 items-center">
                  <Image
                    src={RoomIcon}
                    alt="icon room"
                    className="w-[14px] h-[15px]"
                    width={14}
                    height={15}
                  />
                  <span className="text-fs-10 text-gry-100 m-s-b text-nowrap">
                    {itemHotel.totalRooms} {languageData.modalHotel.rooms}
                  </span>
                </div>
              </div>

              <div className={`${isMobile ? "w-auto" : "w-full"}`}>
                <div className="cont-price-taxes-and-policies d-flex flex-column align-self-center">
                  <span className="text-fs-10 text-gry-100 m-m">
                    {languageData.cartTour.taxesText}
                  </span>

                  {/* PENDIENTE DE CONECTAR BACK */}
                  <span className="m-b text-black flex items-center gap-x-[2px]">
                    <p className="text-fs-12 m-0">MXN</p>
                    <p className="text-fs-16 m-0">
                      $
                      {Math.floor(itemHotel.price)
                        .toLocaleString("es-MX", { currency: "MXN" })
                        .replace(".00", "")}
                      .<sup>{(itemHotel.price % 1).toFixed(2).slice(2)}</sup>
                    </p>
                  </span>
                </div>
              </div>
            </div>

            {/* FATHER TWO */}

            <div className="w-full mt-6 max-sm:mt-0">
              <div className="text-or-100 text-fs-10 m-s-b !mb-4">
                {/* TEXT ROOMS YOU RESERVED /LP 15-02-24 */}
                <span>{languageData.itinerary.roomsYouReserved}</span>
              </div>

              {/* FIRST ACCORDION */}

              <div className="rounded-lg bg-gry-30 w-full h-auto">
                {itemHotel.rooms &&
                  itemHotel.rooms.map((roomInfo, index) => (
                    <div key={index}>
                      <Accordion
                        id="accordion-hotel-itinerary-one"
                        expanded={expanded === index}
                        onChange={handleChange(index)}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                        >
                          <div className="flex items-center m-b text-fs-12 text-black">
                            x{roomInfo.quantity} {roomInfo.name}
                          </div>
                        </AccordionSummary>

                        {/* DETAILS FIRST ACCORDION */}

                        <AccordionDetails>
                          {roomInfo.occupancies &&
                            roomInfo.occupancies.map((roomBed, index) => (
                              <div key={index}>
                                <div className="mb-2.5 text-fs-11 text-gry-100 m-s-b text-nowrap">
                                  {/* TEXT ROOM /LP 15-02-24 */}
                                  <span>
                                    {languageData.itinerary.detailsPayment.room}{" "}
                                    {index + 1}
                                  </span>
                                </div>

                                <div className="flex flex-wrap gap-x-2 gap-y-2 items-center">
                                  <div className="flex gap-X-2 items-center">
                                    <Image
                                      className="w-[14px] h-[15px]"
                                      src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`}
                                      alt="icon-adult-b"
                                      width={14}
                                      height={15}
                                    />

                                    <span className="text-fs-10 text-gry-100 m-s-b text-nowrap">
                                      {/* TEXT ADULTS AND CHILDREN /LP 15-02-24 */}
                                      {roomBed.adults}{" "}
                                      {languageData.modalHotel.adults}{" "}
                                      {roomBed.children}{" "}
                                      {languageData.modalHotel.children}
                                    </span>
                                  </div>

                                  {/* MAP ROOM BEDS */}
                                  {roomBed.beds &&
                                    roomBed.beds.map((bed, index) => (
                                      <div
                                        key={index}
                                        className="flex gap-2 items-center"
                                      >
                                        <Image
                                          src={RoomIcon}
                                          alt="icon Room"
                                          className="w-[14px] h-[15px]"
                                          width={14}
                                          height={15}
                                        />{" "}
                                        <span className="text-fs-10 text-gry-100 m-s-b text-nowrap">
                                          {bed.number} {bed.type}
                                        </span>
                                      </div>
                                    ))}

                                  {/* NON REFUNDABLE */}

                                  <div className="d-flex align-items-center">
                                    {roomBed.refundable === false && (
                                      <Image
                                        className="icons-size-s"
                                        src={ErrorIcon}
                                        alt="icon error"
                                      />
                                    )}
                                    {roomBed.refundable === true && (
                                      <Image
                                        className="icons-size-s"
                                        src={DoneIcon}
                                        alt="icon done"
                                      />
                                    )}

                                    <span className="text-grey-card-hotel-i">
                                      {!roomBed.refundable &&
                                        languageData.itinerary.nonRefundable}
                                      {roomBed.refundable &&
                                        languageData.itinerary.refundable}
                                    </span>
                                  </div>

                                  {/* EATING PLAN */}
                                  {roomBed.eatingPlan && (
                                    <div className="d-flex align-items-center">
                                      <Image
                                        className="icons-size-s"
                                        src={DoneIcon}
                                        alt="icon-done"
                                      />
                                      <span className="text-all-inclusive-i">
                                        {roomBed.eatingPlan}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  ))}
              </div>
            </div>

            {/* REMOVE CARD */}

            {iconRemove && (
              <>
                <div
                  className="container-remove-itinerary"
                  onClick={() => cancelRemove()}
                />
                <div
                  className="remove-reservation-itinerary"
                  onClick={() => removeReservation(itemHotel.code)}
                >
                  {languageData.cart.remove}
                </div>
              </>
            )}
            {/* END REMOVE CARD */}

            {itemHotel.available === false && (
              <>
                <UnavailableCardHotel destination={itemHotel} />
                <div className="overlay" />
              </>
            )}
          </div>
        </div>
      </div>

      {loader && (
        <div className="progress-loader">
          <CircularProgress />
        </div>
      )}
    </>
  );
}
