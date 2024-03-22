"use client";

import LanguageContext from "@/language/LanguageContext";
import { useContext } from "react";

const reservations = [
  {
    image: `${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-d-to-en.webp`,
    name: "Nombre de la habitación",
    price: 0,
    occupancy: 2,
    foodType: "Tipo de alimentación",
  },
  {
    image: `${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-d-to-en.webp`,
    name: "Nombre de la habitación",
    price: 0,
    occupancy: 2,
    foodType: "Tipo de alimentación",
  },
  {
    image: `${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-d-to-en.webp`,
    name: "Nombre de la habitación",
    price: 0,
    occupancy: 2,
    foodType: "Tipo de alimentación",
  },
  {
    image: `${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-d-to-en.webp`,
    name: "Nombre de la habitación",
    price: 0,
    occupancy: 2,
    foodType: "Tipo de alimentación",
  },
  {
    image: `${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-d-to-en.webp`,
    name: "Nombre de la habitación",
    price: 0,
    occupancy: 2,
    foodType: "Tipo de alimentación",
  },
  {
    image: `${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-d-to-en.webp`,
    name: "Nombre de la habitación",
    price: 0,
    occupancy: 2,
    foodType: "Tipo de alimentación",
  },
  {
    image: `${process.env.NEXT_PUBLIC_URL}banners/NoAvailability/no-availability-d-to-en.webp`,
    name: "Nombre de la habitación",
    price: 0,
    occupancy: 2,
    foodType: "Tipo de alimentación",
  },
];

export default function SelectRooms(props) {
  const { open, setClose } = props;
  const { languageData } = useContext(LanguageContext);

  return (
    <div
      className={`${
        open === true ? "h-[47rem] flex" : "hidden"
      } bottom-0 sticky bg-white w-full z-[3] border-t-[3px] px-4 py-7`}
    >
      <div className="relative h-full w-full">
        <button
          onClick={() => setClose(false)}
          className="absolute left-0 right-0 mx-auto border-0 top-[-47px] w-[44px] h-[44px] flex justify-center items-center z-[1] border border-gry-100 "
        >
          <img
            src={`${process.env.NEXT_PUBLIC_URL}icons/arrows/up-100-cle.svg`}
            alt="arrows"
          />
        </button>

        <div className="w-full flex-col gap-y-4 h-[67%]">
          <h3 className="flex items-center text-gry-100 m-s-b text-fs-14 gap-x-1">
            Habitaciones elegidas <p className="m-0 text-grn-100">(8/8)</p>{" "}
            <img
              src={`${process.env.NEXT_PUBLIC_URL}icons/done/done-g.svg`}
              alt="done green"
              height={9}
              width={12}
            />{" "}
          </h3>

          <div className="flex flex-col max-h-full overflow-y-auto gap-y-2">
            {reservations.map((reservation, index) => (
              <div className="p-2 flex gap-x-4" key={index}>
                <img
                  className="rounded-lg"
                  src={reservation.image}
                  alt={reservation.name}
                  width={80}
                  height={80}
                />

                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col gap-x-1">
                    <span>
                      <p className="m-0 text-fs-8 m-m text-gry-100">
                        {reservation.foodType}
                      </p>
                      <h3 className="text-fs-12 text-black m-s-b">
                        {reservation.name}
                      </h3>
                    </span>

                    <h3 className="m-s-b text-fs-12 text-or-100 ">MXN {reservation.price}</h3>

                    <span className="flex text-fs-10 text-black gap-x-2 items-center"><img src={`${process.env.NEXT_PUBLIC_URL}icons/adult/adult-b.svg`} alt="occupancy" width={12} height={12}/> {reservation.occupancy}</span>
                  </div>
                  <img
                    src={`${process.env.NEXT_PUBLIC_URL}icons/delete/delete-r.svg`}
                    width={10}
                    height={12}
                    alt="delete red"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-6 absolute bottom-0 left-0">
          <div className="flex flex-col gap-y-2 items-start">
            <h3 className="text-fs-16 m-b text-black">
              {languageData.detailHotel.detail}
            </h3>
            <p className="m-0 text-fs-8 text-gry-100">5 noches, 4 personas</p>
            <p className="m-0 text-fs-12 m-b flex items-center">
              MXN{" "}
              <p className="text-fs-20 m-0">
                $00.<sup>00</sup>
              </p>
            </p>
            <span className="text-grn-100 text-fs-8 m-s-b rounded w-max bg-grn-50 py-1 px-2 h-max">
              {languageData.cart.taxes}
            </span>
          </div>

          <button className="rounded-full bg-yw-100 text-black text-fs-12 m-s-b text-center py-3.5 px-[117px]">
            {languageData.detailHotel.buttonPrincipal}
          </button>
        </div>
      </div>
    </div>
  );
}
