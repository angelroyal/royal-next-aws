import React, { useContext } from "react";
import ModalTransportContext from "../../context/ModalTransportContext";

export default function PassengersTransport(props) {
  const { transport } = props;
  const { passenger, setPassenger } = useContext(ModalTransportContext);
  console.log(transport);

  const addPassenger = () => {
    if (passenger < transport.places) {
      setPassenger((prev) => prev + 1);
    }
  };

  const removePassenger = () => {
    setPassenger((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handlePassengerChange = (event) => {
    if (passenger < transport.places) {
      const value = Math.max(0, parseInt(event.target.value, 10));
      setPassenger(isNaN(value) ? 0 : value);
    }
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <span className="text-fs-14 m-s-b">¿Cuántos pasajeros?</span>

      <div className="flex gap-[16px]">
        <div
          onClick={removePassenger}
          className={`${
            passenger === 0 ? "cursor-not-allowed" : "cursor-pointer"
          } px-[8px] flex items-center`}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_URL}icons/remove/remove-100.svg`}
            alt="icon Remove"
            width={9.3}
            height={9.3}
          />
        </div>
        <div className="w-[100px] py-[8px] border border-gry-50 text-center">
          {passenger}
        </div>
        <button onClick={addPassenger} className="px-[8px] cursor-pointer">
          <img
            src={`${process.env.NEXT_PUBLIC_URL}icons/add/add-100.svg`}
            alt="icon Add"
            width={9.3}
            height={9.3}
          />
        </button>
      </div>

      {transport.type === "shared" && (
        <div className="flex gap-1 items-center">
          <span className="text-fs-12 m-m">Precio individual: </span>
          <span className="text-fs-12 m-b text-bl-100">MXN</span>
          <span className="text-fs-14 m-b text-bl-100">
            $
            {Math.floor(transport.price)
              .toLocaleString("es-MX", { currency: "MXN" })
              .replace(".00", "")}
            .<sup>{(transport.price % 1).toFixed(2).slice(2)}</sup>
          </span>
        </div>
      )}
    </div>
  );
}
