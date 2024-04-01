"use client";

import { Container } from "@/config/Others/Container";
import LanguageContext from "@/language/LanguageContext";
import { useContext, useEffect, useState } from "react";

import SelectRooms from "./SelectRooms";
import AddCartHotel from "./AddCartHotel";
import { useCartAxios } from "@/components/Cart/CartAxios";
import RoomsHotelContext from "../../context/RoomsHotelContext";
import { LimitPriceAlert } from "../AlertsHotel/HotelInformationAlerts";

export default function DetailReservation() {
  const limitPrice = 95000;
  const [open, setOpen] = useState(false);
  const [priceRooms, setTotalPrice] = useState(0);
  const [isLimitPrice, setISLimitPrice] = useState(false);
  const { languageData } = useContext(LanguageContext);

  const { selectedRooms } = useContext(RoomsHotelContext);
  const { totalPrice } = useCartAxios();
  // console.log(selectedRooms);
  // console.log(totalPrice);

  // TOTAL CALCULATION
  useEffect(() => {
    if (selectedRooms.length > 0) {
      let price = selectedRooms.reduce(
        (total, item) => total + parseFloat(item.price),
        0
      );
      setTotalPrice(price);
    } else {
      setTotalPrice(0);
    }
  }, [selectedRooms]);

  // VALIDATION LIMIT PRICE
  useEffect(() => {
    if (priceRooms + totalPrice > limitPrice) {
      setISLimitPrice(true);
    } else {
      setISLimitPrice(false);
    }
  }, [priceRooms]);

  // HIDE RESERVATION DETAILS FUNCTION
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxHeight = 200;

      if (scrollPosition > maxHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          id="reservationDetails"
          className={`sticky bottom-0 left-0 w-full bg-white py-[17px] z-[2] border-t border-gry-70 transition-all duration-500 ${
            open === true ? "h-auto" : "h-[15rem] md:h-[127px]"
          }`}
        >
          <div
            className={`${
              open ? "min-h-[15rem] max-lg:h-[77vh] lg:max-h-[40rem]" : "h-full"
            } relative`}
          >
            {/* ROOMS SELECTED */}
            {open === true && <SelectRooms close={() => setOpen(false)} />}

            {/* BASIC INFORMATION OF THE SELECTED ROOMS */}
            <div className="bg-white absolute bottom-0 left-0 w-full z-[3]">
              <Container>
                <div className="relative flex flex-col gap-y-14 md:gap-y-8 md:flex-row md:justify-between md:items-center">
                  <div className="mb-5 md:m-0 flex flex-col gap-y-2">
                    <h4 className="m-b text-fs-16 text-black">
                      {languageData.detailHotel.detail}
                    </h4>

                    <p className="m-0 m-s-b text-fs-8 text-gry-100">
                      5 noches, 4 personas
                    </p>

                    <div className="flex gap-x-3">
                      <h4 className="text-fs-20 text-black m-b ">
                        <span className="text-fs-12 text-black m-s-b">
                          MXN{" "}
                        </span>
                        $
                        {Math.floor(priceRooms)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .<sup>{(priceRooms % 1).toFixed(2).slice(2)}</sup>
                      </h4>
                      <span className="text-grn-100 text-fs-8 m-s-b rounded w-max bg-grn-50 py-1 px-2 h-max">
                        Impuestos incluidos
                      </span>
                    </div>
                  </div>

                  {open === false && selectedRooms.length > 0 && (
                    // <h3 className="absolute bottom-[4rem] md:top-0 md:bottom-0 md:left-0 md:right-0 md:mx-auto md:my-auto text-gry-70 text-fs-10 h-6 w-max m-s-b">
                    //   Desliza para ver tus habitaciones{" "}
                    //   {selectedRooms.length > 0 && selectedRooms.length}{" "}
                    //   seleccionadas
                    // </h3>
                    <div className="absolute bottom-0 top-0 md:bottom-0 left-0 right-0 mx-auto my-auto w-max flex items-center">
                      <div className="relative">
                        <img
                          src={selectedRooms[0].image}
                          alt={selectedRooms[0].name}
                          className="rounded-md object-cover w-[2.5rem] h-[2.5rem]"
                          width={30}
                          height={30}
                        />{" "}
                        {selectedRooms.length > 1 && (
                          <span className="absolute top-0 bottom-0 my-auto right-[-15px] rounded-full w-[1.5rem] h-[1.5rem] bg-bl-100 flex justify-center items-center text-white text-fs-10 m-s-b">{`+${
                            selectedRooms.length - 1
                          }`}</span>
                        )}{" "}
                      </div>
                    </div>
                  )}

                  {selectedRooms.length > 0 && !isLimitPrice ? (
                    <AddCartHotel />
                  ) : (
                    <div className="select-none	rounded-full py-3.5 px-[105px] bg-gry-70 text-gry-100 text-fs-12 m-s-b text-center md:py-3.5 md:px-4 h-max">
                      {languageData.detailHotel.buttonPrincipal}
                    </div>
                  )}
                </div>
              </Container>
            </div>
            {/* ALERT LIMIT PRICE */}

            {isLimitPrice && (
              <div
                className={`transition-transform absolute mr-2 right-0 top-[-8rem] lg:top-[-7rem] z-[3] transform translate-x-0`}
              >
                <LimitPriceAlert />
              </div>
            )}

            {/* OPEN ROOMS SELECTED */}
            <button
              disabled={selectedRooms.length === 0}
              onClick={() => setOpen(!open)}
              className={`${
                selectedRooms.length === 0 && "cursor-not-allowed brightness-[0.6]"
              } top-[-2.4rem] absolute left-0 right-0 mx-auto border-0  md:top-[-37px] w-[44px] h-[44px] flex justify-center items-center z-[3] border border-gry-100`}
            >
              <img
                src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/up-bl-100-cle.svg`}
                alt="arrows"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
