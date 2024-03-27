"use client";

import { Container } from "@/config/Others/Container";
import LanguageContext from "@/language/LanguageContext";
import { useContext, useEffect, useState } from "react";

import SelectRooms from "./SelectRooms";
import RoomsHotelContext from "../../context/RoomsHotelContext";

export default function DetailReservation() {
  const { languageData } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const { selectedRooms } = useContext(RoomsHotelContext);
  // console.log(selectedRooms);

  // TOTAL CALCULATION
  useEffect(() => {
    if (selectedRooms.length > 0) {
      setTotalPrice(
        selectedRooms.reduce((total, item) => total + item.price, 0)
      );
    }
  }, []);

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
            open === true ? "h-[35rem] xl:h-[47rem]" : "h-[127px]"
          }`}
        >
          <div className="relative h-full">
            {/* ROOMS SELECTED */}
            {open === true && <SelectRooms />}

            {/* BASIC INFORMATION OF THE SELECTED ROOMS */}
            <div className="bg-white pt-[27px] mt-[27px] absolute bottom-0 left-0 w-full z-[3]">
              <Container>
                <div className="relative flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center">
                  <div className="flex flex-col gap-y-2">
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
                        {Math.floor(totalPrice)
                          .toLocaleString("es-MX", { currency: "MXN" })
                          .replace(".00", "")}
                        .<sup>{(totalPrice % 1).toFixed(2).slice(2)}</sup>
                      </h4>
                      <span className="text-grn-100 text-fs-8 m-s-b rounded w-max bg-grn-50 py-1 px-2 h-max">
                        Impuestos incluidos
                      </span>
                    </div>
                  </div>

                  {open === false && (
                    <h3 className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto text-gry-70 text-fs-10 h-6 w-max m-s-b">
                      Desliza para ver tus habitaciones{" "}
                      {selectedRooms.length > 0 && selectedRooms.length}{" "}
                      seleccionadas
                    </h3>
                  )}

                  {open === true && selectedRooms.length > 0 ? (
                    <button className="rounded-full bg-yw-100 text-black text-fs-12 m-s-b text-center py-3.5 px-[117px] md:py-3.5 md:px-4 md:h-max">
                      {languageData.detailHotel.buttonPrincipal}
                    </button>
                  ) : (
                    <div className="rounded-full py-3.5 px-[105px] bg-gry-70 text-gry-100 text-fs-12 m-s-b text-center md:py-3.5 md:px-4 h-max">
                      {languageData.detailHotel.buttonPrincipal}
                    </div>
                  )}
                </div>
              </Container>
            </div>


            {/* OPEN ROOMS SELECTED */}
            <button
              onClick={() => setOpen(!open)}
              className="absolute left-0 right-0 mx-auto border-0 top-[-37px] w-[44px] h-[44px] flex justify-center items-center z-[3] border border-gry-100 "
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